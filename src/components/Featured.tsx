import Image from "next/image";
import Link from "next/link";
import React from "react";

const Featured = () => {
  return (
    <div>
      <>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-12 mx-auto">
            <div className="text-center mb-10">
              <div className="w-1/2 h-1 rounded-full mb-10 bg-gradient-to-r  from-pink-500 to-yellow-500 inline-flex"></div>
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
                Core Courses (Common in All Specializations):
              </h1>
              <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">
                Every participant of the program will start by completing the
                following three core courses:{" "}
              </p>
              <div className="flex mt-6 justify-center"></div>
            </div>
            
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6 ">
              
              <div className="p-5 md:w-1/3 flex flex-col text-center items-center hover:bg-slate-900 hover:text-white transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-100">
                <div className="lg:max-w-lg lg:w-full md:w-full w-5/6 mb-10 md:mb-0 py-4">
                  <Image
                    src={"/MetaVerse.webp"}
                    height={100}
                    width={720}
                    alt=""
                  ></Image>
                </div>
                <div className="flex-grow ">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3 ">
                    Quarter I (Core)
                  </h2>
                  <p className="leading-relaxed text-base">
                    CS-101: Object-Oriented Programming using TypeScript.
                  </p>
                  
                  <Link href={'/allQuarters/QT_1'} className="mt-3 text-green-500 inline-flex items-center">
                  <button className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110">Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-2 my-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                    </button>
                  </Link>
               
                </div>
              </div>
              
              
              <div className="p-5 md:w-1/3 flex flex-col text-center items-center hover:bg-slate-900 hover:text-white transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-100">
                <div className="lg:max-w-lg lg:w-full md:w-full w-5/6 mb-10 md:mb-0 py-4 scale-100">
                  <Image
                    src={"/machineLearning (1).jpg"}
                    height={100}
                    width={700}
                    alt=""
                  ></Image>
                </div>

                <div className="flex-grow">
                  <h2 className="text-gray-900  text-lg title-font font-medium mb-3">
                    Quarter II (Core)
                  </h2>
                  <p className="leading-relaxed text-base">
                    W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud
                    Cloud Apps and APIs using Next.js 13
                  </p>
                  <Link href={'/quarterPosts/Quarter II (core)'} className="mt-3 text-green-500 inline-flex items-center">
                  <button className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110">Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-2 my-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                    </button>
                  </Link>
                </div>
              </div>
              
              <div className="p-5  md:w-1/3 flex flex-col text-center items-center hover:bg-slate-900 hover:text-white transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-100">
                <div className="lg:max-w-lg lg:w-full md:w-full  w-5/6 mb-10 md:mb-0 py-4">
                  <Image
                    src={"/nasa.jpg"}
                    height={100}
                    width={700}
                    alt=""
                  ></Image>
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                    Quarter III (Core)
                  </h2>
                  <p className="leading-relaxed text-base">
                    $-101: Dollar Making Bootcamp - Full-Stack Template and API
                    Product Development.
                  </p>
                  <Link href={'/quarterPosts/Quarter III (core)'} className="mt-3 text-green-500 inline-flex items-center">
                  <button className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110">Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-2 my-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  );
};

export default Featured;
