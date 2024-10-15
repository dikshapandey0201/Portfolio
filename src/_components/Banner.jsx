import Slider from "infinite-react-carousel";
import { FaReact } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { SiSupabase } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
function Banner() {
  const SimpleSlider = () => (
    <div className=" md:h-[18vh] h-[12vh]">
      <Slider
        arrows={false}
        slidesToShow={window.innerWidth > 768 ? 3 : 2}
        centerMode
        autoplay
        autoplaySpeed={2000}
        duration={3000}
      >
        <div>
          <h3 className="text-blue-500 md:text-5xl text-2xl font-semibold py-8 md:py-6">
            <span className="md:flex md:gap-2 items-center flex gap-1">
              <FaReact />
              <span className="md:text-4xl text-xl">React</span>
            </span>
          </h3>
        </div>

        <div>
          <h3 className="text-slate-300 md:text-5xl text-2xl  font-semibold py-8 md:py-6">
            <span className="md:flex md:gap-2 items-center flex gap-1">
              <RiNextjsLine />
              <span className="md:text-4xl text-xl">NEXT js</span>
            </span>
          </h3>
        </div>
        <div>
          <h3 className="text-green-800 md:text-5xl text-2xl font-semibold py-8 md:py-6">
            <span className="md:flex md:gap-2 items-center flex gap-1">
              <SiMongodb />
              <span className="md:text-4xl text-xl">MongoDb</span>
            </span>
          </h3>
        </div>
        <div>
          <h3 className="text-blue-500 md:text-5xl text-2xl font-semibold py-8 md:py-6">
            <span className="md:flex md:gap-2 items-center flex gap-1">
              <SiTailwindcss />
              <span className="md:text-4xl text-xl">Tailwind</span>
            </span>
          </h3>
        </div>
        <div>
          <h3 className="text-slate-300 md:text-5xl text-2xl font-semibold py-8 md:py-6">
            <span className="md:flex md:gap-2 items-center flex gap-1">
              <SiExpress />
              <span className="md:text-4xl text-xl">Express</span>
            </span>
          </h3>
        </div>
        <div>
          <h3 className="text-green-800 md:text-5xl text-2xl font-semibold py-8 md:py-6">
            <span className="md:flex md:gap-2 items-center flex gap-1">
              <SiSupabase />
              <span className="md:text-4xl text-xl ">Supabase</span>
            </span>
          </h3>
        </div>
      </Slider>
    </div>
  );
  return SimpleSlider();
}

export default Banner;
