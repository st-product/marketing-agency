import React, { useEffect } from 'react'
import contactimg from '../assets/contact.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Contact = () => {

  useEffect(()=>{
    AOS.init({
      offset: 200,
      duration: 400,
      easing: 'ease-in-sine',
    });
  }, [])

  return (
    <section id='contact' className='w-[90%] m-auto lg:flex-row flex flex-col justify-between items-center gap-28 py-20'>
      <div className='lg:w-[50%] w-full'>
        <img data-aos="zoom-in" data-aos-delay="200" src={contactimg} alt="contact-img" />
      </div>
      <div data-aos="zoom-in" data-aos-delay="400" className='lg:w-[50%] w-full flex flex-col justify-center items-start gap-8 bg-black lg:p-16 p-8 rounded-3xl' >
        <h1 className='text-white text-[45px] font-semibold font-ubuntu'>Let's talk your project</h1>
        <div id='form-box' className='w-full bg-transparent flex flex-col justify-center items-center gap-4'>
          <input type="text" className='w-full text-white bg-slate-900 px-6 py-4 rounded-lg border-none font-ubuntu' placeholder='Enter your full name' />
          <div className='w-full flex justify-center items-start gap-4'>
          <input type="email" className='w-full text-white bg-slate-900 px-6 py-4 rounded-lg border-none font-ubuntu' placeholder='email@address.com' />
          <input type="number" className='w-full text-white bg-slate-900 px-6 py-4 rounded-lg border-none font-ubuntu' placeholder='mobile number' />
          </div>
          <textarea name="" id="" className='w-full text-white bg-slate-900 px-6 py-4 rounded-lg border-none font-ubuntu' rows="4" placeholder='Enter your message' ></textarea>
          <button className='bg-limegreen px-6 py-4 w-full rounded-md font-semibold text-md font-ubuntu'>Submit Now</button>
        </div>
      </div>
    </section>
  )
}

export default Contact