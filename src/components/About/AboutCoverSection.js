import Image from 'next/image'
import React from 'react'
import profileCharacter from "../../../public/LOGOCALD.png"

const AboutCoverSection = () => {
  return (
    <section className='w-full md:h-[75vh] border-b-2 border-solid border-dark dark:border-light flex flex-col md:flex-row items-center justify-center text-dark dark:text-light'>
        <div className='w-full md:w-1/2 h-full border-r-2 border-solid border-dark dark:border-light flex justify-center'> 
            <Image src={profileCharacter} alt="CALDToolkit" 
            className='w-4/5  xs:w-3/4 md:w-full h-full object-contain object-center'
            priority
            sizes="(max-width: 768px) 100vw,(max-width: 1180px) 50vw, 50vw"
            />
        </div>

        <div className='w-full md:w-1/2 flex flex-col text-left items-start justify-center px-5 xs:p-10 pb-10 lg:px-16'>
            <h2 className='font-bold capitalize text-4xl xs:text-5xl sxl:text-6xl  text-center lg:text-left'>
            Diversity is our strength—true progress begins when every culture has a voice and every voice is heard.
            </h2>
            <p className='font-medium capitalize mt-4 text-base'>
            A CALD engagement toolkit is essential for strengthening the inclusion of culturally and linguistically diverse communities in population health research and services. It provides practical guidance for researchers and practitioners to co-design, implement, and evaluate initiatives that are culturally responsive and equitable. By addressing barriers to participation and fostering trust, the toolkit helps ensure CALD voices are meaningfully represented in research priorities, data collection, and health service design—ultimately leading to more inclusive policies, better health outcomes, and reduced inequities across diverse populations.
            </p>
        </div>
    </section>
  )
}

export default AboutCoverSection