import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import {AiOutlineForm} from "react-icons/ai";
import { MdUpload } from "react-icons/md";
import ReactStars from "react-rating-stars-component";
import { db } from "../Firebase/firebase";
import { collection,addDoc } from "firebase/firestore";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer,toast } from 'react-toastify';

function Review()
{
    const backgroundImageUrl = './image17.jpg';
    const [rating, setRating] = useState(0);
    const [file, setFile] = useState("./profile.jpg");
    const[name,SetName]=useState(" ");
    const[comment,setComment]=useState(" ");
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
    const ratingChanged = (newRating) => {
        console.log(newRating);
        setRating(newRating);
        
      };

      const reviewSubmit=()=>
      {
        try {
            if(name===" "||comment===" "||rating===0)
            {
            toast.error("Opps! Try Again")
            }
            else{
            const fbCollRef=collection(db,'CustomerReview')
            addDoc(fbCollRef, {comment,name,rating})
            toast.success("Your response is  recorded!")
            }
            } catch (error) {
              console.error('Error adding document: ', error);
              alert('An error occurred while adding the document.');
            }
      }
    return(
        <>
        <div className='mt-5 review-back-image' style={{backgroundImage:`url(${backgroundImageUrl})`,width:"100%",height:"auto"}}>
        <div className="container col-12 col-md-5 p-3">
        <div className="m-1" style={{width:"auto",height:"auto",backgroundColor:"#389B87",display: "flex",flexDirection: "column",justifyContent: "center",alignItems: "center",textAlign:"center"}} >
        <img className="mt-3" src={file} style={{borderRadius:"100%",width:"80px",height:"80px",border:"1px solid #389B87"}} alt="logo"/>
        <label htmlFor="fileInput" className="custom-file-upload mt-2">
        <span style={{color:"#389B87",fontWeight:"600"}}><MdUpload size={25}/>&nbsp;Upload a photo</span>
        <input
        type="file"
        id="fileInput"
        onChange={handleChange}
        style={{ display: "none" }}
        />
        </label>
        <input className="mt-2 p-2" style={{width:"80%",height:"auto", border: "2px solid #389B87", // Default border color
         backgroundColor:"#F6F6F6"}} type="name" placeholder="Name" onChange={(e)=>SetName(e.target.value)}/>  
         <textarea placeholder="Comments" className="mt-2" name="tezt" rows="4"  style={{width:"80%", border: "2px solid #389B87", // Default border color
         backgroundColor:"#F6F6F6"}} onChange={(e)=>setComment(e.target.value)}>
        </textarea> 
        <div className="d-flex mt-3 gap-2 ml-auto" style={{width:"80%",backgroundColor:"#ffff",height:"auto"}} >
        <ReactStars
    count={5}
    onChange={ratingChanged}
    size={30}
    activeColor="#ffb700"
    />
    <p className="mt-2 ml-auto" style={{fontSize:"18px"}}>{rating}/5</p>
        </div>
        <Button onClick={reviewSubmit} style={{width:"80%",backgroundColor:"#ffff",borderColor:"#ffff",color:"#389B87",fontWeight:"600",fontSize:"18px"}} className="mt-3 mb-4 p-2">
        <AiOutlineForm size={30}/>&nbsp;Submit</Button>
         </div>
         <ToastContainer
     position='top-center'
     theme='light'
     autoClose={5000}
     pauseOnHover={false}
    hideProgressBar={false}
   closeOnClick={true}
   style={{ top: '150px' }}
    />   
        </div>
       </div>
        </>
    )
}
export default Review;