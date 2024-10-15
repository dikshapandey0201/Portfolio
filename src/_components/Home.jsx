import LargeInfo from "./LargeInfo";
import SmallInfo from "./SmallInfo";
import profile from "../../public/ProfilePhoto.jpg";

export default function Home() {
  return (
    <main className="w-full  md:h-screen h-auto flex flex-col md:flex-row items-center justify-between p-5 md:p-10">
      {/* Photo div */}
      <div className="flex-1 relative grayscale   h-full flex items-center justify-center">
        <img
          className="max-w-full shadow-lg shadow-stone-900 md:h-full  rounded-full "
          src={profile}
          alt=""
        />
        <span className="text-stone-500 absolute md:top-5 top-3 right-8 md:right-[90px]">
          <p className="md:text-5xl text-3xl font-semibold "> Diksha</p>
          <p className="md:text-2xl  text-xl ">Pandey</p>
        </span>
        <span className="text-stone-500 absolute md:bottom-10 bottom-5 left-5 md:left-[60px]">
          <p className="md:text-5xl text-3xl font-semibold "> Software</p>
          <p className="md:text-2xl text-xl ">Engineer</p>
        </span>
      </div>
      {window.innerWidth > 768 ? <LargeInfo /> : <SmallInfo />}
    </main>
  );
}
