"use client";

import { useState } from "react";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { personalInfo } from "../lib/data";
import Link from "next/link";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    // You can integrate with Resend or other email services here
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-16 py-24 section-fade visible">
      <div className="max-w-3xl w-full">
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-light tracking-wider uppercase">
            GET IN TOUCH
          </p>
          <h3 className="text-5xl font-light mt-4 mb-6">
            Let's Build Something Great
          </h3>
          <p className="text-xl text-gray-400 font-light">
            I'm currently available for select projects and consulting
            opportunities
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8 mb-16">
          <Link
            href={`mailto:${personalInfo.email}`}
            className="border border-gray-800 p-6 text-center hover:border-blue-500 transition-colors group"
          >
            <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500/20 transition-colors">
              <Mail className=" text-xl text-blue-400" />
            </div>
            <div className="text-sm text-gray-400">Email</div>
            <div className="text-sm font-medium mt-1">{personalInfo.email}</div>
          </Link>

           <Link
            href={`mailto:${personalInfo.linkedin}`}
            className="border border-gray-800 p-6 text-center hover:border-blue-500 transition-colors group"
          >
            <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500/20 transition-colors">
              <Linkedin className=" text-xl text-blue-400" />
            </div>
            <div className="text-sm text-gray-400">LinkedIn</div>
            <div className="text-sm font-medium mt-1">Connect</div>
          </Link>

           <Link
            href={`mailto:${personalInfo.github}`}
            className="border border-gray-800 p-6 text-center hover:border-blue-500 transition-colors group"
          >
            <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500/20 transition-colors">
              <Github className=" text-xl text-blue-400" />
            </div>
            <div className="text-sm text-gray-400">GitHub</div>
            <div className="text-sm font-medium mt-1">View Code</div>
          </Link>
        </div>

        <div className="border border-gray-800 p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm text-gray-400 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Your name"
                  className="w-full bg-transparent border border-gray-800 px-4 py-3 focus:border-blue-500 focus:outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm text-gray-400 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="your@email.com"
                  className="w-full bg-transparent border border-gray-800 px-4 py-3 focus:border-blue-500 focus:outline-none transition-colors"
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="projectType"
                className="block text-sm text-gray-400 mb-2"
              >
                Project Type
              </label>
              <select
                id="projectType"
                value={formData.projectType}
                onChange={(e) =>
                  setFormData({ ...formData, projectType: e.target.value })
                }
                className="w-full bg-transparent border border-gray-800 px-4 py-3 focus:border-blue-500 focus:outline-none transition-colors"
                required
              >
                <option value="">Select project type</option>
                <option value="web-app">Web Application</option>
                <option value="mobile-app">Mobile Application</option>
                <option value="api">API Development</option>
                <option value="consulting">Technical Consulting</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm text-gray-400 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="Tell me about your project..."
                rows={6}
                className="w-full bg-transparent border border-gray-800 px-4 py-3 focus:border-blue-500 focus:outline-none transition-colors resize-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 transition-colors py-4 font-medium tracking-wide flex justify-center items-center gap-2"
            >
              <Send className="h-5 w-5" />
              Send Message
            </button>
          </form>
        </div>

        <div className="text-center mt-12 text-gray-500 text-sm">
          <p>Typically responds within 24 hours</p>
        </div>
      </div>
    </section>
  );
}
