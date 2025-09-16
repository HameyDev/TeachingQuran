import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

export default function TestimonialsSection() {
  // TODO: remove mock functionality - replace with real testimonials
  const testimonials = [
    {
      name: "Fatima Al-Zahra",
      role: "Mother of 2 students",
      avatar: "FA",
      rating: 5,
      text: "My children have made incredible progress in their Qur'an recitation. The teachers are patient, knowledgeable, and truly care about each student's development. Highly recommended!"
    },
    {
      name: "Ahmed Rahman",
      role: "Adult Student",
      avatar: "AR", 
      rating: 5,
      text: "As a working professional, the flexible scheduling was perfect for me. I completed my Hifz program while managing my career. The quality of teaching is exceptional."
    },
    {
      name: "Khadija Hassan",
      role: "Tajweed Student",
      avatar: "KH",
      rating: 5,
      text: "The Tajweed classes transformed my recitation completely. My teacher was very thorough in explaining the rules and provided excellent feedback. Alhamdulillah for this platform!"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: rating }, (_, i) => (
      <Star key={i} className="w-4 h-4 fill-chart-2 text-chart-2" />
    ));
  };

  return (
    <section className="py-16 md:py-24 bg-accent/20" id="testimonials">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What Our Students Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real experiences from our beloved students and their families
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full hover-elevate shadow-lg" data-testid={`testimonial-${index}`}>
                <CardContent className="p-6">
                  {/* Rating */}
                  <div className="flex items-center justify-center mb-4">
                    {renderStars(testimonial.rating)}
                  </div>
                  
                  {/* Quote */}
                  <p className="text-muted-foreground text-center mb-6 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  
                  {/* Author */}
                  <div className="flex items-center justify-center space-x-3">
                    <Avatar className="border-2 border-primary/20">
                      <AvatarImage src="" alt={testimonial.name} />
                      <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className="text-center">
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}