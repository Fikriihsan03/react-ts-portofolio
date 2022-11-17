import Title from "../components/Title/Title";
import pdfLogo from "../assets/pink-download.png";
import pinkPanther from "../assets/pink-panther.png";
import resume from "../assets/muhammad_fikri_ihsan_CV.pdf";

const AboutView = () => {
  return (
    <div className="min-h-[90vh]">
      <Title text="About Me" />
      <div className="flex">
        <div className="w-[70%] poppins mt-[2rem]">
          <p className="text-2xl leading-loose">
            Hello, my name is Muhammad Fikri Ihsan from indonesia
            <br />
            I'm a 19 years old Full Stack developer. i enjoyed build a web using
            <span className="inline-block bg-[#cb3b8a] rounded-2xl px-4 mx-[2px] font-bold">
              Laravel + Vuejs
            </span>
            or
            <span className="inline-block bg-[#cb3b8a] rounded-2xl px-4 mx-[2px] font-bold ">
              Nodejs + Reactjs
            </span>
            . And i love to learn something new
          </p>
          <a href={resume} download="fikri-ihsan-CV">
            <button className="mt-[6rem] p-[10px]  flex justify-center items-center gap-4 text-xl pink-button">
              <img src={pdfLogo} width="40" height="10" alt="pdflogo" />
              Resume
            </button>
          </a>
        </div>
        <div className="w-[30%]">
          <img src={pinkPanther} alt="my"/>
        </div>
      </div>
    </div>
  );
};

export default AboutView;
