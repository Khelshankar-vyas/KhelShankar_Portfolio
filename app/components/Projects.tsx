"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Project data
const projects = [
	{
		title: "School In A Box (Offline Mode Smart Knowledge Server) ",
		description:
			"“School in a Box” is a compact, all-in-one educational solution designed for remote or under-resourced areas. It includes a plug-and-play system equipped with preloaded educational content, virtual classrooms, attendance systems, digital assessments, and teacher tools. As the developer, I designed and implemented responsive web interfaces to ensure seamless user experience across devices. I also worked closely with backend teams to integrate RESTful APIs and manage dynamic data using MySQL. This solution helps bridge the digital divide by making education more accessible and engaging",
		image: "/Images/1.png",
		tags: [
			"HTML",
			"JavaScript",
			"CSS",
			"Jquery",
			"SQL",
			"Php",
			"Perl",
			"ActionScript",
			"Linux/Unix",
			"ServerSide",
		],
		demoUrl: "https://www.linkedin.com/company/schoolinabox/about/#",
		youtubeUrl: "https://youtu.be/PCF_jeF8McM?si=9Mua9G2nwwg-d8U6",
		color: "from-emerald-500 to-teal-500",
	},
	{
		title: "Quiz Academy – Your Buddy in Study",
		description:
			"QuizAcademy is an interactive, multilingual, quiz-based learning platform designed to enhance student engagement and comprehension. It offers curriculum-mapped courses, virtual classrooms, personalized assessments, and real-time progress dashboards. As the lead developer, I crafted responsive web interfaces to ensure seamless user experiences across devices. Collaborated with backend teams to integrate RESTful APIs and manage dynamic data using MySQL. The platform has been implemented in over 1,900 schools, catering to diverse linguistic mediums, and has facilitated over 320 million question practices.",
		image: "/Images/2.png",
		tags: [
			"HTML",
			"JavaScript",
			"Jquery",
			"CSS",
			"SQL",
			"Php",
			"XML",
			"ServerSide",
		],
		demoUrl: "https://www.quizacademy.org/",
		youtubeUrl: "https://drive.google.com/file/d/1NJ3kwV2CqE9uFsV8_fQItOmj0vsAUFPa/view?usp=sharing",
		githubUrl: "#",
		color: "from-blue-500 to-indigo-500",
	},
	{
		title: "Quiz Academy – Math GPA",
		description:
			"MathGPA (Gamified Practice & Assessment) is a hybrid (digital and physical) learning tool aimed at strengthening foundational math skills for students from Pre-Primary to Upper Primary. The objective was to create an engaging and structured learning environment that addresses key challenges in early math education such as poor attention span, lack of consistent practice, and student disengagement.",
		image: "/Images/3.png",
		tags: [
			"HTML",
			"JavaScript",
			"CSS",
			"Jquery",
			"SQL",
			"Php",
			"ServerSide",
		],
		demoUrl: "https://www.quizacademy.org/mathgpa/",
		youtubeUrl: "https://youtu.be/PCF_jeF8McM?si=9Mua9G2nwwg-d8U6",
		githubUrl: "https://github.com/Khelshankar-vyas/MathGPA",
		color: "from-purple-500 to-pink-500",
	},

	{
		title: "Moinee Foundation – Transforming Mass Education through Techno-Social Innovations",
		description:
			"Moinee Foundation is a non-government organization established in 2012, primarily working in the education sector through techno-social innovations. The foundation collaborates with government bodies, educational institutes, and local communities to implement various initiatives aimed at improving the quality of education. Key initiatives include Project Utkarsh, Community Engagement Programs, and Industry Alignment Programs. As the lead developer, I contributed to designing and implementing responsive web interfaces for these initiatives, ensuring seamless user experiences across devices. Collaborated with backend teams to integrate RESTful APIs and manage dynamic data using MySQL. These initiatives have been implemented across multiple states in India, impacting numerous schools and students.",
		image: "/Images/4.png",
		tags: [
			"HTML",
			"JavaScript",
			"TailwindCSS",
			"Jquery",
			"SQL",
			"Php",
			"BootstrapCSS",
			"ServerSide",
		],
		demoUrl: "https://www.moinee.org/",
		youtubeUrl: "https://youtu.be/zv2MAwTKEdU?si=6xoarT_7-ilPs9Pt",
		githubUrl: "https://github.com/Khelshankar-vyas/Moinee_Website.git",
		color: "from-purple-500 to-pink-500",
	},
	{
		title: "OM Server Pvt. Ltd. – Bridging the Digital Divide through Innovative Solutions",
		description:
			"OM Server Pvt. Ltd., established in 2017, is dedicated to developing technology-based solutions aimed at bridging the digital divide in India. The company focuses on creating innovative products and services that cater to digitally disconnected regions, particularly in the education sector. Key initiatives include the development of School-In-A-Box, a comprehensive eLearning ecosystem that operates without internet dependency, and various frugal STEM tools designed to provide hands-on learning experiences. As the lead developer, I was responsible for designing and implementing responsive web interfaces, ensuring seamless user experiences across devices. Collaborated with backend teams to integrate RESTful APIs and manage dynamic data using MySQL. These solutions have been instrumental in supporting over 2,000 schools and establishing over 300 offline eLearning ecosystems in six regional languages acOM Server Pvt. Ltd., established in 2017, is dedicated to developing technology-based solutions aimed at bridging the digital divide in India. The company focuses on creating innovative products and services that cater to digitally disconnected regions, particularly in the education sector. Key initiatives include the development of School-In-A-Box, a comprehensive eLearning ecosystem that operates without internet dependency, and various frugal STEM tools designed to provide hands-on learning experiences. As the lead developer, I was responsible for designing and implementing responsive web interfaces, ensuring seamless user experiences across devices. Collaborated with backend teams to integrate RESTful APIs and manage dynamic data using MySQL. These solutions have been instrumental in supporting over 2,000 schools and establishing over 300 offline eLearning ecosystems in six regional languages across India.​",
		image: "/Images/5.png",
		tags: [
			"HTML",
			"JavaScript",
			"TailwindCSS",
			"Jquery",
			"SQL",
			"Php",
			"BootstrapCSS",
			"ServerSide",
		],
		demoUrl: "https://www.omserver.org/index_old.html",
		youtubeUrl: "https://youtu.be/zdYFrUmH0oM?si=O2C6n7ni6mx7Th8n",
		githubUrl: "https://github.com/Khelshankar-vyas/Om-Server-Website.git",
		color: "from-purple-500 to-pink-500",
	},

	{
		title: "Khel Shankar Vyas – Personal Portfolio",
		description:
			"This portfolio website showcases my skills, projects, and professional journey as a Developer. It features a clean, modern design with responsive layouts, animations, and interactive elements to enhance user engagement. The site is built using Next.js for server-side rendering and optimized performance, with TailwindCSS for styling and Framer Motion for animations. It includes sections for my biography, skills, featured projects, and contact information, providing a comprehensive overview of my work and expertise.",
		image: "/Images/Portfolio.png",
		tags: ["Next.js 15", "TypeScript", "Tailwind CSS", "Framer Motion", "Next Themes"],
		demoUrl: "https://www.omserver.org/index_old.html",
		githubUrl: "https://github.com/Khelshankar-vyas/KhelShankar_Portfolio.git",
		color: "from-purple-500 to-pink-500",
	},
];

