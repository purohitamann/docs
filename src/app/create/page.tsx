'use client'
import CopyCommand from '@/components/CopyCommand'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { div } from 'framer-motion/client'
import React from 'react'

const create = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-stone-50 dark:bg-stone-900 text-stone-800 dark:text-stone-200'>
      <Navbar />
    <div className="flex flex-col items-center justify-center  ">
      
        <h1 className="text-4xl  mb-4">Get Started with boilrplate</h1>
        <p className="text-lg text-center mb-8">
            Create your  project with ease. Choose the stack you want to use and get started in seconds.
        </p>
    
        <div className="flex flex-col items-center">
        
        <a href="/create/templates" className="mb-4">

 <button className="px-6 py-2 bg-stone-800 hover:bg-white hover:text-stone-800 hover:border hover:border-stone-800 text-white font-medium rounded-lg transition-all duration-300">
            Create Project
            </button></a> 
        </div>
<div>
        <p className="text-sm text-stone-600 dark:text-stone-300 mb-2">
            Or, if you prefer to use the CLI, run the command below:
        </p>
        <div className="bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 p-2 rounded-lg font-mono flex flex-col sm:flex-row justify-center items-center gap-4">
      <CopyCommand  command={`npx boilrplate`} />
        </div>
</div>



        <div className="flex flex-col items-center mt-8">
          <p className="text-sm text-stone-600 dark:text-stone-300 mb-2">
            Need help? Check out the documentation.
          </p>
          <a href="/docs" className="text-sm text-stone-800 dark:text-stone-200 hover:underline">
            Documentation
          </a>
          </div>
       


    </div>
    <div>
          <Footer />
          </div>
          </div>
  )
}

export default create
