import React from "react";


function Video()
{
    return(
        <>
        <div className="container col-12 mt-2">
            <div className="row">
                <h3  style={{textAlign:"center",fontFamily:"cursive"}}>Watch our Locations</h3>
                <div className="col-12 col-md-4 mb-2">
                <iframe width="100%" height="300" src="https://www.youtube.com/embed/5Rog2mnrrwI?si=ZJNM0czGUQEF7X1w" 
                title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen></iframe>  
                </div>

                <div className="col-12 col-md-4 mb-2">
                <iframe width="100%" height="300" src="https://www.youtube-nocookie.com/embed/d81lj7SJ0hw?si=iiA1jVEo755kw8-R" title="YouTube video player" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen></iframe>
                </div>

                <div className="col-12 col-md-4">
                <iframe width="100%" height="300" src="https://www.youtube-nocookie.com/embed/mRzvDOfLnVY?si=e_Zkt9kvIZHWdRhC" title="YouTube video player" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
        </div>
        </>
    )
}

export default Video;