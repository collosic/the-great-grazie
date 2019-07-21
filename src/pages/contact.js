import React from "react"
import Footer from "../components/footer"
import Header from "../components/header"

const ContactPage = () => {
  return (
    <div>
      <Header />
      <h1>Contact</h1>
      <p>collosi@gmail.com</p>
      <br />
      <p>
        Here's my{" "}
        <a href="https://twitter.com/ccollosi" target="_blank">
          Twitter
        </a>
      </p>
      <Footer />
    </div>
  )
}

export default ContactPage
