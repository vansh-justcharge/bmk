import React from 'react'
import AboutMyKittyLeft from '../components/AboutMyKittyLeft'
import AboutMyKittyRight from '../components/AboutMyKittyRight'

const AboutMyKitty = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center py-16 px-16 ">
      <AboutMyKittyLeft />
      <AboutMyKittyRight />
    </section>
  )
}

export default AboutMyKitty
