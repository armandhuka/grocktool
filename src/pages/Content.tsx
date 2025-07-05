
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Content = () => {
  const [email, setEmail] = React.useState('');

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const blogCards = [
    {
      title: "Top 10 AI Tools of 2025",
      summary: "Discover the most innovative AI tools that are shaping the future of productivity and creativity.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop"
    },
    {
      title: "How AI is Transforming Content Creation",
      summary: "Explore how artificial intelligence is revolutionizing the way we create and consume content.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop"
    },
    {
      title: "The Future of AI-Powered Design",
      summary: "Learn about cutting-edge AI design tools that are changing the creative industry landscape.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop"
    },
    {
      title: "AI Tools for Developers in 2025",
      summary: "A comprehensive guide to the best AI-powered development tools for modern programmers.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-toolnest-bg font-inter">
      <Header />

      {/* Section 1: Title */}
      <section className="pt-32 pb-20 px-6 bg-toolnest-bg">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              className="text-5xl md:text-6xl font-bold text-toolnest-text mb-6"
              variants={itemVariants}
            >
              ToolNest Content Hub
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-toolnest-text/80"
              variants={itemVariants}
            >
              Tips, updates & insights from the AI world
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Blog/Article Cards */}
      <section className="py-20 px-6 bg-toolnest-accent/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-toolnest-text mb-4">
              Latest Insights
            </h2>
            <p className="text-toolnest-text/80 text-lg">
              Stay updated with the latest trends and discoveries in AI
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {blogCards.map((article, index) => (
              <motion.div
                key={article.title}
                className="bg-toolnest-accent rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-toolnest-text mb-3 group-hover:text-toolnest-text/80 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-toolnest-text/80 mb-4 leading-relaxed">
                    {article.summary}
                  </p>
                  <button className="text-toolnest-text font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all duration-200">
                    Read More <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Newsletter CTA */}
      <section className="py-20 px-6 bg-toolnest-bg">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-toolnest-accent p-12 rounded-3xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-toolnest-text mb-4">
              Want AI news in your inbox?
            </h2>
            <p className="text-toolnest-text/80 mb-8 text-lg">
              Stay ahead of the curve with weekly insights, tool reviews, and industry updates
            </p>
            
            <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-6 py-3 rounded-full border-2 border-toolnest-text/20 focus:border-toolnest-text outline-none bg-toolnest-bg text-toolnest-text"
                required
              />
              <motion.button
                type="submit"
                className="bg-toolnest-text text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={20} />
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Content;
