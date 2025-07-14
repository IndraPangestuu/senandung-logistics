import React from "react";
import img1 from '../../assets/content_img/planebox1.jpg';
import img2 from '../../assets/content_img/planebox2.jpg';

const MiddleImageStack = () => {
  return (
    <div className="flex md:hidden flex-col items-center justify-center gap-4 my-10">
      <img
        src={img1}
        alt="Planebox1"
        className="w-[180px] h-[250px] object-cover rounded-xl shadow-lg"
      />
      <img
        src={img2}
        alt="Planebox2"
        className="w-[220px] h-[130px] object-cover rounded-xl shadow-lg -mt-10 ml-15"
      />
    </div>
  );
};

export default MiddleImageStack;