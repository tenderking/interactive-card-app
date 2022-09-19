# Frontend Mentor - Interactive card details form react solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Set up](#getting-started-with-create-react-app)

## Overview

### The challenge

This task was get familiar with using react coming from a vuejs background.

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Screenshot

![image](https://user-images.githubusercontent.com/10375060/191013286-28c6ea5b-0a32-4ffc-8fcc-cf8d8b7bfa8b.png)


### Links

- Solution URL: [Github repository](https://github.com/tenderking/interactive-card-app)
- Live Site URL: [Live site](https://tenderking.github.io/interactive-card-app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

React is not very different form vuejs. Most of the project follows similar patterns to vuejs. What I missed were the vue directives like v-if and v-bind. The nice thing about react is that it follows javascript patterns so it's easy to understand. Debugging was relatively easy, there is a lot of resources online.

I also learned to validate forms with custom validations and pattern matching using regex.

To see how you can add code snippets, see below:

```js
if (inputType === inputs.cardNumber) {
	const regex = /^\d{16}$|^\d{4}\s+\d{4}\s\d{4}\s\d{4}$/;

	if (!regex.test(inputType)) {
		setErrorStateNumber(errorMessageOutput("Card Number must be valid"));
		console.log("no matching number");
		return validationMessage;
	}
}
if (inputType === inputs.cardHolderName) {
	const regex = /^[a-zA-Z ']+$/;
	if (!regex.test(inputType)) {
		setErrorStateName(errorMessageOutput("Name cannot have number"));
		console.log("no matching number");
		return validationMessage;
	}
}

if (inputType === inputs.cvcNumber) {
	const regex = /^\d{3}$/;

	if (!regex.test(inputType)) {
		setErrorStateDateCvc(errorMessageOutput("CVC Number must be valid"));
		return validationMessage;
	}
}
```

### Continued development

At this moment I feel like I prefer vuejs over react, it was great to try react but I will most likely stick to vuejs. I would like to improve my vuejs even more. But I will somes times do some react projects.

### Useful resources

- [Regex](https://regex101.com/) - This helped me understand regex. I really liked this website and will use it going forward.

## Author

- Website - [George Mushore](https://www.georgemushore.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/tenderking)

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
