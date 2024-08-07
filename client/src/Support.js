import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './Supportcss.css'
export const Support = (props) => {
  const form = useRef();
  //   const notify = () => {
  //     toast.success("Message Sent successful", { autoClose: 3000 });
  // };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_5vkmbac', 'template_sszdptf', form.current, {
        publicKey: 'WHOmTisFge0pFs1xT',
      })
      .then(
        () => {
          alert("Message Sent successful");
          //   toast.success("", { autoClose: 3000 });
          console.log('SUCCESS!');
          console.log('message sent');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };


  return (
    <>
      <div style={{  backgroundColor: 'whitesmoke' }}>
        <h1>Support Page</h1><br />
        <form ref={form} onSubmit={sendEmail} >
          <label>Username</label>
          <input type="text" name="user_name" />
          <label>Name</label>
          <input type="text" name="name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />

        </form>
        <br />
        <h5>You will be notified in 24 hours by our service agent</h5>
        
      </div>
      <footer className="text-center p-3 " style={{ backgroundColor: '#042743', color: '#fff', position: 'fixed', bottom: '0', width: '100%', marginBottom: '0px' }} onClick={props.toggleMode}>
          © 2023 TradeCollab Copyright:
        </footer>
    </>

  );
};

export default Support;