import React from 'react'
import Flickity from 'react-flickity-component'
import '../flickity.css'
import { FaComments } from 'react-icons/fa'

export const Testimonials = () => {
  const flickityOptions = {
    initialIndex: 1,
  }
  return (
    <div className='testimonials'>
      <div>
        <h3>
          <FaComments /> Testimonials
        </h3>
        <Flickity
          className={'carousel'} // default ''
          elementType={'div'} // default 'div'
          options={flickityOptions} // takes flickity options {}
          disableImagesLoaded={false} // default false
          reloadOnUpdate // default false
          static // default false
        >
          <p className='card'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit,
            at.
            <span className='author'>
              By: <span className='text-blue'>BurgerMeister</span>
            </span>
          </p>
          <p className='card'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium neque recusandae nisi repudiandae ab illo fugiat
            blanditiis. Expedita, repellendus ut.
            <span className='author'>
              By: <span className='text-blue'>BurgerMeister</span>
            </span>
          </p>
          <p className='card'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime
            unde rerum delectus assumenda quia, temporibus eum autem quibusdam.
            Harum cumque magni sint ea earum quas eum aspernatur error fugit
            iure!
            <span className='author'>
              By: <span className='text-blue'>BurgerMeister</span>
            </span>
          </p>
        </Flickity>
      </div>
    </div>
  )
}
