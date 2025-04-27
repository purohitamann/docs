import Stepper, { Step } from './Stepper/Stepper';
  


import React from 'react'

const Waitlist = () => {
    const [email, setEmail] = React.useState<string>('')
    const [name, setName] = React.useState<string>('')
    const [isLoading, setIsLoading] = React.useState<boolean>(false)
    const [isError, setIsError] = React.useState<boolean>(false)
    const registrants = 100
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
        <h1 className='text-3xl font-bold text-center'>
            Join the waitlist</h1>
      <Stepper
    className="w-full max-w-2xl mx-auto mt-10"
  initialStep={1}
  onStepChange={(step) => {
    console.log(step);
  }}
  onFinalStepCompleted={() => console.log("All steps completed!")}
  backButtonText="Previous"
  nextButtonText="Next"
>
  <Step>
    <div className='flex flex-col items-center justify-center'>
    <h1 className=''>Welcome to the boilrplate CLI!</h1>
    <p>Still working on few robust AI integrations, unitil then signup to be the first one to know when it's live!</p>
    </div>
   
  </Step>
  <Step>
    <h2>What's Your Name??</h2>
 <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your email?" /> 
  </Step>
  <Step>
    <h2>So {name}, What's Your Email??</h2>
    <img style={{ height: '290px', width: '100%', objectFit: 'cover', objectPosition: 'center -70px', borderRadius: '15px', marginTop: '1em' }} src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZm5tbjBnMzdmNTE4bDFncDN2NmNuYW9oZm84Y2I4eXYyMDZmZXcyZCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/uX7yXTe5UrCRW72DNr/200.webp" />
 <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email?" /> 
  </Step>
  <Step>
    <h2>You're All set!</h2>
    <p>Name: {name}</p>
    <p>Email: {email}</p>
    <p>You're here: {registrants}</p>

  </Step>

</Stepper>
    </div>
  )
}

export default Waitlist;
