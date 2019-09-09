import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar_dreyah.jpg'

class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <div className="inner">
          <a href="#" className="image avatar">
            <img src={avatar} alt="" />
          </a>
          <h1>
            <strong>Hi, I'm Dreyah.</strong> I'm passionate about solving real
            world problems. <br /> Totally in love with the web and web
            technologies. I spend most of my time expanding my knowledge on
            software development, while learning how to build and manage
            products, people and community. <br />
            {/* Also creator, and blogger at{' '}
            <a href="http://www.dreyahfit.com/">Dreyah Fit</a> a fitness
            platform for women. */}
          </h1>
        </div>
        <Footer />
      </header>
    )
  }
}

export default Header
