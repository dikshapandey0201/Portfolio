import projectImage from "../../public/Frame3.png";
import projectImageOmni from "../../public/Frame4.png";
import projectImageWild from "../../public/Frame5.png";
export default function SmallInfo() {
  return (
    <>
      {/* Tabular section */}
      <div className="flex-1 w-full h-full flex flex-col gap-2 mt-5">
        {/* Top Tab */}
        <div className="w-full flex gap-2 h-full">
          <div className="shadow-sm shadow-slate-500 rounded-md cardBg  h-[40px] w-full flex gap-1  items-center justify-center">
            <span className="pt-sans-regular-italic text-2xl text-stone-400">
              3+
            </span>
            <span className="pt-sans-regular-italic text-xl text-stone-500">
              years
            </span>
          </div>
          <div className="shadow-sm shadow-slate-500 cardBg rounded-md h-[40px] w-full flex gap-1 items-center justify-center">
            <span className="pt-sans-regular-italic text-2xl text-stone-400">
              6
            </span>
            <span className="pt-sans-regular-italic text-xl text-stone-500">
              projects
            </span>
          </div>
        </div>

        {/* Bottom tab */}
        <div className="w-full h-full flex flex-col gap-2">
          <div className=" h-[150px] flex items-center justify-center shadow-sm shadow-slate-300 rounded-md cardBg">
            <img
              className="h-full w-full   object-cover"
              src={projectImage}
              alt="projectImage"
            />
          </div>
          <div className="h-[150px] flex items-center justify-center shadow-sm shadow-slate-300 rounded-md cardBg">
            <img
              className="h-full  w-full object-cover "
              src={projectImageWild}
              alt="projectImage"
            />
          </div>
          <div className="h-[150px] flex items-center justify-center shadow-sm shadow-slate-300 rounded-md cardBg">
            <img
              className=" h-full w-full object-cover"
              src={projectImageOmni}
              alt="projectImage"
            />
          </div>
        </div>
      </div>
    </>
  );
}
