"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const images = ["1.png", "2.png", "3.png", "4.png"];
const Page = () => {
  const { push } = useRouter();
  const [currentImage, setCurrentImage] = useState(0);

  const handleSignIn = () => {
    push("/sign-in");
  };
  const handleSignUp = () => {
    push("/sign-up");
  };

  console.log("hii ");
  useEffect(() => {
    const myFucn = () => "Hello";
    if (true) return console.log("mrohtsh ll myfunc");
    return console.log(myFucn());
  }, []);
  // Set up the interval properly with cleanup
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 4000); // Change every 4 seconds

    // Cleanup to avoid multiple intervals
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen w-full overflow-hidden relative flex ">
      {/* Background images for smoother opacity transitions */}
      {/* section 1  */}
      <div className="w-2/3 relative">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full transition-opacity duration-1000 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        ))}
      </div>

      {/* Main content */}
      {/* tany section  */}
      <div className="flex flex-col items-center flex-1 mx-auto px-9  justify-center bg-slate-100">
        <div className="flex flex-col justify-center items-center">
          <h1 className=" bg--400 backdrop-blur-2xl w-full mx-7 rounded-lg sm:text-7xl text-3xl p-6 top-1 left-3  text-slate-900 font-semibold font-sans  text-center ">
            Welcome to MZONE.
          </h1>
          <h2 className="sm:text-4xl text-2xl text-slate-800 leading-3 mt-14 text-center font-medium font-sans w-full mx-4  ">
            Chat with your Friends. Don&apos;t have one? Fine, you can also chat
            with our AI model!
          </h2>
        </div>

        <div className="mt-20">
          <button
            onClick={handleSignIn}
            className="mr-4 px-6 py-2  rounded-lg bg-blue-500 text-white "
          >
            Sign In
          </button>
          <button
            onClick={handleSignUp}
            className="px-6 py-2 rounded-lg bg-green-500 text-white "
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
