import React from 'react'

class ContactForm extends React.Component {
  render() {
    return (
      <div>
        <section id="three">
          <h2>Get In Touch</h2>
          <p>
            We'd love to hear from you. Feel free to reach out using the form
            provided below. We hope to see you soon!
          </p>
          <div className="row">
            <div className="8u 12u$(small)">
              <form method="post" action="#">
                <div className="row uniform 50%">
                  <div className="6u 12u$(xsmall)">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name"
                    />
                  </div>
                  <div className="6u 12u$(xsmall)">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="12u">
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Message"
                      rows="4"
                    />
                  </div>
                </div>
              </form>
              <ul className="actions">
                <li>
                  <input type="submit" value="Send Message" />
                </li>
              </ul>
            </div>
            <div className="4u 12u$(small)">
              <ul className="labeled-icons">
                <li>
                  <h3 className="icon fa-home">
                    <span className="label">Address</span>
                  </h3>
                  7 Hope Street
                  <br />
                  Filey
                  <br />
                  North Yorkshire
                  <br />
                  YO14 9DJ
                </li>
                <li>
                  <h3 className="icon fa-mobile">
                    <span className="label">Phone</span>
                  </h3>
                  000-000-0000
                </li>
                <li>
                  <h3 className="icon fa-envelope-o">
                    <span className="label">Email</span>
                  </h3>
                  <a>hello@untitled.tld</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default ContactForm
