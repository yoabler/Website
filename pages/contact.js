import help from '../public/images/help-circle.svg'
import Image from 'next/image';
import Meta from '../components/Meta';
import React from 'react'
import emailjs from '@emailjs/browser';

const contact = () => {
  const form = React.createRef();
  
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_4es8kf4', 'TEMPLATE_ID', form.current, 'PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <>
    <Meta
        title='YOABLE | Contact'
      />
    <section id='contact'>
      <div className="bg">
        <h2>
          Get in Touch <br /> with Us
        </h2>
        <div className="container">
          <form ref={form} onSubmit={sendEmail} className="container px-3 px-md-4 col-sm-9 col-md-7 col-lg-6 col-xxl-5 pt-4 pb-5">
            <h3>Send us a message</h3>
            <p className="mb-4">Anyday! Anytime!...</p>
            <div className='label_head'>
              <label>Fullname</label>
              <Image src={help}  alt='help.png' />
            </div>
            <input name="name" type='text' placeholder="Enter your fullname" />
            <div className='label_head'>
            <label>Email Address</label>
              <Image src={help}  alt='help.png' />
            </div>
            <input name="email" type='email' placeholder="Enter your Email Address" />
            <div className='label_head'>
            <label>Mail Subject</label>
              <Image src={help}  alt='help.png' />
            </div>
            <input name="subject" type='text' placeholder="Enter your Mail Subject" />
            <div className='label_head'>
            <label>Write your thoughts here...</label>
              <Image src={help}  alt='help.png' />
            </div>
            <textarea
                  cols='50'
                  rows='5'
                  name='message'
                  placeholder='message'
                  required></textarea>
            <button>Send Message</button>
          </form>
        </div>
      </div>
    </section>
    </>
  );
};

export default contact;
