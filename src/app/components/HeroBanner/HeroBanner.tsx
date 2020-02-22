import React from 'react'
// import PropTypes from 'prop-types'
import './HeroBanner.scss'

import * as BACKGROUND_IMG from '../../../assets/img/electrician-3087536.jpg'

interface IHeroBannerProps {}

const HeroBanner: React.FC<IHeroBannerProps> = () => {
  return (
    <div className="hero-banner" id="home">
      <div className="hero-banner__image" style={{ backgroundImage: `url(${BACKGROUND_IMG})` }}>
        <div className="hero-banner__overlay">
          <h2 className="hero-banner__heading">Welkom bij Ansa-Techniek</h2>
          <p className="hero-banner__subheading">
            Uw technisch vakman in het verlenen van installatietechniek aan huis.{' '}
          </p>
        </div>
      </div>
    </div>
  )
}

HeroBanner.propTypes = {}

export default HeroBanner
