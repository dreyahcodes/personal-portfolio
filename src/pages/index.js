import React from 'react'
import Helmet from 'react-helmet'

import { client } from '../apollo/client'
import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

import thumb01 from '../assets/images/thumbs/Google_replica.png'
import thumb02 from '../assets/images/thumbs/Personal_site.png'
import thumb03 from '../assets/images/thumbs/Personal_site_codepen.png'
import thumb04 from '../assets/images/thumbs/Tribute_page.png'
// import thumb05 from '../assets/images/thumbs/05.jpg'
// import thumb06 from '../assets/images/thumbs/06.jpg'

// import full01 from '../assets/images/fulls/01.jpg'
// import full02 from '../assets/images/fulls/02.jpg'
// import full03 from '../assets/images/fulls/03.jpg'
// import full04 from '../assets/images/fulls/04.jpg'
// import full05 from '../assets/images/fulls/05.jpg'
// import full06 from '../assets/images/fulls/06.jpg'

const image1Src = 'https://google-replica-site.netlify.com/'
const image2Src = 'https://dreyahcodes.github.io/'
const image3Src = 'https://codepen.io/dreyahcodes/full/mxLRgN'
const image4Src = 'https://codepen.io/dreyahcodes/full/EEWgvG'

const DEFAULT_IMAGES = [
  {
    id: '1',
    src: image1Src,
    thumbnail: thumb01,
    caption: 'Google home page replica',
    description:
      '6 months into coding: Created pixel-perfect replica of google homepage at full screen width using html, css(flexbox).',
  },
  {
    id: '2',
    src: image2Src,
    thumbnail: thumb02,
    caption: 'Personal Project Site',
    description:
      '4 months into coding: Created using Jekyll, Gulp, Sass, Pug and JavaScript.',
  },
  {
    id: '3',
    src: image3Src,
    thumbnail: thumb03,
    caption: 'Personal Portfolio site',
    description: '1 month into coding: Created using html, css, bootstrap.',
  },
  {
    id: '4',
    src: image4Src,
    thumbnail: thumb04,
    caption: 'Tribute page to Katherine Johnson',
    description:
      '2 weeks in coding: Created my first website - a tribute page to Katherine Johnson using html, css and bootstrap',
  },
  // {
  //   id: '5',
  //   src: full05,
  //   thumbnail: thumb05,
  //   caption: 'Photo 5',
  //   description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  // },
  // {
  //   id: '6',
  //   src: full06,
  //   thumbnail: thumb06,
  //   caption: 'Photo 6',
  //   description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  // },
]

class HomeIndex extends React.Component {
  constructor() {
    super()

    this.state = {
      lightboxIsOpen: false,
      currentImage: 0,
      extraTextIsVisible: false,
      showSuccessMessage: false,
      form: {
        name: '',
        email: '',
        message: '',
      },
    }

    this.closeLightbox = this.closeLightbox.bind(this)
    this.gotoNext = this.gotoNext.bind(this)
    this.gotoPrevious = this.gotoPrevious.bind(this)
    this.openLightbox = this.openLightbox.bind(this)
    this.handleClickImage = this.handleClickImage.bind(this)
  }

  toggleExtraText = () => {
    this.setState(currentState => ({
      extraTextIsVisible: !currentState.extraTextIsVisible,
    }))
  }

