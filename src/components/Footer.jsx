import React from 'react'

export const Footer = () => {
  return (
    <footer id='main-footer' className='text-center p-4'>
      <div className='footer-content'>
        <p>
          &copy; <span>{new Date().getFullYear()}</span>{' '}
          <span className='bold-logo-span'>Sà</span>
          <span className='light-logo-span'>lat</span> | Berlin
        </p>
      </div>
    </footer>
  )
}
