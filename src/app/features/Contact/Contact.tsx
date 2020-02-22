import React, { useEffect, useState } from 'react'
// import PropTypes from 'prop-types'

import ContactForm from '../../templates/ContactForm'

interface IContactFormContainerProps {}

const ContactFormContainer: React.FC<IContactFormContainerProps> = () => {
  useEffect(() => {
    console.log('hi')
  }, [])

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    postalCode: '',
    city: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    date: new Date(),
    preferredDate: false,
    offerte: false,
    selectedFile: null,
    errors: {},
  })

  const {
    firstName,
    lastName,
    address,
    postalCode,
    city,
    email,
    phone,
    subject,
    message,
    date,
    preferredDate,
    offerte,
    errors,
  } = formData

  const onChangeCallback = (e: any) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSubmitCallback = (e: any) => {
    e.preventDefault()
    const contactData = {
      ...formData,
    }
    // emailContact(contactData);
    console.log(contactData)
  }

  const onHandleCheckboxCallback = (name: any, e: any) => setFormData({ ...formData, [name]: e.target.checked })

  return (
    <ContactForm
      firstName={firstName}
      lastName={lastName}
      address={address}
      postalCode={postalCode}
      city={city}
      email={email}
      phone={phone}
      subject={subject}
      message={message}
      date={date}
      preferredDate={preferredDate}
      offerte={offerte}
      errors={errors}
      onChangeCallback={onChangeCallback}
      onSubmitCallback={onSubmitCallback}
      onHandleCheckboxCallback={onHandleCheckboxCallback}
    />
  )
}

ContactFormContainer.propTypes = {
  // emailContact: PropTypes.func.isRequired,
}

export default ContactFormContainer
