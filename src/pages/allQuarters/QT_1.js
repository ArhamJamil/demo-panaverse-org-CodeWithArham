import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import QuarterDetails from './QuarterDetails'
import QuarterTemplate from './QuarterTemplate'
import QuarterAccord from "./QuarterAccord";

const QT_1 = () => {
    let courseDesc = `
    We will start the program by learning the fundamentals of Object-Oriented programming using JavaScript and TypeScript. We will also understand the latest Web trends i.e. Web 3.0 and Metaverse concepts and try to understand their working from the perspective of the users. `

    return (
    <div>
      <QuarterTemplate 
      title="Quarter I (core)" 
      TitleContent={`${courseDesc}`}
      />

    <QuarterDetails
    title_1="HTML and CSS (Homework)"
    title_2="HTML and CSS (Homework)"
    title_3="HTML and CSS (Homework)"
    title_4="HTML and CSS (Homework)"
    title_5="HTML and CSS (Homework)"
    title_6="HTML and CSS (Homework)"
    title_7="HTML and CSS (Homework)"
    title_8="HTML and CSS (Homework)"
    content1 = <QuarterAccord data="dadad" />
    />

   
   

    </div>
  )
}

export default QT_1
