import React from 'react'

const create = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      
        <h1 className="text-4xl  mb-4">Get Started with boilrplate</h1>
        <p className="text-lg text-center mb-8">
            Create your  project with ease. Choose a template and get started!
        </p>
    
        <div className="flex flex-col items-center">
        
        <a href="/create/templates" className="mb-4">

 <button className="px-6 py-2 bg-stone-800 hover:bg-white hover:text-stone-800 hover:border hover:border-stone-800 text-white font-medium rounded-lg transition-all duration-300">
            Create Project
            </button></a> 
        </div>






    </div>
  )
}

export default create
