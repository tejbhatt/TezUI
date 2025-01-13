

import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800">
    <h1 className="text-3xl font-bold mb-4">About Page</h1>
    <p className="text-lg">
      Welcome to the About Page! This is TezUI developed By Tej Bhatt Currently working as SDE-3 at Private equity international group a uk based company 
      If you like my work do send me a email at tejbhatt98@gmail.com
    </p>
    <Link to="/" className="mt-4 text-blue-500 hover:underline">
      Go Back to Home
    </Link>
  </div>
  )
}

export default About