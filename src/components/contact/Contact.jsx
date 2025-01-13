import React, { useRef } from 'react'; // Ensure useRef is imported
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { BsLinkedin, BsWhatsapp } from 'react-icons/bs';
import emailjs from 'emailjs-com';

function Contact() {
  // Define the form reference
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_x4po8o9', // Replace with your actual service ID
        'template_gbrbhb8', // Replace with your actual template ID
        form.current, // Use the form reference
        'LAMd-4OwdaGRfGnGt' // Replace with your actual public key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Message sent successfully!');
        },
        (error) => {
          console.log(error.text);
          alert('Failed to send the message. Please try again.');
        }
      );
    e.target.reset(); // Reset the form fields after submission
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>Farwafarid2017@gmail.com</h5>
            <a href="mailto:farwafarid2017@gmail.com">Send an Email</a>
          </article>

          <article className="contact_option">
            <BsLinkedin className="contact_option-icon" />
            <h4>LinkedIn</h4>
            <h5>Farwa Muhibzada</h5>
            <a href="https://www.linkedin.com/in/farwamohibzada/" target="_blank" rel="noopener noreferrer">
              Join My Network
            </a>
          </article>

          <article className="contact_option">
            <BsWhatsapp className="contact_option-icon" />
            <h4>WhatsApp</h4>
            <h5>+93782907617</h5>
            <a href="https://api.whatsapp.com/send?phone=+93782907617">Send a Message</a>
          </article>
        </div>
        {/* End of Contact Options */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
