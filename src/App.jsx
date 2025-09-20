import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Headers from './headerfile.jsx'
import Banner from './Banners.jsx'

export default function App() {
  return (
    <div className="font-sans">
      {/* Navbar */}
      <header className="flex justify-between items-center p-6 shadow-md bg-white sticky top-0">
        <h1 className="text-2xl font-bold text-blue-600">MyPortfolio</h1>
        <nav className="space-x-6">
          <a href="#home" className="hover:text-blue-600">Home</a>
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#services" className="hover:text-blue-600">Services</a>
          <a href="#projects" className="hover:text-blue-600">Projects</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-100 to-blue-50 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm Muni 👋</h2>
        <p className="text-lg md:text-2xl text-gray-700 mb-6">
          I build modern Web Applications using React & Spring Boot.
        </p>
        <a href="#contact" className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">
          Hire Me
        </a>
      </section>

      {/* About */}
      <section id="about" className="p-12 text-center">
        <h3 className="text-3xl font-semibold mb-4">About Me</h3>
        <p className="max-w-2xl mx-auto text-gray-600">
          I’m a passionate web developer with experience in React, Tailwind CSS, Spring Boot, and databases.
          I help clients build fast, scalable, and beautiful applications.
        </p>
      </section>

      {/* Services */}
      <section id="services" className="p-12 bg-gray-100 text-center">
        <h3 className="text-3xl font-semibold mb-8">Services</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg">
            <h4 className="text-xl font-bold mb-2">Frontend Development</h4>
            <p className="text-gray-600">React, Tailwind CSS, Responsive UI</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg">
            <h4 className="text-xl font-bold mb-2">Backend APIs</h4>
            <p className="text-gray-600">Spring Boot, REST APIs, Authentication</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg">
            <h4 className="text-xl font-bold mb-2">Database Design</h4>
            <p className="text-gray-600">SQL Server, MySQL, Google Spanner</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="p-12 text-center">
        <h3 className="text-3xl font-semibold mb-4">Contact Me</h3>
        <p className="mb-6 text-gray-600">Let’s work together! You can reach me at:</p>
        <div className="space-x-6">
          <a href="mailto:yourmail@example.com" className="text-blue-600 font-semibold">Email</a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" className="text-blue-600 font-semibold">LinkedIn</a>
          <a href="https://github.com/yourusername" target="_blank" className="text-blue-600 font-semibold">GitHub</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="p-6 text-center text-gray-500">
        © 2025 Muni | Freelancer Developer
      </footer>
    </div>
  );
}


