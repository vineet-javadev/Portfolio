"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Link, Element } from "react-scroll";
import "./globals.css";

export default function Home() {
  useEffect(() => {
    let flag = true;
    setInterval(() => {
      if (flag) {
        document.getElementById("role").innerHTML = "Backend";
        flag = false;
      } else {
        document.getElementById("role").innerHTML = "Full-Stack";
        flag = true;
      }
    }, 2000);
  }, []);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    document.getElementById("sendBtn").innerHTML = "Sending...";

    emailjs
      .sendForm("service_bed1irl", "template_srq5mm6", form.current, {
        publicKey: "VXyOnovGA_qVp2tDY",
      })
      .then(
        () => {
          setSuccessTost(true);
          document.getElementById("sendBtn").innerHTML = "Success...";
          setTimeout(() => {
            document.getElementById("sendBtn").innerHTML = "Send Message";
            setSuccessTost(false);
          }, 2000);
        },
        (error) => {
          setErrorTost(true);
          document.getElementById("sendBtn").innerHTML = "Failed...";
          setTimeout(() => {
            document.getElementById("sendBtn").innerHTML = "Send Message";
            setErrorTost(false);
          }, 2000);
        }
      );
  };

  const [successTost, setSuccessTost] = useState(false);
  const [errorTost, setErrorTost] = useState(false);

  return (
    <>
      {/* successTost */}
      {successTost && (
        <div
          id="toast-simple"
          className="flex fixed items-center right-3 top-2 z-50 max-w-xs p-4 space-x-4 rtl:space-x-reverse   divide-x rtl:divide-x-reverse  rounded-lg shadow text-gray-200 divide-gray-700 bg-gray-900  shadow-gray-100"
          role="alert"
        >
          <svg
            className="w-5 h-5 text-blue-500 rotate-45"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m9 17 8 2L9 1 1 19l8-2Zm0 0V9"
            />
          </svg>
          <div className="ps-4 text-sm font-normal">
            Message sent successfully.
          </div>
        </div>
      )}

      {/* Error */}
      {errorTost && (
        <div
          id="toast-simple"
          className="flex fixed items-center right-3 top-2 z-50 max-w-xs p-4 space-x-4 rtl:space-x-reverse  divide-x rtl:divide-x-reverse rounded-lg text-gray-200 divide-gray-700 bg-gray-900 shadow-sm shadow-gray-100"
          role="alert"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            color="#d0021b"
            fill="red"
          >
            <path
              d="M8.25 17.0001C8.67265 16.5774 9.16229 16.2441 9.6906 16.0001M15.75 17.0001C15.3274 16.5774 14.8377 16.2441 14.3094 16.0001"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.5 14.0001C17.4308 13.0692 16.2435 12.4026 15 12.0001M5.5 14.0001C6.59299 13.1038 7.778 12.4525 9 12.046"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 11C3.92227 9.3768 5.94206 8.1353 8 7.50015M22 10.9999C20.0778 9.37675 18.0579 8.13529 16 7.50015"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 20H12.0118"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.5864 4.32714C12.6577 3.89104 11.3422 3.89102 10.4136 4.32714C10.0852 4.48134 9.95517 4.84478 10.0135 5.19157L12 17.0001L13.9865 5.19159C14.0448 4.84479 13.9148 4.48134 13.5864 4.32714Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="ps-4 text-sm font-normal">
            Sorry, Mail unable to Forward..
          </div>
        </div>
      )}

      {/* background layout */}
      <div className="w-full min-h-screen bg-[url('https://assets.awwwards.com/awards/submissions/2022/08/62ed824664c3a873839057.png')] object-cover bg-bottom bg-no-repeat blur-md fixed top-0 z-[-2]"></div>

      {/* navigation Bar */}
      <nav
        name="home"
        className="w-full h-24 flex  items-center justify-center md:justify-between md:px-10 lg:px-20 bg-gradient-to-b from-black to-transparent"
      >
        <div>
          <span className="cursor-default text-4xl underline md:no-underline md:text-sky-300 drop-shadow-lg shadow-black">
            Portfolio
          </span>
        </div>
        <div>
          <ul className="hidden md:flex items-center justify-evenly md:gap-6 lg:gap-10">
            <Link to="home" smooth={true} duration={200} offset={-70}>
              <li className="cursor-pointer hover:drop-shadow hover:underline hover:text-sky-300 font-mono">
                Home
              </li>
            </Link>
            <Link to="projectSection" smooth={true} duration={200} offset={-70}>
              <li className="cursor-pointer hover:underline font-mono hover:text-sky-300">
                Projects
              </li>
            </Link>
            <Link to="skillsSection" smooth={true} duration={200} offset={-70}>
              <li className="cursor-pointer hover:underline font-mono hover:text-sky-300">
                Skills
              </li>
            </Link>
            <Link to="contactSection" smooth={true} duration={200} offset={-70}>
              <li className="cursor-pointer hover:underline font-mono hover:text-sky-300">
                Contact
              </li>
            </Link>
            <a
              href="https://drive.google.com/file/d/1SAZfPDfOL-oWEhLCwLBi6fctASoUhfQh/view?usp=drive_link"
              target="_blank"
            >
              <li className="rounded-lg bg-white text-black cursor-pointer px-4 py-2 font-bold hover:text-sky-900">
                RESUME
              </li>
            </a>
          </ul>
        </div>
      </nav>

      {/* Intro Section */}
      <Element className="container m-auto py-5 md:py-10 lg:py-28 flex justify-center">
        <div className=" w-full flex flex-col gap-3 justify-center items-center">
          <div className="text-4xl md:text-5xl lg:text-7xl font-bold cursor-default">
            Vineet k. Chauhan
          </div>
          <div className="text-sm md:text-md lg:text-xl  font-bold pl-4 cursor-default">
            Java{" "}
            <span
              className="text-sky-500 relative w-[max-content] font-mono underline before:absolute before:inset-0 before:animate-typewriter"
              id="role"
            >
              Full-Stack
            </span>{" "}
            Developer
          </div>
          <div className="md:hidden w-9/12 lg:w-11/12 pb-5 text-sm font-mono flex items-center  text-gray-400 cursor-default text-center pl-4">
            Java Full Stack Developer | Backend | Spring boot | MySQL | React Js
            | Next Js | Tailwind | DSA | Problem solving
          </div>
          <div className="hidden w-9/12 lg:w-11/12 pb-5 text-sm font-mono md:flex items-center  text-gray-400 cursor-default text-center pl-4">
            Full Stack Developer | Backend | Java Developer | Spring boot |
            Scalable APIs | JDBC | MySQL | JavaScript | React Js | Next Js |
            Tailwind | Bootstrap Data Structures and Algorithm ( DSA ) | Problem
            solving | Hunger to learn new Technology
          </div>
          <div className="flex gap-10">
            <Link to="aboutSection" smooth={true} duration={200} offset={-70}>
              <span className="flex gap-2 font-mono items-center cursor-pointer px-5 py-2 border-2 border-white rounded-md hover:bg-gray-800">
                <span className="text-xs md:text-sm">Contact </span>
                <svg
                  className="hover:scale-110 hover:animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  color="white"
                  fill="none"
                >
                  <path
                    d="M4.74038 14.3685L6.69351 12.9816C7.24445 12.5904 7.80305 12.3282 8.44034 12.1585C9.17201 11.9636 9.5 11.5644 9.5 10.711C9.5 8.54628 14.5 8.31594 14.5 10.711C14.5 11.5644 14.828 11.9636 15.5597 12.1585C16.202 12.3295 16.7599 12.5934 17.3065 12.9816L19.2596 14.3685C20.1434 14.9961 20.5547 15.2995 20.7842 15.7819C21 16.2358 21 16.768 21 17.8324C21 19.7461 21 20.703 20.4642 21.3164C19.8152 22.0593 18.128 21.9955 17.0917 21.9955H6.90833C5.87197 21.9955 4.21909 22.0986 3.5358 21.3164C3 20.703 3 19.7461 3 17.8324C3 16.768 3 16.2358 3.21584 15.7819C3.44526 15.2995 3.85662 14.9961 4.74038 14.3685Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M14 17C14 18.1046 13.1046 19 12 19C10.8954 19 10 18.1046 10 17C10 15.8954 10.8954 15 12 15C13.1046 15 14 15.8954 14 17Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M6.96014 3.69772C5.6417 4.07415 4.69384 4.54112 3.82645 5.10455C2.45318 5.9966 1.86443 7.60404 2.02607 9.15513C2.09439 9.81068 2.62064 10.1241 3.23089 9.95455C3.69451 9.82571 4.15888 9.7003 4.61961 9.56364C5.96706 9.16397 6.28399 8.67812 6.47124 7.29885L6.96014 3.69772ZM6.96014 3.69772C10.2186 2.76743 13.7814 2.76743 17.0399 3.69772M17.0399 3.69772C18.3583 4.07415 19.3062 4.54112 20.1735 5.10455C21.5468 5.9966 22.1356 7.60404 21.9739 9.15513C21.9056 9.81068 21.3794 10.1241 20.7691 9.95455C20.3055 9.82571 19.8411 9.7003 19.3804 9.56364C18.0329 9.16397 17.716 8.67812 17.5288 7.29885L17.0399 3.69772Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>
            <a href="https://github.com/vineet-javadev" target="_blank">
              <span className="flex gap-2 font-mono items-center cursor-pointer px-5 py-2 border-2 border-white rounded-md hover:bg-gray-800">
                <span className="text-xs md:text-sm">GitHub </span>
                <svg
                  className="hover:scale-110 hover:animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  color="white"
                  fill="none"
                >
                  <path
                    d="M6.51734 17.1132C6.91177 17.6905 8.10883 18.9228 9.74168 19.2333M9.86428 22C8.83582 21.8306 2 19.6057 2 12.0926C2 5.06329 8.0019 2 12.0008 2C15.9996 2 22 5.06329 22 12.0926C22 19.6057 15.1642 21.8306 14.1357 22C14.1357 22 13.9267 18.5826 14.0487 17.9969C14.1706 17.4113 13.7552 16.4688 13.7552 16.4688C14.7262 16.1055 16.2043 15.5847 16.7001 14.1874C17.0848 13.1032 17.3268 11.5288 16.2508 10.0489C16.2508 10.0489 16.5318 7.65809 15.9996 7.56548C15.4675 7.47287 13.8998 8.51192 13.8998 8.51192C13.4432 8.38248 12.4243 8.13476 12.0018 8.17939C11.5792 8.13476 10.5568 8.38248 10.1002 8.51192C10.1002 8.51192 8.53249 7.47287 8.00036 7.56548C7.46823 7.65809 7.74917 10.0489 7.74917 10.0489C6.67316 11.5288 6.91516 13.1032 7.2999 14.1874C7.79575 15.5847 9.27384 16.1055 10.2448 16.4688C10.2448 16.4688 9.82944 17.4113 9.95135 17.9969C10.0733 18.5826 9.86428 22 9.86428 22Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </Element>

      {/* Project section */}
      <Element
        name="projectSection"
        className="container mb-10 pb-5  backdrop-blur-2xl m-auto rounded-3xl shadow-lg shadow-black "
      >
        <div className=" w-3/4 m-auto flex items-center justify-center py-3 border-b-2 border-sky-800 ">
          <span className="text-2xl text-sky-300 font-bold font-mono">
            PROJECTS
          </span>
        </div>
        <div className="w-11/12 m-auto my-5 pb-10 lg:py-10 flex flex-col items-center gap-5 md:gap-0 md:flex-row lg:flex-wrap  lg:gap-8 justify-evenly">
          <div className="md:w-[30%] overflow-hidden shadow-lg hover:scale-105 md:hover:scale-110 duration-300 border-2 border-sky-600 shadow-black rounded-lg">
            <Image
              className="w-full aspect-video"
              src="https://i1.wp.com/theappentrepreneur.com/wp-content/uploads/2013/02/Blogging-Apps-For-Bloggers.jpg?fit=730%2C382&ssl=1"
              alt="Sunset in the mountains"
              width={600}
              height={400}
            />

            <div className="px-6 py-4 bg-gray-900">
              <div className="font-bold text-xl mb-2">Blog-WebApp</div>
              <p className="text-gray-200 font-thin md:text-sm lg:text-base  min-h-12">
                Full-Stack | Next Js | Java | Spring Boot | MySql
              </p>
            </div>
            <div className="px-6 pt-4 pb-2 bg-gray-900 flex items-center justify-between">
              <span>
                <a
                  title="FrontEnd"
                  href="https://github.com/vineet-javadev/myBlog-webApp-Frontend"
                  target="_blank"
                  className="cursor-pointer inline-block bg-gray-200 rounded-full p-1 text-sm md:text-xs lg:text-sm font-semibold text-gray-700 mr-2"
                >
                  {/* Frontend */}
                  <svg
                    className="hover:scale-110 hover:animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="22"
                    height="22"
                    color="blue"
                    fill="none"
                  >
                    <path
                      d="M8.00001 12C8.00001 6.47715 9.79087 2 12 2C14.2091 2 16 6.47715 16 12C16 17.5228 14.2091 22 12 22C9.79087 22 8.00001 17.5228 8.00001 12Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M9.97531 8.61921C14.8173 5.85779 19.649 5.17014 20.7673 7.08331C21.8855 8.99648 18.8667 12.786 14.0247 15.5474C9.18271 18.3088 4.35098 18.9965 3.23277 17.0833C2.11455 15.1701 5.13329 11.3806 9.97531 8.61921Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M14.0247 8.61921C18.8667 11.3806 21.8855 15.1701 20.7673 17.0833C19.649 18.9965 14.8173 18.3088 9.97531 15.5474C5.13329 12.786 2.11455 8.99648 3.23277 7.08331C4.35098 5.17014 9.18271 5.85779 14.0247 8.61921Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M13.5 12C13.5 12.8284 12.8284 13.5 12 13.5C11.1716 13.5 10.5 12.8284 10.5 12C10.5 11.1716 11.1716 10.5 12 10.5C12.8284 10.5 13.5 11.1716 13.5 12Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                </a>
                <a
                  title="BackEnd"
                  href="https://github.com/vineet-javadev/myBlog-webApp-Backend"
                  target="_blank"
                  className="cursor-pointer inline-block bg-gray-200 rounded-full p-1 text-sm md:text-xs lg:text-sm font-semibold text-gray-700 mr-2"
                >
                  {/* Backend */}
                  <svg
                    className="hover:scale-110 hover:animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="22"
                    height="22"
                    color="#d0021b"
                    fill="none"
                  >
                    <path
                      d="M6.17481 10.3333C4.96738 10.7408 4.22049 11.304 4.22049 11.9261C4.22049 12.7743 5.60897 13.513 7.6601 13.897M7.6601 13.897C6.89833 14.2824 6.44271 14.7715 6.44271 15.3038C6.44271 16.5474 8.93001 17.5556 11.9983 17.5556C12.7884 17.5556 13.54 17.4887 14.2205 17.3682M7.6601 13.897C8.61629 14.076 9.71648 14.1779 10.8872 14.1779C12.5946 14.1779 14.1521 13.9611 15.3316 13.6045M16.4427 10.1243C15.031 10.5414 13.0635 10.8002 10.8872 10.8002C6.5916 10.8002 3.10938 9.79203 3.10938 8.5484C3.10938 7.5881 5.18563 6.76821 8.10937 6.44446"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22 19.0699C22 20.6882 17.5228 22 12 22C6.47715 22 2 20.6882 2 19.0699C2 17.9195 3.70729 16.9239 7 16.4444"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M18.7591 8.78799C22.9744 7.69436 23.5765 14.2562 17.5547 16.4438"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17.5582 2C16.8173 2.12346 15.4246 2.81481 15.7802 4.59259C16.1358 6.37037 15.6322 7.30864 15.3359 7.55556"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13.1128 2C12.372 2.14815 10.9793 2.97778 11.3349 5.11111C11.6905 7.24444 11.1869 7.81482 10.8906 8.11111"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </span>
              <a
                title="Preview not available"
                href="#"
                target="_blank"
                className="cursor-pointer inline-block bg-gray-200 rounded-full p-1 text-sm md:text-xs lg:text-sm font-semibold text-gray-700 "
              >
                <svg
                  className="hover:scale-110 hover:animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="22"
                  height="22"
                  color="#0261d3"
                  fill="none"
                >
                  <path
                    d="M21.544 11.045C21.848 11.4713 22 11.6845 22 12C22 12.3155 21.848 12.5287 21.544 12.955C20.1779 14.8706 16.6892 19 12 19C7.31078 19 3.8221 14.8706 2.45604 12.955C2.15201 12.5287 2 12.3155 2 12C2 11.6845 2.15201 11.4713 2.45604 11.045C3.8221 9.12944 7.31078 5 12 5C16.6892 5 20.1779 9.12944 21.544 11.045Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </a>
              {/* <span className="cursor-pointer inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Visit
              </span> */}
            </div>
          </div>

          <div className="md:w-[30%] overflow-hidden shadow-lg hover:scale-105 md:hover:scale-110 duration-300 border-2 border-sky-600 shadow-black rounded-lg">
            <Image
              className="w-full aspect-video"
              src="https://stake-casino-bonus.com/wp-content/uploads/2022/06/mystake-chicken-game-alternative-mines-stake.com-casino-2022-tutorial-how-to-win.png"
              alt="Sunset in the mountains"
              width={600}
              height={400}
            />

            <div className="px-6 py-4 bg-gray-900">
              <div className="font-bold text-xl mb-2">Mine Game</div>
              <p className="text-gray-200 font-thin md:text-sm lg:text-base min-h-12">
                Java | Swing | JDBC | MySql
              </p>
            </div>
            <div className="px-6 pt-4 pb-2 bg-gray-900 flex items-center justify-between">
              <a
                title="GitHub"
                href={"https://github.com/vineet-javadev/Mine-Game"}
                target="_blank"
                className="cursor-pointer inline-block text-sm md:text-xs lg:text-sm bg-gray-200 rounded-full p-1 font-semibold text-gray-700 mr-2"
              >
                {/* GitHub */}
                <svg
                  className="hover:scale-110 hover:animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="22"
                  height="22"
                  color="black"
                  fill="none"
                >
                  <path
                    d="M6.51734 17.1132C6.91177 17.6905 8.10883 18.9228 9.74168 19.2333M9.86428 22C8.83582 21.8306 2 19.6057 2 12.0926C2 5.06329 8.0019 2 12.0008 2C15.9996 2 22 5.06329 22 12.0926C22 19.6057 15.1642 21.8306 14.1357 22C14.1357 22 13.9267 18.5826 14.0487 17.9969C14.1706 17.4113 13.7552 16.4688 13.7552 16.4688C14.7262 16.1055 16.2043 15.5847 16.7001 14.1874C17.0848 13.1032 17.3268 11.5288 16.2508 10.0489C16.2508 10.0489 16.5318 7.65809 15.9996 7.56548C15.4675 7.47287 13.8998 8.51192 13.8998 8.51192C13.4432 8.38248 12.4243 8.13476 12.0018 8.17939C11.5792 8.13476 10.5568 8.38248 10.1002 8.51192C10.1002 8.51192 8.53249 7.47287 8.00036 7.56548C7.46823 7.65809 7.74917 10.0489 7.74917 10.0489C6.67316 11.5288 6.91516 13.1032 7.2999 14.1874C7.79575 15.5847 9.27384 16.1055 10.2448 16.4688C10.2448 16.4688 9.82944 17.4113 9.95135 17.9969C10.0733 18.5826 9.86428 22 9.86428 22Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                download="Vineet's CV.pdf"
                title="Download Zip"
                href={
                  "https://drive.google.com/uc?export=download&id=1SAZfPDfOL-oWEhLCwLBi6fctASoUhfQh"
                  // https://drive.google.com/uc?export=download&id=1A2B3C4D5EF6GHIJKL
                }
                target="_blank"
              >
                <span className="cursor-pointer inline-block text-sm md:text-xs lg:text-sm bg-gray-200 rounded-full p-1  font-semibold text-gray-700 ">
                  {/* Installation File */}
                  <svg
                    className="hover:scale-110 hover:animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="22"
                    height="22"
                    color="#d0021b"
                    fill="none"
                  >
                    <path
                      d="M7 13H9.87684C10.1285 13 10.2684 13.291 10.1112 13.4874L7.14993 17.1877C6.88793 17.515 7.1211 18 7.54051 18H10.5013M13.0021 13H14.2526M14.2526 13H15.503M14.2526 13V17.8096M13.0021 18H15.503M18.0039 18V13H19.4687C20.1185 13 20.818 13.2888 20.963 13.9219C21.0123 14.1368 21.0124 14.3459 20.963 14.563C20.8173 15.2035 20.1126 15.5 19.4555 15.5H19.0043"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15 22H10.7273C7.46607 22 5.83546 22 4.70307 21.2022C4.37862 20.9736 4.09058 20.7025 3.8477 20.3971C3 19.3313 3 17.7966 3 14.7273V12.1818C3 9.21865 3 7.73706 3.46894 6.55375C4.22281 4.65142 5.81714 3.15088 7.83836 2.44135C9.09563 2 10.6698 2 13.8182 2C15.6173 2 16.5168 2 17.2352 2.2522C18.3902 2.65765 19.3012 3.5151 19.732 4.60214C20 5.27832 20 6.12494 20 7.81818V10"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3 12C3 10.1591 4.49238 8.66667 6.33333 8.66667C6.99912 8.66667 7.78404 8.78333 8.43137 8.60988C9.00652 8.45576 9.45576 8.00652 9.60988 7.43136C9.78333 6.78404 9.66667 5.99912 9.66667 5.33333C9.66667 3.49238 11.1591 2 13 2"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </div>

          <div className="md:w-[30%] overflow-hidden shadow-lg hover:scale-105 md:hover:scale-110 duration-300 border-2 border-sky-600 shadow-black rounded-lg">
            <Image
              className="w-full aspect-video"
              src="https://savedelete.com/wp-content/uploads/2017/03/Chat-Rooms.jpg"
              alt="Sunset in the mountains"
              width={600}
              height={400}
            />

            <div className="px-6 py-4 bg-gray-900">
              <div className="font-bold text-xl mb-2">Global ChatRoom</div>
              <p className="text-gray-200 md:text-sm lg:text-base font-thin min-h-12">
                Next Js | Spring Boot | Web Socket
              </p>
            </div>
            <div className="px-6 pt-4 pb-2 bg-gray-900 flex items-center justify-between">
              <span>
                <a
                  title="FrontEnd"
                  href="https://github.com/vineet-javadev/Frontend-global-chatroom"
                  target="_blank"
                  className="cursor-pointer inline-block bg-gray-200 rounded-full p-1 text-sm md:text-xs lg:text-sm font-semibold text-gray-700 mr-2"
                >
                  {/* Frontend */}
                  <svg
                    className="hover:scale-110 hover:animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="22"
                    height="22"
                    color="blue"
                    fill="none"
                  >
                    <path
                      d="M8.00001 12C8.00001 6.47715 9.79087 2 12 2C14.2091 2 16 6.47715 16 12C16 17.5228 14.2091 22 12 22C9.79087 22 8.00001 17.5228 8.00001 12Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M9.97531 8.61921C14.8173 5.85779 19.649 5.17014 20.7673 7.08331C21.8855 8.99648 18.8667 12.786 14.0247 15.5474C9.18271 18.3088 4.35098 18.9965 3.23277 17.0833C2.11455 15.1701 5.13329 11.3806 9.97531 8.61921Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M14.0247 8.61921C18.8667 11.3806 21.8855 15.1701 20.7673 17.0833C19.649 18.9965 14.8173 18.3088 9.97531 15.5474C5.13329 12.786 2.11455 8.99648 3.23277 7.08331C4.35098 5.17014 9.18271 5.85779 14.0247 8.61921Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M13.5 12C13.5 12.8284 12.8284 13.5 12 13.5C11.1716 13.5 10.5 12.8284 10.5 12C10.5 11.1716 11.1716 10.5 12 10.5C12.8284 10.5 13.5 11.1716 13.5 12Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                </a>
                <a
                  title="BackEnd"
                  href="https://github.com/vineet-javadev/Backend-Global-chatroom-webApp"
                  target="_blank"
                  className="cursor-pointer inline-block bg-gray-200 rounded-full p-1 text-sm md:text-xs lg:text-sm font-semibold text-gray-700 mr-2"
                >
                  {/* Backend */}
                  <svg
                    className="hover:scale-110 hover:animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="22"
                    height="22"
                    color="#d0021b"
                    fill="none"
                  >
                    <path
                      d="M6.17481 10.3333C4.96738 10.7408 4.22049 11.304 4.22049 11.9261C4.22049 12.7743 5.60897 13.513 7.6601 13.897M7.6601 13.897C6.89833 14.2824 6.44271 14.7715 6.44271 15.3038C6.44271 16.5474 8.93001 17.5556 11.9983 17.5556C12.7884 17.5556 13.54 17.4887 14.2205 17.3682M7.6601 13.897C8.61629 14.076 9.71648 14.1779 10.8872 14.1779C12.5946 14.1779 14.1521 13.9611 15.3316 13.6045M16.4427 10.1243C15.031 10.5414 13.0635 10.8002 10.8872 10.8002C6.5916 10.8002 3.10938 9.79203 3.10938 8.5484C3.10938 7.5881 5.18563 6.76821 8.10937 6.44446"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22 19.0699C22 20.6882 17.5228 22 12 22C6.47715 22 2 20.6882 2 19.0699C2 17.9195 3.70729 16.9239 7 16.4444"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M18.7591 8.78799C22.9744 7.69436 23.5765 14.2562 17.5547 16.4438"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17.5582 2C16.8173 2.12346 15.4246 2.81481 15.7802 4.59259C16.1358 6.37037 15.6322 7.30864 15.3359 7.55556"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13.1128 2C12.372 2.14815 10.9793 2.97778 11.3349 5.11111C11.6905 7.24444 11.1869 7.81482 10.8906 8.11111"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </span>
              <a
                title="Live Preview"
                href="https://frontend-global-chatroom.vercel.app/"
                target="_blank"
                className="cursor-pointer inline-block bg-gray-200 rounded-full p-1 text-sm md:text-xs lg:text-sm font-semibold text-gray-700 "
              >
                <svg
                  className="hover:scale-110 hover:animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="22"
                  height="22"
                  color="#0261d3"
                  fill="none"
                >
                  <path
                    d="M21.544 11.045C21.848 11.4713 22 11.6845 22 12C22 12.3155 21.848 12.5287 21.544 12.955C20.1779 14.8706 16.6892 19 12 19C7.31078 19 3.8221 14.8706 2.45604 12.955C2.15201 12.5287 2 12.3155 2 12C2 11.6845 2.15201 11.4713 2.45604 11.045C3.8221 9.12944 7.31078 5 12 5C16.6892 5 20.1779 9.12944 21.544 11.045Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </a>
              {/* <span className="cursor-pointer inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Visit
              </span> */}
            </div>
          </div>
        </div>
      </Element>

      {/* Skills section */}
      <Element
        name="skillsSection"
        className="container mb-10 pb-5 backdrop-blur-2xl m-auto rounded-3xl shadow-lg shadow-black "
      >
        <div className=" w-3/4 m-auto flex items-center justify-center py-3 border-b-2 border-sky-800 ">
          <span className="text-2xl text-sky-300 font-bold font-mono">
            PROGRAMMING SKILLS
          </span>
        </div>
        <div className="w-11/12 m-auto my-5 pb-8 lg:py-10 flex flex-wrap items-start gap-0.5 gap-y-5  justify-evenly">
          {/* java skills */}
          <div className="w-1/6 overflow-hidden shadow-lg hover:scale-110 duration-300 border-2 border-sky-600 shadow-black rounded-lg">
            <Image
              className="w-full aspect-square object-cover  box-border"
              src={
                "https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-java-software-develop-command-language-512.png"
              }
              alt="Sunset in the mountains"
              width={500}
              height={300}
            />
            <div className="hidden md:flex justify-center lg:font-bold text-sm lg:text-md pb-2 text-center">
              JAVA
            </div>
          </div>

          <div className="w-1/6 overflow-hidden shadow-lg hover:scale-110 duration-300 border-2 border-sky-600 shadow-black rounded-lg">
            <div className="m-3 md:m-4">
              <Image
                className="w-full aspect-square object-cover p-1 md:p-3 box-border bg-white rounded-full"
                src="https://dwglogo.com/wp-content/uploads/2017/12/Spring_Framework_logo_01.png"
                alt="Sunset in the mountains"
                width={500}
                height={300}
              />
            </div>
            <div className="hidden md:flex justify-center lg:font-bold text-sm lg:text-md pb-2 text-center">
              Spring Boot
            </div>
          </div>

          <div className="w-1/6 overflow-hidden shadow-lg hover:scale-110 duration-300 border-2 border-sky-600 shadow-black rounded-lg">
            <Image
              className="w-full aspect-square object-cover p-3 box-border rounded-full "
              src="https://th.bing.com/th/id/OIP.Pmm3NBJQAPOihOTn5tr19wHaEK?w=1280&h=720&rs=1&pid=ImgDetMain"
              alt="Sunset in the mountains"
              width={500}
              height={300}
            />
            <div className="hidden md:flex justify-center lg:font-bold text-sm lg:text-md pb-2 text-center">
              Java Swing
            </div>
          </div>

          <div className="w-1/6 overflow-hidden shadow-lg hover:scale-110 duration-300 border-2 border-sky-600 shadow-black rounded-lg">
            <Image
              className="w-full aspect-square object-cover p-3 box-border "
              src="https://pngimg.com/uploads/mysql/mysql_PNG4.png"
              alt="Sunset in the mountains"
              width={500}
              height={300}
            />
            <div className="hidden md:flex justify-center lg:font-bold text-sm lg:text-md pb-2 text-center">
              MySql
            </div>
          </div>

          <div className="w-1/6 overflow-hidden shadow-lg hover:scale-110 duration-300 border-2 border-sky-600 shadow-black rounded-lg">
            <Image
              className="w-full aspect-square object-cover p-3 box-border "
              src="https://www.pngkit.com/png/full/101-1010012_download-png.png"
              alt="Sunset in the mountains"
              width={500}
              height={300}
            />
            <div className="hidden md:flex justify-center lg:font-bold text-sm lg:text-md pb-2 text-center">
              C
            </div>
          </div>

          {/* Front End skills */}
          <div className="w-1/6 overflow-hidden shadow-lg hover:scale-110 duration-300 border-2 border-sky-600 shadow-black rounded-lg">
            <Image
              className="w-full aspect-square object-cover p-3 box-border"
              src={
                "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png"
              }
              alt="Sunset in the mountains"
              width={500}
              height={300}
            />
            <div className="hidden md:flex justify-center lg:font-bold text-sm lg:text-md pb-2 text-center">
              HTML
            </div>
          </div>

          <div className="w-1/6 overflow-hidden shadow-lg hover:scale-110 duration-300 border-2 border-sky-600 shadow-black rounded-lg">
            <div className="m-3 md:m-4">
              <Image
                className="w-full aspect-square object-cover p-1 md:p-3 box-border bg-white rounded-full"
                src="https://icon-library.com/images/css3-icon/css3-icon-28.jpg"
                alt="Sunset in the mountains"
                width={500}
                height={300}
              />
            </div>
            <div className="hidden md:flex justify-center lg:font-bold text-sm lg:text-md pb-2 text-center">
              CSS
            </div>
          </div>

          <div className="w-1/6 overflow-hidden shadow-lg hover:scale-110 duration-300 border-2 border-sky-600 shadow-black rounded-lg">
            <Image
              className="w-full aspect-square object-cover p-3 box-border rounded-full "
              src="https://th.bing.com/th/id/R.b4cc9b6dc76bcc06f3d83656720ebde7?rik=005Zzc3fI4jWEw&riu=http%3a%2f%2fpluspng.com%2fimg-png%2flogo-javascript-png-js-logo-png-512.png&ehk=buIL9ARDqRF2NH%2fhTDw3bko77gSWRCCGP8eY%2fUO4eKc%3d&risl=&pid=ImgRaw&r=0"
              alt="Sunset in the mountains"
              width={500}
              height={300}
            />
            <div className="hidden md:flex justify-center lg:font-bold text-sm lg:text-md pb-2 text-center">
              JavaScript
            </div>
          </div>

          <div className="w-1/6 overflow-hidden shadow-lg hover:scale-110 duration-300 border-2 border-sky-600 shadow-black rounded-lg">
            <div className="lg:m-4">
              <Image
                className="w-full aspect-square object-cover p-3 box-border "
                src="https://miro.medium.com/v2/resize:fit:500/1*_bq2g7Lo2RjWi98i5l75Wg.png"
                alt="Sunset in the mountains"
                width={500}
                height={300}
              />
            </div>
            <div className="hidden md:flex justify-center lg:font-bold text-sm lg:text-md pb-2 text-center">
              React Js
            </div>
          </div>

          <div className="w-1/6 overflow-hidden shadow-lg hover:scale-110 duration-300 border-2 border-sky-600 shadow-black rounded-lg">
            <div className="m-4">
              <Image
                className="w-full aspect-square object-cover box-border rounded-full"
                src="https://th.bing.com/th/id/OIP.d-cssZMmcDWJU_yKxt9abQHaFQ?rs=1&pid=ImgDetMain"
                alt="Sunset in the mountains"
                width={500}
                height={300}
              />
            </div>
            <div className="hidden md:flex justify-center lg:font-bold text-sm lg:text-md pb-2 text-center">
              Next Js
            </div>
          </div>

          {/* Extra skills */}
          <div className="w-1/6 overflow-hidden shadow-lg hover:scale-110 duration-300 border-2 border-sky-600 shadow-black rounded-lg">
            <Image
              className="w-full aspect-square object-cover p-3 box-border"
              src={
                "https://www.pngrepo.com/png/354431/512/tailwindcss-icon.png"
              }
              alt="Sunset in the mountains"
              width={500}
              height={300}
            />
            <div className="hidden md:flex justify-center lg:font-bold text-sm lg:text-md pb-2 text-center">
              Tailwind CSS
            </div>
          </div>

          <div className="w-1/6 overflow-hidden shadow-lg hover:scale-110 duration-300 border-2 border-sky-600 shadow-black rounded-lg">
            <div className="m-3 md:m-4">
              <Image
                className="w-full aspect-square object-cover p-1 md:p-3 box-border bg-white rounded-full"
                src="https://th.bing.com/th/id/OIP.IqehWlKgsVTNXTNXPZnu8QHaG2?rs=1&pid=ImgDetMain"
                alt="Sunset in the mountains"
                width={500}
                height={300}
              />
            </div>
            <div className="hidden md:flex justify-center lg:font-bold text-sm lg:text-md pb-2 text-center">
              Bootstrap CSS
            </div>
          </div>

          <div className="w-1/6 overflow-hidden shadow-lg hover:scale-110 duration-300 border-2 border-sky-600 shadow-black rounded-lg">
            <Image
              className="w-full aspect-square object-cover p-3 box-border rounded-full invert"
              src="https://pngimg.com/uploads/github/github_PNG68.png"
              alt="Sunset in the mountains"
              width={500}
              height={300}
            />
            <div className="hidden md:flex justify-center lg:font-bold text-sm lg:text-md pb-2 text-center">
              GitHub
            </div>
          </div>

          <div className="w-1/6 overflow-hidden shadow-lg hover:scale-110 duration-300 border-2 border-sky-600 shadow-black rounded-lg">
            <div className="lg:m-4">
              <Image
                className="w-full aspect-square object-cover p-3 box-border rounded-full "
                src="https://th.bing.com/th/id/OIP.lGXbDhpDGpF5uWduBkp3PwHaEh?rs=1&pid=ImgDetMain"
                alt="Sunset in the mountains"
                width={500}
                height={300}
              />
            </div>
            <div className="hidden md:flex justify-center lg:font-bold text-sm lg:text-md pb-2 text-center">
              Postman
            </div>
          </div>

          <div className="w-1/6 overflow-hidden shadow-lg hover:scale-110 duration-300 border-2 border-sky-600 shadow-black rounded-lg">
            <div className="m-1 lg:m-4">
              <Image
                className="w-full aspect-square object-cover box-border rounded-full"
                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/217d5ea0-623d-40b1-9b31-027b904a5f15/ddjrgww-846ce429-3b0d-4ad8-bf6d-ac52dfe48201.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzIxN2Q1ZWEwLTYyM2QtNDBiMS05YjMxLTAyN2I5MDRhNWYxNVwvZGRqcmd3dy04NDZjZTQyOS0zYjBkLTRhZDgtYmY2ZC1hYzUyZGZlNDgyMDEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.G0SE64OMLNEGI8vXb21JRl13RMfER1VP8Kh2Ig3oJaQ"
                alt="Sunset in the mountains"
                width={500}
                height={300}
              />
            </div>
            <div className="hidden md:flex justify-center lg:font-bold text-sm lg:text-md pb-2 text-center">
              Vs Code
            </div>
          </div>
        </div>
      </Element>

      {/* About section */}
      <Element
        name="contactSection"
        className="container md:mb-5 lg:mb-10 lg:pb-5 backdrop-blur-2xl m-auto rounded-3xl shadow-lg shadow-black scroll-smooth "
      >
        <div className=" w-3/4 m-auto flex items-center justify-center py-3 border-b-2 border-sky-800 ">
          <span className="text-2xl text-sky-300 font-bold font-mono">
            CONTACT ME
          </span>
        </div>

        {/* Social links */}
        <div className="flex md:hidden justify-evenly  pt-2">
          <ul className="flex gap-8">
            <li className="mt-4">
              <a
                href="https://github.com/vineet-javadev"
                aria-label="GITHUB"
                target="_blank"
                rel="noopener"
                className="w-min flex items-center  bg-white px-1 py-1 rounded-md text-black transition hover:scale-125 hover:no-underline"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512.08 512.08"
                  width="20"
                  height="20"
                >
                  <path
                    d="M255.942 5.361C113.905 6.046-.683 121.746.003 263.783c.531 109.928 70.871 207.365 175.043 242.473 12.8 2.368 17.44-5.568 17.44-12.384 0-6.112-.192-22.4-.352-43.712-71.2 15.52-86.24-34.464-86.24-34.464a67.906 67.906 0 00-28.384-37.6c-23.264-16 1.76-15.616 1.76-15.616a53.858 53.858 0 0139.2 26.496c14.379 26.38 47.421 36.109 73.801 21.73.233-.127.464-.255.695-.386a54.848 54.848 0 0116.256-34.368c-56.832-6.496-116.48-28.512-116.48-127.008a99.488 99.488 0 0126.24-68.96 92.802 92.802 0 012.56-68.032s21.504-6.912 70.4 26.336a242.167 242.167 0 01128.224 0c48.864-33.248 70.4-26.336 70.4-26.336a92.802 92.802 0 012.56 68.032 99.422 99.422 0 0126.016 68.96c0 98.72-59.84 120.448-116.864 126.816a61.503 61.503 0 0117.376 47.616c0 34.336-.32 62.048-.32 70.4 0 6.88 4.608 14.88 17.6 12.352 134.53-45.57 206.647-191.57 161.076-326.101C462.822 76.144 365.622 6.009 255.942 5.361z"
                    fill="#5c6bc0"
                  ></path>
                  <path d="M184.262 506.705a40.434 40.434 0 01-7.072-.672C42.868 462.36-30.617 318.066 13.056 183.744S201.022-24.063 335.344 19.61s207.808 187.966 164.135 322.288c-25.09 77.168-85.313 137.851-162.288 163.527a31.359 31.359 0 01-27.712-4.96 28 28 0 01-9.888-21.76v-13.472c0-12.384.224-31.072.224-52.544a41.249 41.249 0 00-10.752-32.448c-6.697-5.765-7.453-15.867-1.688-22.564a16.001 16.001 0 0110.392-5.468c49.504-5.504 95.328-21.76 95.328-102.816a77.186 77.186 0 00-20.48-53.76 16 16 0 01-3.008-16.832 67.937 67.937 0 00.896-41.6 131.391 131.391 0 00-45.408 21.888 15.617 15.617 0 01-13.28 2.176 214.393 214.393 0 00-55.872-7.552 211.21 211.21 0 00-55.712 7.52 15.682 15.682 0 01-13.344-2.272 127.24 127.24 0 00-45.504-21.76 68.096 68.096 0 00.96 41.6 16 16 0 01-3.008 16.8 77.504 77.504 0 00-20.512 53.792c0 81.024 45.728 97.376 95.136 103.04 8.778 1.014 15.072 8.952 14.058 17.73a16.002 16.002 0 01-5.322 10.174 35.2 35.2 0 00-9.952 22.4 16 16 0 01-9.28 12.352 73.984 73.984 0 01-57.44 3.2 64 64 0 0046.688 3.808 16.224 16.224 0 0113.408 3.2c3.77 3.01 5.98 7.56 6.016 12.384l.352 41.024c.306 15.16-11.735 27.699-26.895 28.005-.444.009-.887.007-1.33-.005zm71.68-469.344c-124.1.37-224.403 101.273-224.033 225.373.282 94.478 59.632 178.689 148.513 210.723v-17.216c-34.359 5.788-68.015-13.527-80.352-46.112a49.407 49.407 0 00-18.528-25.6c-6.816-4.48-21.984-14.88-17.184-30.016 3.2-9.6 11.52-14.688 26.272-14.88a67.199 67.199 0 0150.592 33.088c7.461 15.614 25.846 22.648 41.824 16a84.051 84.051 0 012.624-8.32c-39.456-8.416-98.72-34.592-98.72-131.008a108.48 108.48 0 0122.656-68.032 107.617 107.617 0 015.536-66.048 16.001 16.001 0 019.984-9.376c6.176-2.016 29.216-5.952 73.6 22.592a243.688 243.688 0 01114.464 0c44.512-28.544 67.488-24.512 73.6-22.592a15.998 15.998 0 019.952 9.344 107.394 107.394 0 015.44 65.984 108.32 108.32 0 0122.752 68.128c0 96.416-59.296 122.496-98.816 130.848a92.123 92.123 0 015.536 32.448c0 21.568 0 40.32-.224 52.768v7.872c116.714-42.072 177.223-170.794 135.151-287.507C434.555 96.977 350.382 37.651 255.942 37.361z"></path>
                </svg>
              </a>
            </li>
            <li className="mt-4">
              <a
                href="/"
                aria-label="INSTAGRAM"
                // target="_blank"
                rel="noopener"
                className="w-min flex items-center bg-white px-1 py-1 rounded-md text-black transition hover:scale-125 hover:no-underline"
              >
                <svg
                  height="20"
                  viewBox="0 0 24 24"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <linearGradient
                    id="instagram_svg__a"
                    gradientTransform="matrix(0 -1.982 -1.844 0 -2.292 23.869)"
                    gradientUnits="userSpaceOnUse"
                    x1="0.947"
                    x2="11.036"
                    y1="-2.332"
                    y2="-13.176"
                  >
                    <stop offset="0" stopColor="#fd5"></stop>
                    <stop offset="0.5" stopColor="#ff543e"></stop>
                    <stop offset="1" stopColor="#c837ab"></stop>
                  </linearGradient>
                  <path
                    d="M12.004.5c-6.055 0-7.213-.158-8.727.597C1.883 1.791.882 3.104.628 4.863.55 5.4.528 5.51.523 8.258c-.02 10.161-.154 10.92.576 12.434a4.838 4.838 0 003.134 2.566c1.093.282 1.82.242 7.747.242 4.968 0 6.513.089 7.802-.244a4.811 4.811 0 003.134-2.571c.736-1.522.563-2.598.563-8.692 0-5.836.197-7.135-.575-8.709a4.567 4.567 0 00-.982-1.349C20.194.281 18.136.505 15.741.5h-3.737z"
                    fill="url(#instagram_svg__a)"
                  ></path>
                  <path
                    d="M12 17.537c-3.053 0-5.537-2.484-5.537-5.537S8.947 6.463 12 6.463 17.537 8.947 17.537 12 15.053 17.537 12 17.537zM18.359 6.514a.874.874 0 11.002-1.748.874.874 0 01-.002 1.748z"
                    fill="#fff"
                  ></path>
                  <circle cx="12" cy="12" fill="none" r="3.5"></circle>
                  <path d="M4.75 24h14.5A4.756 4.756 0 0024 19.25V4.75A4.756 4.756 0 0019.25 0H4.75A4.756 4.756 0 000 4.75v14.5A4.756 4.756 0 004.75 24zM1.5 4.75A3.254 3.254 0 014.75 1.5h14.5a3.254 3.254 0 013.25 3.25v14.5a3.254 3.254 0 01-3.25 3.25H4.75a3.254 3.254 0 01-3.25-3.25z"></path>
                  <path d="M12 18.13c3.38 0 6.13-2.75 6.13-6.13S15.38 5.87 12 5.87 5.87 8.62 5.87 12s2.75 6.13 6.13 6.13zm0-10.76c2.553 0 4.63 2.077 4.63 4.63s-2.077 4.63-4.63 4.63S7.37 14.553 7.37 12 9.447 7.37 12 7.37zM18.358 7.362c.986 0 1.729-.74 1.729-1.721 0-1.023-.782-1.721-1.728-1.721-.986 0-1.729.74-1.729 1.721 0 1.021.778 1.721 1.728 1.721zm.177-1.886c.316.279-.405.618-.405.166 0-.27.367-.2.405-.166z"></path>
                </svg>
              </a>
            </li>
            <li className="mt-4">
              <a
                href="https://www.linkedin.com/in/vineet-javadev/"
                aria-label="LINKEDIN"
                target="_blank"
                rel="noopener"
                className="w-min flex items-center  bg-white px-1 py-1 rounded-md text-black transition hover:scale-125 hover:no-underline"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  width="20"
                  height="20"
                >
                  <path
                    d="M469.779 503.983H42.221c-18.891 0-34.205-15.314-34.205-34.205V42.221c0-18.891 15.314-34.205 34.205-34.205h427.557c18.891 0 34.205 15.314 34.205 34.205v427.557c0 18.891-15.314 34.205-34.204 34.205z"
                    fill="#3cafe6"
                  ></path>
                  <path
                    d="M42.221 452.676V8.017c-18.891 0-34.205 15.314-34.205 34.205v427.557c0 18.891 15.314 34.205 34.205 34.205h427.557c18.891 0 34.205-15.314 34.205-34.205H59.324c-9.446 0-17.103-7.657-17.103-17.103z"
                    fill="#1c9ad6"
                  ></path>
                  <path
                    fill="#fff"
                    d="M84.977 196.142h68.409v230.881H84.977z"
                  ></path>
                  <path
                    fill="#e5e5e5"
                    d="M84.977 196.142h25.653v230.881H84.977z"
                  ></path>
                  <path
                    d="M350.063 196.142c-17.102 0-58.076 2.494-76.96 42.756v-42.756h-68.409v230.881h68.409V315.858c0-25.653 21.644-42.756 42.756-42.756 23.613 0 42.756 17.102 42.756 42.756V427.023h68.409V264.551c-.001-37.781-38.837-68.409-76.961-68.409z"
                    fill="#fff"
                  ></path>
                  <g fill="#e5e5e5">
                    <path d="M204.693 196.142h25.653v230.881h-25.653zM384.267 315.858c0-25.653-19.143-42.756-42.756-42.756-4.154 0-8.326.671-12.351 1.93 17.098 5.139 29.453 20.219 29.453 40.825V427.022h25.653V315.858z"></path>
                  </g>
                  <circle
                    cx="119.182"
                    cy="119.182"
                    r="34.205"
                    fill="#fff"
                  ></circle>
                  <path
                    d="M136.284 136.284c-18.891 0-34.205-15.314-34.205-34.205a34.07 34.07 0 013.03-14.072c-11.869 5.367-20.133 17.301-20.133 31.174 0 18.891 15.314 34.205 34.205 34.205 13.873 0 25.807-8.264 31.174-20.133a34.046 34.046 0 01-14.071 3.031z"
                    fill="#e5e5e5"
                  ></path>
                  <path d="M503.983 92.994A8.017 8.017 0 00512 84.977V42.221C512 18.941 493.059 0 469.779 0H42.221C18.941 0 0 18.941 0 42.221v427.557C0 493.059 18.941 512 42.221 512h427.557c23.28 0 42.221-18.941 42.221-42.221V119.182c0-4.427-3.588-8.017-8.017-8.017s-8.017 3.589-8.017 8.017v350.597c0 14.44-11.747 26.188-26.188 26.188H42.221c-14.44 0-26.188-11.748-26.188-26.188V42.221c0-14.44 11.748-26.188 26.188-26.188h427.557c14.441 0 26.188 11.748 26.188 26.188v42.756a8.017 8.017 0 008.017 8.017z"></path>
                  <path d="M153.386 238.898a8.017 8.017 0 008.017-8.017v-34.739a8.017 8.017 0 00-8.017-8.017H84.977a8.017 8.017 0 00-8.017 8.017v230.881a8.017 8.017 0 008.017 8.017h68.409a8.017 8.017 0 008.017-8.017V266.154a8.017 8.017 0 00-16.034 0v152.852H92.994V204.159h52.376v26.722a8.017 8.017 0 008.016 8.017zM358.614 435.04h68.409a8.017 8.017 0 008.017-8.017V264.551c0-20.236-9.586-39.579-26.99-54.465-16.319-13.955-37.454-21.96-57.987-21.96-33.891 0-55.359 11.268-68.944 25.151v-17.134a8.017 8.017 0 00-8.017-8.017h-68.409a8.017 8.017 0 00-8.017 8.017v230.881a8.017 8.017 0 008.017 8.017h68.409a8.017 8.017 0 008.017-8.017V315.858c0-21.457 18.032-34.739 34.739-34.739 20.129 0 34.739 14.61 34.739 34.739v111.165a8.017 8.017 0 008.017 8.017zm-42.756-169.954c-24.418 0-50.772 19.412-50.772 50.772v103.148H212.71V204.159h52.376v34.739c0 3.656 2.573 6.926 6.125 7.789 3.66.888 7.55-.973 9.15-4.385 11.871-25.31 35.323-38.143 69.703-38.143 32.545 0 68.944 25.828 68.944 60.392v154.455H366.63V315.858c0-28.946-21.827-50.772-50.772-50.772zM119.182 76.96c-23.281 0-42.221 18.941-42.221 42.221s18.941 42.221 42.221 42.221 42.221-18.941 42.221-42.221-18.941-42.221-42.221-42.221zm0 68.41c-14.44 0-26.188-11.748-26.188-26.188s11.748-26.188 26.188-26.188 26.188 11.748 26.188 26.188-11.749 26.188-26.188 26.188z"></path>
                </svg>
              </a>
            </li>
            <li className="mt-4">
              <a
                href="/"
                aria-label="FACEBOOK"
                // target="_blank"
                rel="noopener"
                className="w-min flex items-center  bg-white px-1 py-1 rounded-md text-black transition hover:scale-125 hover:no-underline"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  width="20"
                  height="20"
                >
                  <path
                    d="M414 10H98c-48.601 0-88 39.399-88 88v316c0 48.601 39.399 88 88 88h158V305.5h-59v-71.006h59v-52.008c0-33.259 15.455-84.938 84.206-84.938h74.517v69.66h-56.742c-7.639 0-17.982 3.59-17.982 19.316v47.521h75.172L407.98 305.5H340V502h74c48.601 0 88-39.399 88-88V98c0-48.601-39.399-88-88-88z"
                    fill="#6e87f5"
                  ></path>
                  <path d="M256 395.493c-5.523 0-10-4.477-10-10v-.08-.04-.04c0-5.523 4.477-10 10-10s10 4.477 10 10v.16c0 5.523-4.477 10-10 10z"></path>
                  <path d="M414 512h-74c-5.523 0-10-4.477-10-10V305.5c0-5.523 4.477-10 10-10h58.937l5.178-51.455H340c-5.523 0-10-4.477-10-10v-47.521c0-21.638 15.073-29.316 27.981-29.316h46.742v-49.66h-64.517c-66.976 0-74.207 52.406-74.207 74.938v52.007c0 5.523-4.477 10-10 10h-49V295.5h49c5.523 0 10 4.477 10 10V344c0 5.523-4.477 10-10 10s-10-4.477-10-10v-28.5h-49c-5.523 0-10-4.477-10-10v-71.006c0-5.523 4.477-10 10-10h49v-42.007c0-13.38 2.37-39.076 18.243-60.834 11.349-15.558 33.741-34.104 75.964-34.104h74.517c5.523 0 10 4.477 10 10v69.66c0 5.523-4.477 10-10 10h-56.742c-5.818 0-7.981 2.525-7.981 9.316v37.521h65.172a10.002 10.002 0 019.95 11.001l-7.191 71.455a10 10 0 01-9.95 8.999H350V492h64c43.009 0 78-34.991 78-78V98c0-43.009-34.991-78-78-78H98c-43.009 0-78 34.991-78 78v316c0 43.009 34.991 78 78 78h148v-67.5c0-5.523 4.477-10 10-10s10 4.477 10 10V502c0 5.523-4.477 10-10 10H98c-54.038 0-98-43.962-98-98V98C0 43.962 43.962 0 98 0h316c54.038 0 98 43.962 98 98v316c0 54.038-43.962 98-98 98z"></path>
                  <path d="M58 206c-5.523 0-10-4.477-10-10v-83.5c0-5.523 4.477-10 10-10s10 4.477 10 10V196c0 5.523-4.477 10-10 10zM58 249.5c-5.523 0-10-4.477-10-10v-.118c0-5.523 4.477-10 10-10s10 4.477 10 10v.118c0 5.523-4.477 10-10 10z"></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>

        <div className=" m-auto my-5 pb-10 lg:py-10 flex items-start gap-8 justify-evenly">
          <div className="max-w-screen-lg mx-auto  p-5 pt-0">
            <div className="grid grid-cols-1 md:grid-cols-12 border">
              <div className="bg-gray-900 md:col-span-4 p-10 text-white">
                <p className="mt-4 text-sm leading-7 font-regular uppercase">
                  Contact
                </p>
                <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight">
                  Get In <span className="text-indigo-600">Touch</span>
                </h3>
                <p className="my-4 leading-7 text-gray-200">
                  I&apos;m always open to exploring new opportunities and
                  discussing how my skills can contribute to innovative
                  projects. If you&apos;re a recruiter interested in my work or
                  potential fit for your team, I&apos;d love to hear from you!
                </p>

                <div className="flex gap-2 items-center mt-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    color="white"
                    fill="none"
                  >
                    <path
                      d="M3.16405 11.3497L4 11.5587L4.45686 16.1005C4.715 18.6668 4.84407 19.9499 5.701 20.7249C6.55793 21.5 7.84753 21.5 10.4267 21.5H13.5733C16.1525 21.5 17.4421 21.5 18.299 20.7249C19.1559 19.9499 19.285 18.6668 19.5431 16.1005L20 11.5587L20.836 11.3497C21.5201 11.1787 22 10.564 22 9.85882C22 9.35735 21.7553 8.88742 21.3445 8.59985L13.1469 2.86154C12.4583 2.37949 11.5417 2.37949 10.8531 2.86154L2.65549 8.59985C2.24467 8.88742 2 9.35735 2 9.85882C2 10.564 2.47993 11.1787 3.16405 11.3497Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle
                      cx="12"
                      cy="14.5"
                      r="2.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-sm">
                    Vaishali Ghaziabad Uttar Pradesh 201019
                  </span>
                </div>
                <div className="flex gap-2 items-center mt-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    color="white"
                    fill="none"
                  >
                    <path
                      d="M21 20C20.3567 18.7133 19 17.0243 19 15.5279C19 13.8295 19.3671 11.7341 18.5777 10.1554C18.2445 9.48892 18 8.81397 18 8.05573V4.42857C18 4.19188 17.8081 4 17.5714 4C16.1513 4 15 5.15127 15 6.57143M8 18L11.6348 20.2717C11.8755 20.4222 12.0814 20.6222 12.2389 20.8583L13 22"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M5.02734 15C5.08201 16.0967 5.24516 16.7809 5.73203 17.2678C6.46426 18 7.64277 18 9.99979 18C12.3568 18 13.5353 18 14.2676 17.2678C14.9998 16.5355 14.9998 15.357 14.9998 13V7C14.9998 4.64298 14.9998 3.46447 14.2676 2.73223C13.5353 2 12.3568 2 9.99979 2C7.64277 2 6.46426 2 5.73203 2.73223C5.24516 3.2191 5.08201 3.90328 5.02734 5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4.25 7.5H5.75C6.44036 7.5 7 6.94036 7 6.25C7 5.55964 6.44036 5 5.75 5L4.25 5C3.55964 5 3 5.55964 3 6.25C3 6.94036 3.55964 7.5 4.25 7.5ZM4.25 7.5L6.75 7.5C7.44036 7.5 8 8.05964 8 8.75C8 9.44036 7.44036 10 6.75 10L4.25 10M4.25 7.5C3.55964 7.5 3 8.05964 3 8.75C3 9.44036 3.55964 10 4.25 10M4.25 10L5.75 10C6.44036 10 7 10.5596 7 11.25C7 11.9404 6.44036 12.5 5.75 12.5H4.25M4.25 10C3.55964 10 3 10.5596 3 11.25C3 11.9404 3.55964 12.5 4.25 12.5M4.25 12.5H5.25C5.94036 12.5 6.5 13.0596 6.5 13.75C6.5 14.4404 5.94036 15 5.25 15H4.25C3.55964 15 3 14.4404 3 13.75C3 13.0596 3.55964 12.5 4.25 12.5Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M9.99981 15H10.0088"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-sm">+91 74172 81414</span>
                </div>
                <div className="flex gap-2 items-center mt-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    color="white"
                    fill="none"
                  >
                    <path
                      d="M19 2V5C19 8.86599 15.866 12 12 12M5 2V5C5 8.86599 8.13401 12 12 12M12 12C15.866 12 19 15.134 19 19V22M12 12C8.13401 12 5 15.134 5 19V22"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M4 2H20M20 22H4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="text-sm">24/7</span>
                </div>
              </div>
              <form
                className="md:col-span-8 p-10"
                ref={form}
                onSubmit={sendEmail}
              >
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-full px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                      htmlFor="grid-first-name"
                    >
                      Full Name
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-first-name"
                      type="text"
                      placeholder="Jane Doe"
                      name="user_name"
                      required
                    />
                  </div>
                  {/* <div className="w-full md:w-1/2 px-3">
                    <label
                      className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                      htmlFor="grid-last-name"
                    >
                      Last Name
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-last-name"
                      type="text"
                      placeholder="Doe"
                    />
                  </div> */}
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Email Address
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-email"
                      type="email"
                      placeholder="********@*****.**"
                      name="user_email"
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Your Message
                    </label>
                    <textarea
                      rows="10"
                      className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      name="message"
                      required
                    ></textarea>
                  </div>
                  <div className="flex justify-between w-full px-3">
                    <div className="md:flex md:items-center"></div>
                    <button
                      className="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                      type="submit"
                      value="Send"
                      id="sendBtn"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Element>

      {/* Footer */}
      <nav className="w-full h-16 md:h-20 lg:h-32 flex items-center justify-center px-20 bg-gradient-to-t from-black to-transparent">
        {/* <div>
          <span className="cursor-default text-4xl">Portfolio</span>
        </div>
        <div>
          <ul className="flex items-center justify-evenly gap-10">
            <li className="cursor-pointer hover:drop-shadow hover:underline font-mono">
              Home
            </li>
            <li className="cursor-pointer hover:underline font-mono">
              Projects
            </li>
            <li className="cursor-pointer hover:underline font-mono">Skills</li>
            <li className="cursor-pointer hover:underline font-mono">About</li>
          </ul>
        </div> */}
        <span className="flex">
          Thank You{" "}
          <svg
            className="ml-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            color="#000000"
            fill="red"
          >
            <path
              d="M19.4626 3.99415C16.7809 2.34923 14.4404 3.01211 13.0344 4.06801C12.4578 4.50096 12.1696 4.71743 12 4.71743C11.8304 4.71743 11.5422 4.50096 10.9656 4.06801C9.55962 3.01211 7.21909 2.34923 4.53744 3.99415C1.01807 6.15294 0.221721 13.2749 8.33953 19.2834C9.88572 20.4278 10.6588 21 12 21C13.3412 21 14.1143 20.4278 15.6605 19.2834C23.7783 13.2749 22.9819 6.15294 19.4626 3.99415Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </nav>

      {/* Social Links */}
      <div className="hidden fixed md:block bottom-1 md:bottom-4 right-1 lg:right-3 p-2">
        <ul className="">
          <li className="my-4">
            <a
              href="https://github.com/vineet-javadev"
              aria-label="GITHUB"
              target="_blank"
              rel="noopener"
              className="w-min flex items-center  bg-white px-1 py-1 rounded-md text-black transition hover:scale-125 hover:no-underline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512.08 512.08"
                width="20"
                height="20"
              >
                <path
                  d="M255.942 5.361C113.905 6.046-.683 121.746.003 263.783c.531 109.928 70.871 207.365 175.043 242.473 12.8 2.368 17.44-5.568 17.44-12.384 0-6.112-.192-22.4-.352-43.712-71.2 15.52-86.24-34.464-86.24-34.464a67.906 67.906 0 00-28.384-37.6c-23.264-16 1.76-15.616 1.76-15.616a53.858 53.858 0 0139.2 26.496c14.379 26.38 47.421 36.109 73.801 21.73.233-.127.464-.255.695-.386a54.848 54.848 0 0116.256-34.368c-56.832-6.496-116.48-28.512-116.48-127.008a99.488 99.488 0 0126.24-68.96 92.802 92.802 0 012.56-68.032s21.504-6.912 70.4 26.336a242.167 242.167 0 01128.224 0c48.864-33.248 70.4-26.336 70.4-26.336a92.802 92.802 0 012.56 68.032 99.422 99.422 0 0126.016 68.96c0 98.72-59.84 120.448-116.864 126.816a61.503 61.503 0 0117.376 47.616c0 34.336-.32 62.048-.32 70.4 0 6.88 4.608 14.88 17.6 12.352 134.53-45.57 206.647-191.57 161.076-326.101C462.822 76.144 365.622 6.009 255.942 5.361z"
                  fill="#5c6bc0"
                ></path>
                <path d="M184.262 506.705a40.434 40.434 0 01-7.072-.672C42.868 462.36-30.617 318.066 13.056 183.744S201.022-24.063 335.344 19.61s207.808 187.966 164.135 322.288c-25.09 77.168-85.313 137.851-162.288 163.527a31.359 31.359 0 01-27.712-4.96 28 28 0 01-9.888-21.76v-13.472c0-12.384.224-31.072.224-52.544a41.249 41.249 0 00-10.752-32.448c-6.697-5.765-7.453-15.867-1.688-22.564a16.001 16.001 0 0110.392-5.468c49.504-5.504 95.328-21.76 95.328-102.816a77.186 77.186 0 00-20.48-53.76 16 16 0 01-3.008-16.832 67.937 67.937 0 00.896-41.6 131.391 131.391 0 00-45.408 21.888 15.617 15.617 0 01-13.28 2.176 214.393 214.393 0 00-55.872-7.552 211.21 211.21 0 00-55.712 7.52 15.682 15.682 0 01-13.344-2.272 127.24 127.24 0 00-45.504-21.76 68.096 68.096 0 00.96 41.6 16 16 0 01-3.008 16.8 77.504 77.504 0 00-20.512 53.792c0 81.024 45.728 97.376 95.136 103.04 8.778 1.014 15.072 8.952 14.058 17.73a16.002 16.002 0 01-5.322 10.174 35.2 35.2 0 00-9.952 22.4 16 16 0 01-9.28 12.352 73.984 73.984 0 01-57.44 3.2 64 64 0 0046.688 3.808 16.224 16.224 0 0113.408 3.2c3.77 3.01 5.98 7.56 6.016 12.384l.352 41.024c.306 15.16-11.735 27.699-26.895 28.005-.444.009-.887.007-1.33-.005zm71.68-469.344c-124.1.37-224.403 101.273-224.033 225.373.282 94.478 59.632 178.689 148.513 210.723v-17.216c-34.359 5.788-68.015-13.527-80.352-46.112a49.407 49.407 0 00-18.528-25.6c-6.816-4.48-21.984-14.88-17.184-30.016 3.2-9.6 11.52-14.688 26.272-14.88a67.199 67.199 0 0150.592 33.088c7.461 15.614 25.846 22.648 41.824 16a84.051 84.051 0 012.624-8.32c-39.456-8.416-98.72-34.592-98.72-131.008a108.48 108.48 0 0122.656-68.032 107.617 107.617 0 015.536-66.048 16.001 16.001 0 019.984-9.376c6.176-2.016 29.216-5.952 73.6 22.592a243.688 243.688 0 01114.464 0c44.512-28.544 67.488-24.512 73.6-22.592a15.998 15.998 0 019.952 9.344 107.394 107.394 0 015.44 65.984 108.32 108.32 0 0122.752 68.128c0 96.416-59.296 122.496-98.816 130.848a92.123 92.123 0 015.536 32.448c0 21.568 0 40.32-.224 52.768v7.872c116.714-42.072 177.223-170.794 135.151-287.507C434.555 96.977 350.382 37.651 255.942 37.361z"></path>
              </svg>
            </a>
          </li>
          <li className="my-4">
            <a
              href="/"
              aria-label="INSTAGRAM"
              // target="_blank"
              rel="noopener"
              className="w-min flex items-center bg-white px-1 py-1 rounded-md text-black transition hover:scale-125 hover:no-underline"
            >
              <svg
                height="20"
                viewBox="0 0 24 24"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <linearGradient
                  id="instagram_svg__a"
                  gradientTransform="matrix(0 -1.982 -1.844 0 -2.292 23.869)"
                  gradientUnits="userSpaceOnUse"
                  x1="0.947"
                  x2="11.036"
                  y1="-2.332"
                  y2="-13.176"
                >
                  <stop offset="0" stopColor="#fd5"></stop>
                  <stop offset="0.5" stopColor="#ff543e"></stop>
                  <stop offset="1" stopColor="#c837ab"></stop>
                </linearGradient>
                <path
                  d="M12.004.5c-6.055 0-7.213-.158-8.727.597C1.883 1.791.882 3.104.628 4.863.55 5.4.528 5.51.523 8.258c-.02 10.161-.154 10.92.576 12.434a4.838 4.838 0 003.134 2.566c1.093.282 1.82.242 7.747.242 4.968 0 6.513.089 7.802-.244a4.811 4.811 0 003.134-2.571c.736-1.522.563-2.598.563-8.692 0-5.836.197-7.135-.575-8.709a4.567 4.567 0 00-.982-1.349C20.194.281 18.136.505 15.741.5h-3.737z"
                  fill="url(#instagram_svg__a)"
                ></path>
                <path
                  d="M12 17.537c-3.053 0-5.537-2.484-5.537-5.537S8.947 6.463 12 6.463 17.537 8.947 17.537 12 15.053 17.537 12 17.537zM18.359 6.514a.874.874 0 11.002-1.748.874.874 0 01-.002 1.748z"
                  fill="#fff"
                ></path>
                <circle cx="12" cy="12" fill="none" r="3.5"></circle>
                <path d="M4.75 24h14.5A4.756 4.756 0 0024 19.25V4.75A4.756 4.756 0 0019.25 0H4.75A4.756 4.756 0 000 4.75v14.5A4.756 4.756 0 004.75 24zM1.5 4.75A3.254 3.254 0 014.75 1.5h14.5a3.254 3.254 0 013.25 3.25v14.5a3.254 3.254 0 01-3.25 3.25H4.75a3.254 3.254 0 01-3.25-3.25z"></path>
                <path d="M12 18.13c3.38 0 6.13-2.75 6.13-6.13S15.38 5.87 12 5.87 5.87 8.62 5.87 12s2.75 6.13 6.13 6.13zm0-10.76c2.553 0 4.63 2.077 4.63 4.63s-2.077 4.63-4.63 4.63S7.37 14.553 7.37 12 9.447 7.37 12 7.37zM18.358 7.362c.986 0 1.729-.74 1.729-1.721 0-1.023-.782-1.721-1.728-1.721-.986 0-1.729.74-1.729 1.721 0 1.021.778 1.721 1.728 1.721zm.177-1.886c.316.279-.405.618-.405.166 0-.27.367-.2.405-.166z"></path>
              </svg>
            </a>
          </li>
          <li className="my-4">
            <a
              href="https://www.linkedin.com/in/vineet-javadev/"
              aria-label="LINKEDIN"
              target="_blank"
              rel="noopener"
              className="w-min flex items-center  bg-white px-1 py-1 rounded-md text-black transition hover:scale-125 hover:no-underline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="20"
                height="20"
              >
                <path
                  d="M469.779 503.983H42.221c-18.891 0-34.205-15.314-34.205-34.205V42.221c0-18.891 15.314-34.205 34.205-34.205h427.557c18.891 0 34.205 15.314 34.205 34.205v427.557c0 18.891-15.314 34.205-34.204 34.205z"
                  fill="#3cafe6"
                ></path>
                <path
                  d="M42.221 452.676V8.017c-18.891 0-34.205 15.314-34.205 34.205v427.557c0 18.891 15.314 34.205 34.205 34.205h427.557c18.891 0 34.205-15.314 34.205-34.205H59.324c-9.446 0-17.103-7.657-17.103-17.103z"
                  fill="#1c9ad6"
                ></path>
                <path
                  fill="#fff"
                  d="M84.977 196.142h68.409v230.881H84.977z"
                ></path>
                <path
                  fill="#e5e5e5"
                  d="M84.977 196.142h25.653v230.881H84.977z"
                ></path>
                <path
                  d="M350.063 196.142c-17.102 0-58.076 2.494-76.96 42.756v-42.756h-68.409v230.881h68.409V315.858c0-25.653 21.644-42.756 42.756-42.756 23.613 0 42.756 17.102 42.756 42.756V427.023h68.409V264.551c-.001-37.781-38.837-68.409-76.961-68.409z"
                  fill="#fff"
                ></path>
                <g fill="#e5e5e5">
                  <path d="M204.693 196.142h25.653v230.881h-25.653zM384.267 315.858c0-25.653-19.143-42.756-42.756-42.756-4.154 0-8.326.671-12.351 1.93 17.098 5.139 29.453 20.219 29.453 40.825V427.022h25.653V315.858z"></path>
                </g>
                <circle
                  cx="119.182"
                  cy="119.182"
                  r="34.205"
                  fill="#fff"
                ></circle>
                <path
                  d="M136.284 136.284c-18.891 0-34.205-15.314-34.205-34.205a34.07 34.07 0 013.03-14.072c-11.869 5.367-20.133 17.301-20.133 31.174 0 18.891 15.314 34.205 34.205 34.205 13.873 0 25.807-8.264 31.174-20.133a34.046 34.046 0 01-14.071 3.031z"
                  fill="#e5e5e5"
                ></path>
                <path d="M503.983 92.994A8.017 8.017 0 00512 84.977V42.221C512 18.941 493.059 0 469.779 0H42.221C18.941 0 0 18.941 0 42.221v427.557C0 493.059 18.941 512 42.221 512h427.557c23.28 0 42.221-18.941 42.221-42.221V119.182c0-4.427-3.588-8.017-8.017-8.017s-8.017 3.589-8.017 8.017v350.597c0 14.44-11.747 26.188-26.188 26.188H42.221c-14.44 0-26.188-11.748-26.188-26.188V42.221c0-14.44 11.748-26.188 26.188-26.188h427.557c14.441 0 26.188 11.748 26.188 26.188v42.756a8.017 8.017 0 008.017 8.017z"></path>
                <path d="M153.386 238.898a8.017 8.017 0 008.017-8.017v-34.739a8.017 8.017 0 00-8.017-8.017H84.977a8.017 8.017 0 00-8.017 8.017v230.881a8.017 8.017 0 008.017 8.017h68.409a8.017 8.017 0 008.017-8.017V266.154a8.017 8.017 0 00-16.034 0v152.852H92.994V204.159h52.376v26.722a8.017 8.017 0 008.016 8.017zM358.614 435.04h68.409a8.017 8.017 0 008.017-8.017V264.551c0-20.236-9.586-39.579-26.99-54.465-16.319-13.955-37.454-21.96-57.987-21.96-33.891 0-55.359 11.268-68.944 25.151v-17.134a8.017 8.017 0 00-8.017-8.017h-68.409a8.017 8.017 0 00-8.017 8.017v230.881a8.017 8.017 0 008.017 8.017h68.409a8.017 8.017 0 008.017-8.017V315.858c0-21.457 18.032-34.739 34.739-34.739 20.129 0 34.739 14.61 34.739 34.739v111.165a8.017 8.017 0 008.017 8.017zm-42.756-169.954c-24.418 0-50.772 19.412-50.772 50.772v103.148H212.71V204.159h52.376v34.739c0 3.656 2.573 6.926 6.125 7.789 3.66.888 7.55-.973 9.15-4.385 11.871-25.31 35.323-38.143 69.703-38.143 32.545 0 68.944 25.828 68.944 60.392v154.455H366.63V315.858c0-28.946-21.827-50.772-50.772-50.772zM119.182 76.96c-23.281 0-42.221 18.941-42.221 42.221s18.941 42.221 42.221 42.221 42.221-18.941 42.221-42.221-18.941-42.221-42.221-42.221zm0 68.41c-14.44 0-26.188-11.748-26.188-26.188s11.748-26.188 26.188-26.188 26.188 11.748 26.188 26.188-11.749 26.188-26.188 26.188z"></path>
              </svg>
            </a>
          </li>
          <li className="my-4">
            <a
              href="/"
              aria-label="FACEBOOK"
              // target="_blank"
              rel="noopener"
              className="w-min flex items-center  bg-white px-1 py-1 rounded-md text-black transition hover:scale-125 hover:no-underline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="20"
                height="20"
              >
                <path
                  d="M414 10H98c-48.601 0-88 39.399-88 88v316c0 48.601 39.399 88 88 88h158V305.5h-59v-71.006h59v-52.008c0-33.259 15.455-84.938 84.206-84.938h74.517v69.66h-56.742c-7.639 0-17.982 3.59-17.982 19.316v47.521h75.172L407.98 305.5H340V502h74c48.601 0 88-39.399 88-88V98c0-48.601-39.399-88-88-88z"
                  fill="#6e87f5"
                ></path>
                <path d="M256 395.493c-5.523 0-10-4.477-10-10v-.08-.04-.04c0-5.523 4.477-10 10-10s10 4.477 10 10v.16c0 5.523-4.477 10-10 10z"></path>
                <path d="M414 512h-74c-5.523 0-10-4.477-10-10V305.5c0-5.523 4.477-10 10-10h58.937l5.178-51.455H340c-5.523 0-10-4.477-10-10v-47.521c0-21.638 15.073-29.316 27.981-29.316h46.742v-49.66h-64.517c-66.976 0-74.207 52.406-74.207 74.938v52.007c0 5.523-4.477 10-10 10h-49V295.5h49c5.523 0 10 4.477 10 10V344c0 5.523-4.477 10-10 10s-10-4.477-10-10v-28.5h-49c-5.523 0-10-4.477-10-10v-71.006c0-5.523 4.477-10 10-10h49v-42.007c0-13.38 2.37-39.076 18.243-60.834 11.349-15.558 33.741-34.104 75.964-34.104h74.517c5.523 0 10 4.477 10 10v69.66c0 5.523-4.477 10-10 10h-56.742c-5.818 0-7.981 2.525-7.981 9.316v37.521h65.172a10.002 10.002 0 019.95 11.001l-7.191 71.455a10 10 0 01-9.95 8.999H350V492h64c43.009 0 78-34.991 78-78V98c0-43.009-34.991-78-78-78H98c-43.009 0-78 34.991-78 78v316c0 43.009 34.991 78 78 78h148v-67.5c0-5.523 4.477-10 10-10s10 4.477 10 10V502c0 5.523-4.477 10-10 10H98c-54.038 0-98-43.962-98-98V98C0 43.962 43.962 0 98 0h316c54.038 0 98 43.962 98 98v316c0 54.038-43.962 98-98 98z"></path>
                <path d="M58 206c-5.523 0-10-4.477-10-10v-83.5c0-5.523 4.477-10 10-10s10 4.477 10 10V196c0 5.523-4.477 10-10 10zM58 249.5c-5.523 0-10-4.477-10-10v-.118c0-5.523 4.477-10 10-10s10 4.477 10 10v.118c0 5.523-4.477 10-10 10z"></path>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
