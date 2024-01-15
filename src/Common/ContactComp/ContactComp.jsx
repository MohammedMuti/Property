import React from "react";
import "./ContactComp.css";

function ContactComp(props) {
  return (
    <>
      <div className="contact-comp-wrapper">
        <div className="contact-comp">
          <div className="heading">
            <h2>Get in Touch with Our Team!</h2>
            <h3>Contact Now</h3>
          </div>
          <div className="form">
            <form>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="number" placeholder="Number" />
              <textarea
                placeholder="Message"
                name=""
                id=""
                cols="30"
                rows="10"
              ></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>
          <div className="maps">
            <iframe
              className="map"
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14676.076183382833!2d77.60700385227963!3d13.023555620349676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17fb66ca2d95%3A0xea8c3e0488bf6f40!2sASA%20Building%20Demolition%20Contractor%20Bangalore!5e0!3m2!1sen!2sin!4v1675286800879!5m2!1sen!2sin&zoom=9"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactComp;
