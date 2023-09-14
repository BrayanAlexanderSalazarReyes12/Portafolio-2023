import React from 'react'
import logo from "../image/unnamed.jpg"
export default function Index() {
  return (
    <div className='py-10 px-10'>
        <div className='grid md:grid-cols-2'>
            <div className='text-center'>
                <h1 className='text-3xl font-black text-red-500 mb-4'>Brayan Alexander Salazar Reyes</h1>
                <h2 className='font-bold uppercase text-white mb-4'>SOTWARE DEVELOPER <span className='capitalize text-2xl text-black bg-red-500 rounded-2xl p-2 m-1'> Junior</span></h2>
                <h3 className='font-black text-white mb-4'> Systems engineering student, looking for new challenges</h3>
                <div><button className='boton max-[900px]:m-1 max-[900px]:h-12 max-[900px]:rounded-3xl max-[900px]:w-80 mt-3'>Dowload CV</button></div>
            </div>
            <div className='text-white'>
              <img src={logo} alt="brayan alexander salazar reyes" className='logo'/>
            </div>
        </div>
    </div>
  )
}
