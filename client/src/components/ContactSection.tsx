import { motion } from 'framer-motion';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Phone, Mail, MessageCircle, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import quranImg from '@assets/generated_images/Open_Quran_with_calligraphy_7f785852.png';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      return await apiRequest('/api/contact', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });
    },
    onSuccess: (response) => {
      toast({
        title: "Message Sent Successfully!",
        description: response.message || "We'll get back to you within 24 hours. Jazak Allah Khair!",
      });
      setFormData({ name: '', email: '', message: '' });
    },
    onError: (error: any) => {
      const errorMessage = error?.errors?.[0]?.message || 
                          error?.message || 
                          "Something went wrong. Please try again.";
      toast({
        title: "Failed to Send Message",
        description: errorMessage,
        variant: "destructive",
      });
    }
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic client-side validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Please fill in all fields",
        description: "Name, email, and message are required.",
        variant: "destructive",
      });
      return;
    }

    contactMutation.mutate(formData);
  };

  const handleWhatsApp = () => {
    // TODO: remove mock functionality - replace with real WhatsApp number
    const phoneNumber = "+1234567890";
    const message = "Assalamu alaikum! I'm interested in your Quran teaching services.";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="py-16 md:py-24 bg-background" id="contact">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Start Your Journey Today
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to begin your Qur'anic education? Contact us for a free consultation
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="mt-2"
                      data-testid="input-name"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-2"
                      data-testid="input-email"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="mt-2"
                      placeholder="Tell us about your learning goals..."
                      data-testid="input-message"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={contactMutation.isPending}
                    className="w-full bg-primary hover:bg-primary/90 font-semibold"
                    data-testid="button-submit-form"
                  >
                    {contactMutation.isPending ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4 hover-elevate p-4 rounded-lg cursor-pointer" onClick={handleWhatsApp} data-testid="contact-whatsapp">
                <div className="p-3 bg-green-100 dark:bg-green-900/20 rounded-full">
                  <MessageCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold">WhatsApp</h3>
                  <p className="text-muted-foreground">+1 (234) 567-8900</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 hover-elevate p-4 rounded-lg cursor-pointer" data-testid="contact-phone">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-full">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-muted-foreground">+1 (234) 567-8900</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 hover-elevate p-4 rounded-lg cursor-pointer" data-testid="contact-email">
                <div className="p-3 bg-purple-100 dark:bg-purple-900/20 rounded-full">
                  <Mail className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-muted-foreground">info@quranacademy.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 hover-elevate p-4 rounded-lg cursor-default" data-testid="contact-location">
                <div className="p-3 bg-orange-100 dark:bg-orange-900/20 rounded-full">
                  <MapPin className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Global Service</h3>
                  <p className="text-muted-foreground">Available Worldwide</p>
                </div>
              </div>
            </div>

            {/* Decorative Image */}
            <div className="relative">
              <img 
                src={quranImg} 
                alt="Holy Quran" 
                className="rounded-xl shadow-lg w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent rounded-xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}