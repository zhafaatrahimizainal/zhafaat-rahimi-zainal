import { Layers, Layout, Server, Gauge, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Services.css';

function Services() {
  const serviceList = [
    {
      icon: Layout,
      title: "Frontend & Web Architecture",
      desc: "Building responsive, modern, and accessible websites using React, Next.js, and Tailwind CSS. Focus on fast load times and seamless interactions.",
      deliverables: ["Single Page Applications", "Responsive Web Layouts", "Component Design Systems"]
    },
    {
      icon: Server,
      title: "Full-Stack Development",
      desc: "Creating scalable backends, database models, and API integrations with Node.js, Express, and PostgreSQL to power dynamic web applications.",
      deliverables: ["RESTful & GraphQL APIs", "Database Schema Design", "Authentication & Security"]
    },
    {
      icon: Layers,
      title: "UI/UX & Interactive Design",
      desc: "Designing cohesive visual styles, component tokens, wireframes, and interactive prototypes with a focus on usability and clarity.",
      deliverables: ["Wireframes & Prototypes", "Design Tokens & Tokens System", "User Flow Optimization"]
    },
    {
      icon: Gauge,
      title: "Performance & Optimization",
      desc: "Refactoring legacy client code, auditing site performance, fixing layout shifts, and tuning core web vitals for maximum efficiency.",
      deliverables: ["Lighthouse Optimization", "Code Refactoring", "SEO & Metadata Tuning"]
    }
  ];

  return (
    <div className="services-container">
      {/* Header */}
      <section className="glass-card services-hero-card">
        <div className="eyebrow-badge">
          <Layers size={16} strokeWidth={2} />
          <span>WHAT I OFFER</span>
        </div>
        <h1 className="page-title">
          Custom Web Solutions <span className="gradient-text">Tailored to Your Goals.</span>
        </h1>
        <p className="page-description">
          Whether you need a high-converting portfolio, a dynamic SaaS web application, or custom backend services, I deliver clean and maintainable solutions.
        </p>
      </section>

      {/* Services Grid */}
      <div className="services-grid">
        {serviceList.map((service, idx) => {
          const Icon = service.icon;
          return (
            <div key={idx} className="glass-card service-card">
              <div className="service-card-header">
                <div className="service-icon-box">
                  <Icon size={24} />
                </div>
                <h2 className="service-card-title">{service.title}</h2>
              </div>
              <p className="service-card-desc">{service.desc}</p>
              
              <div className="service-deliverables">
                <p className="deliverables-heading">Key Deliverables:</p>
                <ul>
                  {service.deliverables.map((item, i) => (
                    <li key={i}>
                      <CheckCircle2 size={16} className="check-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>

      {/* Services CTA Banner */}
      <section className="glass-card services-cta-card">
        <div>
          <h2 className="cta-title">Ready to launch your web project?</h2>
          <p className="cta-subtitle">Let's discuss your ideas, requirements, and timeline.</p>
        </div>
        <Link to="/contact" className="btn-primary">Get in Touch</Link>
      </section>
    </div>
  );
}

export default Services;