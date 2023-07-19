import React from 'react'
import Image from "next/image";

type Props = {}

const Hero = (props: Props) => {
  return (
    <div className='hero'>
        <div className='flex-1 pt-36 padding-x'>
            <h1 className='hero__title'>
                Find, Book, or Rent a Car - Quickly & Easily!
            </h1>

            <p className='hero__subtitle'>
                Streamline your car rental experience with our effortless
            </p>
        </div>
    </div>
  )
}

export default Hero