import React, { useState } from 'react'
import styled from 'styled-components'
import { NavLink, Link } from 'react-router-dom'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Nav>
      <Logo onClick={() => setIsOpen(false)}>
        <Link to='/'>
          Sà<span>lat</span>
        </Link>
      </Logo>

      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>

      <Menu className='menu' isOpen={isOpen}>
        <MenuLink onClick={() => setIsOpen(false)}>
          <NavLink activeclassname='active-link' to='/'>
            Home
          </NavLink>
        </MenuLink>

        <MenuLink onClick={() => setIsOpen(false)}>
          <NavLink activeclassname='active-link' to='/about'>
            About
          </NavLink>
        </MenuLink>

        <MenuLink onClick={() => setIsOpen(false)}>
          <NavLink activeclassname='active-link' to='/services'>
            Services
          </NavLink>
        </MenuLink>

        <MenuLink onClick={() => setIsOpen(false)}>
          <NavLink activeclassname='active-link' to='/contact'>
            Contact
          </NavLink>
        </MenuLink>
      </Menu>
    </Nav>
  )
}

const Nav = styled.div`
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background-color: #f7f7f7;
`

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 2px;
    width: 25px;
    background-color: #1f1f1f;
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`

const Menu = styled.div`
  display: flex;
  justfy-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${({ isOpen }) => (isOpen ? '300px' : '0')};
    transition: max-height 0.3s ease-in;
  }
`

const MenuLink = styled.span`
  padding: 20px 30px;
  text-align: center;
`

const Logo = styled.span`
  padding: 20px 0;
  font-weight: 800;
  font-size: 28px;

  span {
    font-weight: 300;
    font-size: 20px;
    color: #1f1f1f;
  }
`
