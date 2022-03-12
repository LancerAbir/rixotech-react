import React from 'react'
import { Container, Section } from '../styledComponents/container'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header'
import HeroSection from '../pages/home/HeroSection/HeroSection'

interface Props{
    children: React.ReactNode
}

function DefaultLayout({children}: Props) {
  return (
      <React.Fragment>      
        <Section>
            <Container>
                <Header />
            </Container>
        </Section>
        <Section>
            {children}
        </Section>
        <Section>
            <Container>
                <Footer />
            </Container>
        </Section>
      </React.Fragment>
  )
}

export default DefaultLayout