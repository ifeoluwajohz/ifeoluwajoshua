import React, { useState } from 'react';
import '../styles/style.css';
import github from  "../assets/github.png";
import x from '../assets/twitter.png';
import facebook from '../assets/facebook.png';
import emails from '../assets/email.png';
import whatsapp from '../assets/whatsapp.png';
import linkedin from '../assets/linkedin.png';
import Resume from '../assets/Resume.pdf';


const About = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch('https://portfolio-backend-ce6g.onrender.com/dm_me', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (!response.ok) {
        throw new Error('Something went wrong with the submission');
      }

      setName('');
      setEmail('');
      setMessage('');
      setSuccess('Your message has been sent successfully!');
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const DownloadCv = () => {
    const url = Resume;
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', Resume);
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <div>
      <div className="words mb-16">
        <h1 className="job text-5xl mt-12 font-semibold mb-8">About <span className="text-green-500">Me.</span></h1>
        <p className="text-base leading-8 mb-16">
          I am Israel Ifeoluwa Joshua, a passionate software developer with expertise in frontend and backend technologies, including React, HTML, CSS, TailwindCSS, JavaScript, Node.js, Django, and TypeScript. I specialize in creating user-centric interfaces and scalable backend systems, delivering high-performance applications that exceed client expectations. With a strong problem-solving foundation, I bridge the gap between frontend and backend, ensuring seamless integration and functionality. <br />
          My experience spans collaborating with cross-functional teams, contributing to all stages of development, and delivering solutions that drive business success.
        </p>
      </div>

      {/* Education Section */}
      <div className="education mb-16">
        <h2 className="text-4xl font-bold text-blue-800 mb-6">Education</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">B.Sc. in Computer Science</h3>
            <p className="text-sm text-gray-600">Global Wealth, University Nigeria.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Certification in Backend Engineering</h3>
            <p className="text-sm text-gray-600">Altschool Africa</p>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="skills mb-16">
        <h2 className="text-4xl font-bold text-blue-800 mb-6">Skills</h2>
        <div className="flex flex-wrap gap-4">
          {['React', 'Node.js', 'Django', 'TypeScript', 'HTML', 'CSS', 'JavaScript', 'TailwindCSS', 'PostgreSQL', 'Express.js'].map((skill, index) => (
            <span
              key={index}
              className="bg-green-100 text-green-700 text-sm font-medium px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      
      {/* Achievements Section */}
      <div className="achievements mb-10">
        <button className="text-xl text-purple-900 underline font-normal" onClick={DownloadCv}>Download My CV</button>
      </div>

      {/* Message Section */}
      <div className="message bg-gray-100 p-4 py-8 mb-12">
        <h1 className="text-pink-500 text-3xl submit leading-10 font-bold mb-8">Dm me....</h1>
        <form onSubmit={handleSubmit}>
          <input value={name} onChange={(e) => setName(e.target.value)} type="text" required className="bg-white text-sm p-2 pr-12 mb-4" placeholder='Your Name...' /><br />
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required className="bg-white text-sm p-2 pr-20 mb-4" placeholder='Email Address...' /><br />
          <input value={message} onChange={(e) => setMessage(e.target.value)} type="text" required className="bg-white text-sm p-2 pb-12 mb-4 w-72" placeholder='Message...' /><br />
          <button type="submit" className="p-2 px-12 font-bold mt-4 text-white bg-pink-700" disabled={loading}>
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
        {success && <p className="text-green-500 mt-2">{success}</p>}
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>
    </div>
  );
};

export default About;
