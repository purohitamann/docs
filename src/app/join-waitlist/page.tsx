'use client';
import React from 'react'
import Waitlist from '@/components/waitlist'
import TextPressure from '@/components/TextPressure/TextPressure'
const page = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      {/* <Waitlist /> */}
      <div className='flex flex-col items-center justify-center'>
      <TextPressure
          text="Boilrplate"
          flex={true}
          alpha={false}
          stroke={false}
          width={true}
          weight={true}
          italic={true}
          textColor="#ffffff"
          strokeColor="#ff0000"
          minFontSize={28}
        />
      </div>

    </div>
  )
}

export default page
