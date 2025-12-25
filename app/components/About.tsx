"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  const partners = [
    { name: "Vodafone", logo: "/Images/partners/02.png" },
    { name: "Tata Motors", logo: "/Images/partners/01.png" },
    { name: "WNS", logo: "/Images/partners/07.png" },
    { name: "WGFP & PANIIT", logo: "/Images/partners/13.png" },
    { name: "Shree Cement", logo: "/Images/partners/03.png" },
    { name: "HDFC", logo: "/Images/partners/04.png" },
    { name: "Aditya Birla", logo: "/Images/partners/05.png" },
    { name: "Vedanta", logo: "/Images/partners/06.png" },
    { name: "HG Infra", logo: "/Images/partners/08.png" },
    { name: "Central Square", logo: "/Images/partners/09.png" },
    { name: "Agrasen", logo: "/Images/partners/10.png" },
    { name: "KPMG", logo: "/Images/partners/11.png" },
    { name: "ASDC", logo: "/Images/partners/12.png" },
    { name: "Rotary Club", logo: "/Images/partners/14.png" },
    { name: "Education Ministry", logo: "/Images/partners/15.png" },
    { name: "TISS", logo: "/Images/partners/16.png" },
    { name: "Partner 17", logo: "/Images/partners/17.png" },
    { name: "Uttarakhand Govt", logo: "/Images/partners/18.png" },
    { name: "Kota District", logo: "/Images/partners/19.png" },
    { name: "Round Table India", logo: "/Images/partners/20.png" },
    { name: "Dantewada", logo: "/Images/partners/21.png" },
    { name: "HG Foundation", logo: "/Images/partners/22.png" },
    { name: "Case Project-Puliya Kalan", logo: "/Images/partners/23.png" },
    { name: "Rajasthan State Mines & Minerals", logo: "/Images/partners/24.png" },
    { name: "NTPC", logo: "/Images/partners/25.png" },
    { name: "Kamal Cogent Energy", logo: "/Images/partners/26.png" },
    { name: "Kali Sindh", logo: "/Images/partners/27.png" },
    { name: "Ocean Network Express", logo: "/Images/partners/28.png" },
    { name: "Rural Development & Panchayati Raj Government", logo: "/Images/partners/29.png" },
    { name: "Chhabra Group", logo: "/Images/partners/30.png" },
  ];

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
                Hey! I&apos;m Khel Shankar Vyas, a 24-year-old Developer currently advancing my knowledge with an MCA from Manipal University. My professional journey is centered at OM Server Pvt. Ltd., where I&apos;ve grown from a Tech Intern (2021-2022) to a Developer (July 2023-Current). I&apos;m passionate about building robust and user-friendly web experiences.
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

        {/* Company Partners & Associations Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20 pt-20 border-t border-gray-200 dark:border-gray-800"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Company Partnerships & Associations
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              As an employee of OM Server Pvt. Ltd. & Moinee Foundation, I have delivered comprehensive support and solutions on behalf of our esteemed partners and collaborators. These partnerships enable us to create impactful educational technology solutions across India.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <a href="https://www.omserver.org" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 font-medium">
                OM Server →
              </a>
              <a href="https://www.moinee.org" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 font-medium">
                Moinee Foundation →
              </a>
            </div>
          </div>

          {/* Partners Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {partners.map((partner, index) => (
              <motion.div 
                key={partner.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="p-4 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 
                rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg 
                transition-all duration-300 flex flex-col items-center justify-center text-center group h-40"
              >
                <div className="relative w-full h-24 flex items-center justify-center mb-2">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={100}
                    height={80}
                    className="object-contain max-w-full max-h-full group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <p className="text-xs font-medium text-gray-700 dark:text-gray-300 line-clamp-2">
                  {partner.name}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Description */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12 p-6 bg-purple-50 dark:bg-purple-900/20 rounded-xl border border-purple-200 dark:border-purple-800"
          >
            <p className="text-gray-700 dark:text-gray-300">
              Through my work with these 30+ esteemed organizations, I have contributed to bridging the digital divide in education, 
              implementing scalable solutions, and providing comprehensive support to educational institutions and corporate partners across India. 
              My involvement with these partnerships reflects my commitment to creating meaningful impact through technology, innovation, and collaborative problem-solving.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}