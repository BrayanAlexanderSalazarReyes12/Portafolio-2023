import React from 'react'
import js from '../image/JS.png'
import reactL from '../image/react.png'
import javaL from '../image/java.png'
import gitL from '../image/git.png'

export default function Skills() {
  return (
    <div className='bg-zinc-950 py-10 flex justify-center items-center flex-col p-5' id='skills'>
      <div className='flex justify-center items-center flex-col p-5 bg-zinc-900 rounded-xl'>
        <p className='text-red-700 uppercase font-bold items-center text-2xl'>Skills</p>
        <div className='m-5 grid md:grid-cols-4 md:grid-rows-1 gap-5 grid-cols-2 grid-rows-2'>
          <div className='h-32 w-24 bg-zinc-950 p-2 m-7 rounded-xl'>
            <img src={js} alt="JavaScript" />
            <p className='text-white font-semibold'>Java Script</p>
          </div>
          <div className='h-32 w-24 bg-zinc-950 p-2 m-7 rounded-xl'>
            <img src={reactL} alt="JavaScript" />
            <p className='text-white font-semibold ml-5'>React</p>
          </div>
          <div className='h-32 w-24 bg-zinc-950 p-2 m-7 rounded-xl'>
            <img src={javaL} alt="JavaScript"/>
            <p className='text-white font-semibold ml-6'>Java</p>
          </div>
          <div className='h-32 w-24 bg-zinc-950 p-2 m-7 rounded-xl'>
            <img src={gitL} alt="JavaScript" />
            <p className='text-white font-semibold ml-8 mt-1'>Git</p>
          </div>
        </div>
      </div>
    </div>
  )
}
