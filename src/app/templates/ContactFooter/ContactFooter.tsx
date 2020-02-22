import React from 'react'
// import PropTypes from 'prop-types'
import { Grid, Typography } from '@material-ui/core'

const ContactFooter = () => {
  return (
    <Grid container justify="center">
      <Grid item xs={11} sm={10} md={8} lg={6} xl={6}>
        <article className="about__article">
          <Typography variant="body1" paragraph>
            Alle uitgevoerde werkzaamheden worden met 1 jaar garantie geleverd op montage en materiaal. Indien de klant
            zelf over de materalen beschik, wordt er alleen garantie gegeven op de montage.
          </Typography>
        </article>
      </Grid>
    </Grid>
  )
}

ContactFooter.propTypes = {}

export default ContactFooter
