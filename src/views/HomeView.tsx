import { useState, useEffect, useRef } from "react";
import Typed from "typed.js";

const GreetingSection = () => {
  const greetings = useRef(null!)

  useEffect(() => {
    const typed = new Typed(greetings.current, {
      strings: ['Welcome to my portofolio website ^2000', "My name is Muhammad Fikri Ihsan ^1500",],
      startDelay: 300,
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 100,
      showCursor: false,
      loop: true,
    })
    return () => {
      typed.destroy();
    };
  }, [])
  return (
    <div className=" min-h-[90vh]  flex justify-center items-center">
      <h1 className="text-4xl font-semibold" ref={greetings}></h1>
    </div>
  );
};

export default GreetingSection;
