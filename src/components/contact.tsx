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
    <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24 section-fade visible">
      <div className="max-w-3xl w-full">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-blue-400 text-xs font-light tracking-wider uppercase sm:text-sm">
            GET IN TOUCH
          </p>
          <h3 className="text-3xl font-light mt-3 mb-4 sm:text-4xl sm:mt-4 sm:mb-6 lg:text-5xl">
            Let's Build Something Great
          </h3>
          <p className="text-base text-muted-foreground font-light sm:text-lg lg:text-xl">
            I'm currently available for select projects and consulting
            opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 mb-10 sm:grid-cols-2 sm:gap-6 sm:mb-14 lg:grid-cols-3 lg:gap-8 lg:mb-16">
          <Link
            href={`mailto:${personalInfo.email}`}
            className="border border-border p-5 text-center hover:border-primary transition-colors group sm:p-6"
          >
            <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500/20 transition-colors">
              <Mail className=" text-xl text-blue-400" />
            </div>
            <div className="text-sm text-muted-foreground">Email</div>
            <div className="text-sm font-medium mt-1">{personalInfo.email}</div>
          </Link>

           <Link
            href={`mailto:${personalInfo.linkedin}`}
            className="border border-border p-5 text-center hover:border-primary transition-colors group sm:p-6"
          >
            <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500/20 transition-colors">
              <Linkedin className=" text-xl text-blue-400" />
            </div>
            <div className="text-sm text-muted-foreground">LinkedIn</div>
            <div className="text-sm font-medium mt-1">Connect</div>
          </Link>

           <Link
            href={`mailto:${personalInfo.github}`}
            className="border border-border p-5 text-center hover:border-primary transition-colors group sm:p-6"
          >
            <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500/20 transition-colors">
              <Github className=" text-xl text-blue-400" />
            </div>
            <div className="text-sm text-muted-foreground">GitHub</div>
            <div className="text-sm font-medium mt-1">View Code</div>
          </Link>
        </div>

        <div className="border border-border p-6 sm:p-10 lg:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm text-muted-foreground mb-2"
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
                  className="w-full bg-transparent border border-border px-4 py-3 text-sm focus:border-primary focus:outline-none transition-colors sm:text-base"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm text-muted-foreground mb-2"
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
                  className="w-full bg-transparent border border-border px-4 py-3 text-sm focus:border-primary focus:outline-none transition-colors sm:text-base"
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="projectType"
                className="block text-sm text-muted-foreground mb-2"
              >
                Project Type
              </label>
              <select
                id="projectType"
                value={formData.projectType}
                onChange={(e) =>
                  setFormData({ ...formData, projectType: e.target.value })
                }
                className="w-full bg-transparent border border-border px-4 py-3 text-sm focus:border-primary focus:outline-none transition-colors sm:text-base"
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
                className="block text-sm text-muted-foreground mb-2"
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
                className="w-full bg-transparent border border-border px-4 py-3 text-sm focus:border-primary focus:outline-none transition-colors resize-none sm:text-base"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 transition-colors py-3 text-sm font-medium tracking-wide flex justify-center items-center gap-2 sm:py-4 sm:text-base"
            >
              <Send className="h-5 w-5" />
              Send Message
            </button>
          </form>
        </div>

        <div className="text-center mt-8 text-muted-foreground text-xs sm:mt-10 sm:text-sm">
          <p>Typically responds within 24 hours</p>
        </div>
      </div>
    </section>
  );
}
