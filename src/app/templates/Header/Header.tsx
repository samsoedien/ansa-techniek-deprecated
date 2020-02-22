import React from 'react'
// import PropTypes from 'prop-types'
import './Header.scss'

import HeroBanner from '../../components/HeroBanner'

interface IHeaderProps {}

const Header: React.FC<IHeaderProps> = () => {
  return (
    <header className="header">
      <HeroBanner />
    </header>
  )
}

Header.propTypes = {}

export default Header
