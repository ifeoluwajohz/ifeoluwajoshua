import React, { useState } from 'react'
import '../styles/style.css'
import emoji from '../assets/emoji.png'


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
              <h1 className="font-bold  text-yellow-500 text-4xl">Hello Mate,  </h1>
              <img className="w-10 h-10" src={emoji} alt="" />
              {/* <img className="w-10 h-10" src={IMG_1} alt="" /> */}

              </div>

              <h1 className="me font-light mb-8"> I am <span>Isreael Ifeoluwa Joshua</span></h1>

              </div>
                <p className="text-lg font-normal">-"An Experienced Software Developer | Expert in React, TypeScript, Node.js, and Django | Specializing in Intuitive UI Design & Scalable Backend Systems | Bridging Frontend & Backend for Seamless Digital Solutions based in Lagos, Nigeria. I help brands turn their ideas into high quality products ..."</p>
            </div>
            {/* <div className='quotes'>
              <img src={IMG_1} alt="" />

            </div> */}
        </div>
        <form onSubmit={handleEmail} className="newsletter">
          <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email Address...' className='email'/>
          <button type="submit" className="p-2 px-12 font-bold mt-4 text-white bg-pink-700" disabled={loading}>
            {loading ? 'Subscribing...' : 'Subscribe To My Newsletter'}
          </button>
        </form>
        {success && <p className="text-green-500 mt-4">{success}</p>}  {/* Display success message */}
        {error && <p className="text-red-500 mt-4">{error}</p>}  {/* Display error message */}
      </section>
    </>
  )
}

export default Intro