export default function Projects() {
	return (
		<section id="projects" className="relative py-20 bg-white dark:bg-black">
			{/* Background Effects */}
			<div className="absolute bottom-0 right-0 w-full h-96 bg-gradient-to-t from-purple-100/20 dark:from-purple-900/20 via-transparent to-transparent" />

			<div className="container max-w-7xl mx-auto px-8 lg:px-12 relative z-10">
				{/* Section Header */}
				<div className="max-w-3xl mx-auto text-center mb-20">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400"
					>
						Featured Projects
					</motion.h2>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.2 }}
						className="mt-4 text-lg text-gray-600 dark:text-gray-300"
					>
						Showcasing some of my recent work and passion projects
					</motion.p>
				</div>

				{/* Projects Grid */}
				<div className="grid gap-8 lg:grid-cols-2">
					{projects.map((project, index) => (
						<motion.div
							key={project.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.2 }}
							className="group relative bg-white dark:bg-gray-800/50 rounded-2xl overflow-hidden 
                         backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50"
						>
							{/* Project Image section */}
							<div className="relative h-64 overflow-hidden">
								<Image
									src={project.image}
									alt={project.title}
									fill
									className="object-cover transition-transform duration-700 group-hover:scale-105"
								/>
								<div className="absolute inset-0 bg-black/60 transition-opacity duration-300 
                              group-hover:opacity-30" />

								{/* Floating Tags*/}
								<div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
									{project.tags.map((tag) => (
										<span
											key={tag}
											className="px-3 py-1 text-sm bg-transparent text-white rounded-lg 
                               backdrop-blur-sm border border-white/10"
										>
											{tag}
										</span>
									))}
								</div>
							</div>

							{/* Project Content */}
							<div className="p-8">
								<h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 
                             group-hover:text-purple-600 dark:group-hover:text-purple-400 
                             transition-colors">
									{project.title}
								</h3>
								<p className="text-gray-600 dark:text-gray-300 mb-8 line-clamp-3">
									{project.description}
								</p>

								{/* Action Buttons with Updated Design */}
								<div className="flex gap-4 flex-col md:flex-row">
									<motion.a
										whileHover={{ scale: 1.02 }}
										whileTap={{ scale: 0.98 }}
										href={project.demoUrl}
										className="px-6 py-2.5 bg-purple-600 dark:bg-purple-500 text-white 
                             rounded-lg flex items-center gap-2 hover:bg-purple-700 
                             dark:hover:bg-purple-600 transition-colors shadow-lg 
                             shadow-purple-500/20"
									>
										Live Demo
										<svg
											className="w-4 h-4"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
											/>
										</svg>
									</motion.a>
									{project.youtubeUrl && (
										<motion.a
											whileHover={{ scale: 1.02 }}
											whileTap={{ scale: 0.98 }}
											href={project.youtubeUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="px-6 py-2.5 bg-red-600 text-white rounded-lg flex items-center gap-2 hover:bg-red-700 transition-colors shadow-lg shadow-red-500/20"
										>
											<svg
												className="w-5 h-5"
												fill="currentColor"
												viewBox="0 0 24 24"
											>
												<path d="M23.498 6.186a2.994 2.994 0 00-2.107-2.12C19.37 3.5 12 3.5 12 3.5s-7.37 0-9.391.566A2.994 2.994 0 00.502 6.186C0 8.21 0 12 0 12s0 3.79.502 5.814a2.994 2.994 0 002.107 2.12C4.63 20.5 12 20.5 12 20.5s7.37 0 9.391-.566a2.994 2.994 0 002.107-2.12C24 15.79 24 12 24 12s0-3.79-.502-5.814zM9.75 15.568V8.432L15.818 12 9.75 15.568z" />
											</svg>
											YouTube
										</motion.a>
									)}
									<motion.a
										whileHover={{ scale: 1.02 }}
										whileTap={{ scale: 0.98 }}
										href={project.githubUrl}
										className="px-6 py-2.5 bg-white dark:bg-gray-800 text-gray-800 
                             dark:text-white rounded-lg flex items-center gap-2 
                             hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors 
                             shadow-lg shadow-gray-200/20 dark:shadow-gray-900/20 
                             border border-gray-200 dark:border-gray-700"
									>
										<svg
											className="w-5 h-5"
											fill="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												fillRule="evenodd"
												d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
											/>
										</svg>
										View Code
									</motion.a>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}