  openLightbox(index, event) {
    event.preventDefault()
    this.setState({
      currentImage: index,
      lightboxIsOpen: true,
    })
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    })
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    })
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    })
  }
  handleClickImage() {
    if (this.state.currentImage === this.props.images.length - 1) return

    this.gotoNext()
  }

  showSuccessMessage = () => {
    this.setState(() => ({
      showSuccessMessage: true,
    }))
  }

  onChangeInput = (event, inputName) => {
    const userInput = event.target.value
    console.log(userInput, inputName)

    this.setState(currentState => {
      return {
        form: { ...currentState.form, [inputName]: userInput },
      }
    })
  }

  onSubmit = e => {
    e.preventDefault()
    const { name, email, message } = this.state.form
    client
      .request(
        `mutation createAnInquiry(
          $name: String!
          $email: String!
          $message: String!
        ) {
          createInquiry(name: $name, email: $email, message: $message) {
            id
            name
            message
          }
        }
      `,
        {
          name,
          email,
          message,
        }
      )
      .then(result => {
        console.log('result', result)
        this.setState(
          {
            form: {
              name: '',
              email: '',
              message: '',
            },
          },
          () => this.showSuccessMessage()
        )
      })
  }

  render() {
    const siteTitle = "Dreyah's Portfolio"
    const siteDescription = "Dreyah's Portfolio "

    // var formName = this.state.form.name
    // var formMessage = this.state.form.message
    // var formEmail = this.state.form.email

    const { name, email, message } = this.state.form

    return (
      <Layout>
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Helmet>

        <div id="main">
          <section id="one">
            <header className="major">
              <h2>About Me</h2>
            </header>
            <p>
              With over 7 years of experience in the US fitness industry, I
              recently transitioned into the technology space. I started
              learning how to code about 8 months ago and I am familiar with
              core HTML, CSS and some JavaScript, which is where I am currently
              in my code-learning journey. I am also quite proficient in using
              design applications specifically, Sketch and Adobe Photoshop.
            </p>
            {this.state.extraTextIsVisible && (
              <React.Fragment>
                <p>
                  As a personal project, 2 years ago I started an online fitness
                  platform called Dreyah Fit. This came about when I wanted to
                  solve a simple problem through technology - create a free
                  online platform for women who needed real-life guidance on how
                  to live healthier lives. I was able to get the Dreyah Fit
                  brand up and running with no prior knowledge, through trial
                  and error, working closely with a team of web developers,
                  designers and managing co-marketing activities with other
                  brands.
                </p>
                <p>
                  This was when my curiosity for software development was born
                  and over time, that curiosity has blossomed into a passion for
                  building web applications. I have a bachelor’s degree in
                  Business Management from Emmanuel College in Boston,
                  Massachusetts. I am driven, motivated and a hard worker. I am
                  also quick to learn and pick up new concepts (such as when I
                  had to learn design tools in order to help the team launching
                  my web app). I have a strong belief in personal growth and a
                  desire to put in my best work no matter what I’m doing. I’d
                  love to find a space where I could learn, grow and express all
                  of these passions.
                </p>
              </React.Fragment>
            )}
            <ul className="actions">
              <li onClick={this.toggleExtraText}>
                <a className="button">
                  {this.state.extraTextIsVisible ? 'See Less' : 'Learn More'}
                </a>
              </li>
            </ul>
          </section>

          <section id="two">
            <h2>Recent Work</h2>

            <Gallery
              images={DEFAULT_IMAGES.map(
                ({ id, src, thumbnail, caption, description }) => ({
                  src,
                  thumbnail,
                  caption,
                  description,
                })
              )}
            />

            {/* <ul className="actions">
              <li>
                <a href="#" className="button">
                  Full Portfolio
                </a>
              </li>
            </ul> */}
          </section>

          <section id="three">
            <h2>Get In Touch</h2>
            <p>Have a question or want to work together?</p>
            <div className="row">
              <div className="8u 12u$(small)">
                <form onSubmit={this.onSubmit}>
                  <div className="row uniform 50%">
                    <div className="6u 12u$(xsmall)">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Enter your name"
                        value={name}
                        onChange={event => this.onChangeInput(event, 'name')}
                      />
                    </div>
                    <div className="6u 12u$(xsmall)">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={event => this.onChangeInput(event, 'email')}
                      />
                    </div>
                    <div className="12u">
                      <textarea
                        name="message"
                        id="message"
                        placeholder="Type a message here"
                        rows="4"
                        value={message}
                        onChange={event => this.onChangeInput(event, 'message')}
                      />
                    </div>
                  </div>
                  <ul
                    style={{
                      marginBottom: 8,
                      marginTop: 24,
                    }}
                    className="actions"
                  >
                    <li>
                      <input type="submit" value="Send Message" />
                    </li>
                  </ul>
                  {this.state.showSuccessMessage && (
                    <p style={{ color: '#42ad8e' }}>
                      Thanks for reaching out, I'll respond shortly!
                    </p>
                  )}
                </form>
              </div>
              <div className="4u 12u$(small)">
                <ul className="labeled-icons">
                  <li>
                    <h3 className="icon fa-home">
                      <span className="label">Address</span>
                    </h3>
                    {/* 1234 Somewhere Rd.
                    <br />
                    Nashville, TN 00000
                    <br /> */}
                    United States
                  </li>
                  {/* <li>
                    <h3 className="icon fa-mobile">
                      <span className="label">Phone</span>
                    </h3>
                    000-000-0000
                  </li> */}
                  <li>
                    <h3 className="icon fa-envelope-o">
                      <span className="label">Email</span>
                    </h3>
                    <a href="mailto:dreyah.a@gmail.com">dreyah.a@gmail.com</a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
