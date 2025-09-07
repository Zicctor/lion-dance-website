"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
} from "@/components/ui/alert-dialog";

const notificationContent = `Dear Valued Customers,

We hope this message finds you in good health and high spirits! We are thrilled to announce some exciting updates to our traditional lion dance services that will enhance your experience with us.

To maintain our commitment to excellence and continue investing in cutting-edge performance techniques and comprehensive training for our talented performers, we have made the strategic decision to update our pricing structure, effective August 9th, 2025.

We recognize that pricing adjustments may raise questions, and we want to assure you that this decision reflects our dedication to delivering the most authentic and memorable lion dance performances possible.

As a token of our appreciation for your continued loyalty and support, we are pleased to offer an exclusive grandfather pricing benefit. All lion dance bookings placed before August 9th, 2025, will maintain their original pricing structure.

Please note that this pricing update will take effect immediately following the date specified above. Any events already scheduled for August 9th, 2025, or earlier will not be impacted by these changes.

We sincerely appreciate your understanding and continued trust in our services as we strive to preserve and elevate this beautiful cultural tradition.

Should you have any questions or require clarification, please don't hesitate to contact our dedicated customer service team at [contact information]. We're always here to help!

Thank you for being an integral part of our Au Lac Lion family. Together, we look forward to creating unforgettable moments and celebrating life's special occasions.

With warmest regards and gratitude,

Phuong An Le
Au Lac Lion Dance Troupe`;

const NotificationPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // const hasSeenPopup = localStorage.getItem("hasSeenNotification");
    // if (!hasSeenPopup) {
      setIsOpen(true);
    // }
  }, []);

  const handleClose = () => {
    // localStorage.setItem("hasSeenNotification", "true");
    setIsOpen(false);
  };

  const paragraphs = notificationContent.split('\n\n');

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogContent className="max-w-2xl z-[70]">
        <AlertDialogHeader>
          <div className="flex justify-between items-center">
            <AlertDialogTitle className="text-red-800">Important Update</AlertDialogTitle>
            <button onClick={handleClose} className="p-2 rounded-full hover:bg-gray-200">
              <X className="h-5 w-5" />
            </button>
          </div>
          <AlertDialogDescription asChild>
            <div>
              {paragraphs.map((p, index) => (
                <p key={index} className="mb-4">
                  {p}
                </p>
              ))}
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
  );
};

export default NotificationPopup;