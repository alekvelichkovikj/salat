import React from 'react'
import { FaPalette } from 'react-icons/fa'
import CountUp from 'react-countup'

export const About = () => {
  return (
    <div>
      <div className='hero-about'>
        <h1>Über Uns</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
          praesentium.
        </p>
        <span className='line' />
      </div>

      <div className='container '>
        <h3>
          <span
            style={{
              display: 'block',
            }}
          >
            <FaPalette />
          </span>{' '}
          Unsere Story
        </h3>
        <div className='about-card'>
          <div className='img'></div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            voluptatum nemo quae, nam fugit voluptas beatae illo sit sed
            repellendus in fuga nulla provident itaque dolor doloremque
            aspernatur quas nesciunt? Facere labore voluptates totam fugit
            officiis incidunt quo. Iusto accusamus placeat, ex, libero laborum
            officia velit soluta officiis, natus perferendis modi quis facilis
            pariatur nostrum nulla! Fugiat, culpa! Quas nam sequi dignissimos
            quos eum asperiores, culpa at sit officiis harum tenetur in
            necessitatibus minus tempora perferendis rem neque amet porro ut
            deserunt veniam iure minima voluptatum? Expedita quod fugit
            architecto cumque voluptates quasi aspernatur velit ipsa culpa amet
            voluptas necessitatibus, iste vero aut perferendis voluptatum!
            Dolores, aperiam asperiores laborum placeat distinctio sit eveniet
            natus eum sunt aliquam praesentium? Voluptatibus, laboriosam.
          </p>
        </div>
      </div>

      <span
        className='line'
        style={{
          display: 'block',
          maxWidth: '300px',
          margin: '50px auto 0 auto',
        }}
      />

      <div className='counter-card'>
        <div>
          <h1>{<CountUp start={0} end={2010} duration={5} />}</h1>
          <p>
            <span className='text-blue'>Established</span>
          </p>
        </div>

        <div>
          <h1>{<CountUp start={0} end={50} duration={5} />}+</h1>
          <p>
            <span className='text-blue'>Satisfied Customers</span>
          </p>
        </div>
      </div>

      <span
        className='line no-show'
        style={{
          display: 'block',
          maxWidth: '300px',
          margin: '50px auto 0 auto',
        }}
      />
    </div>
  )
}
