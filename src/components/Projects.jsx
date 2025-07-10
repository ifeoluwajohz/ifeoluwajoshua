// import '../styles/style.css';
import { Link } from 'react-router-dom';
import features from '../data/data.json';
import NFT from '../assets/NFT.png';
import ECORENT from '../assets/ECORENT.png';
import Approach from './Approach';


const Projects = () => {
  const infos = features.data;

  return (
    <div className="container mx-auto px-4">
      <h1 className="job text-4xl sm:text-5xl mt-12 font-semibold mb-12 text-center">
        My Recent <span className="text-purple-500 underline">Projects</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {infos.map((info) => (
          <div
            key={info.id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={info.imgurl}
              alt={info.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{info.title}</h3>
              <p className="text-gray-600 mb-4">{info.description}</p>
              <p className="text-sm text-purple-500 font-medium">{info.stack}</p>
              <Link
                to={`${info.link}`}
                className="inline-block mt-4 bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition duration-300"
              >
                View Project
              </Link>
            </div>
          </div>
        ))}
      </div>
      <Approach />

      <h1 className="job text-4xl sm:text-5xl mt-20 font-semibold mb-12 text-center">
        Volunteer <span className="text-purple-500 underline">Jobs</span>
      </h1>
      <div className="works grid grid-cols-1 sm:grid-cols-2 gap-8 mb-20">
        <img
          src={NFT}
          alt="NFT Experience"
          className="work rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        />
        <img
          src={ECORENT}
          alt="ECORENT Experience"
          className="work rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        />
      </div>
    </div>
  );
};

export default Projects;
