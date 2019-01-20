import React from 'react'
import Helmet from 'react-helmet'
import Template from '../components/Layout'
import Lightbox from 'react-images'
import Gallery from '../components/Gallery'
import { Link } from 'gatsby'
import { Visible } from 'react-grid-system'

import full01 from '../assets/images/fulls/front.jpg'
import full02 from '../assets/images/fulls/01.jpg'
import full03 from '../assets/images/fulls/04.jpg'
import full04 from '../assets/images/fulls/margo.jpg'

import { relative } from 'path'

const DEFAULT_IMAGES = [
  {
    id: '1',
    src: full01,
    thumbnail: full01,
    caption: 'Photo 1',
    description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  },
  {
    id: '2',
    src: full02,
    thumbnail: full02,
    caption: 'Photo 2',
    description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  },
  {
    id: '3',
    src: full03,
    thumbnail: full03,
    caption: 'Photo 3',
    description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  },
  {
    id: '4',
    src: full04,
    thumbnail: full04,
    caption: 'Photo 4',
    description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  },
]

class HomeIndex extends React.Component {
  constructor() {
    super()

    this.state = {
      lightboxIsOpen: false,
      currentImage: 0,
    }

    this.closeLightbox = this.closeLightbox.bind(this)
    this.gotoNext = this.gotoNext.bind(this)
    this.gotoPrevious = this.gotoPrevious.bind(this)
    this.openLightbox = this.openLightbox.bind(this)
    this.handleClickImage = this.handleClickImage.bind(this)
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

  render() {
    const siteTitle = 'The Pines Coffee Lounge & Diner'
    const siteDescription = 'Site description'

    return (
      <Template>
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Helmet>

        <div id="main">
          <section id="one">
            <header className="major">
              <h2>Traditional and honest food.</h2>
            </header>
            <p>
              traditional home cooked food warm, friendly atmosphere well priced
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio odit
              debitis incidunt recusandae dolorum! Amet repudiandae molestiae,
              nihil, optio officia in rem rerum assumenda obcaecati atque esse,
              distinctio dignissimos quas quisquam deserunt placeat earum at vel
              doloremque magnam ea necessitatibus facilis voluptas sint.
              Recusandae quasi aliquam, enim animi eius facilis?
            </p>
            <Visible sm md lg xl>
              <ul className="actions">
                <li>
                  <Link to="/menu">Menu</Link>
                </li>
              </ul>
            </Visible>
          </section>

          <section id="two">
            <h2>Recent Work</h2>

            <Gallery
              style={{ position: relative, zindex: 1 }}
              images={DEFAULT_IMAGES.map(
                ({ id, src, thumbnail, caption, description }) => ({
                  src,
                  thumbnail,
                  caption,
                  description,
                })
              )}
            />
          </section>

          <section id="three">
            <h2>Get In Touch</h2>
            <p>
              Accumsan pellentesque commodo blandit enim arcu non at amet id
              arcu magna. Accumsan orci faucibus id eu lorem semper nunc nisi
              lorem vulputate lorem neque lorem ipsum dolor.
            </p>
            <div className="row">
              <div className="8u 12u$(small)">
                <form method="post" action="#">
                  <div className="row uniform 50%">
                    <div className="6u 12u$(xsmall)">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                      />
                    </div>
                    <div className="6u 12u$(xsmall)">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                      />
                    </div>
                    <div className="12u">
                      <textarea
                        name="message"
                        id="message"
                        placeholder="Message"
                        rows="4"
                      />
                    </div>
                  </div>
                </form>
                <ul className="actions">
                  <li>
                    <input type="submit" value="Send Message" />
                  </li>
                </ul>
              </div>
              <div className="4u 12u$(small)">
                <ul className="labeled-icons">
                  <li>
                    <h3 className="icon fa-home">
                      <span className="label">Address</span>
                    </h3>
                    7 Hope Street
                    <br />
                    Filey
                    <br />
                    North Yorkshire
                    <br />
                    YO14 9DJ
                  </li>
                  <li>
                    <h3 className="icon fa-mobile">
                      <span className="label">Phone</span>
                    </h3>
                    000-000-0000
                  </li>
                  <li>
                    <h3 className="icon fa-envelope-o">
                      <span className="label">Email</span>
                    </h3>
                    <a href="#">hello@untitled.tld</a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </Template>
    )
  }
}

export default HomeIndex
