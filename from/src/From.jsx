import React from 'react'
import './From.css'
import { useState } from 'react'

const From = () => {
    const[input,setInput]=useState('')
    const userData = {};
    const setData = ()=>{
        userData.firstname = input.fname;
        userData.lastname = input.lname;
        userData.email = input.email
        userData.phone1 = input.phone1;
        userData.phone2 = input.phone2;
        userData.phone3 = input.phone3;
        userData.messagesubject = input.messagesubject;
        userData.message = input.message;
        console.log(userData);
    }
   
  return (
    <div>
      <div className="container">
      <div className="container-box">
        <div className="container-from">
            <div className="from-input">
                <h3 className='mt-2'>Contact form</h3>
                <p>Please fill in your information and we'll be sending your order in no time</p>
                <div className="row name">
                    <div className="col-3">Your Name</div>
                    <div className="col-4"><input type="text" onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})} name="fname"/></div>
                    <div className="col-4"><input type="text" onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})} name="lname"/></div>
                </div>
                <div className="row email">
                    <div className="col-3">Your Email</div>
                    <div className="col-9"><input type="email" onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})} name="email"/></div>
                </div>
                <div className="row phonenumber">
                    <div className="col-3">Phone*</div>
                    <div className="col-3"><input type="text" onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})} name="phone1"/></div>
                    <div className="col-3"><input type="text" onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}  name="phone2"/></div>
                    <div className="col-3"><input type="text" onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}  name="phone3"/></div>
                </div>
                <div className="row subject">
                    <div className="col-3">Message Subject*</div>
                    <div className="col-4"><input type="text" placeholder='Other' onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})} name="messagesubject"/></div>
                </div>
                <div className="row message">
                    <div className="col-3">Message*</div>
                    <div className="col-9"><textarea cols="51" rows="4" onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})} name="message"></textarea></div>
                </div>
            </div>
            <div className="line mt-3 mb-4"></div>
            <button onClick={()=>setData()}>submit from</button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default From
