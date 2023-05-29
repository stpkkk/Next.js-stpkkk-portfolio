"use client";
import React, { useEffect, useState } from "react";
import { Claw } from "@public/assets/icons/Claw";

type ModalProps = {
  isModal: boolean;
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Modal: React.FC<ModalProps> = ({ isModal, setIsModal }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isModal) {
      setIsVisible(true);
      const timeoutId = setTimeout(() => {
        setIsVisible(false);
        setIsModal(false);
      }, 5000); // Change the timeout to 5000 milliseconds (5 seconds)
      return () => clearTimeout(timeoutId);
    }
  }, [isModal, setIsModal]);

  return (
    <div className={`modal ${isVisible ? "modal-open" : "modal-close"}`}>
      {isVisible && (
        <div className="flex_center flex-col p-10 gap-8 max-w-[550px] w-full h-[550px] bg-[url(../public/assets/icons/bg-modal.svg)] rounded-lg sm:w-screen sm:p-2 sm:rounded-none sm:h-[300px]">
          <div className="absolute -top-[26.3em]">
            <Claw />
          </div>
          <div className="text-5xl leading-snug font-bree text-center text-white font-bold sm:text-2xl">
            Thank you.
            <br /> I will get back to you as soon as possible! 🫡
          </div>
        </div>
      )}
    </div>
  );
};
