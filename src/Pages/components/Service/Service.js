import React from 'react';
import img1 from '../../../assets/1000_F_107405647_4nI4vw8n9eb7OnBqZHwk0aJmq9XpQNEK.jpg'
import img2 from '../../../assets/360_F_200039173_utR4cVSxzhJkS5sTtkTzMtEje1y59n9t.jpg'
import img3 from '../../../assets/mature-woman-talk-doctor.webp'

const Service = () => {
  return (
    <div data-aos="fade-up"
    data-aos-duration="2000" className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-6 sm:mx-auto sm:text-center md:mb-10 lg:max-w-2xl">
        <p className="mb-1 text-xl text-lime-500 font-semibold tracking-wide uppercase md:mb-2">
          New History
        </p>
        <h2 className="text-3xl font-bold text-gray-700">
          Sed ut perspiciatis unde omnis iste natus
        </h2>
      </div>
      <div className="grid gap-6 row-gap-5 lg:grid-cols-3">
        <div className="border p-5">
          <img
            className="object-cover duration-500 hover:scale-110 w-full h-64 mb-6 rounded shadow-lg lg:h-80 xl:h-96"
            src={img1}
            alt=""
          />
          <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
            A slice of heaven
          </h5>
          <p className="text-gray-700">
            O for awesome, this chocka full cuzzie is as rip-off as a cracker.
            Meanwhile, in behind the bicycle shed, Hercules Morse.
          </p>
          <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
            </a>
        </div>
        <div className="border p-5"> 
          <img
            className="object-cover duration-500 hover:scale-110 w-full h-64 mb-6 rounded shadow-lg lg:h-80 xl:h-96"
            src={img2}
            alt=""
          />
          <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
            Disrupt inspire
          </h5>
          <p className="text-gray-700">
            I'll be sure to note that in my log. Smooth as an android's bottom,
            eh, Data? When has justice ever been as simple as a rule book?
          </p>
          <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
            </a>
        </div>
        <div className="border p-5">
          <img
            className="object-cover duration-500 hover:scale-110 w-full h-64 mb-6 rounded shadow-lg lg:h-80 xl:h-96"
            src={img3}
            alt=""
          />
          <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
            Storage shed
          </h5>
          <p className="text-gray-700">
            Yolo ipsum dolor sit amet, consectetur adipiscing elit. Ut ac
            suscipit leo. Carpe diem vulputate est nec commodo rutrum.
          </p>
          <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
            </a>
        </div>
      </div>
     <div className='text-center justify-center my-6'>
     <button className='btn btn-outline hover:bg-lime-500 hover:border-none'>See More</button>
     </div>
    </div>
  );
};
export default Service;