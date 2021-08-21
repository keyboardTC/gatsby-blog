import * as React from "react"
import { Link } from "gatsby"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ location, title, myClass, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let page_header

  if (isRootPath) {
    page_header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    page_header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  const mClass = (myClass == "post-main") ? "post-main" : "the-main"

  return (
    <>
      <Header page_title={title} />
        <main className={mClass} data-is-root-path={isRootPath}>
          {/* <header className="global-header" >{page_header}</header> */}
          {children}
        </main>  
      <Footer/>
    </>
  )
}

export default Layout
