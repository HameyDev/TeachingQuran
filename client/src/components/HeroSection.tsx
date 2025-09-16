import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import islamicPatternBg from '@assets/generated_images/Islamic_geometric_pattern_background_3c408123.png';

export default function HeroSection() {
  const handleJoinNow = () => {
    // Scroll to contact section
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/90 to-primary text-white overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(34, 139, 69, 0.85), rgba(34, 139, 69, 0.85)), url(${islamicPatternBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Learn Qur'an Online with <br />
            <span className="text-chart-2">Expert Teachers</span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Join thousands of students worldwide in our structured Islamic education program. 
            Learn from qualified teachers with flexible timing and personalized guidance.
          </p>
          
          <Button 
            onClick={handleJoinNow}
            size="lg"
            className="bg-chart-2 hover:bg-chart-2/90 text-foreground font-semibold px-8 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            data-testid="button-join-now"
          >
            Join Now - Start Your Journey
          </Button>
        </motion.div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}