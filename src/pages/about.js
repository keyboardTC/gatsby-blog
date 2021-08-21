import React from "react"
import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import {container, heading} from './about.module.scss'
import post_image from '../images/tc.jpg'


const About = ({ data, location }) => {
    const siteTitle = 'About'
    // const siteTitle = data.site.siteMetadata?.title || `Title`
  
    return (
      <Layout location={location}  className={container} title={siteTitle} >
         {/* <h1  className={heading}>About Page</h1> */}
         <section style={{display:"flex", gap:20,}}>
            <img src={post_image} alt="Post Image" className="post-image" style={{height:200,}}/>
            <div className="about_box">
               <h2>VISION</h2>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, aut aspernatur animi itaque quos fugiat quam beatae necessitatibus doloremque possimus in dolores voluptas nam explicabo quis quod delectus assumenda molestias?</p>
            </div>
            <div className="about_box">
               <h2>MISSION</h2>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, aut aspernatur animi itaque quos fugiat quam beatae necessitatibus doloremque possimus in dolores voluptas nam explicabo quis quod delectus assumenda molestias?</p>
            </div>
            <div className="about_box">
               <h2>HOBBY</h2>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, aut aspernatur animi itaque quos fugiat quam beatae necessitatibus doloremque possimus in dolores voluptas nam explicabo quis quod delectus assumenda molestias?</p>
            </div>
         </section>
        <Seo title="About" />

      </Layout>
    )
  }

  export default About