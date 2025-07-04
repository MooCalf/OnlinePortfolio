import {
  Instagram,
  Mail,
  MapPin,
  Send,
  Twitch,
  Youtube,
  UserSearch,
  Globe,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useCallback, useMemo } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/manjkvkp";

const ContactInfoItem = ({ icon: Icon, title, content, href }) => (
  <div className="flex items-start space-x-4">
    <div className="p-3 rounded-full bg-primary/10">
      <Icon className="h-6 w-6 text-primary" />
    </div>
    <div>
      <h4 className="font-medium">{title}</h4>
      {href ? (
        <a href={href} className="text-muted-foreground hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      ) : (
        <span className="text-muted-foreground">{content}</span>
      )}
    </div>
  </div>
);

const SocialLink = ({ icon: Icon, href, label }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    aria-label={label} 
    className="p-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
  >
    <Icon size={20} />
  </a>
);

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // null | 'success' | 'error'

  const socialLinks = useMemo(() => [
    { icon: Youtube, href: "https://www.youtube.com/@MooCalf", label: "Youtube" },
    { icon: Twitch, href: "https://www.twitch.tv/moocalf_", label: "Twitch" },
    { icon: Instagram, href: "https://www.instagram.com/cypher._01?igsh=MWlxeGY1NXpzeWtnbQ==", label: "Instagram" },
  ], []);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);
    const form = e.target;
    const data = new FormData(form);
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });
      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
    setIsSubmitting(false);
  }, []);

  const contactInfoItems = useMemo(() => [
    {
      icon: Mail,
      title: "My Email:",
      content: "dencypher01@gmail.com",
      href: "mailto:dencypher01@gmail.com"
    },
    {
      icon: UserSearch,
      title: "My Reddit:",
      content: "@MooCalf",
      href: "https://www.reddit.com/user/MooCalf/"
    },
    {
      icon: Twitter,
      title: "Twitter:",
      content: "@MooCalf_",
      href: "https://x.com/MooCalf_"
    }
  ], []);

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a Project/Idea in mind or wish to collaborate? Feel free to reach out! I am always open to discussing new opportunities.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6 justify-center">
              {contactInfoItems.map((item, index) => (
                <ContactInfoItem key={index} {...item} />
              ))}
            </div>
            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-start">
                {socialLinks.map((socialLink) => (
                  <SocialLink key={socialLink.label} {...socialLink} />
                ))}
              </div>
            </div>
          </div>
          
          {/* Right: Contact Form */}
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="MooCalf"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="john@gmail.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>
              <button
                type="submit"
                className="cosmic-button w-full flex items-center justify-center gap-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
              {status === "success" && (
                <p className="text-green-600 pt-2 text-center">Message sent! Thank you for reaching out.</p>
              )}
              {status === "error" && (
                <p className="text-red-600 pt-2 text-center">Something went wrong. Please try again later.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};