# Personal Portfolio Website

This is a personal portfolio website built using React.js and SCSS. The website showcases my projects and skills. It also includes a contact form where users can send me an email directly.

## Features

- Interactive and responsive design.
- Projects section displaying my featured projects with descriptions and links.
- Skills section highlighting my technical skills.
- Contact form allowing users to send me messages directly.
- Email integration using Email.js to handle the contact form submissions.

## Technologies Used

- React.js: A JavaScript library for building user interfaces.
- SCSS: A CSS preprocessor for styling the website.
- Email.js: A service for sending emails directly from JavaScript.

## Setup and Installation

1. Clone the repository
git clone https://github.com/thekarthikr/personal-portfolio.git

2. Navigate to the project directory
`cd personal-portfolio`

3. Install dependencies
`npm install`

4. Start the development server
`npm run dev`

5. Open your browser and visit
`http://localhost:5173/`


## Configuration

To configure the email functionality, follow these steps:

1. Sign up for an account at Email.js (https://www.emailjs.com/).
2. Create a new email template and note down the Template ID.
3. In the project code, open the `ContactForm.js` file.
4. Replace the placeholders for `USER_ID`, `SERVICE_ID`, and `TEMPLATE_ID` with your actual values.

```javascript
emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
````

# Deployment

To deploy the website, you can use platforms like Netlify, Vercel, or GitHub Pages. Choose one of the platforms and follow their deployment instructions.Please note that the deployment instructions vary depending on the platform you choose. You can refer to the respective documentation of Netlify, Vercel, or GitHub Pages for detailed deployment instructions.

