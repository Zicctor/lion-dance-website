import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  phone: string;
  message: string;
  formType: 'booking' | 'joining';
  eventDate?: string;
  position?: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  phone,
  message,
  formType,
  eventDate,
  position,
}) => (
  <div>
    <h1>New {formType === 'booking' ? 'Booking' : 'Team Application'} Inquiry</h1>
    <div>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Phone:</strong> {phone}</p>
      {formType === 'booking' && eventDate && (
        <p><strong>Event Date:</strong> {eventDate}</p>
      )}
      {formType === 'joining' && position && (
        <p><strong>Position Interest:</strong> {position}</p>
      )}
      <p><strong>Message:</strong></p>
      <p>{message}</p>
    </div>
  </div>
);