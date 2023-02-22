import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import QuarterAccord from "./QuarterAccord";

const QuarterDetails = (props) => {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const customAnimation = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };
  return (
    <div>
      <>
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
                        {props.title_1}
                      </AccordionHeader>
                        {props.content1}
                        
                    </Accordion>

                    <Accordion open={open === 2}>
                      <AccordionHeader onClick={() => handleOpen(2)}>
                        {props.title_2}
                      </AccordionHeader>
                        {props.content1}
                        
                    </Accordion>

                    <Accordion open={open === 3}>
                      <AccordionHeader onClick={() => handleOpen(3)}>
                        {props.title_3}
                      </AccordionHeader>
                        {props.content1}
                        
                    </Accordion>

                    <Accordion open={open === 4}>
                      <AccordionHeader onClick={() => handleOpen(4)}>
                        {props.title_4}
                      </AccordionHeader>
                        {props.content1}
                        
                    </Accordion>

                    <Accordion open={open === 5}>
                      <AccordionHeader onClick={() => handleOpen(5)}>
                        {props.title_5}
                      </AccordionHeader>
                        {props.content2}
                        
                    </Accordion>

                    <Accordion open={open === 6}>
                      <AccordionHeader onClick={() => handleOpen(6)}>
                        {props.title_6}
                      </AccordionHeader>
                        {props.content3}
                        
                    </Accordion>

                    <Accordion open={open === 7}>
                      <AccordionHeader onClick={() => handleOpen(7)}>
                        {props.title_7}
                      </AccordionHeader>
                        {props.content1}
                        
                    </Accordion>

                    <Accordion open={open === 8}>
                      <AccordionHeader onClick={() => handleOpen(8)}>
                        {props.title_8}
                      </AccordionHeader>
                        {props.content1}
                        
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

export default QuarterDetails;
