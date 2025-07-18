import React, { useState } from "react";
// import '../styles/style.css';
import Resume from "../assets/Resume.pdf";

const About = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch(
        "https://portfolio-backend-ce6g.onrender.com/dm_me",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, message }),
        }
      );

      if (!response.ok) {
        throw new Error("Something went wrong with the submission");
      }

      setName("");
      setEmail("");
      setMessage("");
      setSuccess("Your message has been sent successfully!");
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const DownloadCv = () => {
    const url = Resume;
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", Resume);
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <div className="bg-gray-100 text-black px-8 md:p-20 pb-12 py-20">

      {/* Skills Section */}
      <div className="flex flex-col items-center gap-4 px-5 md:px-10">
        <h2 className="text-4xl font-bold text-blue-700 mb-2 bg-blue-200">Specializing in</h2>
        <p className="text-center text-sm md:text-base px-0 md:px-10">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum autem odit, dolore repudiandae labore impedit et magnam eligendi fugit deleniti!</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-4 my-5 ">
          <div className="bg-blue-500 text-gray-100 p-10 rounded-br-3xl shadow-md h-80 items-start justify-between flex flex-col">
            <h3 className="text-4xl font-semibold ">Frontend Development.</h3>
            <p className="text-gray-50 text-sm">Building responsive and dynamic websites Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
           <div className="w-full flex justify-end">
              <button className="underline">Learn More</button>
            </div>
          </div>
          <div className="bg-blue-200 text-blue-800 p-10 rounded-br-3xl shadow-md h-80 items-start justify-between flex flex-col">
            <h3 className="text-4xl font-semibold ">Backend Development.</h3>
            <p className="text-gray-600 text-sm">Building responsive and dynamic websites Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
           <div className="w-full flex justify-end">
              <button className="underline">Learn More</button>
            </div>
          </div>
          <div className=" bg-white text-blue-700 p-10 rounded-br-3xl shadow-md h-80 items-start justify-between flex flex-col">
            <h3 className="text-4xl font-semibold ">Ui\Ux Designs.</h3>
            <p className="text-gray-600 text-sm">Building responsive and dynamic websites Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
           <div className="w-full flex justify-end">
              <button className="underline">Learn More</button>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section
      <div className="flex flex-col items-center gap-4 px-5 md:px-10">
        <h3>Case Study</h3>
      </div>

      {/* Message Section */}
      {/* <div className="message bg-gray-100 p-4 py-8 mb-12">
        <h1 className="text-pink-500 text-3xl submit leading-10 font-bold mb-8">
          Dm me....
        </h1>
        <form onSubmit={handleSubmit}>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            required
            className="bg-white text-sm p-2 pr-12 mb-4"
            placeholder="Your Name..."
          />
          <br />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
            className="bg-white text-sm p-2 pr-20 mb-4"
            placeholder="Email Address..."
          />
          <br />
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            type="text"
            required
            className="bg-white text-sm p-2 pb-12 mb-4 w-72"
            placeholder="Message..."
          />
          <br />
          <button
            type="submit"
            className="p-2 px-12 font-bold mt-4 text-white bg-pink-700"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
        {success && <p className="text-green-500 mt-2">{success}</p>}
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>  */}
    </div>
  );
};

export default About;
