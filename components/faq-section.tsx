"use client";

import { AnimatedComponent } from '@/components/animated-component';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How far in advance should I book?",
    answer: "We recommend booking at least 4-6 weeks in advance, especially for popular dates like Lunar New Year. Rush bookings may be accommodated based on availability."
  },
  {
    question: "What areas do you serve?",
    answer: "We primarily perform throughout the Bay Area, but can travel to other locations for additional travel fees."
  },
  {
    question: "Do I need any special setup for a performance?",
    answer: "We require a clear space for the performance area. The exact dimensions depend on your chosen package. We'll provide all necessary equipment."
  },
  {
    question: "What types of events do you perform at?",
    answer: "We perform at a wide variety of events including business openings, weddings, cultural festivals, corporate events, and private celebrations."
  },
  {
    question: "How long is a typical performance?",
    answer: "Our performances typically range from 15-45 minutes, depending on the package selected. Custom durations can be arranged for special events."
  }
];

export default function FaqSection() {
  return (
    <section id="faq" className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <AnimatedComponent>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about our performances and services
            </p>
          </div>
        </AnimatedComponent>

        <AnimatedComponent delay={0.2}>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </AnimatedComponent>
      </div>
    </section>
  );
}