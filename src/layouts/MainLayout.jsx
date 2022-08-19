import React, {useState} from 'react'
import Navbar from '../components/Navbar/Navbar'
import NavbarMenu from '../components/NavbarMenu/NavbarMenu'

const MainLayout = ({handler, navbarProps }) => {
  const [navbar, setNavbar] = useState(false);
  const clickHandler = () => {
    setNavbar(!navbar);
  };

  return (
    <div>
      <NavbarMenu handler={clickHandler} navbarProps={navbar} />
      <Navbar navbarProps={navbar} />
    </div>
  )
}

export default MainLayout