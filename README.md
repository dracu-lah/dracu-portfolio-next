# My Portfolio Website
![image][(https://github.com/dracu-lah/dracu-portfolio-next/assets/110589548/d6ab55e5-5c13-4bcb-b4ed-fba8b7af6e43)](https://dracufolio.vercel.app/)

Welcome to my portfolio website! This website showcases my projects and provides information about me. It is built using Next.js and integrates with Appwrite for backend services. The website incorporates various libraries and features like emailJS, react-hook-form, framer-motion, etc.

## Technologies Used

- Next.js: A React framework for building server-rendered and static websites.
- Appwrite: An open-source backend server for building web and mobile apps.
- emailJS: A service for sending emails using JavaScript and HTML templates.
- react-hook-form: A flexible and easy-to-use form validation library for React.
- framer-motion: A library for creating animations in React applications.

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/dracu-lah/dracu-portfolio-next.git

```
2. Install the dependencies:

```bash
cd dracu-portfolio-next
npm install
```

3. Configure Appwrite:

Set up an Appwrite server by following the instructions in the Appwrite documentation: Appwrite Documentation.
Update the Appwrite configuration in the project code to connect to your Appwrite server. This is usually located in the app/utils/appWrite.js file.

4.Configure EmailJS:

Sign up for an emailJS account at emailJS.
Obtain your emailJS user ID and update the configuration in the project code. This is usually located in the app/components/contact.jsx file.

5.Start the Next.js development server:
```
npm run dev
```

6.Open your browser and visit http://localhost:3000 to see the website running locally.
