export const OnlineDetails = () => {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col bg-white  rounded shadow-sm md:justify-center lg:flex-row">
          <div className="flex flex-col justify-between p-5 sm:p-10 border lg:w-1/2">
            <div>
              <p className="mb-2 text-xs font-semibold tracking-wide uppercase">
                New History
              </p>
              <h5 className="max-w-md mb-6 text-3xl font-extrabold leading-none sm:text-4xl">
                The quick, brown fox jumps over a lazy dog
              </h5>
              <p className="mb-6 text-base text-gray-700 md:text-lg sm:mb-8">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae. explicabo.
              </p>
            </div>
            <div className="flex items-center">
              <button
                type="submit"
                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                Get started
              </button>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Learn more
              </a>
            </div>
          </div>
          <div className="flex flex-col ml-2 bg-emerald-300 border justify-between p-5 sm:p-10 lg:w-1/2">
            <div>
              <p className="mb-2 text-xs font-semibold tracking-wide uppercase">
                New History
              </p>
              <h5 className="max-w-md mb-6 text-3xl font-extrabold leading-none sm:text-4xl">
                The first mate and his Skipper too will do
              </h5>
              <p className="mb-6 text-base text-gray-700 md:text-lg sm:mb-8">
                Disrupt inspire and think tank, social entrepreneur but
                preliminary thinking think tank compelling.
              </p>
            </div>
            <div className="flex items-center">
              <button
                type="submit"
                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                Get started
              </button>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };