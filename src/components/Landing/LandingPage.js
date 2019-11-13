import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Slider from './Slider/Slider'
import AgencyInfo from './Agency-info/AgencyInfo';
import AgencySolutions from './AgencySolutions/AgencySolutions'
import AskedQuestions from './AskedQuestions/AskedQuestions';
import Footer from '../Footer/Footer'
import JoinOurTeam from './JoinOurTeam/JoinOurTeam';
import Testimonial from './Testimonials/Testimonial';

function LandingPage() {
  return (
    <Fragment>
      <Slider />
      <AgencyInfo />
      <AgencySolutions />
      <JoinOurTeam />
      <Testimonial />
      <AskedQuestions />
      <Footer />
    </Fragment>
  );
}

export default LandingPage;
