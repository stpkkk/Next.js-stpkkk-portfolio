import { IProjectCard } from '@types'

export const getProjectCards: IProjectCard[] = [
	{
		id: 0,
		title: 'Tick-Time Pizza',
		image: '/assets/images/tick-time-pizza/tick-time-1.png',
		url: 'tick-time-pizza',
		description: [
			[
				"Tick-Time pizza is an application for ordering pizza and other fast food for the company 'Tick Time' in the city of Petrozavodsk. The functionality of which I implemented myself on the stack: Next.js, React.js, Typescript, Redux Toolkit, Tailwind CSS. In this application there is authorization, the ability to add products to the cart depending on the parameters, adding to favorites, sorting products, making delivery, etc.",
			],
		],
		liveLink: 'https://stpkticktime.vercel.app/',
		codeLink: 'https://github.com/stpkkk/tick-time-pizza',
		slider: [
			'/assets/images/tick-time-pizza/tick-time-1.png',
			'/assets/images/tick-time-pizza/tick-time-2.png',
			'/assets/images/tick-time-pizza/tick-time-3.png',
			'/assets/images/tick-time-pizza/tick-time-4.png',
			'/assets/images/tick-time-pizza/tick-time-5.png',
			'/assets/images/tick-time-pizza/tick-time-6.png',
		],
	},
	{
		id: 1,
		title: 'Business Insurance Calculator',
		image: '/assets/images/insurance-calculator/calc-1.png',
		url: 'insurance-calculator',
		description: [
			[
				'Gamified Risk Calculator for Sberbank Insurance is an application that I developed together with a team of experienced developers using React, TypeScript, Styled Components. This application was created specifically for a prestigious bank in order to simplify and speed up the process of obtaining accurate insurance quotes for businesses.',
			],
			[
				"The application allows you to calculate the cost of insurance of your business in a playful way. After completing the survey, the user can go to the insurance company's website with the entered data saved and the discount earned.",
			],
			[
				'A web application and an administrator portal have been developed. The adaptive design of the application allows you to comfortably browse the site from a mobile phone or tablet. With the help of the administrator portal, you can change the parameters that affect the calculation of the cost of insurance premiums and discounts, add or change new pages in the “Real Stories” section, track site visit statistics and track requests for a callback order.',
			],
			[
				"This app was developed under a non-disclosure agreement, so unfortunately I can't provide you with a link to the code!",
			],
		],
		liveLink: 'https://calc.playground.sysdyn.ru/',
		slider: [
			'/assets/images/insurance-calculator/calc-1.png',
			'/assets/images/insurance-calculator/calc-2.png',
			'/assets/images/insurance-calculator/calc-3.png',
			'/assets/images/insurance-calculator/calc-4.png',
			'/assets/images/insurance-calculator/calc-5.png',
			'/assets/images/insurance-calculator/calc-mob.png',
		],
	},
	{
		id: 2,
		title: 'Rukki Pro',
		image: '/assets/images/rukki-pro/rukki-1.png',
		url: 'rukki',
		description: [
			[
				'Rukki Pro is a leading company specializing in the rental of heavy construction equipment. As a frontend developer working closely with the development team, I have contributed to the development and support of their web application. Using the capabilities of Next.js, TypeScript and Styled Components, we have created a unique application for Rukki Pro clients.',
			],
			[
				'With an emphasis on usability and performance, our team has developed an intuitive interface that allows users to easily browse and select the necessary equipment.',
			],
			[
				'Using Next.js we have provided fast page loading and efficient server rendering, providing a smooth and responsive application. Working in a flexible development environment, I actively participated in planning sprints, code reviews and collaborative sessions to find solutions to problems.',
			],
			[
				'This collaborative approach has allowed us to update and improve the web application in a timely manner, keeping it up-to-date in accordance with the ever-changing needs of Rukki Pro and its customers. My participation as a frontend developer at RukiPro has not only strengthened my technical skills at Next.js, TypeScript and Styled Components, but also gave me valuable experience working on a real application.',
			],
			[
				"This app was developed under a non-disclosure agreement, so unfortunately I can't provide you with a link to the code!",
			],
		],
		liveLink: 'https://rukki.pro/',
		slider: [
			'/assets/images/rukki-pro/rukki-1.png',
			'/assets/images/rukki-pro/rukki-2.png',
			'/assets/images/rukki-pro/rukki-3.png',
			'/assets/images/rukki-pro/rukki-4.png',
			'/assets/images/rukki-pro/rukki-mob.png',
		],
	},
	{
		id: 3,
		title: 'Dashboard',
		image: '/assets/images/dashboard/dashboard-1.png',
		url: 'dashboard',
		description: [
			[
				'The Dashboard project is a web application that uses technologies such as React, Redux Toolkit, TypeScript, Highcharts and Styled Components to provide users with a visual representation and analytics for a specific data set. The application receives data from the server and uses the Highcharts API to create customizable and interactive graphs and charts.',
			],
		],
		liveLink: 'https://stpkkk-dashboard.netlify.app/',
		codeLink: 'https://github.com/stpkkk/Dashboard-React',
		slider: [
			'/assets/images/dashboard/dashboard-1.png',
			'/assets/images/dashboard/dashboard-2.png',
			'/assets/images/dashboard/dashboard-3.png',
			'/assets/images/dashboard/dashboard-mob.png',
		],
	},
	{
		id: 4,
		title: 'Technomedia',
		image: '/assets/images/technomedia/technomedia-1.png',
		url: 'technomedia',
		description: [
			[
				'Technomedia is a single web application with three pictures: articles, courses and medicine. Each card contains stories, and clicking on the title of the story opens the corresponding article, course or media. Interface used: React, Typescript, Stylized components',
			],
		],
		liveLink: 'https://stpk-technomedia.netlify.app/',
		codeLink: 'https://github.com/stpkkk/Technomedia',
		slider: [
			'/assets/images/technomedia/technomedia-1.png',
			'/assets/images/technomedia/technomedia-2.png',
			'/assets/images/technomedia/technomedia-3.png',
			'/assets/images/technomedia/technomedia-4.png',
			'/assets/images/technomedia/technomedia-5.png',
		],
	},
	{
		id: 5,
		title: 'Mapty',
		image: '/assets/images/mapty/mapty-1.png',
		url: 'Mapty',
		description: [
			[
				"This web application allows you to track your workouts by recording your location, distance, time and other metrics using the browser's built-in geolocation API and local storage. You can create a new workout by selecting the type of activity (running or cycling), entering the details of the workout and clicking on the map to set the start and end points of your workout. The app uses the Leaflet library to display the map and the workout library to manage workout data. Implemented in native JS, using OOP and classes",
			],
		],
		liveLink: 'https://stpkkk.github.io/mapty/',
		codeLink: 'https://github.com/stpkkk/mapty',
		slider: ['/assets/images/mapty/mapty-1.png'],
	},
	{
		id: 6,
		title: 'Lamborghini-Super-Trofeo',
		image: '/assets/images/lamborghini/lamborghini-1.jpg',
		url: 'lamborghini',
		description: [
			[
				'This application is created using React, uses TypeScript and Styled Components, and is also designed for efficient and fast operation, with the ability to change the layout and design depending on the device used. Created according to the layout in Figma. It also includes an adaptive layout.',
			],
		],
		liveLink: 'https://lamborghini-super-trofeo.netlify.app/',
		codeLink: 'https://github.com/stpkkk/lamborghini-super-trofeo',
		slider: [
			'/assets/images/lamborghini/lamborghini-1.jpg',
			'/assets/images/lamborghini/lamborghini-2.png',
			'/assets/images/lamborghini/lamborghini-3.png',
			'/assets/images/lamborghini/lamborghini-4.png',
			'/assets/images/lamborghini/lamborghini-mob.png',
		],
	},
	{
		id: 7,
		title: 'Welbex-Table',
		image: '/assets/images/welbex/welbex-1.png',
		url: 'welbex-table',
		description: [
			[
				'A test task for the position of a Frontend developer in Wellbax using React.js, PostgreSQL, PgAdmin, Sass. A single-page web application was created to display a table with the ability to sort and paginate. The backend part is implemented using the PostgreSQL DBMS and the pgAdmin application. The deployment of the server part of the project was carried out using the Heroku cloud service and the pgAdmin application. The test was rated at 16 out of 20 points!',
			],
		],
		liveLink: 'https://delivery-table.netlify.app/',
		codeLink: 'https://github.com/stpkkk/React-Table-Test-Welbex',
		slider: [
			'/assets/images/welbex/welbex-1.png',
			'/assets/images/welbex/welbex-2.png',
			'/assets/images/welbex/welbex-3.png',
			'/assets/images/welbex/welbex-4.png',
		],
	},
	{
		id: 8,
		title: 'Bankist',
		image: '/assets/images/bankist/bankist-2.png',
		url: 'bankist',
		description: [
			[
				'Bankist is a fictional online bank. This is a project created by Jonas Schmedtmann for the practice of manipulating the DOM tree and interacting with the user. Bankist has the ability to log into an account and use various functions, almost like in a real bank! In this application, you can: Log in, Transfer funds to another account, Get loans, Close (delete) your account.',
			],
		],
		liveLink: 'https://stpkkk.github.io/Bankist/',
		codeLink: 'https://github.com/stpkkk/Bankist',
		slider: [
			'/assets/images/bankist/bankist-1.png',
			'/assets/images/bankist/bankist-2.png',
			'/assets/images/bankist/bankist-3.png',
			'/assets/images/bankist/bankist-4.png',
		],
	},
	{
		id: 9,
		title: 'Image-Generator',
		image: '/assets/images/image-generator/image-generator.png',
		url: 'image-generator',
		description: [
			[
				"The image generation application, using the Openal API, generates images based on the user's input request. The application may offer to save or share the created images. The app is not working at the moment, as the API is not free!",
			],
		],
		liveLink: 'https://stpkk-image-generator.netlify.app/',
		codeLink: 'https://github.com/stpkkk/Image-generator-OpenAI-API',
		slider: ['/assets/images/image-generator/image-generator.png'],
	},
	// {
	//   id: 10,
	//   title: "Kartoshechka",
	//   image: "/assets/images/kartoshka/kartoshka-1.jpg",
	//   url: "kartoshechka",
	//   description: [
	//     [
	//       "Kartoshechka - это динамическое веб-приложение, разработанное с использованием Vite, Tailwind CSS, TypeScript, Swiper, React Input Mask и адаптивного дизайна. Оно предлагает пользователям плавный и интуитивно понятный опыт управления и организации их личных задач и списков дел. Kartoshechka следует принципам адаптивного дизайна, обеспечивая безупречный внешний вид и работу приложения на различных устройствах и веб-браузерах. Приложение выполнено с адаптивной версткой",
	//     ],
	//   ],
	//   liveLink: "https://kartoshechka.netlify.app/",
	//   codeLink: "https://github.com/stpkkk/test-task-Stepanov.I.A/tree/kartoshka",
	//   slider: [
	//     "/assets/images/kartoshka/kartoshka-1.jpg",
	//     "/assets/images/kartoshka/kartoshka-2.png",
	//     "/assets/images/kartoshka/kartoshka-3.png",
	//     "/assets/images/kartoshka/kartoshka-mob.png",
	//   ],
	// },
]
