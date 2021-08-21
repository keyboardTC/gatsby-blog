import React from "react"
import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import {container, heading} from './about.module.scss'


const About = ({ data, location }) => {
    // const siteTitle = data.site.siteMetadata.title
    // const siteTitle = data.site.siteMetadata?.title || `Title`
  
    return (
      <Layout location={location}  className={container} >
        <Seo title="About" />
        <h1  className={heading}>About Page</h1>
        <a href="#"><FontAwesomeIcon icon={faUserCircle} size="2x"/></a>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, aut aspernatur animi itaque quos fugiat quam beatae necessitatibus doloremque possimus in dolores voluptas nam explicabo quis quod delectus assumenda molestias?</p>
      </Layout>
    )
  }

  export default About