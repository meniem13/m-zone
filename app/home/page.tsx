import React from "react";

const page = () => {
  return (
    <div className="h-screen w-screen flex  ">
      {/* hna hybqa sidebar ely feh elnas w model 35% ashan hybqa fe profile shit we can make it modal */}
      <div className="w-1/5 bg-cyan-900  p-3 overflow-y-auto">
        {/* username or email and the profile picture */}

        <div className="flex gap-1 px-3 py-1 items-center roun">
          <div className="rounded-full size-10 bg-black "></div>

          <h2 className="font-semibold text-xl text-slate-200 ">
            Username or email
          </h2>
          {/* <div className="size-7 bg-black  ml-9"></div> */}
        </div>
        <div className="h-[2px] rounded-md  bg-slate-400 w-36 mx-auto mt-3"></div>

        {/* users to pick one  */}
        <div>
          <br className="h-[2px]  w-36 mx-auto" />
          <div className="text-start ml-4 text font-semibold text-xl text-cyan-400 py-3">
            Friends chats
          </div>
          <div>
            <div className="flex gap-1 px-3 py-3  00 items-center ">
              <div className="rounded-full size-9 bg-black "></div>

              <h2 className="font-semibold text-sm text-slate-300 ">
                Username or email
              </h2>
            </div>
          </div>
          <div className="text-start ml-4 text font-semibold text-xl text-cyan-400 mt-9 py-3">
            AI model chats
          </div>
        </div>
        <div className="mt-52">profile</div>
        <div className="">invite friends</div>
      </div>
      {/* hna hbybqa feh el chat box  */}

      <div className="flex-1 mx-auto  bg-cyan-800   flex flex-col relative ">
        <div className="  flex gap-x-3 sticky bg-cyan-700   rounded-b-md  py-2 w-full items-center">
          <div className="ml-6 mt-1 rounded-full bg-slate-100 size-11"></div>

          <h1 className="font-palanquin font-semibold text-xl">
            {1 ? <div>{1}</div> : " choose a user to chat with"}
          </h1>
        </div>
        {/* hna hybqa body bta3 box */}
        {/* {wholeMessages.length > 0 ? (
          <div className="flex flex-col space-y-2 mb-10">
            {wholeMessages.map((item, index) => (
              <div
                key={index}
                className={`${
                  item.senderName === name
                    ? "self-end bg-blue-500"
                    : "self-start bg-green-500"
                } px-3 py-1 mb-2 rounded-lg`}
              >
                {item.actualMsg}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-white mt-10">
            type something to start chatting
          </p>
        )} */}
        <div className="absolute  w-full  py-1 bg-cyan-800 items-center bottom-0 flex justify-center -slate-400  ">
          <input
            type="text"
            className="w-3/4 bg-cyan-900 focus:border-cyan-300 focus:shadow-lg outline-none focus:outline-none ml-4 mx-auto rounded-lg h-10 py-6 border-2 border-cyan-600 px-4 f w active:outline-none  ring-offset-4 shadow-xl"
            placeholder="Enter a text"
          />
          <button
            className="px-4 py-2 h-10 flex-1 mx-4 bg-green-500 text-white font-semibold rounded-lg"
            // onClick={sendData}
          >
            send
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
