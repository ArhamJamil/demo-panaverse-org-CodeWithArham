
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import Image from "next/image";
const QuarterTemplate = (props) => {


  

  return (
    <div>
      <>
        <section className="text-gray-600 body-font  py-4 bg-gradient-to-r from-slate-50 to-cyan-100">
          <div className="container mx-auto flex px-5 py-32 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <Image
                priority
                src={"/machineLearning (2).jpg"}
                height={600}
                width={720}
                alt=""
              ></Image>
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="title-font sm:text-4xl text-4xl mb-4 font-semibold text-gray-900">
                {props.title}
              </h1>
              <p className="mb-8 leading-relaxed">{props.TitleContent}</p>
              <div className="flex justify-center">
                <button className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110">
                  Enroll Now {">"}
                </button>
              </div>
            </div>
          </div>
        </section>

        
      </>
    </div>
  );
};

export default QuarterTemplate;
