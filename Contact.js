import { useState } from "react";
import "../assest/style.css/contact.css";
// import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import emailLogo from '../assest/img/email.webp'
import phonelogo from '../assest/img/call.png'
import addresslogo from '../assest/img/address.png'

function Contact() {
  const [user, setUser] = useState({
    FirstName: "",
    Subject: "",
    Contact: "",
    Email: "",
    Message: "",
  });

  let name, value;

  const Getdata = (event) => {
    name = event.target.name;

    value = event.target.value;

    setUser({ ...user, [name]: value });
  };

  const Send = (e) => {
    const { FirstName, Subject, Contact, Email, Message } = user;

    e.preventDefault();

    if (FirstName && Subject && Contact && Email && Message) {
      const response = fetch(
        "https://loki-17318-default-rtdb.firebaseio.com/Message.json",

        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            Name:FirstName,
            Subject:Subject,
            Contact:Contact,
            Email:Email,
            Message:Message,
          }),
        }
      );
      if (response) {
        return setUser({
          FirstName: "",
          Contact: "",
          Subject: "",
          Email: "",
          Message: "",
        });
      }
    } else {
      alert("Please Fill The Data");
    }
  };
  return (
    <div className="contact-start">
      <div className='header'>
        <div>
          <Navbar></Navbar>
        </div>
        <div className='nav-head text-center align-items-center'>
          <div className='star-icon'>
            <i class='fa-solid fa-star' style={{color: '#fbca18'}}></i>
            <h1>Contact Us</h1>
            <p>
              <span>Home -</span> Contact Us
            </p>
          </div>
        </div>
      </div>
      {/* NavHead End */}
      {/* Contact Information Start */}
      <div className="Contact-us text-center">
        <div className="contact-start">
          <div className="row">
            <div className="col-sm-12 col-s-12 col-md-12 col-lg-4">
              <div className="emaillogo">
                <img src={emailLogo} alt="email" style={{width:'20%', height:'auto'}} />
              </div>
              <div className="details">
                <h6>Our Email</h6>
                <p>noemail@nodomain.com</p>
                <p>contact@domain.com</p>
              </div>
            </div>
            <div className="col-sm-12 col-s-12 col-md-12 col-lg-4">
              <div className="phonelogo">
                <img src={phonelogo} alt="phone" style={{width:'20%', height:'auto'}} />
              </div>
              <div className="details">
                <h6>Our Phone</h6>
                <p>+351 1234 5678</p>
                <p>+123 4567 8900</p>
              </div>
            </div>
            <div className="col-sm-12 col-s-12 col-md-12 col-lg-4">
              <div className="addresslogo">
                <img src={addresslogo} alt="Address" style={{width:'20%', height:'auto'}} />
              </div>
              <div className="details">
                <h6>Our Address</h6>
                <p>4012 Nancy Street</p>
                <p>Fuquay Varina, NC 27526</p>
              </div>
            </div>
          </div> 
        </div>
      </div>
      {/* Contact Information End */}
      {/* Contact Form Start */}
      <section id="contact" className="contact">
        <div className="container text-center" style={{paddingBottom:'20px'}}>
          <div className="section-header">
            <h2>Contact Us</h2>
            <p>
              Supercharge Your Business in the Digital Realm. Unlock Your
              Potential Today with a Complimentary Quote!
            </p>
          </div>
        </div>
        {/*
      <div class="map"><iframe src="  " frameborder="0" allowfullscreen></iframe></div> End Google Maps */}
        <div className="container">
          <div className="row gy-5 gx-lg-5">
            <div className="col-lg-4">
              <div className="info">
                <h3>Get in touch</h3>
                <p>
                  {" "}
                  We're here to help! Ready to kickstart your project, we'd love
                  to hear from you. Here's how you can get in touch with us{" "}
                </p>
                <div className="info-item d-flex">
                  <i className="bi bi-geo-alt flex-shrink-0" />
                  <div>
                    <h4>Location:</h4>
                    <p>Wardha, India, 442001</p>
                  </div>
                </div>
                {/* End Info Item */}
                <div className="info-item d-flex">
                  <i className="bi bi-envelope flex-shrink-0" />
                  <div>
                    <h4>Email:</h4>
                    <p>team@review.in</p>
                    {/* <p> CIN : U74999MH2021PTC361857</p> */}
                  </div>
                </div>
                {/* End Info Item */}
                <div className="info-item d-flex">
                  <i className="bi bi-phone flex-shrink-0" />
                  <div>
                    <h4>Call/WhatsApp:</h4>
                    <p>+91 7083710214</p>
                    <p>+91 8459576054</p>
                  </div>
                </div>
                {/* End Info Item */}
              </div>
            </div>
            <div className="col-lg-8">
              <form id="contactForm" className="php-email-form">
                <div className="row">
                  <div className="col-md-12 form-group">
                    <input
                      type="text"
                      name="FirstName"
                      value={user.FirstName}
                      onChange={Getdata}
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      name="Contact"
                      value={user.Contact}
                      onChange={Getdata}
                      className="form-control"
                      id="contact"
                      placeholder="Contact No"
                    />
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input
                      type="email"
                      className="form-control"
                      name="Email"
                      value={user.Email}
                      onChange={Getdata}
                      id="email"
                      placeholder="Your Email"
                    />
                  </div>
                </div>
                <div className="form-group mt-3">
                  <input
                    type="text"
                    className="form-control"
                    name="Subject"
                    value={user.Subject}
                    onChange={Getdata}
                    id="subject"
                    placeholder="Subject"
                  />
                </div>
                <div className="form-group mt-3">
                  <textarea
                    className="form-control"
                    id="message"
                    name="Message"
                    value={user.Message}
                    onChange={Getdata}
                    placeholder="Message"
                  />
                </div>
                <div className="text-center">
                  <button type="button" class="btn btn-danger" onClick={Send}>Send Message</button>
                </div>
              </form>
            </div>
            {/* End Contact Form */}
          </div>
        </div>
      </section>
      {/* Contact Form End */}
      <Footer></Footer>
    </div>
  );
}

export default Contact;
