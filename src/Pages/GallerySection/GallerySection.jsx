import React from "react";

const GallerySection = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold text-black text-center pb-7">Gallery</h1>
      <div className="flex justify-center gap-5">
        <div className="space-y-5">
          <div>
            <img
              className="w-72 h-[196px] rounded-xl"
              src="/assets/gallery-5.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-72 h-96 rounded-xl"
              src="/assets/gallery-3.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="space-y-5">
          <div>
            <img
              className="w-72 h-96 rounded-xl"
              src="/assets/gallery-6.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-72 h-[196px] rounded-xl"
              src="/assets/gallery-7.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="space-y-5">
          <div>
            <img
              className="w-72 h-[196px] rounded-xl"
              src="/assets/gallery-4.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-72 h-96 rounded-xl"
              src="/assets/gallery-8.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="space-y-5">
          <div>
            <img
              className="w-72 h-96 rounded-xl"
              src="/assets/gallery-9.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-72 h-[196px] rounded-xl"
              src="/assets/gallery-1.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
