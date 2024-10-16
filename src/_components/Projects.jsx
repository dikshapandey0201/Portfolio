import project1 from "../../public/Project1.png";
import project2 from "../../public/Project2.png";
import { Tag } from "primereact/tag";
import project3 from "../../public/Project3.png";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
function Projects() {
  return (
    <section className="w-full h-full">
      <h1 className="text-[50px] px-10 text-stone-400">My work</h1>

       <div className="mt-8 flex items-center md:flex-row flex-col justify-evenly gap-14 md:px-20 px-10 w-full">
        <div className="w-full rounded-md md:max-w-[350px] lg:w-1/3 cursor-pointer  duration-500 ease-in-out hover:scale-[1.02]">
          <a
            href="https://vercel.live/link/the-wild-oasis-website-alpha-eight.vercel.app/"
            target="blank"
          >
            <div className="max-w-sm cardBg overflow-hidden h-[420px] border border-gray-700 rounded-lg">
              <img className="rounded-t-lg h-[200px]" src={project1} alt="" />

              <div className="p-5  h-[220px] ">
                <div className="flex mb-2 justify-between  text-stone-400 ">
                  <h5 className=" text-2xl font-bold tracking-tight">
                    The Wild Oasis Website
                  </h5>

                  <HiArrowTopRightOnSquare />
                </div>
                <p className="mb-3 font-normal text-sm text-slate-300  dark:text-gray-400">
                  A user-friendly website for booking cabins at The Wild Oasis
                  hotel, allowing clients to check availability and manage
                  reservations.
                </p>
                <section className="flex gap-2 flex-wrap  md:mt-2">
                  <Tag
                    value="Next js"
                    className="rounded-full px-2  text-sm border border-slate-400  text-slate-400"
                  ></Tag>
                  <Tag
                    value="React js"
                    className="rounded-full px-2  text-sm border border-slate-400  text-slate-400"
                  ></Tag>
                  <Tag
                    value="Supabase"
                    className="rounded-full px-2  text-sm border border-slate-400  text-slate-400"
                  ></Tag>
                  <Tag
                    value="OAuth"
                    className="rounded-full px-2  text-sm border border-slate-400  text-slate-400"
                  ></Tag>
                  <Tag
                    value="Tailwind CSS"
                    className="rounded-full px-2  text-sm border border-slate-400  text-slate-400"
                  ></Tag>
                </section>
              </div>
            </div>
          </a>
        </div>
        <div className="w-full rounded-md md:max-w-[350px] lg:w-1/3 cursor-pointer duration-500 ease-in-out  hover:scale-[1.02]">
          <a href="https://omnifood-healthyeating.netlify.app" target="blank">
            <div className="max-w-sm cardBg bg-gray-700 border border-gray-700 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <img className="rounded-t-lg h-[200px]" src={project2} alt="" />

              <div className="p-5  h-[220px] ">
                <div className="flex mb-2 justify-between  text-stone-400  ">
                  <h5 className=" text-2xl font-bold tracking-tight">
                    OmniFood
                  </h5>

                  <HiArrowTopRightOnSquare />
                </div>
                <p className="mb-3 font-normal text-sm  text-slate-300 dark:text-gray-400">
                  Introducing the all-year-round food subscription service
                  designed to help you get back on track with healthy eating.
                  Built with a sleek, responsive interface using:
                </p>

                <section className="flex gap-2 flex-wrap md:mt-2">
                  <Tag
                    value="HTML"
                    className="rounded-full px-2  text-sm border border-slate-400  text-slate-400"
                  ></Tag>
                  <Tag
                    value="SASS"
                    className="rounded-full px-2  text-sm border border-slate-400  text-slate-400"
                  ></Tag>
                  <Tag
                    value="Bootstrap"
                    className="rounded-full px-2  text-sm border border-slate-400  text-slate-400"
                  ></Tag>
                </section>
              </div>
            </div>
          </a>
        </div>
        <div className="w-full rounded-md md:max-w-[350px] lg:w-1/3 cursor-pointer duration-500 ease-in-out hover:scale-[1.02]">
          {" "}
          <a href="https://the-liveinwild-oasis.netlify.app" target="blank">
            <div className="max-w-sm cardBg bg-gray-700 border border-gray-700 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <img className="rounded-t-lg h-[200px]" src={project3} alt="" />

              <div className="p-5  h-[220px] ">
                <div className="flex mb-2 justify-between  text-stone-400 ">
                  <h5 className=" text-2xl font-bold tracking-tight">
                    The Wild Oasis Auth
                  </h5>

                  <HiArrowTopRightOnSquare />
                </div>
                <p className="mb-3 font-normal text-sm text-slate-300 dark:text-gray-400">
                  A management dashboard for authorized users of The Wild Oasis
                  hotel, enabling them to handle room and cabin reservations and
                  configure settings.
                </p>
                <section className="flex gap-2 flex-wrap md:mt-2 ">
                  <Tag
                    value="React js"
                    className="rounded-full px-[6px]  text-sm border border-slate-400  text-slate-400"
                  ></Tag>
                  <Tag
                    value="TanStack Query"
                    className="rounded-full px-[6px]  text-sm border border-slate-400  text-slate-400"
                  ></Tag>
                  <Tag
                    value="Recharts"
                    className="rounded-full px-[6px]  text-sm border border-slate-400  text-slate-400"
                  ></Tag>
                  <Tag
                    value="Supabase"
                    className="rounded-full px-[6px]  text-sm border border-slate-400  text-slate-400"
                  ></Tag>

                  <Tag
                    value="Styled Components"
                    className="rounded-full px-[6px]  text-sm border border-slate-400  text-slate-400"
                  ></Tag>
                </section>
              </div>
            </div>
          </a>
        </div>
      </div>

      <div className="flex md:justify-end md:mr-28 justify-center my-5 text-slate-300">
        <a href="">
          <span className="flex gap-2 text-lg items-center">
            View all projects
            <HiArrowTopRightOnSquare />
          </span>
        </a>
      </div>
    </section>
  );
}

export default Projects;
