import React from 'react'
import Contain from './Contain/Contain'
import Feature from '../Feature/Feature'
import './HeroSection.css'
import Media from './Media/Media'
import Reviews from './Media/Reviews/Reviews'
import ReviewsMedia from './Media/ReviewsMedia/ReviewsMedia'
import Stats from './Media/Stats/Stats'
import Voucher from './Media/Voucher/Voucher'


function HeroSection() {
  return (
    <div>
      <div className="global_container">
        <div className="hero__container container">
          <section className="hero">
            <Contain />

            <div className="hero__banner">
              <Media />

              <div className="hero__banner__overlays">
                <Voucher />

                <div className="hero__banner__overlays__reviews">
                  <span className="hero__banner__overlays__reviews__name">1,000,000 Happy Customers</span>
                  <Reviews />
                </div>

                <div className="hero__banner__overlays__stats">
                  <Stats />

                  <div className="hero__banner__overlays__stats__reviewers">
                    <ReviewsMedia />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/*.hero__container  */}

        <div className="stats__container">
          <section className="stats container">
            <div className="stats__highlighted">
              <span className="stats__highlighted__name">1.6K</span>
              <span className="stats__highlighted__info">Trusted Companies</span>
            </div>
            {/*  .stats__highlighted  */}

            <div className="stats__showcase">
              <Feature />
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default HeroSection