import sendIcon from "../assets/sendIcon.svg";

const ContactButton = () => {
  return (
    <button className='contact-btn'>
      <span>Contact me</span>
      <div class='svg-wrapper'>
        <img src={sendIcon} alt='' />
      </div>
    </button>
  );
};

export default ContactButton;
