import { useState, useEffect, useRef } from "react";
import Typed from "typed.js";
import Title from "../components/Title/Title";

const HomeView = () => {
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
    <div className=" min-h-[85vh]  flex flex-col justify-center items-center">
      <Title text="Hello!"/>
      <h1 className="poppins text-lg font-semibold h-[50px]" ref={greetings}></h1>
    </div>
  );
};

export default HomeView;
