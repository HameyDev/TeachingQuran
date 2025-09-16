import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Heart, Users, Award } from 'lucide-react';
import teacherImg from '@assets/generated_images/Online_Quran_teacher_illustration_7f3d0099.png';

export default function AboutSection() {
  const features = [
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Dedicated to Islamic Education",
      description: "Our mission is to make quality Qur'an education accessible to Muslims worldwide"
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Experienced Teachers",
      description: "All our instructors are certified with years of teaching experience"
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "Proven Results",
      description: "Thousands of students have successfully completed their Qur'an journey with us"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-background" id="about">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img 
              src={teacherImg} 
              alt="Online Quran Teacher" 
              className="rounded-xl shadow-2xl w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-xl" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Why Choose Our Platform?
            </h2>
            
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Learning the Qur'an online has never been more convenient and effective. 
              Our platform combines traditional Islamic teaching methods with modern 
              technology to provide you with the best possible learning experience.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <Card className="p-6 hover-elevate cursor-default">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">{feature.icon}</div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}