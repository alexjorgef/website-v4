import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import toast, { Toaster } from 'react-hot-toast'
import styled from 'styled-components'

import Layout from '../components/Layout'
import Seo from '../components/Seo'
import { SectionIntro, ContainerLayout, SubTitle } from '../components/common'
import Text from '../components/atoms/Text'
import Button from '../components/atoms/Button'
import { SIZES } from '../constants'

const ContactSection = styled.section`
  text-align: center;
  @media only screen and (min-width: ${SIZES.breakpointLarge}) {
    display: grid;
    grid-template-columns: 0.75fr 1.5fr;
    grid-gap: 5rem;
    text-align: left;
  }
`
const Form = styled.form`
  margin: 50px 0 0 0;
  * {
    width: 100%;
    text-align: left;
  }
  text-align: left;
`
const FormLabel = styled.label`
  font-size: 1rem;
  line-height: 2;
  color: var(--color-text);
  font-family: 'GT-Walsheim-Pro-Bold';
`
const FormInput = styled.input`
  font-size: 1rem;
  color: var(--color-text);
  background-color: var(--color-background);
  border: 4px solid var(--color-text);
  outline: none;
`
const FormText = styled.textarea`
  resize: none;
  font-size: 1rem;
  color: var(--color-text);
  background-color: var(--color-background);
  border: 4px solid var(--color-text);
  outline: none;
`
const ButtonContainer = styled.section`
  display: grid;
  text-align: right;
  justify-content: left;
`

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const ContactPage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          authorEmail
          authorTimezone
          authorAvailableStartDay
          authorAvailableStartHour
          authorAvailableEndDay
          authorAvailableEndHour
        }
      }
    }
  `)

  // https://stackoverflow.com/a/13899011/2042014
  function tConvert(time) {
    time = time
      .toString()
      .match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time]
    if (time.length > 1) {
      time = time.slice(1)
      time[5] = +time[0] < 12 ? 'AM' : 'PM'
      time[0] = +time[0] % 12 || 12
    }
    return time.join('')
  }

  const authorEmail = data.site.siteMetadata.authorEmail
  const authorTimezone = data.site.siteMetadata.authorTimezone
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ]
  const availableStartDay = days[data.site.siteMetadata.authorAvailableStartDay]
  const availableStartHour = tConvert(
    data.site.siteMetadata.authorAvailableStartHour
  )
  const availableEndDay = days[data.site.siteMetadata.authorAvailableEndDay]
  const availableEndHour = tConvert(
    data.site.siteMetadata.authorAvailableEndHour
  )

  const [state, setState] = useState({})

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('https://alexjorgef.netlify.app/contact', {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state
      })
    })
      .then(() => {
        toast.success(
          'Your message was sent successfully! I will contact you soon.'
        )
        setState({
          ...state,
          name: '',
          email: '',
          message: ''
        })
      })
      .catch((error) => {
        toast.success(error)
      })
  }

  return (
    <>
      <Layout>
        <Seo title="Better Together" />

        <SectionIntro>
          <ContainerLayout>
            <ContactSection>
              <div>
                <SubTitle>
                  Together we&apos;re{' '}
                  <b className="text-primary lined-link">stronger</b>
                </SubTitle>
                <Text>
                  I am constantly looking for challenging projects. Connect with
                  me via this form or just send me a email to{' '}
                  <b className="lined-link">{authorEmail}</b>
                </Text>
                <Text>
                  I will be available from {availableStartDay} to{' '}
                  {availableEndDay} from {availableStartHour} until{' '}
                  {availableEndHour} UTC
                  {authorTimezone >= 0 ? '+' : '-'}
                  {authorTimezone}
                </Text>
              </div>
              <Form
                name="contact"
                method="post"
                action="/contact-thanks"
                data-netlify="true"
                netlify-honeypot="bot-field"
                className="form"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="contact" />
                <div>
                  <FormLabel>Your name</FormLabel>
                  <FormInput
                    type="text"
                    name="name"
                    id="name"
                    onChange={handleChange}
                    placeholder="John Doe"
                    value={state.name}
                  ></FormInput>
                </div>
                <div>
                  <FormLabel>Your email</FormLabel>
                  <FormInput
                    type="email"
                    name="email"
                    id="email"
                    onChange={handleChange}
                    placeholder="john@awesome.net"
                    value={state.email}
                  ></FormInput>
                </div>
                <div>
                  <FormLabel>Message</FormLabel>
                  <FormText
                    name="message"
                    id="message"
                    rows="10"
                    onChange={handleChange}
                    placeholder="Hi..."
                    value={state.message}
                  ></FormText>
                </div>
                <ButtonContainer>
                  <Button type="submit">Send</Button>
                </ButtonContainer>
              </Form>
            </ContactSection>
            <Toaster />
          </ContainerLayout>
        </SectionIntro>
      </Layout>
    </>
  )
}

export default ContactPage
