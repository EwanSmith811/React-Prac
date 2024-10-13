import React from 'react'
import image from '../assets/butter.png';

const Home = () => {
  return (
    <div className="flex items-center justify-center ">
      <img className="shadow-lg flex items-center justify-center mt-8 hover:p-8"src={image}></img>
    </div>
  )
}

export default Home
