import React from 'react';
import { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const HappyClients = () => {
    const [counterOn , setCounterOn] = useState(false)
    return (
       
          <ScrollTrigger onEnter={()=>setCounterOn(true)} 
          onExit={()=>setCounterOn(false)}
          >
         <div className="grid md:grid-cols-4 gap-5 text-white sm:grid-cols-1 relative justify-around items-center bg-[url('https://i.ibb.co/WV1WHFd/gettyimages-1022793180-2048x2048.jpg')]   py-36" style={{
            backgroundRepeat:'no-repeat', backgroundSize:'cover', 
         }}
         >
            <div className='w-full absolute top-0 left-0 opacity-50 bg-gray-700 h-full '></div>
         <div className='flex z-10  flex-col items-center'>
            {counterOn && <CountUp className='text-6xl font-bold' start={0} end={17} duration={2} delay={0}/>}
            <p className='text-2xl'>Happy Customers</p>
         
         </div>
         <div className='flex z-10 flex-col items-center'>
            {counterOn && <CountUp className='text-6xl font-bold' start={0} end={97} duration={2} delay={0}/>}
            <p className='text-2xl'>Projects Done</p>
         
         </div>
         <div className='flex z-10 flex-col items-center'>
            {counterOn && <CountUp className='text-6xl font-bold' start={0} end={40} duration={2} delay={0}/>}
            <p className='text-2xl'>Awards</p>
         
         </div>
         <div className='flex z-10 flex-col items-center'>
            {counterOn && <CountUp className='text-6xl font-bold' start={0} end={10} duration={2} delay={0}/>}
            <p className='text-2xl'>Client Works</p>
         
         </div>
         </div>
          </ScrollTrigger>
            
      
    );
};

export default HappyClients;