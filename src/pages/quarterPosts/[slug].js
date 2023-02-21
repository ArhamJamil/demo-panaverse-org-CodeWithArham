import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Image from "next/image";

const slug = () => {
    if (slug === "Quarter I (core)") {
        return (
            <>
                <h1>aaa</h1>
            </>
        )
    }
  const [data, setData] = useState();
  const router = useRouter();

  // console.log(slug)
  useEffect(() => {
    if (!router.isReady) return;

    const { slug } = router.query;
    // console.log(slug);
    fetch(`/api/quarters?slug=` + slug)
      .then((data) => {
        return data.json();
      })
      .then((parsed) => {
        // console.log(parsed);
        setData(parsed);
      });
  }, [router.isReady]);

  const [open, setOpen] = useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const [dataItems, setdataItems] = useState([])
  useEffect(()=>{
    fetch("/api/quarterdata").then((d)=>{
        return d.json()
    }).then((itemParsed)=>{
        console.log(itemParsed)
        setdataItems(itemParsed)
    })
  },[])

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
                {data && data.title}
              </h1>
              <p className="mb-8 leading-relaxed">{data && data.content}</p>
              <div className="flex justify-center">
                <button className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110">
                  Enroll Now {">"}{" "}
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container px-5 py-24 mx-auto">
            <div className="-my-8 divide-y-2 divide-gray-100">
              <div className="py-8 flex flex-wrap md:flex-nowrap">
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <span className="font-semibold title-font text-gray-700">
                    CATEGORY
                  </span>
                  <span className="mt-1 text-gray-500 text-sm">
                    12 Jun 2019
                  </span>
                </div>
                <div className="md:flex-grow">
                  <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                    Bitters hashtag waistcoat fashion axe chia unicorn
                  </h2>
                  <Fragment>
                    <Accordion open={open === 1}>
                      <AccordionHeader onClick={() => handleOpen(1)}>
                        {data && data.headPoint1}
                      </AccordionHeader>
                      <AccordionBody>
                       <p className="leading-relaxed text-gray-700 text-base py-2">{data && data.H1_data1}</p>
                       <p className="leading-relaxed text-gray-700 text-base py-2">{data && data.H1_data2}</p>
                       <p className="leading-relaxed text-gray-700 text-base py-2">{data && data.H1_data3}</p>
                      </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 2}>
                      <AccordionHeader onClick={() => handleOpen(2)}>
                      {data && data.headPoint2}
                      </AccordionHeader>
                      <AccordionBody>
                      <p className="leading-relaxed text-gray-700 text-base py-2">{data && data.H2_data1}</p>
                      <p className="leading-relaxed text-gray-700 text-base py-2">{data && data.H2_data2}</p>
                      </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 3}>
                      <AccordionHeader onClick={() => handleOpen(3)}>
                      {data && data.headPoint3}
                      </AccordionHeader>
                      <AccordionBody>
                        We&apos;re not always in the position that we want to be
                        at. We&apos;re constantly growing. We&apos;re constantly
                        making mistakes. We&apos;re constantly trying to express
                        ourselves and actualize our dreams.
                      </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 4}>
                      <AccordionHeader onClick={() => handleOpen(4)}>
                      {data && data.headPoint4}
                      </AccordionHeader>
                      <AccordionBody>
                        We&apos;re not always in the position that we want to be
                        at. We&apos;re constantly growing. We&apos;re constantly
                        making mistakes. We&apos;re constantly trying to express
                        ourselves and actualize our dreams.
                      </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 5}>
                      <AccordionHeader onClick={() => handleOpen(5)}>
                      {data && data.headPoint5}
                      </AccordionHeader>
                      <AccordionBody>
                        We&apos;re not always in the position that we want to be
                        at. We&apos;re constantly growing. We&apos;re constantly
                        making mistakes. We&apos;re constantly trying to express
                        ourselves and actualize our dreams.
                      </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 6}>
                      <AccordionHeader onClick={() => handleOpen(6)}>
                      {data && data.headPoint6}
                      </AccordionHeader>
                      <AccordionBody>
                        We&apos;re not always in the position that we want to be
                        at. We&apos;re constantly growing. We&apos;re constantly
                        making mistakes. We&apos;re constantly trying to express
                        ourselves and actualize our dreams.
                      </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 7}>
                      <AccordionHeader onClick={() => handleOpen(7)}>
                      {data && data.headPoint7}
                      </AccordionHeader>
                      <AccordionBody>
                        We&apos;re not always in the position that we want to be
                        at. We&apos;re constantly growing. We&apos;re constantly
                        making mistakes. We&apos;re constantly trying to express
                        ourselves and actualize our dreams.
                      </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 8}>
                      <AccordionHeader onClick={() => handleOpen(8)}>
                      {data && data.headPoint8}
                      </AccordionHeader>
                      <AccordionBody>
                        We&apos;re not always in the position that we want to be
                        at. We&apos;re constantly growing. We&apos;re constantly
                        making mistakes. We&apos;re constantly trying to express
                        ourselves and actualize our dreams.
                      </AccordionBody>
                    </Accordion>
                  </Fragment>

                 
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  );
};

export default slug;
