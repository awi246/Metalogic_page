
import { useState } from 'react'
import './../styles/Nav.css'
const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')

  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav ==="#"? 'active':''}>Home</a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav ==="#about"? 'active':''} >Approach</a>

      <a href="#f-wrapper" onClick={() => setActiveNav('#f-wrapper')} className={activeNav ==="#f-wrapper"? 'active':''}>Foundation</a>
    
    </nav>

    )
}

export default Nav
