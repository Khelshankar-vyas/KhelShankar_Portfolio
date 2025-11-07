"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="relative py-20 bg-white dark:bg-black">
      <div className="absolute bottom-0 right-0 w-full h-96 bg-gradient-to-t from-purple-100/20 dark:from-purple-900/20 via-transparent to-transparent" />
      
      <div className="container max-w-7xl mx-auto px-8 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-start gap-16">
          {/* Image Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2"
          >
            <div className="relative group flex flex-col items-center">
              {/* Image Container */}
              <div className="relative rounded-lg overflow-hidden bg-white">
                <Image
                  src="/Images/me.png"
                  alt="Khel Shankar Vyas"
                  width={600}
                  height={700}
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
              </div>
              {/* Resume Button with Link below the image */}
              <div className="mt-6 flex justify-center w-full">
                <a href="/KHEL SHANKAR VYAS.pdf" target="_blank" rel="noopener noreferrer">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-purple-500/25"
                  >
                    <span className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    <span className="relative flex items-center justify-center gap-2">
                      Resume
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </span>
                  </motion.button>
                </a>
              </div>
              {/* Stats Section below Resume Button */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-8 w-full">
                {[
                  { number: '2+', label: 'Years', color: 'from-purple-600 to-indigo-600' },
                  { number: '15+', label: 'Projects', color: 'from-blue-600 to-cyan-600' },
                  { number: '10+', label: 'Clients', color: 'from-emerald-600 to-teal-600' },
                  { number: '99%', label: 'Success', color: 'from-orange-600 to-amber-600' }
                ].map((stat) => (
                  <motion.div 
                    key={stat.label}
                    whileHover={{ y: -5 }}
                    className="p-4 rounded-lg bg-white dark:bg-gray-800 ring-1 ring-gray-200/50 
                    dark:ring-gray-800/50 shadow-sm hover:shadow-md transition-all duration-300 text-center"
                  >
                    <div className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-8">
              About Me
            </h2>

            <div className="space-y-6 text-gray-600 dark:text-gray-300">
              <p>
                Hey! I&apos;m Khel Shankar Vyas, a 23-year-old Developer currently advancing my knowledge with an MCA from Manipal University. My professional journey is centered at OM Server Pvt. Ltd., where I&apos;ve grown from a Tech Intern (2021-2022) to a Developer (July 2023-Current). I&apos;m passionate about building robust and user-friendly web experiences.
              </p>
              
              <p>
                My core expertise lies in front-end and back-end technologies including HTML, CSS, JavaScript, and Node.js, complemented by strong skills in SQL database design (MySQL) and optimization. I excel in collaborative environments, working alongside UX/UI designers, back-end developers, QA engineers, and product managers to deliver high-quality features and upgrades. From writing clean, scalable code and performing meticulous code reviews to implementing performance optimizations and conducting root cause analysis for complex bugs, I&apos;m committed to best practices and system stability. Even as an intern, I managed multiple projects, developed responsive UIs, and contributed to significant initiatives like legacy application migration.
              </p>

              <p>
                While I&apos;m deeply rooted in development, my approach is also shaped by my interests as an artist, writer, storyteller, and aspiring entrepreneur, bringing a unique perspective to problem-solving and innovation.
              </p>
            </div>

            {/* Skills Section */}
            <div className="mt-12">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-6">
                Technologies I Work With
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  'JavaScript', 'HTML', 'CSS', 'React Native', 'Core Java',
                  'C/C++', 'MySQL', 'Php', 'Git', 'GitHub', 'MS Office',
                  'Node.js','React', 'Next.js', 'TypeScript', 'Node.js', 
                  'TailwindCSS', 'MongoDB', 'AWS', 'Docker'
                ].map((skill) => (
                  <motion.span 
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-white dark:bg-gray-800 ring-1 ring-purple-500/20 
                    text-gray-700 dark:text-gray-300 rounded-lg text-sm hover:ring-purple-500/40 
                    shadow-sm hover:shadow transition-all duration-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}