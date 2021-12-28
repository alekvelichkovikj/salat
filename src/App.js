import { About } from './pages/About'
import { Home } from './pages/Home'
import { Navbar } from './components/Navbar'
import { Services } from './pages/Services'
import { Routes, Route } from 'react-router-dom'
import { Contact } from './pages/Contact'
import styled from 'styled-components'
// import { Footer } from './components/Footer'

export const App = () => {
  return (
    <Container>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      {/* {window.innerWidth > 768 ? <Footer /> : ''} */}
    </Container>
  )
}

const Container = styled.div`
  background-color: #1f1f1f;
  color: #f3f3f3;
  min-height: 100vh;
  padding-bottom: 60px;
`
