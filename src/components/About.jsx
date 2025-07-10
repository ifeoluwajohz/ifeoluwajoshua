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
    <div>
      <div className="mb-16">
        <h1 className="text-5xl mt-12 font-semibold mb-8">
          About <span className="text-green-500">Me.</span>
        </h1>
        <p className="md:text-base text-xs leading-8 mb-16">
          Israel Ifeoluwa Joshua is a results-driven software developer with a
          strong command of both frontend and backend technologies. He
          specializes in building high-performance web applications using tools
          like Next.js, React, TailwindCSS, SCSS, JavaScript, TypeScript,
          Node.js, and Django. With a sharp eye for detail and a deep
          understanding of user experience, Joshua crafts intuitive, responsive
          interfaces while architecting scalable backend systems that ensure
          reliability and performance. His strength lies in bridging the gap
          between design and functionality — turning complex problems into
          elegant, efficient solutions. Passionate about collaboration, Joshua
          has worked alongside cross-functional teams, contributing to every
          stage of the development cycle — from planning and architecture to
          deployment and optimization. His work consistently focuses on
          delivering value, meeting client goals, and driving business growth
          through technology.
        </p>
      </div>

      {/* Education Section */}
      <div className=" mb-16">
        <h2 className="text-4xl font-bold text-blue-800 mb-6">Education</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">B.Sc. in Computer Science</h3>
            <p className="text-sm text-gray-600">
              Global Wealth, University Nigeria.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">
              Certification in Backend Engineering
            </h3>
            <p className="text-sm text-gray-600">Altschool Africa</p>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="skills mb-16">
        <h2 className="text-4xl font-bold text-blue-800 mb-6">Skills</h2>
        <div className="flex flex-wrap gap-4">
          {[
            "Next.js",
            "SCSS",
            "React",
            "Node.js",
            "Django",
            "TypeScript",
            "HTML",
            "CSS",
            "JavaScript",
            "TailwindCSS",
            "PostgreSQL",
            "Express.js",
            "Nextjs",
            "Prisma",
            "MongoDb"
          ].map((skill, index) => (
            <span
              key={index}
              className="bg-slate-100 text-blue-700 text-sm font-medium px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Achievements Section */}
      <div className="achievements mb-10">
        <button
          className="text-xl text-purple-900 underline font-normal"
          onClick={DownloadCv}
        >
          Download My CV
        </button>
      </div>

      {/* Message Section */}
      <div className="message bg-gray-100 p-4 py-8 mb-12">
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
      </div>
    </div>
  );
};

export default About;
