"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { AnimatedComponent } from '@/components/animated-component';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Quote } from 'lucide-react';
import { ShimmerButton } from '@/components/magicui/shimmer-button';

const testimonials = [
  {
    name: "Sandra Lam",
    role: "President of ASA",
    image: "https://res.cloudinary.com/du9fgslde/image/upload/v1751772238/ftxlkktivzokvrybwcra.jpg",
    quote: "Since Au Lac has been founded, they’ve consistently been performing for ASA! Each performance has been a step up from the last, showcasing their growth and tenacity. Everyone who attended our AAPI culture night loved their act and who they are as people. Au Lac is a great group to work and interact with. We will continue to work with them in the future!",
  },
  {
    name: "Dien Nguyen",
    role: "Gradution party",
    image: "https://res.cloudinary.com/du9fgslde/image/upload/v1751772236/vp7a29mkrgjk3nqkhhxz.jpg",
    quote: "We had Au Lac lions perform for our son's graduation party, and they did not disppoint. All of the parents were recording and all of the kids were ecstatic. Their performance is what we needed to really bring out the good luck and energy for our party.",
  },
  {
    name: "Joey Nguyen",
    role: "Beavercreek High School International Club president",
    image: "https://res.cloudinary.com/du9fgslde/image/upload/v1751772237/d6gnv8yxwoo31xucs777.jpg",
    quote: "At Beavercreek Highschool, My international club holds a district wide fair every year with many exciting performances including au lac lions. Lion dancing isn’t very common around Dayton so the crowd went crazy over their dynamic dancing styles. Their authenticity allowed the crowd to appreciate the Vietnamese culture, which was exactly what our international fair is aiming for. We will definitely invite them next year for another thrilling performance.",
  },
  {
    name:"Tram & Chris ❤️",
    role: "Wedding",
    image: "https://media.istockphoto.com/id/527566435/vector/newlyweds.jpg?s=612x612&w=0&k=20&c=VKJigD_2aQGabDlphAWW1QzdnXYmpFxD3HhdPm4xVhA=",
    quote: "We had an incredible experience with this lion dance team! They were extremely flexible and professional from start to finish. Even when their car unexpectedly broke down on the way to our wedding, they still managed to arrive on time and delivered an amazing performance. Our guests could not stop talking about how energetic, vibrant, and memorable the show was. We are so grateful for their dedication and talent they truly made our celebration unforgettable!",
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        setIsTransitioning(false);
      }, 300);
    }, 12000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-secondary/5 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <AnimatedComponent>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Testimonials
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from those who have experienced the magic of our performances
            </p>
          </div>
        </AnimatedComponent>

        <div className="max-w-4xl mx-auto">
          <AnimatedComponent>
            <Card className="relative overflow-hidden bg-background/50 backdrop-blur-sm border-primary/10">
              <div className="absolute top-4 left-4 text-primary/20">
                <Quote size={48} />
              </div>
              
              <div className={`p-8 transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="relative w-32 h-32 rounded-full overflow-hidden">
                    <Image
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  <div className="flex-1 text-center md:text-left">
                    <p className="text-lg md:text-xl text-foreground mb-6 italic relative">
                      "{testimonials[currentIndex].quote}"
                    </p>
                    <div>
                      <h4 className="text-xl font-bold text-primary">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-muted-foreground">
                        {testimonials[currentIndex].role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </AnimatedComponent>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index ? 'bg-primary w-4' : 'bg-primary/30'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>

          <AnimatedComponent delay={0.2}>
            <div className="text-center mt-12 flex justify-center">
              <ShimmerButton 
                className="shadow-2xl"
                shimmerSize="2px"
                background="black"
                borderRadius="100px"
              >
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white lg:text-lg">
                  <a href="#contact">Book Your Performance</a>
                </span>
              </ShimmerButton>
            </div>
          </AnimatedComponent>
        </div>
      </div>
    </section>
  );
}
