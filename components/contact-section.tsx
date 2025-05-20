"use client";

import { useState } from 'react';
import { AnimatedComponent } from '@/components/animated-component';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone } from 'lucide-react';
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import Script from "next/script";

export default function ContactSection() {
  const [date, setDate] = useState<Date>();

  return (
    <section id="contact" className="py-20 bg-background relative chinese-pattern">
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        strategy="afterInteractive"
      />
      
      <div className="container mx-auto px-4">
        <AnimatedComponent>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Contact Us</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get in touch to book a performance
            </p>
          </div>
        </AnimatedComponent>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <AnimatedComponent animation="fadeInLeft">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-6">Book a Performance</h3>
                  
                  <form action="https://submit-form.com/uXQlYezyZ" className="space-y-4">
                    <input type="hidden" name="formType" value="booking" />
                    {date && (
                      <input type="hidden" name="eventDate" value={date ? format(date, "PPP") : ""} />
                    )}
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" name="name" placeholder="Your name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" name="email" type="email" placeholder="example@gmail.com" required />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" name="phone" type="tel" placeholder="(123) 456-7890" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="date">Event Date</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className={cn(
                                "w-full justify-start text-left font-normal",
                                !date && "text-muted-foreground"
                              )}
                              type="button"
                            >
                              {date ? format(date, "PPP") : "Pick a date"}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={date}
                              onSelect={setDate}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message" 
                        name="message"
                        placeholder="Tell us about your event, location, and any specific requirements..."
                        rows={5} 
                        required 
                      />
                    </div>
                    
                    <div className="cf-turnstile" data-sitekey="0x4AAAAAABdFGr6GqfkAEI_A" data-theme="light"></div>
                    
                    <Button 
                      type="submit" 
                      className="w-full"
                    >
                      Send Message
                    </Button>
                  </form>
                </div>
              </CardContent>
            </Card>
          </AnimatedComponent>

          <AnimatedComponent animation="fadeInRight" delay={0.2}>
            <div className="space-y-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Phone className="h-5 w-5 text-primary shrink-0 mt-1 mr-3" />
                      <div>
                        <h4 className="font-medium">Phone</h4>
                        <p className="text-muted-foreground">937-993-6511</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Mail className="h-5 w-5 text-primary shrink-0 mt-1 mr-3" />
                      <div>
                        <h4 className="font-medium">Email</h4>
                        <p className="text-muted-foreground">aulacmualan@gmail.com</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </AnimatedComponent>
        </div>
      </div>
    </section>
  );
}