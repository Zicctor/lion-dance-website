"use client";

import { useState } from 'react';
import { AnimatedComponent } from '@/components/animated-component';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function JoinSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    reason: '',
    preferredDate: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add your form submission logic here
    alert('Thank you for your interest! We will contact you soon.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      reason: '',
      preferredDate: ''
    });
  };

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

        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-8">
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
                      <li>Participate in instrument training and musical skill development</li>
                      <li>Help maintain lion dance costumes and equipment</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Requirements:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>Commitment to regular practice sessions</li>
                      <li>Team-oriented mindset</li>
                      <li>Interest in Vietnamese - Chinese cultural traditions</li>
                      <li>No prior experience necessary - we'll train you!</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <a href="https://www.instagram.com/aulaclions/" target="_blank" rel="noopener noreferrer">Contact us directly</a>
                </Button>
              </CardFooter>
            </Card>
          </AnimatedComponent>

          <AnimatedComponent>
            <Card>
              <CardHeader>
                <CardTitle>Join Application</CardTitle>
                <CardDescription>
                  Fill out this form to express your interest in joining our lion dance team
                </CardDescription>
              </CardHeader>
              <form onSubmit={handleSubmit}>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="(123) 456-7890"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="reason">Why do you want to join? (Optional)</Label>
                    <Textarea
                      id="reason"
                      name="reason"
                      value={formData.reason}
                      onChange={handleInputChange}
                      placeholder="Tell us what motivates you to join our lion dance team..."
                      rows={3}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="preferredDate">Preferred Start Date (Optional)</Label>
                    <Input
                      id="preferredDate"
                      name="preferredDate"
                      type="date"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type="submit" className="w-full">
                    Submit Application
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </AnimatedComponent>
        </div>
      </div>
    </section>
  );
}