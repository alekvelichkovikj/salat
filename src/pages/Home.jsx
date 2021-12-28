import React from 'react'
import { Testimonials } from '../components/Testimonials'

export const Home = () => {
  return (
    <div>
      <div className='hero'>
        <h5>
          Digitale Buchhaltung & Lohnabrechnung Finanzen, Buchhaltung, HR &
          Compliance alles auf einer Plattform
        </h5>
        <span className='line' />
      </div>

      <Testimonials />
    </div>
  )
}
