import React from "react";
import reviews from './data'
import Testimonials from "./Components/Testimonials";

const App = () => {

  return (

    <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200">

      <div className="text-center">

        <h1 className="text-4xl font-bold">Our Testimonials</h1>

        <div className="bg-violet-400 h-[4px] w-[20%] mt-1 mx-auto"></div>

        <Testimonials reviews={reviews}></Testimonials>

      </div>
      
    </div>

  );
};

export default App;
