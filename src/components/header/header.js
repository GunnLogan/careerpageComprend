import React from "react"
import "./header.css"
// import JobListItems from "./job-list-items"

export default class Header extends React.Component {


  render() {

      return (
        <header>
          <div>
            <img src="./images/logo.jpg"/>
          </div>
          <div className="header-navbar">
            <ul>
              <li>Our Services</li>
              <li>Blog</li>
              <li>Webranking</li>
              <li>Join Us</li>
              <li>Contact</li>
            </ul>
          </div>
        </header>
      )
    }
}