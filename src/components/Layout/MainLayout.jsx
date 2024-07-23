import PropTypes from "prop-types"
// import * as React from "react"
import Navbar from "../Layout/components/Navbar"
import Footer from "../Layout/components/Footer"

export const MainLayout = ({ children }) => {
  return (
    <div className="">

    <div className="">
      <Navbar />
      <div className=""> {children} </div>
      <Footer />
    </div>
    </div>
  )
}

MainLayout.PropTypes = {
  children: PropTypes.node,
};