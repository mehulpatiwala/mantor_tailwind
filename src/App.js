import './App.css';
import CountUp from 'react-countup';
import React, { useState } from 'react';
import { RiStoreLine, RiBarChartBoxLine, RiCalendarTodoFill, RiPaintBrushLine, RiDatabase2Fill, RiGradienterLine, RiFileList3Fill, RiPriceTag2Line, RiAnchorFill, RiDiscLine, RiBaseStationLine, RiFingerprintFill, RiUserLine, RiHeartLine, RiInstagramLine, RiLinkedinBoxFill } from "react-icons/ri";
import { BiChevronRight, BiCube, BiImages } from "react-icons/bi";
import { TfiFacebook, TfiLinkedin, TfiSkype, TfiTwitterAlt } from "react-icons/tfi";
import { FaLinkedin } from "react-icons/fa";
import { BiReceipt } from "react-icons/bi";


function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  }
  return (
    <div className="App">
      <header className='header fixed-top d-flex align-items-center '>

        <nav class="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 ">
          <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href=".." class="flex items-center">
              <span class="self-center text-3xl font-semimiduim whitespace-nowrap dark:text-white uppercase text-emerald-400 font-bold">mentor</span>
            </a>
            <div class="hidden w-full md:block md:w-auto" id="navbar-multi-level">
              <ul class="flex flex-col  font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 items-center">
                <li>
                  <a href=".." class="block  text-emerald-400 py-2 pl-3 pr-4 md:dark:bg-transparent " aria-current="page">Home</a>
                </li>
                <li>
                  <a href=".." class="block py-2 pl-3 pr-4 md:hover:text-emerald-400  md:dark:bg-gray-900 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
                </li>
                <li>
                  <a href=".." class="block py-2 pl-3 pr-4 md:hover:text-emerald-400 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Courses</a>
                </li>
                <li>
                  <a href=".." class="block py-2 pl-3 pr-4  md:hover:text-emerald-400 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Trainers</a>
                </li>
                <li>
                  <a href=".." class="block py-2 pl-3 pr-4 md:hover:text-emerald-400 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Events</a>
                </li>
                <li>
                  <a href=".." class="block py-2 pl-3 pr-4 md:hover:text-emerald-400 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
                </li>
                <li>
                  <button
                    className="group-hover:text-gray-200 focus:outline-none"
                    onClick={toggleDropdown}
                  >
                    Dropdown
                  </button>
                  {isOpen && (
                    <ul className="absolute mt-3 space-y-2 bg-white border border-gray-200 block z-10">
                      <li>
                        <a href="#" className="block px-8 py-2 hover:text-green-500">
                          Drop Down 1
                        </a>
                      </li>
                      <li>
                        <a href="#" className="block px-8 py-2 hover:text-green-500">
                          Drop Down 2
                        </a>
                      </li>
                      <li>
                        <a href="#" className="block px-8 py-2 hover:text-green-500">
                          Drop Down 3
                        </a>
                      </li>
                      <li>
                        <a href="#" className="block px-8 py-2 hover:text-green-500">
                          Drop Down 4
                        </a>
                      </li>
                      <li>
                        <a href="#" className="block px-8 py-2 hover:text-green-500">
                          Drop Down 5
                        </a>
                      </li>
                    </ul>
                  )}
                </li>
                <li>
                  <a href=".." class="block py-2 pl-3  md:hover:text-emerald-400 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
                </li>
                <button type="button" class="btn ml-5 bg-emerald-400 text-white rounded-full text-sm px-6 py-2  hover:bg-green-400">Get Staterd</button>
              </ul>
              <button className='md:block lg:hidden py-3 px-4 mx-2 rounded  focus:outline-none hover:bg-gray-100'>
                <div className='w-5 h-1 bg-gray-600 mb-1'></div>
                <div className='w-5 h-1 bg-gray-600 mb-1'></div>
                <div className='w-5 h-1 bg-gray-600 mb-1'></div>
              </button>
            </div>x
          </div>
        </nav>
      </header>
      

      <section className='hero   '>
        <div className="container max-w-screen-xl mx-auto pt-48">
          <div className='index absolute items-center fadeInUp'>
            <h1 className='m-0 text-5xl font-bold leading-tight text-white'>Learning Today,<br />Leading Tomorrow</h1>
            <h2 className='text-white mt-2.5 mb-0 ml-0 mr-0 text-lg'>We are team of talented designers making websites with Bootstrap</h2>
            <button type="button" class="btn transition bg-emerald-400 text-white rounded-full text-base px-10 py-3  bg-none hover:bg-blue-500 mt-8 tracking-normal m=0">Get Staterd</button>
          </div>
        </div>
      </section>
      <section className='about pt-14 pb-14 px-0'>
        <div className='container max-w-screen-xl mx-auto '>
          <div className="grid-rows-6 flex ">
            <div className='mr-2 content fadeInUp'>
              <h3 className='text-3xl font-medium pb-4'>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
              <p className='italic pb-3'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua.
              </p>
              <ul>
                <li className='flex pb-3'><svg class="w-6 h-6 text-emerald-400 pr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 10 2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg> <span> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
                <li className='flex pb-3'><svg class="w-6 h-6 text-emerald-400 pr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 10 2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg> <span> Duis aute irure dolor in reprehenderit in voluptate velit.</span></li>
                <li className='flex pb-3 '><svg class="w-6 h-6 text-emerald-400 pr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 10 2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg><span> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in <br />reprehenderit in  voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</span></li>
              </ul>
              <span>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              </span>
            </div>
            <div className='grid-rows-6 fade-right'>
              <img src="../image/about.jpg" alt="" className='max-w-full' />
            </div>
          </div>
        </div>
      </section>
      <section className='count py-8 px-0 bg-slate-100'>
        <div className="container max-w-screen-xl mx-auto">
          <div className='grid lg:grid-cols-4 md:grid-cols-2 text-center'>
            <div>
              <span className='text-5xl font-bold text-emerald-400'>
                <CountUp end={1232} />
              </span>
              <p className='my-4 text-lg text-slate-700 font-medium'>Students</p>
            </div>
            <div>
              <span className='text-5xl font-bold text-emerald-400'>
                <CountUp end={64} />
              </span>
              <p className='my-4 text-lg text-slate-700 font-medium'>Courses</p>
            </div>
            <div>
              <span className='text-5xl font-bold text-emerald-400'>
                <CountUp end={42} />
              </span>
              <p className='my-4 text-lg text-slate-700 font-medium'>Events</p>
            </div>
            <div>
              <span className='text-5xl font-bold text-emerald-400'>
                <CountUp end={15} />
              </span>
              <p className='my-4 text-lg text-slate-700 font-medium'>Trainers</p>
            </div>
          </div>
        </div>
      </section>
      <section className='why-us fade-right '>
        <div className='container max-w-screen-xl mx-auto '>
          <div className="flex w-full justify-end">
            <div className='w-3/4'>
              <div className="content2  bg-emerald-400  rounded-sm  p-9 text-white ">
                <h3 className='text-3xl font-bold mb-6'>Why Choose Mentor?</h3>
                <p className='mb-8 text-lg '>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
                  Asperiores dolores sed et. Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad corporis.
                </p>
                <div className='flex justify-center'>
                  <button type="button" class="btn bg-slate-300 transition text-white hover:text-emerald-400  rounded-full text-base px-10 py-8 pb-2 pt-1.5  bg-none hover:bg-white tracking-normal m=0 flex ">Learn More<BiChevronRight className='text-xl pt-1'></BiChevronRight></button>
                </div>
              </div>
            </div>
            <div className='grid grid-cols-3 gap-6 '>
              <div class="p-10 px-8 mt-4 ml-6  text-emerald-500 flex flex-col  items-center border-2 border-slate-50">
                <div className='text-3xl mb-8 p-5 bg-slate-100 rounded-full'>
                  <BiReceipt ></BiReceipt>
                </div>
                <h4 className='text-xl font-medium text-center text-gray-700 mb-8'>Corporis voluptates sit</h4>
                <p className='text-center text-sm text-slate-500'>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
              </div>
              <div class="py-10 px-8 mt-4 ml-6  text-emerald-500 flex flex-col  items-center border-2 border-slate-50">
                <div className='text-3xl mb-8 p-5 bg-slate-100 rounded-full'>
                  <BiCube></BiCube>
                </div>

                <h4 className='text-xl font-medium text-center text-gray-700 mb-8'>Ullamco laboris <br />ladore pan</h4>
                <p className='text-center text-slate-500 text-sm'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
              </div>
              <div class="py-10 px-8 mt-4 ml-6  text-emerald-500 flex flex-col  items-center border-2 border-slate-50">
                <div className='text-3xl mb-8 p-5 bg-slate-100 rounded-full'>
                  <BiImages></BiImages>
                </div>

                <h4 className='text-xl font-medium text-center text-gray-700 mb-8'>Labore consequatur</h4>
                <p className='text-center text-slate-500 text-sm'>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='features fadeInUp'>
        <div className="container max-w-screen-xl mx-auto">
          <div className="ios-init">
            <div className="grid grid-cols-4 gap-4 mb-8">
              <div className="icon-boxs flex items-center p-5  ">
                <RiStoreLine className='text-3xl text-amber-400'></RiStoreLine>
                <h3 className='pl-4 font-bold md:hover:text-emerald-400 text-slate-700'><a href="">Lorem Ipsum</a></h3>
              </div>
              <div className="icon-boxs flex items-center p-5  ">
                <RiBarChartBoxLine className='text-3xl text-blue-500'></RiBarChartBoxLine>
                <h3 className='pl-4 font-bold md:hover:text-emerald-400 text-slate-700'><a href="">Dolor Sitema</a></h3>
              </div>
              <div className="icon-boxs flex items-center p-5  ">
                <RiCalendarTodoFill className='text-3xl text-rose-500'></RiCalendarTodoFill>
                <h3 className='pl-4 font-bold md:hover:text-emerald-400 text-slate-700'><a href="">Sed perspiciatis</a></h3>
              </div>
              <div className="icon-boxs flex items-center p-5  ">
                <RiPaintBrushLine className='text-3xl text-pink-400'></RiPaintBrushLine>
                <h3 className='pl-4 font-bold md:hover:text-emerald-400 text-slate-700'><a href="">Magni Dolores</a></h3>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4 mb-8">
              <div className="icon-boxs flex items-center p-5  ">
                <RiDatabase2Fill className='text-3xl text-sky-600'></RiDatabase2Fill>
                <h3 className='pl-4 font-bold md:hover:text-emerald-400 text-slate-700'><a href="">Nemo Enim</a></h3>
              </div>
              <div className="icon-boxs flex items-center p-5  ">
                <RiGradienterLine className='text-3xl text-amber-500'></RiGradienterLine>
                <h3 className='pl-4 font-bold md:hover:text-emerald-400 text-slate-700'><a href="">Eiusmod Tempor</a></h3>
              </div>
              <div className="icon-boxs flex items-center p-5  ">
                <RiFileList3Fill className='text-3xl text-teal-400'></RiFileList3Fill>
                <h3 className='pl-4 font-bold md:hover:text-emerald-400 text-slate-700'><a href="">Midela Teren</a></h3>
              </div>
              <div className="icon-boxs flex items-center p-5  ">
                <RiPriceTag2Line className='text-3xl text-blue-600'></RiPriceTag2Line>
                <h3 className='pl-4 font-bold md:hover:text-emerald-400 text-slate-700'><a href="">Pira Neve </a></h3>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4 mb-8 ">
              <div className="icon-boxs flex items-center p-5">
                <RiAnchorFill className='text-3xl text-amber-900'></RiAnchorFill>
                <h3 className='pl-4 font-bold md:hover:text-emerald-400 text-slate-700'><a href="">Dirada Pack</a></h3>
              </div>
              <div className="icon-boxs flex items-center p-5  ">
                <RiDiscLine className='text-3xl text-rose-800'></RiDiscLine>
                <h3 className='pl-4 font-bold md:hover:text-emerald-400 text-slate-700'><a href="">Moton Ideal</a></h3>
              </div>
              <div className="icon-boxs flex items-center p-5  ">
                <RiBaseStationLine className='text-3xl text-orange-500'></RiBaseStationLine>
                <h3 className='pl-4 font-bold md:hover:text-emerald-400 text-slate-700'><a href="">Verdo Park</a></h3>
              </div>
              <div className="icon-boxs flex items-center p-5  ">
                <RiFingerprintFill className='text-3xl text-emerald-500'></RiFingerprintFill>
                <h3 className='pl-4 font-bold md:hover:text-emerald-400 text-slate-700'><a href="">Flavor Nivelanda</a></h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='popular-courses fadeInDown'>
        <div className="container max-w-screen-xl mx-auto">
          <div className='pb-9'>
            <h2 className='uppercase font-bold text-sm text-slate-400 tracking-widest mb-1.5'>Courses</h2>
            <p className='text-4xl font-bold text-slate-800 uppercase'>Popular Courses</p>
          </div>
          <div className='flex gap-6'>
            <div class="max-w-sm  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img class="" src="../image/course-1.jpg" alt="" />
              </a>
              <div className='p-4'>
                <div class="course-content  flex mb-3 justify-between">
                  <span class="mb-2 text-sm font-medium bg-emerald-400 py-1 text-white px-4">Web Development</span>
                  <p className='font-bold text-slate-700 text-lg'>$169</p>
                </div>
                <div>
                  <h3 className='font-bold text-xl text-slate-700 mb-1.5'>
                    <a href="">Website Design</a>
                  </h3>
                  <p className='text-sm text-slate-500 mb-4'>Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.</p>
                </div>
                <div className='flex items-center pt-4 border-t-2 border-solid  border-slate-100 '>
                  <img class="w-10 h-10 rounded-full" src="../image/trainer-1.jpg" alt="Rounded avatar" />
                  <span className='pl-3.5 font-bold text-slate-600'>Antonio</span>
                  <div className='icon-bar flex'>
                    <RiUserLine className='text-slate-500'>
                      <span className='text-black'>50</span>
                    </RiUserLine>
                    <RiHeartLine className='text-slate-500'>
                      <span>65</span>
                    </RiHeartLine>
                  </div>
                </div>

              </div>
            </div>
            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img class="rounded-t-lg" src="../image/course-2.jpg" alt="" />
              </a>
              <div className='p-4'>
                <div class="course-content flex mb-3 justify-between">
                  <span class="mb-2 text-sm font-medium bg-emerald-400 py-1 text-white px-4">Marketing</span>
                  <p className='font-bold text-slate-700 text-lg'>$250</p>
                </div>
                <div>
                  <h3 className='font-bold text-xl text-slate-700 mb-1.5'>
                    <a href="">Search Engine Optimization</a>
                  </h3>
                  <p className='text-sm text-slate-500 mb-4'>Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.</p>
                </div>
                <div className='flex items-center pt-4 border-t-2 border-solid  border-slate-100'>
                  <img class="w-10 h-10 rounded-full" src="../image/trainer-2.jpg" alt="Rounded avatar" />
                  <span className='pl-3.5 font-bold text-slate-600'>Lana</span>
                  <div className='icon-bar flex'>
                    <RiUserLine className='text-slate-500'>
                      <span className='text-black'>50</span>
                    </RiUserLine>
                    <RiHeartLine className='text-slate-500'>
                      <span>65</span>
                    </RiHeartLine>
                  </div>
                </div>
              </div>
            </div>
            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img class="rounded-t-lg" src="../image/course-3.jpg" alt="" />
              </a>
              <div className='p-4'>
                <div class="course-content  flex mb-3 justify-between">
                  <span class="mb-2 text-sm font-medium bg-emerald-400 py-1 text-white px-4">Content</span>
                  <p className='font-bold text-slate-700 text-lg'>$180</p>
                </div>
                <div>
                  <h3 className='font-bold text-xl text-slate-700 mb-1.5'>
                    <a href="">Copywriting</a>
                  </h3>
                  <p className='text-sm text-slate-500 mb-4'>Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.</p>
                </div>
                <div className='flex items-center pt-4 border-t-2 border-solid  border-slate-100'>
                  <img class="w-10 h-10 rounded-full" src="../image/trainer-3.jpg" alt="Rounded avatar" />
                  <span className='pl-3.5 font-bold text-slate-600'>Brandon</span>
                  <div className='icon-bar flex'>
                    <RiUserLine className='text-slate-500'>
                      <span className='text-black'>50</span>
                    </RiUserLine>
                    <RiHeartLine className='text-slate-500'>
                      <span>65</span>
                    </RiHeartLine>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='trainers fadeInUp'>
        <div className="container max-w-screen-xl mx-auto">
          <div className='flex gap-6'>
            <div class="max-w-sm bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 text-center">
              <a href="#">
                <img class="" src="../image/trainer-1.jpg" alt="" />
              </a>
              <div class="p-5">
                <a href="#">
                  <h5 class="font-bold text-lg  text-slate-700 tracking-tight dark:text-white">Water White</h5>
                  <span className='text-sm text-slate-600'>Web Development</span>
                </a>
                <p class="mb-3 font-normal text-gray-400 italic py-2.5">
                  Magni qui quod omnis unde et eos fuga et exercitationem. Odio veritatis perspiciatis quaerat qui aut aut aut
                </p>
                <div className='flex justify-center m-1 text-xl text-gray-400 '>
                  <TfiTwitterAlt className='mx-1 text-lg  hover:text-green-600 '></TfiTwitterAlt>
                  <FaLinkedin className='mx-1 text-lg  hover:text-green-600 '></FaLinkedin>
                  <RiInstagramLine className='mx-1 text-lg  hover:text-green-600 '></RiInstagramLine>
                  <RiLinkedinBoxFill className='mx-1 text-lg  hover:text-green-600 '></RiLinkedinBoxFill>
                </div>
              </div>
            </div>
            <div class="max-w-sm bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 text-center">
              <a href="#">
                <img class="" src="../image/trainer-2.jpg" alt="" />
              </a>
              <div class="p-5">
                <a href="#">
                  <h5 class="font-bold text-lg text-slate-700 tracking-tight dark:text-white">Sarah Jhinson</h5>
                  <span className='text-sm text-slate-600'>Marketing</span>
                </a>
                <p class="mb-3 font-normal text-gray-400 italic py-2.5 text-base" >
                  Repellat fugiat adipisci nemo illum nesciunt voluptas repellendus. In architecto rerum rerum temporibus
                </p>
                <div className='flex justify-center m-1 text-lg text-gray-400'>
                  <TfiTwitterAlt className='mx-1 text-lg  hover:text-green-600 '></TfiTwitterAlt>
                  <FaLinkedin className='mx-1 text-lg  hover:text-green-600 '></FaLinkedin>
                  <RiInstagramLine className='mx-1 text-lg  hover:text-green-600 '></RiInstagramLine>
                  <RiLinkedinBoxFill className='mx-1 text-lg  hover:text-green-600 '></RiLinkedinBoxFill>
                </div>
              </div>
            </div>
            <div class="max-w-sm bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 text-center">
              <a href="#">
                <img class="" src="../image/trainer-3.jpg" alt="" />
              </a>
              <div class="p-5">
                <a href="#">
                  <h5 class="font-bold text-lg  text-slate-700 tracking-tight  dark:text-white">William Anderson</h5>
                  <span className='text-sm text-slate-600'>Content</span>
                </a>
                <p class="mb-3 font-normal text-gray-400 italic py-2.5 text-base">
                  Voluptas necessitatibus occaecati quia. Earum totam consequuntur qui porro et laborum toro des clara
                </p>
                <div className='flex justify-center m-1 text-lg text-gray-400 '>
                  <TfiTwitterAlt className='mx-1 text-lg  hover:text-green-600 '></TfiTwitterAlt>
                  <FaLinkedin className='mx-1 text-lg  hover:text-green-600 '></FaLinkedin>
                  <RiInstagramLine className='mx-1 text-lg  hover:text-green-600 '></RiInstagramLine>
                  <RiLinkedinBoxFill className='mx-1 text-lg  hover:text-green-600 '></RiLinkedinBoxFill>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer class="bg-slate-100 fadeInUp">
        <div class="mx-auto w-full max-w-screen-xl">
          <div class="grid grid-cols-2 px-4 py-6 lg:py-8 md:grid-cols-4 ">
            <div>
              <h2 class="mb-4 text-2xl font-semibold text-gray-700  dark:text-white">Mentor</h2>
              <p className='text-slate-600'>
                A108 Adam Street <br />
                New York, NY 535022 <br />
                United States <br /><br />
                <strong className='text-slate-600'>Phone:</strong> +1 5589 55488 55 <br />
                <strong className='text-slate-600'>Email:</strong> info@example.com<br />
              </p>
            </div>
            <div>
              <h2 class="mb-6 text-lg font-semibold text-gray-900  dark:text-white">Useful Links</h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium inline-block">
                <li class="mb-3">
                  <a href="#" class="hover:text-emerald-500 font-normal text-sm pr-0.5 flex"><BiChevronRight className='text-emerald-500 text-xl pt-1'></BiChevronRight>Home</a>
                </li>
                <li class="mb-3">
                  <a href="#" class="hover:text-emerald-500 font-normal text-sm flex"><BiChevronRight className='text-emerald-500 text-xl pt-1'></BiChevronRight>About Us</a>
                </li>
                <li class="mb-3">
                  <a href="#" class="hover:text-emerald-500 font-normal text-sm flex"><BiChevronRight className='text-emerald-500 text-xl pt-1'></BiChevronRight>Services</a>
                </li>
                <li class="mb-3">
                  <a href="#" class="hover:text-emerald-500 font-normal text-sm flex"><BiChevronRight className='text-emerald-500 text-xl pt-1'></BiChevronRight>Terms of service</a>
                </li>
                <li class="mb-3">
                  <a href="#" class="hover:text-emerald-500 font-normal text-sm flex"><BiChevronRight className='text-emerald-500 text-xl pt-1'></BiChevronRight>Privacy policy</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-lg font-semibold text-gray-900  dark:text-white ">Our Services</h2>
              <ul class="text-gray-500  text-lg dark:text-gray-400 font-medium">
                <li class="mb-3">
                  <a href="#" class="hover:text-emerald-500 font-normal text-sm flex"> <BiChevronRight className='text-emerald-500 text-xl pt-1'></BiChevronRight>Web Design</a>
                </li>
                <li class="mb-3">
                  <a href="#" class="hover:text-emerald-500 font-normal text-sm flex"><BiChevronRight className='text-emerald-500 text-xl pt-1'></BiChevronRight>Web Development</a>
                </li>
                <li class="mb-3">
                  <a href="#" class="hover:text-emerald-500 font-normal text-sm flex"><BiChevronRight className='text-emerald-500 text-xl pt-1'></BiChevronRight>Product Management</a>
                </li>
                <li class="mb-3">
                  <a href="#" class="hover:text-emerald-500 font-normal text-sm  flex"><BiChevronRight className='text-emerald-500 text-xl pt-1'></BiChevronRight>Marketing</a>
                </li>
                <li class="mb-3">
                  <a href="#" class="hover:text-emerald-500 font-normal text-sm flex"><BiChevronRight className='text-emerald-500 text-xl pt-1'></BiChevronRight>Graphic Design</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-lg font-semibold text-gray-900  dark:text-white">Join Our Newsletter</h2>
              <p className=' font-normal text-sm mb-4'>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
              <div>
                <form action="post" className='mt-7 bg-white py-1.5 px-3 rounded-full relative border-2 border-gray-150'>
                  <input type="email" name='email' className='border-0  rounded-md hover:border-black py-1 px-2' />
                  <input type="submit" value='Subscribe' className='absolute bg-emerald-400 text-base text-white py-2.5 bottom-px px-5 rounded-full hover:bg-green-500' />
                </form>
              </div>
            </div>

          </div>
          <div class="px-4 py-6 bg-gray-100 dark:bg-slate-700 md:flex md:items-center md:justify-between">
            <span class="text-sm text-gray-500 dark:text-gray-300 sm:text-center">© Copyright <a href="https://flowbite.com/"><span className='text-slate-600 font-bold'>Mentor</span></a>. All Rights Reserved.
              <div className='credits text-sm  pt-1'>
                <p> Designed by <span className='text-emerald-400 hover:text-green-600'>Mehul patiwala</span></p>

              </div>
            </span>
            <div class="flex mt-0 text-base justify-center text-white ">
              <a href="#" class=" social-links flex justify-center bg-emerald-400 w-8 h-8 items-center py-2 rounded-full mr-1.5 hover:bg-green-500 ">
                <TfiTwitterAlt ></TfiTwitterAlt>
              </a>
              <a href="#" class=" social-links flex justify-center bg-emerald-400 w-8 h-8 items-center py-2 rounded-full mr-1.5 hover:bg-green-500 ">
                <TfiFacebook></TfiFacebook>
              </a>
              <a href="#" class="social-links  flex justify-center bg-emerald-400 w-8 h-8 items-center py-2 rounded-full mr-1.5 hover:bg-green-500 ">
                <RiInstagramLine></RiInstagramLine>
              </a>
              <a href="#" class=" social-links flex justify-center bg-emerald-400 w-8 h-8 items-center py-2 rounded-full mr-1.5 hover:bg-green-500 ">
                <TfiSkype></TfiSkype>
              </a>
              <a href="#" class=" social-links flex justify-center bg-emerald-400 w-8 h-8 items-center py-2 rounded-full mr-1.5 hover:bg-green-500 ">
                <TfiLinkedin></TfiLinkedin>
              </a>
            </div>
          </div>
        </div>
      </footer>
      <div class="relative">
        <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2">Hover to Open</button>

        <ul class="absolute mt-3 space-y-2 bg-white border border-gray-200 z-10 hidden">
          <li>
            <a href="#" class="block px-8 py-2 hover:text-green-500">Item 1</a>
          </li>
          <li>
            <a href="#" class="block px-8 py-2 hover:text-green-500">Item 2</a>
          </li>
          <li>
            <a href="#" class="block px-8 py-2 hover:text-green-500">Item 3</a>
          </li>
        </ul>
      </div>


    </div>

  );
}
export default App;
