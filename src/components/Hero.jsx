import React from 'react'

const Hero = ({ hero : {title, subtitle, text, btn1, btn2, img}}) => {
  return (
    <>
     <div className='flex flex-col w-auto h-auto bg-gradient-to-b from-emerland-200 to-white' >
      <div className=''>
        <div className=''>
          <h1 className=''>{title}</h1>
          <h1 className=''>{subtitle}</h1>
          <p className=''>{text}</p>
          <div className=''>
            <button  className='' type='button '>{btn1}</button >
            <button  className='' type='button '>{btn2}</button >
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
