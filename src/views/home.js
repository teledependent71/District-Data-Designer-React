import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>District Data Designer</title>
        <meta property="og:title" content="District Data Designer" />
      </Helmet>
    </div>
  )
}

export default Home
