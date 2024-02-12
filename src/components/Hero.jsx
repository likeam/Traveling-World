import React from 'react'

const Hero = ({ hero : {title, subtitle, text, btn1, btn2, img}}) => {
  return (
    <>
     <div className="flex flex-col w-auto h-auto bg-gradient-to-b from-black to-white ">
      <div className='travigo-container grid-items-start justify-items-center'>
        <div className=''>
          <h1 className=''>{title}</h1>
          <h1 className=''>{subtitle}</h1>
          <p className=''>{text}</p>
          <div className='btn'>
            
          </div >
        </div>
        <div className=''>
          <img className=''  src={img} alt= './images/dashboard' />
        </div>
      </div >
     </div >
    </>
  )
}

export default Hero
