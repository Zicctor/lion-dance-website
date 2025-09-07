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

We hope this message finds you well! We’re excited to share some important updates to our lion dance services.

To continue investing in training and performance excellence, we will be updating our pricing structure effective August 9, 2025. Rest assured, this adjustment reflects our commitment to offering the most authentic and memorable performances.

As a thank you for your loyalty, all bookings with a deposit made before August 9, 2025 will keep the current pricing. Please note: consultations without a deposit will follow the new pricing. Events scheduled on or before this date will not be affected.

We appreciate your trust and support as we work to preserve and elevate this cultural tradition. For any questions, please contact us directly.

Thank you for being part of the Au Lac Lion family—we look forward to celebrating with you!

Warm regards,

Au Lac Lion Association`;

const NotificationPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem("hasSeenNotification");
    if (!hasSeenPopup) {
      setIsOpen(true);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem("hasSeenNotification", "true");
    setIsOpen(false);
  };

  const paragraphs = notificationContent.split('\n\n');

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogContent className="max-w-2xl z-[70]">
        <AlertDialogHeader>
          <div className="flex justify-between items-center">
            <AlertDialogTitle className="text-red-800">Important Update</AlertDialogTitle>
            <button onClick={handleClose} className="p-2 rounded-full hover:bg-red-100 transition-colors">
              <X className="h-5 w-5 text-red-600 hover:text-red-800 transition-colors" />
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
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default NotificationPopup; 