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
            <strong>Hi, I'm Dreyah.</strong> I spend most of my time, everyday,
            experimenting with HTML, CSS and JavaScript, while learning how to
            build and manage products. <br /> I am passionate about change
            through technology. <br />
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
