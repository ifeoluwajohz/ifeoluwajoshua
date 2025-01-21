import React, { useState } from 'react'
import '../styles/style.css'
import emoji from '../assets/emoji.png'
import github from  "../assets/github.png";
import x from '../assets/twitter.png';
import facebook from '../assets/facebook.png';
import emails from '../assets/email.png';
import whatsapp from '../assets/whatsapp.png';
import linkedin from '../assets/linkedin.png';


const Intro = () => {
  const [email, setEmail] = useState('')
  const [loading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleEmail = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(null);  // Reset success message

    try {
      setIsLoading(true)
      const response = await fetch('https://portfolio-backend-ce6g.onrender.com/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email}),
      });

      if (!response.ok) {
        throw new Error('Something went wrong with the submission');
      }

      // Reset the form fields after successful submission
      setEmail('');
      setSuccess('Thanks for Subscribing!');  // Set success message
      setIsLoading(false)
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <section>
        <div className="flex intro">
            <div className='quotes'>
              <div className="">

              <div className="flex items-center">
              <h1 className="font-bold  text-yellow-500 text-4xl mr-2">Hello Mate,  </h1>
              <img className="w-10 h-10" src={emoji} alt="" />
              {/* <img className="w-10 h-10" src={IMG_1} alt="" /> */}

              </div>

              <h1 className="font-normal mb-8 text-base md:text-3xl"> I am <span>Isreael Ifeoluwa Joshua</span></h1>

              </div>
                <p className="text-sm md:text-base font-normal">-"An Experienced Software Developer | Expert in React, TypeScript, Node.js, and Django | Specializing in Intuitive UI Design & Scalable Backend Systems | Bridging Frontend & Backend for Seamless Digital Solutions based in Lagos, Nigeria. I help brands turn their ideas into high quality products ..."</p>
            </div>
            

            {/* <div className='quotes'>
              <img src={IMG_1} alt="" />

            </div> */}
        </div>
        
      </section>
      {/* Social Media Section */}
      <div className="social-links flex mt-10">
        <a href="https://x.com/ifeoluwajohz"><img src={x} alt="Twitter" /></a>
        <a href="https://github.com/ifeoluwajohz"><img src={github} alt="GitHub" /></a>
        <a href="https://www.linkedin.com/in/ifeoluwajohz/"><img src={linkedin} alt="LinkedIn" /></a>
        <a href="https://mail.google.com/mail/u/0/#inbox"><img src={emails} alt="Email" /></a>
        <a href="tel:+8026144324"><img src={whatsapp} alt="WhatsApp" /></a>
        <a href="https://web.facebook.com/profile.php?id=100087388999705"><img src={facebook} alt="Facebook" /></a>
      </div>
    </>
  )
}

export default Intro