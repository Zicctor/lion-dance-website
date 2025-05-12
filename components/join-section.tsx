"use client";

import { AnimatedComponent } from '@/components/animated-component';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export default function JoinSection() {
  return (
    <section id="join" className="py-20 bg-primary/5 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <AnimatedComponent>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Join Our Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Become part of our lion dance family and help preserve this vibrant cultural tradition
            </p>
          </div>
        </AnimatedComponent>

        <div className="max-w-2xl mx-auto">
          <AnimatedComponent>
            <Card>
              <CardHeader>
                <CardTitle>What you will learn</CardTitle>
                <CardDescription>
                  Join as a performer and be the heart of our lion dance team
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">What you'll do:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>Learn traditional lion dance movements and techniques</li>
                      <li>Perform at various events throughout the year</li>
                      <li>Participate in acrobatic training and pole work</li>
                      <li>Help maintain lion dance costumes and equipment</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Requirements:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>Good physical fitness and stamina</li>
                      <li>Commitment to regular practice sessions</li>
                      <li>Team-oriented mindset</li>
                      <li>Interest in Chinese cultural traditions</li>
                      <li>No prior experience necessary - we'll train you!</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <a href="#contact">Apply as Performer</a>
                </Button>
              </CardFooter>
            </Card>
          </AnimatedComponent>
        </div>
      </div>
    </section>
  );
}