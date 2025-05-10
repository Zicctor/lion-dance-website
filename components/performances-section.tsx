"use client";

import { Check } from 'lucide-react';
import { AnimatedComponent } from '@/components/animated-component';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const performances = [
  {
    title: "Traditional Performance",
    description: "Perfect for cultural events and celebrations",
    price: "$888",
    features: [
      "30-45 minute performance",
      "2 lion dancers",
      "Drum and cymbal accompaniment",
      "Red envelope ceremony",
      "Photo opportunities"
    ],
    popular: false
  },
  {
    title: "Fortune & Prosperity",
    description: "Our most popular package for business openings",
    price: "$1,288",
    features: [
      "45-60 minute performance",
      "3 lion dancers with costume changes",
      "Full musical accompaniment",
      "Business blessing ceremony",
      "Customized performance route",
      "Professional photography"
    ],
    popular: true
  },
  {
    title: "Grand Celebration",
    description: "The ultimate lion dance experience",
    price: "$1,888",
    features: [
      "60-90 minute performance",
      "4+ lion dancers",
      "Full percussion ensemble",
      "Advanced acrobatic routines",
      "Customized choreography",
      "Red envelope & blessing ceremonies",
      "Video & photography package"
    ],
    popular: false
  }
];

export default function PerformancesSection() {
  return (
    <section id="performances" className="py-20 bg-secondary/5 relative">
      <div className="container mx-auto px-4">
        <AnimatedComponent>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Performances
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Bring good fortune and excitement to your next event with our traditional lion dance performances
            </p>
          </div>
        </AnimatedComponent>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {performances.map((performance, index) => (
            <AnimatedComponent key={performance.title} delay={index * 0.1}>
              <Card className={`h-full flex flex-col ${
                performance.popular 
                  ? 'border-secondary shadow-lg relative overflow-hidden' 
                  : ''
              }`}>
                {performance.popular && (
                  <div className="absolute top-0 right-0 bg-secondary text-secondary-foreground px-4 py-1 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-xl">{performance.title}</CardTitle>
                  <CardDescription>{performance.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="mb-4">
                    <span className="text-3xl font-bold">{performance.price}</span>
                    <span className="text-muted-foreground"> per event</span>
                  </div>
                  <ul className="space-y-2">
                    {performance.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    className={performance.popular ? "w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground" : "w-full"}
                    variant={performance.popular ? "default" : "outline"}
                    asChild
                  >
                    <a href="#contact">Book Now</a>
                  </Button>
                </CardFooter>
              </Card>
            </AnimatedComponent>
          ))}
        </div>

        <AnimatedComponent delay={0.3}>
          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-4">
              Need a custom performance package? We can tailor our show to your specific event!
            </p>
            <Button asChild>
              <a href="#contact">Request Custom Package</a>
            </Button>
          </div>
        </AnimatedComponent>
      </div>
    </section>
  );
}