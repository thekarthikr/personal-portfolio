import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const ContactForm = () => {
  const form = useRef();
  const {
    register,
    handleSubmit,
    reset,

    formState: { errors, isValid },
  } = useForm();

  const registerOptions = {
    name: {
      required: "Name is required",
      minLength: {
        value: 3,
        message: "Name must have at least 3 characters",
      },
      pattern: {
        value: /[A-Za-z]/,
        message: "Please enter valid characters",
      },
    },
    email: {
      required: "Email is required",
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "Invalid email address",
      },
    },
    message: {
      required: "Message can't be blank",

      minLength: {
        value: 15,
        message: "Message must have at least 15 characters",
      },
      pattern: {
        value: /[A-Za-z]/,
        message: "Please enter valid characters",
      },
    },
  };

  const sendEmail = () => {
    if (isValid) {
      const emailJs = emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_API_KEY
      );

      toast.promise(
        emailJs,
        {
          loading: "Sending..",
          success: "Message has been sent successfully",
          error: "Please try again later",
        },
        {
          position: "bottom-right",
          duration: 4000,
          style: {
            backgroundColor: "hsl(240, 24%, 15%)",
            color: "hsl(0, 0%, 100%)",
            marginBottom: "4rem",
            marginRight: "2rem",
          },
        }
      );
    }

    reset();
  };

  return (
    <form
      ref={form}
      onSubmit={handleSubmit(sendEmail)}
      className='form'
      id='form'
    >
      <div className='form__group'>
        <label htmlFor='user_name' className='form__label'>
          Name
        </label>
        <input
          {...register("user_name", registerOptions.name)}
          aria-label='Name'
          type='text'
          name='user_name'
          className='form__input'
        />
        <small className='text-warning'>
          {errors?.user_name && errors.user_name.message}
        </small>
      </div>
      <div className='form__group'>
        <label htmlFor='user_email' className='form__label'>
          E-mail
        </label>
        <input
          {...register("user_email", registerOptions.email)}
          aria-label='Email'
          type='text'
          name='user_email'
          className='form__input'
        />
        <small className='text-warning'>
          {errors?.user_email && errors.user_email.message}
        </small>
      </div>
      <div className='form__group'>
        <label htmlFor='user_message' className='form__label'>
          Message
        </label>
        <textarea
          {...register("user_message", registerOptions.message)}
          aria-label='Message'
          className='form__input'
          name='user_message'
          cols='22'
          rows='2'
        ></textarea>
        <small className='text-warning'>
          {errors?.user_message && errors.user_message.message}
        </small>
      </div>
      <input
        aria-label='Form Submission'
        type='submit'
        id='form-btn'
        className='btn'
        value='Send Message'
      ></input>
    </form>
  );
};

export default ContactForm;
