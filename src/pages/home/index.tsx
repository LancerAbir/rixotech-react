import React from 'react';
import { Container, Section } from '../../styledComponents/container';
import DefaultLayout from '../../layouts/DefaultLayout'
import HeroSection from './HeroSection/HeroSection';
import GiftSection from './GiftSection';
import Testimonial from './Testimonial';
import OneClickInstall from './OneClickInstall';

function HomePage() {
  return (
      <DefaultLayout>
        <Section>
          <Container>
            <HeroSection />
          </Container>
        </Section>

        <Section>
          <Container>
            <OneClickInstall />
          </Container>
        </Section>

        <Section>
          <Container>
            <GiftSection />
          </Container>
        </Section>

        <Section>
          <Container>
            <Testimonial />
          </Container>
        </Section>
        
      </DefaultLayout>
  )
}

export default HomePage