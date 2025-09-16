import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Star, Volume2, Users, GraduationCap } from 'lucide-react';

export default function WhatWeTeachSection() {
  const courses = [
    {
      icon: <BookOpen className="w-10 h-10 text-primary" />,
      title: "Nazra (Reading)",
      description: "Learn to read the Qur'an with proper pronunciation and fluency. Perfect for beginners starting their Qur'anic journey."
    },
    {
      icon: <Star className="w-10 h-10 text-primary" />,
      title: "Hifz (Memorization)", 
      description: "Complete memorization program with systematic approach and regular revision schedules for all ages."
    },
    {
      icon: <Volume2 className="w-10 h-10 text-primary" />,
      title: "Tajweed",
      description: "Master the art of beautiful Qur'anic recitation with proper rules of pronunciation and melody."
    },
    {
      icon: <Users className="w-10 h-10 text-primary" />,
      title: "Qaida for Kids",
      description: "Child-friendly introduction to Arabic letters, basic reading skills, and Qur'anic fundamentals."
    },
    {
      icon: <GraduationCap className="w-10 h-10 text-primary" />,
      title: "Basic Islamic Studies",
      description: "Essential Islamic knowledge including prayers, supplications, and fundamental religious concepts."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-accent/20" id="courses">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What We Teach
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive Islamic education programs designed to meet your learning goals
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="h-full"
            >
              <Card className="h-full hover-elevate cursor-pointer shadow-lg transition-all duration-300" data-testid={`card-course-${index}`}>
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-accent/50 rounded-full">
                      {course.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold">{course.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center leading-relaxed">
                    {course.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}