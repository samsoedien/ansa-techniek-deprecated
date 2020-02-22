import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  TextField,
  Button,
  FormGroup,
  FormControlLabel,
  Checkbox
} from '@material-ui/core';

import styles from './ContactForm.module.scss';

interface IContactFormProps {
  firstName: string;
  lastName: string;
  address: string;
  postalCode: string;
  city: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  offerte: boolean;
  preferredDate: boolean;
  date: Date;
  onChangeCallback: (e: any) => any;
  onSubmitCallback: (e: any) => any;
  // onHandleCheckboxCallback: (e: any) => any
  errors?: Object;
}

const ContactForm: React.FC<IContactFormProps> = ({
  firstName,
  lastName,
  address,
  postalCode,
  city,
  email,
  phone,
  subject,
  message,
  offerte,
  preferredDate,
  date,
  onChangeCallback,
  onSubmitCallback,
  // onHandleCheckboxCallback,
  errors
}) => {
  const onChange = (e: any) => onChangeCallback(e);

  const onSubmit = (e: any) => onSubmitCallback(e);

  const onHandleCheckbox = (name: any) => (e: any) => {
    // onHandleCheckboxCallback(name, e)
    console.log(name, e);
  };

  return (
    <Grid container justify="center">
      <Grid item xs={11} sm={9} md={7} lg={5}>
        <form
          onSubmit={onSubmit}
          className={styles.contactForm}
          noValidate
          autoComplete="off"
        >
          <Grid container justify="space-between">
            <Grid item xs={5}>
              <TextField
                className={styles.contactFormInput}
                label="Voornaam*"
                type="name"
                name="firstName"
                value={firstName}
                onChange={onChange}
                // error={errors.firstName}
                // helperText={errors ? errors.firstName : ''}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                className={styles.contactFormInput}
                label="Achternaam*"
                type="name"
                name="lastName"
                value={lastName}
                onChange={onChange}
                // error={errors.lastName}
                // helperText={errors ? errors.lastName : ''}
              />
            </Grid>
          </Grid>
          <Grid container justify="space-between">
            <Grid item xs={6}>
              <TextField
                className={styles.contactFormInput}
                label="Adres + Huisnummer"
                name="address"
                value={address}
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                className={styles.contactFormInput}
                label="Postcode"
                name="postalCode"
                value={postalCode}
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                className={styles.contactFormInput}
                label="Woonplaats"
                name="city"
                value={city}
                onChange={onChange}
              />
            </Grid>
          </Grid>
          <TextField
            className={styles.contactFormInput}
            label="E-mailadres*"
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            // error={errors.email}
            // helperText={errors ? errors.email : ''}
          />
          <TextField
            className={styles.contactFormInput}
            label="Telefoonnummer*"
            name="phone"
            value={phone}
            onChange={onChange}
            // error={errors.phone}
            // helperText={errors ? errors.phone : ''}
          />
          <br />
          <br />
          <TextField
            className={styles.contactFormInput}
            label="Omschrijving"
            type="subject"
            name="subject"
            value={subject}
            onChange={onChange}
            // error={errors.subject}
            // helperText={errors ? errors.subject : ''}
          />
          <TextField
            className={styles.contactFormInputTextarea}
            label="Uw bericht*"
            multiline
            rows="7"
            name="message"
            value={message}
            onChange={onChange}
            // error={errors.message}
            // helperText={errors ? errors.message : ''}
          />
          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox
                  checked={offerte}
                  onChange={onHandleCheckbox('offerte')}
                  color="primary"
                />
              }
              label="Offerte gewenst"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={preferredDate}
                  onChange={onHandleCheckbox('preferredDate')}
                  color="primary"
                />
              }
              label="Voorkeur datum uitvoering gewenst"
            />
          </FormGroup>
          <TextField
            className={styles.contactFormInputTextarea}
            id="date"
            label="Voorkeur datum uitvoering"
            type="date"
            name="date"
            value={date}
            onChange={onChange}
            InputLabelProps={{
              shrink: true
            }}
            disabled={!preferredDate && true}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            value="Submit"
            className={styles.contactFormButton}
          >
            Verzenden
          </Button>
        </form>
      </Grid>
    </Grid>
  );
};

ContactForm.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  postalCode: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  offerte: PropTypes.bool.isRequired,
  preferredDate: PropTypes.bool.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  onChangeCallback: PropTypes.func.isRequired,
  onSubmitCallback: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired // eslint-disable-line
  // onHandleCheckboxCallback: PropTypes.func.isRequired,
};

export default ContactForm;
