# A. Eyongtarh Besong --- Portfolio

A modern, responsive, and interactive portfolio website showcasing my skills, experience, education, and projects as a **Full Stack Software Developer**. Built with **React**, **Vite**, and **Framer Motion**, the website emphasises performance, accessibility, and clean user experience with a premium glassmorphism-inspired design.

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](#)
[![Vite](https://img.shields.io/badge/Vite-Frontend-646CFF?logo=vite&logoColor=white)](#)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)](#)

---

**Deployed website: [Link to website](https://eyongtarh-portfolio.vercel.app/)**

![Main image](public/images/projects/hero.png)

---

## Features

- Responsive design for desktop, tablet, and mobile
- Smooth animations with Framer Motion
- GitHub API integration for project data
- Project filtering by category
- Downloadable CV
- Modern, reusable React components
- Clean and maintainable code structure
- Smooth scrolling navigation
- Animated hero section
- Glassmorphism UI elements
- Interactive project showcase
- Skills section with technology icons
- Experience timeline
- Education timeline
- Interests section
- Contact section
- Social media integration
- Active navigation highlighting
- Mobile-friendly navigation menu
- Scroll animations using Framer Motion
- Optimised images and performance
- Accessibility best practices

---

## Tech Stack

### Frontend

- React 19
- Vite
- JavaScript (ES6+)
- HTML5
- CSS3
- Framer Motion
- Font Awesome

### Backend Experience

Although this portfolio is frontend-based, my primary backend technologies include:

- Django
- Django REST Framework
- PostgreSQL
- SQLite

### Development Tools

- Git
- GitHub
- VSCode
- npm

---

## Project Structure

```text
eyongtarh-portfolio/
├── .vscode/
├── dist/
├── node_modules/
│
├── public/
│   ├── errors/
│   ├── images/
│   │   └── projects/
│   │       ├── ekpaw.png
│   │       ├── hero.png
│   │       ├── portfolio.png
│   │       ├── riders.png
│   │       └── tastyhub.png
│   ├── 404.html
│   ├── cv.pdf
│   ├── favicon.ico
│   ├── humans.txt
│   ├── logo.png
│   ├── og-image.png
│   ├── profile.jpeg
│   ├── robots.txt
│   ├── security.txt
│   ├── site.webmanifest
│   └── sitemap.xml
│
├── src/
│   ├── assets/
│   │   ├── errors/
│   │   │   ├── 404.png
│   │   │   ├── access-denied.png
│   │   │   ├── error.png
│   │   │   ├── loading-error.png
│   │   │   └── maintenance.png
│   │   │
│   │   ├── icons/
│   │   │
│   │   ├── images/
│   │   │   └── hero-bg.svg
│   │   │
│   │   └── styles/
│   │       ├── animations.css
│   │       ├── globals.css
│   │       ├── reset.css
│   │       ├── typography.css
│   │       └── variables.css
│   │
│   ├── components/
│   │   ├── About/
│   │   ├── AnimatedBackground/
│   │   ├── Contact/
│   │   ├── CursorGlow/
│   │   ├── Education/
│   │   ├── Experience/
│   │   ├── Footer/
│   │   ├── Hero/
│   │   ├── Interests/
│   │   ├── LoadingScreen/
│   │   ├── Navbar/
│   │   ├── Projects/
│   │   ├── ScrollProgress/
│   │   ├── Skills/
│   │   ├── ErrorBoundary.jsx
│   │   ├── ErrorIllustration.jsx
│   │   ├── ErrorLayout.css
│   │   └── ErrorLayout.jsx
│   │
│   ├── data/
│   ├── hooks/
│   ├── pages/
│   ├── utils/
│   ├── App.css
│   ├── App.jsx
│   └── main.jsx
│
├── .env
├── .gitignore
├── eslint.config.js
├── index.html
├── mythings.md
├── package.json
├── package-lock.json
├── postcss.config.js
├── README.md
└── vite.config.js
```

---

## Featured Projects

- **Ekpaw Spicies** -- Python business automation with Google Sheets
  integration.
- **Riders Club** -- Full-stack Django application for a
  motorcycle/bicycle club.
- **Tarh TastyHub** -- Restaurant and food ordering platform with
  Stripe payments.

---

## Website Sections

### Home

A welcoming hero section introducing who I am, along with social links and quick navigation.
![Main image](public/images/projects/hero.png)

### About

It contains an overview of my background, passion for software development, and career goals.

![About Section Image1](public/images/projects/about.png)
![About Section Image2](public/images/projects/about2.png)

### Skills & Technologies

This section is made up of a collection of technologies, programming languages, frameworks, and tools I use.

![Skills Section Image1](public/images/projects/skills.png)
![Skills Section Image2](public/images/projects/skills2.png)

### Professional Experience

This section presents my professional and practical experience highlighting responsibilities and achievements.

![Experience Section Image1](public/images/projects/experience.png)

### Education

Academic background, certifications, and continuous learning journey.

![Education Section Image1](public/images/projects/education.png)

### Featured Projects

A showcase of selected software development projects demonstrating practical experience.

![Projects Section Image1](public/images/projects/projects.png)

### Interests

Personal interests that complement my professional growth and creativity.

![Interests Section Image1](public/images/projects/interests.png)

### Contact

Multiple ways to connect through email and professional social platforms.

![Contact Section Image1](public/images/projects/contact.png)

### Footer

![Footer Section Image1](public/images/projects/footer.png)

---

## Testing

### JS Validation:

No errors or warning messages were found when passing through the official [JSHint](https://www.jshint.com/) validator. However, to validate js full, `/* jshint esversion: 11 */ and or /* global bootstrap */ and or /* global Stripe */` was added to the top of the file.

### Responsiveness

The responsiveness was checked manually by using devtools (Chrome) throughout the whole development. [Responsive Viewer](https://chrome.google.com/webstore/detail/responsive-viewer/inmopeiepgfljkpkidclfgbgbmfcennb/related?hl=en) Chrome extension.

![Responsive Design Home page](public/images/projects/responsive_home.png)

![Responsive Design Home page](public/images/projects/responsive_about.png)

![Responsive Design Home page](public/images/projects/responsive_footer.png)

### Compatibility

Testing was conducted on the following browsers;

- Safari;

![Compatibility Report](public/images/projects/compatibility_safari.png)

- Chrome;

![Compatibility Report](public/images/projects/compatibility_chrome.png)

- Firefox;

![Compatibility Report](public/images/projects/compatibility_firefox.png)

### Lighthouse Report

LightHouse is a web performance testing tool that can be used to evaluate the performance of a website. The report is generated by Google Chrome.

- ![Lighthouse report](public/images/projects/lighthouse_report.png)

### CSS Validation:

No errors or warnings were found when passing through the official [W3C (Jigsaw)](https://jigsaw.w3.org/css-validator/#validate_by_uri) validator. The css code works perfectly on various devices.

![CSS Validation Report](public/images/projects/css_validation.png)

### HTML Validation:

No errors or warnings were found when passing through the official [W3C](https://validator.w3.org/) validator. This checking was done manually by copying the view page source code and pasting it into the validator.

- ![HTML validation report](documentation/validation/html_validation.png)

---

## About Me

I'm a Full Stack Developer with experience building responsive web
applications using React, Django, PostgreSQL, and JavaScript. I enjoy
creating software that combines clean engineering with practical
business value.

---

## Contact

- GitHub: https://github.com/Eyongtarh
- LinkedIn: Add your LinkedIn URL
- Email: Add your email address

---

## Support

If you found this project helpful, consider giving the repository a ⭐ on GitHub.

---

Built with ❤️ by **Eyongtarh Besong**

```

```
