import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-bgPrimary  h-screen">
      <div className=" w-[50%] lg:w-[40%] mx-auto pt-40 lg:pt-40 flex flex-col items-center text-center  ">
        <p className="text-6xl font-semibold text-center   " >
          Start <span className="text-textPrimary ">Confidently. </span> Build <span className="text-textPrimary ">Elegently. </span>Finish <span className="text-textPrimary ">Quickly.</span>
        </p>
        <p className="mt-8">
          <Typography variant="h6" >
            With our curated Components, join the community of developers who trust our library to enhance
            their projects. <Link to="/components/alert" className="underline underline-offset-2 font-semibold">Get Started </Link>and
            experience the difference today!
          </Typography>
        </p>
      </div>
    </div>
  );
};

export default Home;
