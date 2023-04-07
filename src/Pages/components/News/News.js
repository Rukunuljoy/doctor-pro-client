import React from "react";
import img1 from '../../../assets/1000_F_112626753_iPGs38wxhpCJZJ59ziaAhkvlGSlF5Ged.jpg'
import img2 from '../../../assets/1000_F_141411242_9nhzWGOrafq6EulJ99tqKnnESobJqizp.jpg'
import img3 from '../../../assets/1000_F_246926658_n5qVv00VwmtdZiv1V3vaRKU9YIePxV6a.jpg'

export const News = () => {
    return (
      <div data-aos="zoom-in" data-aos-duration="1000" className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-6 sm:mx-auto sm:text-center md:mb-10 lg:max-w-2xl">
          <p className="mb-1 text-4xl font-semibold tracking-wide uppercase md:mb-2">
            News & Updates
          </p>
          <p className="text-base text-gray-700 md:text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae.
          </p>
        </div>
        <div className="grid gap-6 row-gap-5 lg:grid-cols-3">
          <div className="card border">
            <img
              className="object-cover duration-500 hover:scale-110 w-full h-64 mb-6 rounded shadow-lg lg:h-80 xl:h-96"
              src={img1}
              alt=""
            />
            <div className="p-5">
            <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
              A slice of heaven
            </h5>
            <p className="text-gray-700">
              O for awesome, this chocka full cuzzie is as rip-off as a cracker.
              Meanwhile, in behind the bicycle shed, Hercules Morse.
            </p>
            </div>
          </div>
          <div className="card border">
            <img
              className="object-cover duration-500 hover:scale-110 w-full h-64 mb-6 rounded shadow-lg lg:h-80 xl:h-96"
              src={img2}
              alt=""
            />
           <div className="p-5">
           <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
              Disrupt inspire
            </h5>
            <p className="text-gray-700">
              I'll be sure to note that in my log. Smooth as an android's bottom,
              eh, Data? When has justice ever been as simple as a rule book?
            </p>
           </div>
          </div>
          <div className="card border">
            <img
              className="object-cover duration-500 hover:scale-110 w-full h-64 mb-6 rounded shadow-lg lg:h-80 xl:h-96"
              src={img3}
              alt=""
            />
           <div className="p-5">
           <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
              Storage shed
            </h5>
            <p className="text-gray-700">
              Yolo ipsum dolor sit amet, consectetur adipiscing elit. Ut ac
              suscipit leo. Carpe diem vulputate est nec commodo rutrum.
            </p>
           </div>
          </div>
        </div>
      </div>
    );
  };