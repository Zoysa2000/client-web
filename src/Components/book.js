import React from "react";
import DatePicker from "react-datepicker";
import {AiOutlineForm} from "react-icons/ai";
import { Button} from "react-bootstrap";
import { useState,useEffect } from "react";
import {format} from "date-fns";
import emailjs from '@emailjs/browser';
import 'react-toastify/dist/ReactToastify.css';
function Book()
{
  const[isSubmit,setSubmit]=useState(false)
  const [date, setSelectedDate] = useState(null);
  const[name,setName]=useState(" ");
  const[phone,setPhone]=useState(" ");
  const[person,setPerson]=useState(" ");
  const[camping,setCamping]=useState(" ");
  const[message,setMessage]=useState("")
  const[errormessage,seterrorMessage]=useState("")
    const handleDateChange = (date) => {
        setSelectedDate(date);
      };
      const formattedDate = format(new Date(date), 'MM/dd/yyyy');
      const submitForm=()=>
      {
      setSubmit(!isSubmit)
      }
      const [fontSize, setfont] = useState('30px');
    
      useEffect(() => {
        const intervalId = setInterval(() => {
          setfont((prevfont) => (prevfont === '30px' ? '28px' : '30px'));
        }, 800);
    
        // Cleanup the interval on component unmount
        return () => clearInterval(intervalId);
      }, []);

      //booking function
      const submitBoking=()=>
      {
        const serviceID="service_0msompt";
        const templateID="template_oq5ythm";
        const publicKey="57gtqG9dkIQA7jiEC";
        const  templateParams={
          name:name,
          date:date,
          person:person,
          phone:phone,
          camping:camping,
        }
        //send emailss
        
        if(name===" " ||date===null||phone===" "||person===" "||camping===" ")
        {
         seterrorMessage("Booking is not done! Try Again")
          
        }
        else{
          emailjs.send(serviceID,templateID,templateParams,publicKey)
           setMessage("Successfully ! We will contact you within 24 hours")
        }
      }
    return(
        <>
         <div className="container d-none d-md-block shadow-lg  bg-grey rounded " style={{height:"auto",width:"100%",backgroundColor:"white",transform:"translateY(-20%)"}}>
        <div className="mx-2">
         <p style={{color:"black",transform:"translateY(50%)",fontWeight:"700",fontSize}}>Book Now!</p>
        <div className="row">
        <div className="row col-4 mt-5 mb-5">
         <div className="col-6">
        <input style={{width:"100%",height:"100%", border: "2px solid #389B87", // Default border color
         backgroundColor:"#F6F6F6"}} type="name" placeholder="Name"  onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div className="col-6">
        <DatePicker  onChange={handleDateChange} selected={date} placeholderText="mm/dd/yyyy"
         className="custom-datepicker"/>
        </div>
         </div>
         <div className="row col-4 mt-5 mb-5">
        <div className="col-6">
        <input style={{width:"100%",height:"100%",border: "2px solid #389B87", // Default border color
        backgroundColor:"#F6F6F6"}} type="number" placeholder="Person" onChange={(e)=>setPerson(e.target.value)}/>
        </div>
        <div className="col-6">
        <input style={{width:"100%",height:"100%",border: "2px solid ", // Default border color
         backgroundColor:"#F6F6F6"}} type="text" placeholder="Contact No"    onChange={(e)=>setPhone(e.target.value)}/>
        </div>
         </div>
         <div className="row col-4 mt-5 mb-5">
        <div className="col-6">
        <select id="dropdown" style={{width:"100%",height:"100%",border: "2px solid #389B87", // Default border color
        backgroundColor:"#F6F6F6"}}  onChange={(e)=>setCamping(e.target.value)}>
        <option >Beach camping Balapitiya</option>
        <option >Wild camping Maduwa</option>
      </select>
        </div>
        <div className="col-6 ">
        <Button onClick={submitBoking} onMouseEnter={submitForm} style={{width:"100%",height:"100%",backgroundColor:isSubmit?"#fcb900":"#389B87",borderColor:isSubmit?"#fcb900":"#389B87"}} > <AiOutlineForm  size={25}  /> &nbsp;Submit</Button>
        </div>
         </div>
        </div>
        </div>
        <p  style={{color:"#389B87"}}>{message}</p>
        <p  style={{color:"red"}}>{errormessage}</p>
        </div>

        <div className="container d-block d-md-none shadow-lg  bg-grey rounded" style={{height:"auto",width:"100%",backgroundColor:"#ffff"}}>
          <div className="text-center">
         <p style={{color:"black",transform:"translateY(50%)",fontWeight:"700",fontSize}}>Book Now!</p>
         </div>
         <div className="coloumn">
          <div className="col-12 mt-4">
        <input style={{width:"100%",height:"40px", border: "2px solid #389B87", // Default border color
         backgroundColor:"#F6F6F6"}} type="name" placeholder="Name" onChange={(e)=>setName(e.target.value)}/>
          </div>
          <div className="d-flex col-12 gap-3">
          <div className="col-3" >
        <DatePicker placeholderText="Select date"  onChange={handleDateChange} 
         className="custom-datepicker-mobile mt-3"
         />
          </div>
          <div className="col-9 mt-3">
        <input style={{width:"95%",height:"40px",border: "2px solid ", // Default border color
        backgroundColor:"#F6F6F6"}} type="text" value={formattedDate} placeholder="dd/mm/yyyy"/>
        </div>
         </div>
        <div className="col-12 mt-3">
        <input style={{width:"100%",height:"40px",border: "2px solid #389B87", // Default border color
         backgroundColor:"#F6F6F6"}} type="number" placeholder="Person"  onChange={(e)=>setPerson(e.target.value)}/>
        </div>
        <div className="col-12 mt-3">
        <input style={{width:"100%",height:"40px",border: "2px solid ", // Default border color
        backgroundColor:"#F6F6F6"}} type="text" placeholder="Contact No"  onChange={(e)=>setPhone(e.target.value)} />
        </div>
        <div className="col-12 mt-3">
        <select id="dropdown" style={{width:"100%",height:"40px",border: "2px solid #389B87", // Default border color
        backgroundColor:"#F6F6F6"}}  onChange={(e)=>setCamping(e.target.value)}>
        <option >Beach camping Balapitiya</option>
        <option >Wild camping Maduwa</option>
      </select>
        </div>
        <div className="col-12 mt-3">
        <Button className="mb-3" onClick={submitBoking} onMouseEnter={submitForm} style={{width:"100%",height:"40px",backgroundColor:"#389B87",borderColor:"#389B87"}}><AiOutlineForm  size={25}  /> &nbsp;Submit</Button>
        </div>
         </div>
         <p style={{color:"#389B87"}}>{message}</p>
        <p  style={{color:"red"}}>{errormessage}</p>
        </div>
        </>
    )
}
export default Book;