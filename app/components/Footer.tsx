"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const socialLinks = [
	{
		name: "GitHub",
		url: "https://github.com/Khelshankar-vyas",
		icon: (
			<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
				<path
					fillRule="evenodd"
					d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
				/>
			</svg>
		),
	},
	{
		name: "LinkedIn",
		url: "https://www.linkedin.com/in/khel-shankar-vyas-896675248/",
		icon: (
			<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
				<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
			</svg>
		),
	},
	{
        name: "Instagram",
        url: "https://www.instagram.com/khush.fr",
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.645.069-4.849.069-3.204 0-3.584-.012-4.849-.069-3.259-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163C8.756 0 8.331.012 7.052.069 2.635.302.38 2.546.223 7.051.12 8.331.108 8.756.108 12s.012 3.669.109 4.948c.156 4.505 2.412 6.75 6.87 6.97 1.278.058 1.703.07 4.948.07 3.245 0 3.67-.012 4.948-.07 4.457-.22 6.705-2.447 6.868-6.97.1-1.279.108-1.704.108-4.948s-.011-3.669-.114-4.948c-.156-4.505-2.412-6.75-6.87-6.97C15.669.12 15.244.108 12 .108zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
        ),
    },
];

const quickLinks = [
	{ name: "Home", href: "/" },
	{ name: "About", href: "#about" },
	{ name: "Skills", href: "#skills" },
	{ name: "Projects", href: "#projects" },
];

export default function Footer() {
	return (
		<footer id="footer" className="relative bg-[#101010] dark:bg-black text-white">
			<div className="container max-w-7xl mx-auto px-8 lg:px-12 relative z-10">
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-12 py-16">
					{/* Brand Section */}
					<div className="space-y-6">
						<Link href="/" className="inline-block">
							<span className="flex items-center gap-3">
								<Image
									src="/Images/nav-avatar.png"
									alt="KV Avatar"
									width={40}
									height={40}
									className="w-10 h-10 rounded-full border-2 border-purple-600 shadow"
									priority
								/>
								<span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400">
									KV
								</span>
							</span>
						</Link>
						<p className="text-gray-300 max-w-sm">
							Creating digital experiences that combine creativity with technical
							excellence.
						</p>
						<div className="flex gap-4">
							{socialLinks.map((social) => (
								<motion.a
									key={social.name}
									href={social.url}
									whileHover={{ scale: 1.1 }}
									whileTap={{ scale: 0.9 }}
									className="p-2 rounded-lg bg-purple-800/10 text-purple-500 hover:bg-purple-500/20 dark:hover:bg-purple-500/30 transition-colors"
								>
									{social.icon}
								</motion.a>
							))}
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className="text-lg font-semibold text-gray-300 mb-6">
							Quick Links
						</h3>
						<ul className="space-y-4">
							{quickLinks.map((link: { name: string; href: string }) => (
								<li key={link.name}>
									<Link
										href={link.href}
										className="text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
									>
										{link.name}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Contact Section */}
					<div>
						<h3 className="text-lg font-semibold text-gray-300 mb-6">
							Get in Touch
						</h3>
						<div className="space-y-4">
							<p className="flex items-center gap-3 text-gray-400">
								<svg
									className="w-5 h-5 text-purple-400"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
									/>
								</svg>
								contact: khelshankarvyas007@gmail.com
							</p>
							<p className="flex items-center gap-3 text-gray-400">
								<svg
									className="w-5 h-5 text-purple-400"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
									/>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
									/>
								</svg>
								Jaipur
							</p>
						</div>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="border-t border-gray-800 py-8">
					<div className="flex flex-col sm:flex-row justify-between items-center gap-4">
						<p className="text-gray-300 text-sm">
							© {new Date().getFullYear()} Khel Shankar Vyas. All rights reserved.
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}