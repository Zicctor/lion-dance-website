"use client";

import { useState } from 'react';
import { AnimatedComponent } from '@/components/animated-component';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone } from 'lucide-react';

export default function ContactSection() {
  const [formType, setFormType] = useState('booking');
  const [formStatus, setFormStatus] = useState<null | 'submitting' | 'success' | 'error'>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      // Reset form after a few seconds
      setTimeout(() => {
        setFormStatus(null);
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-background relative chinese-pattern">
      <div className="container mx-auto px-4">
        <AnimatedComponent>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Contact Us</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get in touch to book a performance or inquire about joining our team
            </p>
          </div>
        </AnimatedComponent>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <AnimatedComponent animation="fadeInLeft">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-6">Send Us an Inquiry</h3>
                  
                  <RadioGroup 
                    defaultValue="booking" 
                    className="flex mb-6 space-x-4 space-y-0" 
                    onValueChange={setFormType}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="booking" id="booking" />
                      <Label htmlFor="booking">Book Performance</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="joining" id="joining" />
                      <Label htmlFor="joining">Join Team</Label>
                    </div>
                  </RadioGroup>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="Your name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="Aulacmualan@gmail.com" required />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" type="tel" placeholder="(123) 456-7890" />
                      </div>
                      
                      {formType === 'booking' && (
                        <div className="space-y-2">
                          <Label htmlFor="date">Event Date</Label>
                          <Input id="date" type="date" />
                        </div>
                      )}
                      
                      {formType === 'joining' && (
                        <div className="space-y-2">
                          <Label htmlFor="position">Position Interest</Label>
                          <select 
                            id="position"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          >
                            <option value="">Select position...</option>
                            <option value="performer">Performer</option>
                          </select>
                        </div>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder={
                          formType === 'booking' 
                            ? "Tell us about your event, location, and any specific requirements..." 
                            : "Tell us a bit about yourself and why you'd like to join our team..."
                        }
                        rows={5} 
                        required 
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full"
                      disabled={formStatus === 'submitting'}
                    >
                      {formStatus === 'submitting' 
                        ? 'Sending...' 
                        : formStatus === 'success'
                        ? 'Message Sent!'
                        : 'Send Message'}
                    </Button>
                    
                    {formStatus === 'success' && (
                      <p className="text-sm text-green-600 mt-2">
                        Thank you! Your message has been sent successfully. We'll get back to you soon.
                      </p>
                    )}
                    
                    {formStatus === 'error' && (
                      <p className="text-sm text-red-600 mt-2">
                        There was an error sending your message. Please try again or contact us directly.
                      </p>
                    )}
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
                        <p className="text-muted-foreground">Aulacmualan@gmail.com</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4">Frequently Asked Questions</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium">How far in advance should I book?</h4>
                      <p className="text-muted-foreground">
                        We recommend booking at least 4–6 weeks in advance, especially for high-demand dates such as Lunar New Year. 
                        While we may be able to accommodate rush bookings made less than 4 weeks in advance, 
                        please note that an additional fee will apply based on availability.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium">What areas do you serve?</h4>
                      <p className="text-muted-foreground">
                        While our performances are primarily based in the Dayton area, we are available to travel to other locations. 
                        Additional travel fees may apply depending on the distance and location.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium">Do I need any special setup for a performance?</h4>
                      <p className="text-muted-foreground">
                        A clear and unobstructed performance area is required for our lion dance shows. 
                        While exact space requirements may vary depending on the venue and performance type, we will work with you to determine the best setup. 
                        All necessary equipment will be provided by our team.
                      </p>
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