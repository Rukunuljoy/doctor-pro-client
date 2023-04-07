import React from "react";
import img1 from '../../../assets/images.jpeg'
import img2 from '../../../assets/1000_F_141411242_9nhzWGOrafq6EulJ99tqKnnESobJqizp.jpg'
import img3 from '../../../assets/jackf191009358.webp'
import img4 from '../../../assets/mature-woman-talk-doctor.webp'

export const Gallery = () => {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="mb-6 lg:justify-center text-center  md:mb-8">
          <h2 className="text-4xl mb-4 font-bold">
            Our All <span className="text-lime-500">Doctors images</span>
          </h2>
          <p className="text-gray-700 lg:text-lg ">
            "Class is dead", says Foucault; however, according to Reicher, <br/> it is
            not so much class that is dead,
          </p>
        </div>
        <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
          <a href="/" aria-label="View Item">
            <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src={img1}
                alt=""
              />
              <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-4 text-lg font-bold text-gray-100">Mona Lisa</p>
                <p className="text-sm tracking-wide text-gray-300">
                  Painted between 1503 and 1517, Da Vinci’s alluring portrait has
                  been dogged by two questions since the day it was made: Who’s
                  the subject and why is she smiling?
                </p>
              </div>
            </div>
          </a>
          <a href="/" aria-label="View Item">
            <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src={img2}
                alt=""
              />
              <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-4 text-lg font-bold text-gray-100">
                  The Starry Night
                </p>
                <p className="text-sm tracking-wide text-gray-300">
                  Vincent Van Gogh’s most popular painting, The Starry Night was
                  created by Van Gogh at the asylum in Saint-Rémy, where he’d
                  committed himself in 1889.
                </p>
              </div>
            </div>
          </a>
          <a href="/" aria-label="View Item">
            <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src={img3}
                alt=""
              />
              <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-4 text-lg font-bold text-gray-100">The Kiss</p>
                <p className="text-sm tracking-wide text-gray-300">
                  Opulently gilded and extravagantly patterned, The Kiss, Gustav
                  Klimt’s fin-de-siècle portrayal of intimacy, is a mix of
                  Symbolism and Vienna Jugendstil, the Austrian variant of Art
                  Nouveau.
                </p>
              </div>
            </div>
          </a>
          <a href="/" aria-label="View Item">
            <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src={img4}
                alt=""
              />
              <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-4 text-lg font-bold text-gray-100">
                  The Harvesters
                </p>
                <p className="text-sm tracking-wide text-gray-300">
                  Bruegel’s fanfare for the common man is considered one of the
                  defining works of Western art. This composition was one of six
                  created on the theme of the seasons.
                </p>
              </div>
            </div>
          </a>
        </div>
        <div className="text-center">
          <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            View gallery
            <svg
              className="inline-block w-3 ml-2"
              fill="currentColor"
              viewBox="0 0 12 12"
            >
              <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
            </svg>
          </a>
        </div>
      </div>
    );
  };