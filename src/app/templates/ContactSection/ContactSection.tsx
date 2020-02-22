import React from 'react'
// import PropTypes from 'prop-types'
import { Grid, Typography } from '@material-ui/core'

import styles from './ContactSection.module.scss'

const ContactSection = () => {
  return (
    <Grid container justify="center">
      <Grid item xs={11} sm={10} md={8} lg={6} xl={6}>
        <article className="about__article">
          <Typography variant="h3" className={styles.contactHeader}>
            Contact
          </Typography>
          <Typography variant="body1" paragraph>
            Bij een aanvraag van een offerte wordt er eerst de juiste informatie verzamelt over hoe een opdracht
            uitgevoerd moet worden. Dit wordt gedaan om zo goed mogelijk aan uw wensen te voldoen, u duidelijk te
            adviseren en elkaar niet achteraf te verassen met onvoorziende extra kosten. In de meeste gevallen maken wij
            een afspraak om het werk op te nemen en te bespreken. We nodigen u uit om contact op te nemen voor een
            vrijblijvende offerte met een geldigheid van 30 dagen.
          </Typography>
          <Typography variant="body1" paragraph>
            Heeft u een klus of storing kunt u het onderstaande contact formulier invullen. Ook voor vragen kunt u
            hiermee contact met ons opnemen.
          </Typography>
        </article>
      </Grid>
    </Grid>
  )
}

ContactSection.propTypes = {}

export default ContactSection
