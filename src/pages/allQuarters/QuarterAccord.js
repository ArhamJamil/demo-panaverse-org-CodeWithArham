import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const QuarterAccord = (props) => {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  return (
  
      <>
      
          <AccordionBody >
            {props.data}
          </AccordionBody>
      
      </>

  );
};

export default QuarterAccord;
