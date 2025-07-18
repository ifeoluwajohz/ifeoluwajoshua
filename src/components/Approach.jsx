import React from 'react';

const Experience = () => {
  return (
    <>
      <div>
        <h1 className="text-4xl md:text-5xl mt-12 mb-12 font-bold text-center text-gray-800">My <span className="text-purple-500 underline">Job Experience</span></h1>
        <p className="leading-8 text-center text-lg text-gray-600 mb-8">
          I’m passionate about building innovative solutions and collaborating with creative teams to deliver high-quality applications. 
          Here’s a glimpse into the roles I’ve taken on so far.
        </p>
      </div>

      {/* Job Experience Section */}
      <div className="job-experience mt-16 mb-12 px-4 md:px-0">
        {/* Job 1 */}
       
        <div className="job-entry bg-white p-6 rounded-lg shadow-lg mb-8 transform transition-transform hover:scale-105 hover:shadow-xl">
          <h3 className="text-2xl font-bold text-gray-800">Founder | <span className="text-purple-600">Senior Engineer</span></h3>
          <p className="text-sm text-gray-600 italic mb-4">Jun 2023 - Date</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>As the founder and senior engineer at Virall, a digital agency focused on delivering high-quality web solutions</li>
            <li>I design scalable solutions, mentor junior developers.</li>
            <li>We also ensure that we meet client expectations while pushing the limits of technology.</li>
            <li>Collaborated with UI/UX designers to convert design mockups into fully functional web applications.</li>
          </ul>
        </div>

        {/* Job 2 */}
        <div className="job-entry bg-white p-6 rounded-lg shadow-lg mb-8 transform transition-transform hover:scale-105 hover:shadow-xl">
          <h3 className="text-2xl font-bold text-gray-800">Junior Developer | <span className="text-purple-600">Innovations Creed</span></h3>
          <p className="text-sm text-gray-600 italic mb-4">Feb 2019 - May 2020</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Assisted in building web applications using Django and Python for backend development.</li>
            <li>Collaborated with design teams to implement UI features with responsive design principles.</li>
            <li>Learned and applied best practices in software development, including code reviews and version control.</li>
            <li>Gained practical experience in SQL and PostgreSQL for data storage and management.</li>
          </ul>
        </div>
      </div>

    </>
  );
}

export default Experience;
