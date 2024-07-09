import { howItWorks, missions } from '@/constants'
import { CheckCircle } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Mission = () => {
  return (
    <section className="flex justify-between items-center p-10 w-full flex-col">
        <div className="mission">
            <h1 className='text-3xl font-bold text-center mb-10'>Our <span className='text-green-1'>Mission</span></h1>
            <div className="mission-list">
                {missions.map((mission) => (
                    <div className='flex gap-2 mb-5'>
                        <CheckCircle className='text-green-2' />
                        <p>{mission}</p>
                    </div>
                ))}
            </div>
        </div>
        <div className="my-10">
            <h1 className='text-3xl font-bold mb-10 text-center'>How it <span className='text-green-1'>works</span> </h1>
            <div className="how-it-work grid sm:grid-cols-2 xs:grid-cols-1 gap-2 md:grid-cols-3 text-white-5">
                {howItWorks.map((process) => (
                    <div className='shadow-lg p-10 rounded-lg bg-green-2 flex flex-col'>
                        <div className="w-full max-h-[150px]">
                        <Image src={process.picture} width={150} height={150} alt={process.picture} className='w-full h-full' />

                        </div>
                        <h2 className='font-bold my-2 '>{process.step}</h2>
                        <p className='font-semibold'>{process.text}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Mission