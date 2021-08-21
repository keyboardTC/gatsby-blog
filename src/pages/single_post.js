import React from "react"
import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"


const Single_post = ({ data, location }) => {
    // const siteTitle = data.site.siteMetadata.title
    // const siteTitle = data.site.siteMetadata?.title || `Title`
  
    return (
      <div>
        <Seo title="Single post" />
        <h1>Single Post Page</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, aut aspernatur animi itaque quos fugiat quam beatae necessitatibus doloremque possimus in dolores voluptas nam explicabo quis quod delectus assumenda molestias?</p>
      </div>
    )
  }

  export default Single_post