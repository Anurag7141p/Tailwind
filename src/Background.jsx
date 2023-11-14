import React from "react";

const Background = () => {
  return (
    <>
      <div
        style={{ backgroundImage: "url(images/hi.jpg)" }}
        className="w-full h-screen bg-contain bg-no-repeat bg-fixed"
      ></div>
      <div className="h-screen bg-blue-300 grid place-items-center">
        <h1>welcome to my youtube channel</h1>
      </div>
    </>
  );
};

export default Background;
