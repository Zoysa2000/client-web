pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "thilina123/camping-app"
        DOCKER_TAG   = "${BUILD_NUMBER}"
    }

    stages {

        stage('Docker Build') {
            steps {
                bat '''
                set DOCKER_BUILDKIT=0
                set COMPOSE_DOCKER_CLI_BUILD=0
                docker build --no-cache --platform=linux/amd64 -t %DOCKER_IMAGE%:%DOCKER_TAG% .
                '''
            }
        }

        stage('Docker Login & Push') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub-cred',
                    usernameVariable: 'USERNAME',
                    passwordVariable: 'PASSWORD'
                )]) {
                    bat '''
                    echo %PASSWORD% | docker login -u %USERNAME% --password-stdin
                    docker push %DOCKER_IMAGE%:%DOCKER_TAG%
                    docker tag %DOCKER_IMAGE%:%DOCKER_TAG% %DOCKER_IMAGE%:latest
                    docker push %DOCKER_IMAGE%:latest
                    '''
                }
            }
        }
    }

    post {
        success {
            echo "Docker image pushed"
        }
        failure {
            echo "Build FAILED"
        }
    }
}
