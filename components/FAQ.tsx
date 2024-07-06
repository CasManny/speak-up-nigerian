import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQs } from "@/constants";

const FAQ = () => {
  return (
      <div className="max-w-[35rem] my-15" id="faq">
          <h1 className="text-3xl text-green-1">Frequently Asked Questions.</h1>
      {FAQs.map((faq, index) => (
        <Accordion type="single" collapsible className="w-full" key={index}>
          <AccordionItem value={faq.item}>
            <AccordionTrigger className="no-underline antialiased">{faq.question}</AccordionTrigger>
            <AccordionContent className="text-black-3 font-semibold antialiased">{faq.answer}</AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </div>
  );
};

export default FAQ;
