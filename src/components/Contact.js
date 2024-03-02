
import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact">
      <div className="contact-content">
        <h2>Contact</h2>
        <p>
          I'm open to new opportunities and collaborations. Feel free to reach out to me through the contact form or the provided contact information.
        </p>
        <form>
          <label htmlFor="name"  >Name:</label>
          <input type="text" id="name" name="name" placeholder="Your Name" />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Your Email" />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" placeholder="Your Message"></textarea>

          <button type="submit">Send Message</button>
        </form>
        
        <div className="contact-info">
          <p>Email: harperrusso.email@example.com</p>
          <p>Phone: +1 (123) 456-7890</p>
          <p>LinkedIn: linkedin.com/in/HarperRussoprofile</p>
          <p>Github:https://github.com/HarperRusso</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
