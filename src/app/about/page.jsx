import React from 'react'
import AboutUsSection from '../../sections/AboutUsSection'
import HomeStatsCards from '../../components/HomeStatsCards'
import OurStory from './components/OurStory'
import CoreValues from './components/CoreValues'
import LeadershipTeam from './components/LeadershipTeam'
const AboutUsPage = () => {
  return (
    <>
    <section className='pt-28 lg:pt-2 bg-white h-full'>
        <AboutUsSection />

    </section>
    <HomeStatsCards/>
    <OurStory/>
    <CoreValues/>
    <LeadershipTeam/>
    </>

  )
}

export default AboutUsPage