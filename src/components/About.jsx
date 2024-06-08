import React, { useEffect } from 'react'
import about from '../assets/about.png'
import { FaChevronCircleRight } from 'react-icons/fa'
import AOS from 'aos'
import 'aos/dist/aos.css'

const About = () => {

  useEffect(()=>{
    AOS.init({
      offset: 200,
      duration: 400,
      easing: 'ease-in-sine',
    });
  }, [])

  return (
    <section id='about' className='w-[90%] m-auto flex lg:flex-row flex-col justify-between items-center gap-28 py-20'>
      <div>
        <img data-aos="zoom-in" data-aos-delay="200" className='lg:w-[1000px] lg:h-[550px]' src={about} alt="about-img" />
      </div>
      <div data-aos="zoom-in" data-aos-delay="400" className='flex flex-col justify-center items-start gap-4'>
        <h1 className='text-lime-500 font-ubuntu font-semibold text-[19px]'>WHO WE ARE</h1>
        <h1 className='text-black font-ubuntu font-semibold text-[50px] lg:text-[60px] leading-[60px] lg:leading-[70px]'>The leading social media marketting agency</h1>
        <p className='font-ubuntu text-slate-700 text-[18px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore libero a dolor quidem sapiente, asperiores quae nemo id voluptas maiores!</p>
        <div className='flex flex-col justify-center items-start gap-4'>
          <p className='text-black flex justify-center items-center gap-4 font-ubuntu'><FaChevronCircleRight className='text-limegreen size-6' />Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, impedit!</p>
          <p className='text-black flex justify-center items-center gap-4 font-ubuntu'><FaChevronCircleRight className='text-limegreen size-6' />Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, impedit!</p>
          <p className='text-black flex justify-center items-center gap-4 font-ubuntu'><FaChevronCircleRight className='text-limegreen size-6' />Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, impedit!</p>
        </div>
        <button className='bg-limegreen px-6 py-4 rounded-full text-[17px] font-semibold font-ubuntu hover:bg-black hover:text-white'>Discover More</button>
      </div>
    </section>
  )
}

export default About