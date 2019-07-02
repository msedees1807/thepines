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
    caption: 'Find us in Filey, North Yorkshire',
    description: 'Open all year round.',
  },
  {
    id: '2',
    src: full02,
    thumbnail: full02,
    caption: 'Warm & Friendly',
    description: 'Inside we offer a warm and welcoming environment.',
  },
  {
    id: '3',
    src: full03,
    thumbnail: full03,
    caption: 'Reasonably priced',
    description: 'Our menu offers something for everyone.',
  },
  {
    id: '4',
    src: full04,
    thumbnail: full04,
    caption: 'Family owned and managed',
    description:
      'Since 2003, we have apreciated the support of our customers. Thank you.',
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
          <link
            href="https://fonts.googleapis.com/css?family=Indie+Flower&display=swap"
            rel="stylesheet"
          />
        </Helmet>

        <div id="main">
          <section id="one">
            <header className="major">
              <h2>Traditional and honest food.</h2>
            </header>
            <p>
              Malcolm and Margaret, would like to welcome you to our cafe, which
              has a warm and friendly atmosphere. We provide an extensive
              selection of delicious home cooked food, at very reasonable
              prices. Breakfasts (served until 11:30am) Hot and cold meals,
              snacks, drinks and desserts.
            </p>
            <h2>Open daily 9.30am - 3.00pm</h2>
            <h4>(Closed Thursdays)</h4>
            <Visible sm md lg xl>
              <ul className="actions">
                <li>
                  <Link to="/menu" style={{ fontSize: '2em' }}>
                    View Menu
                  </Link>
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
        </div>
      </Template>
    )
  }
}

export default HomeIndex