import { motion } from 'framer-motion';
import { Clock, User, CheckCircle, Globe, Headphones, Shield } from 'lucide-react';

export default function BenefitsSection() {
  const benefits = [
    {
      icon: <Clock className="w-10 h-10 text-primary" />,
      title: "Flexible Timing",
      description: "Schedule classes according to your convenience. Available 24/7 across different time zones."
    },
    {
      icon: <User className="w-10 h-10 text-primary" />,
      title: "1-on-1 Classes",
      description: "Personalized attention with dedicated teachers for accelerated learning progress."
    },
    {
      icon: <CheckCircle className="w-10 h-10 text-primary" />,
      title: "Qualified Teachers",
      description: "All instructors are certified with Ijazah and years of teaching experience."
    },
    {
      icon: <Globe className="w-10 h-10 text-primary" />,
      title: "Global Access",
      description: "Learn from anywhere in the world with our online platform and mobile apps."
    },
    {
      icon: <Headphones className="w-10 h-10 text-primary" />,
      title: "Interactive Learning",
      description: "Modern teaching tools, digital whiteboards, and interactive exercises."
    },
    {
      icon: <Shield className="w-10 h-10 text-primary" />,
      title: "Safe Environment",
      description: "Secure, monitored classes with background-verified teachers for your peace of mind."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-background" id="benefits">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why Students Choose Us
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Experience the benefits that make our platform the preferred choice for Qur'an education
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group hover-elevate rounded-xl p-6 cursor-default"
              data-testid={`benefit-${index}`}
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-accent/50 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                  {benefit.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-foreground">{benefit.title}</h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}