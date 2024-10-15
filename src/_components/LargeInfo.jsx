import { FaGithub } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import image from "../../public/linkedin.svg";
import projectImage from "../../public/Frame3.png";

import projectImageOmni from "../../public/Frame4.png";
import projectImageWild from "../../public/Frame5.png";
export default function LargeInfo() {
  return (
    <>
      {/* Tabular section */}
      <div className="flex-1 h-full p-8 flex flex-col gap-2">
        {/* Top Tab */}
        <div className="w-full flex flex-col md:flex-row gap-2 h-1/3">
          <div className="hover:scale-[1.02] duration-500  shadow-sm shadow-slate-600 rounded-md w-1/3 flex flex-col items-center justify-center cardBg">
            <span className="pt-sans-regular-italic text-6xl text-stone-500">
              3+
            </span>
            <span className="pt-sans-regular-italic text-3xl text-stone-600">
              years
            </span>
          </div>
          <div className="shadow-sm hover:scale-[1.02] duration-500 overflow-hidden shadow-slate-600 rounded-md cardBg w-2/3 flex items-center justify-center ">
            <img
              className="h-full blur-[1px] w-full object-cover"
              src={projectImage}
              alt="projectImage"
            />
          </div>
        </div>

        {/* Bottom tab */}
        <div className="w-full h-2/3 flex flex-col md:flex-row gap-2">
          {/* Left */}
          <div className="flex-1 w-2/3 h-full flex flex-col gap-2">
            {/* Left - Top */}
            <div className="w-full h-1/2 flex flex-col md:flex-row gap-2">
              <div className=" rounded-md w-1/2 shadow-sm shadow-slate-600 flex hover:scale-[1.02] duration-500  flex-col items-center justify-center cardBg">
                <span className="pt-sans-regular-italic text-6xl text-stone-500">
                  6
                </span>
                <span className="pt-sans-regular-italic text-3xl text-stone-600">
                  projects
                </span>
              </div>
              <div className=" rounded-md  flex-1 shadow-sm hover:scale-[1.02]  duration-500  shadow-slate-600 flex items-center justify-center cardBg">
                <div className=" h-full  items-center justify-center flex flex-col   gap-4">
                  <h1 className=" pt-sans-regular-italic text-3xl text-stone-600 ">
                    Let&apos;s Connect!
                  </h1>
                  <div className="flex gap-6 mt-2">
                    <a
                      className="text-[30px]"
                      href="mailto:dikshapandey0201@gmail.com"
                      target="blank"
                    >
                      <FcGoogle />
                    </a>
                    <a
                      className="text-[30px]"
                      href="https://github.com/dikshapandey0201"
                      target="blank"
                    >
                      <FaGithub className="text-stone-300" />
                    </a>
                    <a
                      className=""
                      href="https://www.linkedin.com/in/diksha-pandey-8b4665332/"
                      target="blank"
                    >
                      <img src={image} alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Left - Bottom */}
            <div
              className="w-full h-1/2  rounded-md duration-500 shadow-sm  overflow-hidden shadow-slate-600 flex 
             flex-col hover:scale-[1.02]  gap-4 items-center justify-center cardBg"
            >
              <img
                className="h-full blur-[1px]  w-full object-cover"
                src={projectImageWild}
                alt="projectImage"
              />
            </div>
          </div>

          {/* Right */}
          <div className="w-full md:w-1/3 h-full rounded-md hover:scale-[1.02]  overflow-hidden duration-500  shadow-sm shadow-slate-600 flex items-center justify-center cardBg">
            <img
              className=" h-full blur-[1px] object-cover"
              src={projectImageOmni}
              alt="projectImage"
            />
          </div>
        </div>
      </div>
    </>
  );
}
