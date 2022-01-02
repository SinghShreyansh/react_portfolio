import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import './Contact.css'

const Result =() =>{
    return(
        <p name='resultMsg'>Your Message has been successfully sent. I will contact you soon</p>
    )
}
const Contact = () => {
    const [result,setResult] = useState(false)
    

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_xrt9b24',"template_f6dkivl",e.target,'user_ulCXT6XSbPVJuEVMHIE9F').then(result => setResult(true)).catch(err => console.log(err.text));

        e.target.reset();
        // setResult(true);
        
     } 

    setTimeout(() => {
        setResult(false)
    },5000)
    return (
        <div className='contactConcept'>
              <h1 className="contactMainText">
                     You can contact me here.
                 </h1>

                <div className="contactBox">  

                <div className="contactPhone"> <br/> <br/>📱 +917498063716
                <br/> <br /> 🏠  Wagale Estate , Thane(W) , Maharashtra  <br/></div>    
            <div className="contactMain">
                 
                
                 <form className='emailForm' onSubmit={sendEmail}>
                     <label>Name</label>
                     <input className='input' type="text" name='name' placeholder='Enter name...' />

                     <label >Email</label>
                     <input className='input' type="email" name='user_email'placeholder='Enter email...'/>

                <label>Message</label>
                    <textarea className="input" name="message" rows="5" placeholder='Enter message...'></textarea>

                    <input className="Sendbtn" type="submit" value="Send"/>

                    <small className='compulsoryNotice'> # Enter name , email and message to properly send your message to Shreyansh  🎉  </small>
                 </form>
                
                  <div className="messageOnSubmit"> {result? <Result/> : null}</div>
            </div>
            </div>  
        </div>
    )
}

export default Contact
