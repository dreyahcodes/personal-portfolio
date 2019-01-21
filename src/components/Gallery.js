import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Lightbox from 'react-images'

class Gallery extends Component {
  constructor() {
    super()

    this.state = {
      lightboxIsOpen: false,
      currentImage: 0,
    }

    this.closeLightbox = this.closeLightbox.bind(this)
    this.gotoNext = this.gotoNext.bind(this)
    this.gotoPrevious = this.gotoPrevious.bind(this)
    this.gotoImage = this.gotoImage.bind(this)
    this.handleClickImage = this.handleClickImage.bind(this)
    this.openLightbox = this.openLightbox.bind(this)
  }
  openLightbox(index, event) {
    // event.preventDefault()
    // this.setState({
    //   currentImage: index,
    //   lightboxIsOpen: true,
    // })
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
  gotoImage(index) {
    this.setState({
      currentImage: index,
    })
  }
  handleClickImage() {
    if (this.state.currentImage === this.props.images.length - 1) return

    this.gotoNext()
  }
  renderGallery() {
    const { images } = this.props

    if (!images) return

    const gallery = images.map((obj, i) => {
      return (
        <article className="gallery-item" style={styles.galleryItem} key={i}>
          <a
            className="image fit thumb"
            target="_blank"
            href={obj.src}
            onClick={e => this.openLightbox(i, e)}
          >
            <img src={obj.thumbnail} />
          </a>

          <h3 style={styles.galleryItemTitle}>{obj.caption}</h3>
          <p style={styles.galleryItemText}>{obj.description}</p>
        </article>
      )
    })

    return <div style={styles.galleryRow}>{gallery}</div>
  }
  render() {
    return (
      <div>
        {this.renderGallery()}
        <Lightbox
          currentImage={this.state.currentImage}
          images={this.props.images}
          isOpen={this.state.lightboxIsOpen}
          onClickImage={this.handleClickImage}
          onClickNext={this.gotoNext}
          onClickPrev={this.gotoPrevious}
          onClickThumbnail={this.gotoImage}
          onClose={this.closeLightbox}
        />
      </div>
    )
  }
}

Gallery.displayName = 'Gallery'
Gallery.propTypes = {
  images: PropTypes.array,
}

const styles = {
  galleryRow: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  galleryItem: {
    width: '48%',
    marginBottom: '36px',
  },
  galleryItemTitle: {
    fontSize: '1em',
    margin: 0,
  },
  galleryItemText: {
    fontSize: '0.8em',
    lineHeight: '1.5em',
    margin: 0,
  },
}

export default Gallery
