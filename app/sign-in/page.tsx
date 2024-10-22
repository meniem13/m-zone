import React from "react";
import CustomButton from "../../components/customButton";

const page = () => {
  return (
    <div className="flex w-full h-screen">
      {/* section sora 60% */}
      <div className="bg-red-400 w-2/3 h-full rounded-r-3xl">
        <div className="flex flex-col p-16 gap-y-6 h-full">
          <h1 className="text-6xl font-semibold text-slate-200">
            Welcome Back.
          </h1>
          <h3 className="text-3xl ml-1 font-medium text-slate-300 ">
            let&apos;s sign you in
          </h3>
          <div className="h-full w-4/5 backdrop-blur-md -black  overflow-hidden">
            <img
              src="/5.png"
              className="w-full h-full object-c\\\over object- object-contain"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-y-4 p-8 justify-center bg-slate-50">
        <input
          type="text"
          className="inputStyle"
          placeholder="email"
          name="email"
        />
        <div className="flex flex-col ">
          <input
            type="text"
            className="inputStyle mb-11"
            placeholder="password"
            name="password"
          />
          <p className="mb-11 -mt-9 ml-4 text-end mr-14 font-medium text-slate-500">
            forgot your password?
          </p>
        </div>

        <CustomButton txt="Sign In" bgCol="blue-500" />
        <div className="mt-16 flex flex-col mr-4 items-center justify-center">
          <p className=" text-lg font-medium text-slate-600">
            or sign in with{" "}
          </p>
          <div className="flex gap-x-9 mt-5">
            <div className="size-16  rounded-full border border-slate-200 overflow-hidden">
              <img
                src="google.png"
                className="w-full h-full object-cover "
                alt=""
              />
            </div>
            {/* <p>or</p>
            <div className="size-16  rounded-full border border-slate-200 overflow-hidden">
              <img
                src="facebook.png"
                className="w-full h-full object-center  "
                alt=""
              />
            </div> */}
          </div>
          <p className="mt-11">
            New to M-Zone?{" "}
            <span className="font-semibold underline">Sign up now.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
