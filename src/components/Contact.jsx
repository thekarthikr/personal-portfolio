import React from "react";
import { contactLinks } from "../constants";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <>
      <section id='Contact' className='contact'>
        <div className='contact__header section'>
          <h2 className='contact__heading'>
            <span className='text-gradient-light'>Let's Get In Touch</span>
          </h2>
          <p className='contact__intro w'>
            Whether you have a new project in mind, a freelance inquiry, or just
            want to chat over a cup of tea, I'd love to hear from you. You can
            reach me by email or through the contact form below. Let's connect
            and see how we can work together.
          </p>
        </div>
        <div className='contact__wrapper'>
          <ContactForm />
          <div className='contact__info'>
            <h3 className='contact__title'>Let's Connect</h3>
            <p className='contact__context'>
              Thank you for visiting my portfolio. If you are interested to hire
              me or would like to discuss any potential opportunities, I am
              always open to new and interesting projects. Please feel free to
              reach out using the contact form and I will get back to you as
              soon as possible. Additionally, if you have any other requests or
              questions, I would be happy to hear from you. Let's connect and
              see how we can collaborate to achieve your goals.
            </p>
            <p className='contact__email'>
              You can also reach me by directly click down below
            </p>
            <ul style={{ display: "flex", gap: "1rem" }}>
              {contactLinks.map(({ link, icon, name }) => (
                <li title={name} key={name}>
                  <a target='_blank' style={{ fontSize: "2rem" }} href={link}>
                    {icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className='toast-wrapper'>
          <span className='toast'>
            {" "}
            <i className='bx bx-x'></i>
          </span>
        </div>
      </section>
      ;
    </>
  );
};

export default Contact;
