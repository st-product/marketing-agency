import React, { useEffect } from 'react'
import Slider from 'react-slick'
import testimonials from '../assets/testimonial.png'
import { FaQuoteLeft } from 'react-icons/fa'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { testidata } from '../export'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Clients = () => {

  useEffect(()=>{
    AOS.init({
      offset: 200,
      duration: 400,
      easing: 'ease-in-sine',
    });
  }, [])

  const settings = {
    dots:true,
    infinite:true,
    speed:500,
    slidesToShow:1,
    slidesToScroll:1,
    arrows:false
  };

  return (
    <section id='testimonials' className='w-[90%] m-auto lg:flex-row flex flex-col justify-between items-center gap-2 py-10'>
      <div className='lg:w-[50%] w-full'>
        <img data-aos="zoom-in" data-aos-delay="200" src={testimonials} alt="testimonial-img" className='w-[1000px] h-[550px]' />
      </div>
      <div className='lg:w-[50%] w-full flex flex-col justify-center gap-4 lg:items-start items-center '>
        <h1 data-aos="zoom-in" data-aos-delay="400" className='text-lime-500 font-ubuntu text-[19px] font-semibold'>TESTIMONIALS</h1>
        <h1 data-aos="zoom-in" data-aos-delay="600" className='text-black font-semibold text-[50px] lg:text-[60px] leading-[60px] lg:leading-[70px] font-ubuntu text-center'>What Our Clients Says</h1>
        <div data-aos="zoom-in" data-aos-delay="800" className='w-full mt-10'>
          <Slider {...settings}>
          {
            testidata.map((item, index) =>(
              <div key={index}>
                <div className='w-full flex justify-between items-start gap-6'>
                  <div>
                    <div id='icon-box' className='bg-black p-6 rounded-full '>
                       <FaQuoteLeft className='text-limegreen text-[35px]'/>
                    </div>
                  </div>
                  <div className='flex flex-col justify-center items-start gap-6'>
                    <p className='font-ubuntu text-xl text-justify'>{item.review}</p>
                    <div>
                      <h1 className='text-black font-semibold text-[25px]'>{item.name}</h1>
                      <p className='text-lg'>{item.post}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
          </Slider>
        </div>
      </div>
    </section>
  )
}

export default Clients