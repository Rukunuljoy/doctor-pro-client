
const Banner = () => {
  return (
    <div className="hero min-h-screen" style={{ backgroundImage: `url("https://st.depositphotos.com/1594308/2420/i/450/depositphotos_24208201-stock-photo-physician-at-workplace.jpg")` }}>
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content text-center text-neutral-content">
      <div className="" data-aos="fade-right">
      <div>
      <p className="mb-3 text-2xl text-gray-200 font-semibold">
            Doctor & appointment
          </p>
          <h1 className="mb-5 text-gray-200 text-4xl font-bold">
            <span className="text-lime-400">Find The Best Doctor, make</span> <br/>an appointment
          </h1>
          
          <div className=" ">
            <select className="select text-gray-500 mb-3 w-full max-w-xs">
              <option disabled selected>
                Your Symptoms select to your application
              </option>
              <option>headaceh</option>
              <option>fever</option>
              <option>coff</option>
              <option>cancer</option>
              <option>operation</option>
            </select><br/>
            
            <button className="btn bg-gradient-to-tr text-white btn-outline hover:bg-lime-500 hover:border-none">Search</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};
export default Banner;
