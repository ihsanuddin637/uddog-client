import React from "react";

const NewsLetter = () => {
  return (
    <div className="flex items-center justify-center gap-10 border-4 py-12 border-green-400">
      <div>
        <img src="/assets/newsletter-icon.png" alt="" />
      </div>
      <div>
        <h1>Subscribe to our Newsletter</h1>
        <h3>
          Get the latest on upcoming events, volunteer drives, and community success stories.
        </h3>
        <form>
          <input
            placeholder="Enter Your E-mail Address"
            className="outline-0 h-10 w-2/3 p-4 border-2 border-red-500"
            type="text"
          />
          {/* <button className="btn btn-primary">Subscribe</button> */}
          {/* <button className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
            <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
            <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
              <span className="relative text-white">Subscribe</span>
            </span>
          </button> */}
          <button className="relative inline-block px-4 py-2 font-medium group">
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
            <span className="relative text-black group-hover:text-white">
              Button Text
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;
