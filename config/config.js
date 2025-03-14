import profile from "./profile.jpg";
import {
	faAppStore,
	faGithub,
	faGooglePlay,
} from "@fortawesome/free-brands-svg-icons";
import {} from "@fortawesome/free-solid-svg-icons";

export const navigation = {
	name: "Diksha",
	links: [
		{
			title: "About",
			link: "#about",
		},
		{
			title: "Projects",
			link: "#projects",
		},
		{
			title: "Contact",
			link: "#contact",
		},
		{
			title: "Links",
			link: "/links",
		},
	],
};
export const intro = {
	gradientColors: "#87CEFA",
	title: "Hey, I'm Diksha Menghmalani",
	description:
		"Computer Science graduate exploring the frontiers of AI, ML, SWE and data-driven innovation solutions to make a real-world impact",
	image: profile.src,
	buttons: [
		{
			title: "Contact Me",
			link: "#contact",
			isPrimary: true,
		},
		{
			title: "Resume",
			link: "https://drive.google.com/file/d/1hr1BeSly--Slkq35R4xHY9CdjAjLHCIH/view",
			isPrimary: false,
		},
	],
};

export const about = {
	title: "Who I am",
	description: [
		"I’m a graduate student in the Department of Computer Science at the University of Wisconsin-Madison, specializing in Data Engineering. My expertise lies in designing scalable data pipelines and leveraging AI to extract meaningful insights from complex datasets. I have experience working with Python, SQL, and PySpark to build efficient solutions. My past work has involved feature engineering, data modeling, automation, and visualization to drive data-driven decision-making.",
		"I’m deeply interested in AI and ML, particularly in how advanced algorithms can be integrated into real-world applications to make a real-world impact! I love solving challenging technical problems, optimizing performance, and continuously learning new technologies.",
		"If you’re working on data science, AI, or software development, I’d love to connect and exchange insights!",
	],
};

export const work = {
	title: "What I do",
	cards: [
		{
			title: "Machine Learning",
			description: "I create pixel perfect iOS and Andriod apps using Flutter.",
			icons: null,
		},
		{
			title: "Software Development",
			description: "I create responsive static websites using Reactjs.",
			icons: null,
		},
	],
};

export const projects = {
	title: "Projects",
	cards: [
		{
			title: "StarBook",
			description:
				"A digital diary and mood tracking app that helps you in keeping track of your mood and productivity throughout the month/year.",
			icons: [
				{
					icon: faAppStore,
					link: "https://apps.apple.com/us/app/starbook-journal-ai-diary/id1552418289",
				},
				{
					icon: faGithub,
					link: "https://github.com/hashirshoaeb/star_book",
				},
			],
		},
		{
			title: "QuranTalk",
			description:
				"An emotional well being and mental health app. The app helps people to navigate their emotions in the light of the Quran.",
			icons: [
				{
					icon: faAppStore,
					link: "https://apps.apple.com/us/app/qurantalk/id1563425149",
				},
				{
					icon: faGooglePlay,
					link: "https://play.google.com/store/apps/details?id=com.ayahemotion.quran_talk",
				},
			],
		},
		{
			title: "Portfolio",
			description:
				"A portfolio website template that helps you showcase your work, projects and skills as a software developer or freelancer.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/hashirshoaeb/portfolio",
				},
			],
		},
	],
};

export const contact = {
	title: "Get in touch",
	description:
		"Feel free to reach out directly by email at menghmalani@wisc.edu to connect and exchange insights.",

	buttons: [
		{
			title: "Email Me",
			link: "mailto:menghmalani@wisc.edu",
			isPrimary: true,
		},
	],
};

// SEARCH ENGINE
export const SEO = {
	// 50 - 60 char
	title: "Diksha Menghmalani | Computer Engineer ",
	description:
		"Graduate student in Data Engineering at the University of Wisconsin Madison",
	image: profile.src,
};

export const links = {
	image: profile.src,
	title: "@dikshamenghmalani",
	description: "Data Engineer",
	cards: [
		{
			title: "Portfolio Website",
			link: "https://dikshamenghmalani.github.io/",
		},
		{
			title: "My GitHub",
			link: "https://github.com/dikshamenghmalani",
		},
		{
			title: "My LinkedIn",
			link: "https://www.linkedin.com/in/diksha-menghmalani/",
		},
	],
};
