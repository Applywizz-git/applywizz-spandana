import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { ExternalLink, TrendingUp, Users, Zap } from 'lucide-react';
import { projects } from '../data/portfolio';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

// Import project images
import projectDCT from '../assets/project-clinical-trial-dct.png';
import projectMonitoring from '../assets/project-risk-monitoring.png';

const projectImages = {
  1: projectDCT,
  2: projectMonitoring,
};

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const getMetricIcon = (metric: string) => {
    if (metric.includes('Users') || metric.includes('Adoption')) return Users;
    if (metric.includes('Rate') || metric.includes('Accuracy') || metric.includes('Improvement')) return TrendingUp;
    return Zap;
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-background to-muted/30 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold gradient-text mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Innovative AI solutions delivering real business value across enterprise platforms
            </p>
          </motion.div>

          {/* Projects Carousel */}
          <motion.div variants={itemVariants} className="mb-16">
            <Swiper
              modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              effect="coverflow"
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 2,
                },
              }}
              className="!pb-12"
            >
              {projects.map((project) => (
                <SwiperSlide key={project.id}>
                  <motion.div
                    className="glass-card group h-full"
                    whileHover={{ y: -10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {/* Project Image */}
                    <div className="relative overflow-hidden rounded-t-xl mb-6">
                      <img
                        src={projectImages[project.id as keyof typeof projectImages]}
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-primary/90 text-white text-xs font-medium rounded-full backdrop-blur-sm">
                          {project.category}
                        </span>
                      </div>

                      {/* Featured Badge */}
                      {project.featured && (
                        <div className="absolute top-4 right-4">
                          <span className="px-3 py-1 bg-accent/90 text-white text-xs font-medium rounded-full backdrop-blur-sm">
                            Featured
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Project Content */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-display font-bold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {project.description}
                      </p>

                      {/* Metrics */}
                      {project.metrics && (
                        <div className="grid grid-cols-2 gap-3">
                          {Object.entries(project.metrics).slice(0, 2).map(([key, value], index) => {
                            const IconComponent = getMetricIcon(key);
                            return (
                              <div key={key} className="flex items-center gap-2 p-2 bg-muted/50 rounded-lg">
                                <IconComponent className="w-4 h-4 text-primary" />
                                <div>
                                  <div className="text-xs text-muted-foreground">{key}</div>
                                  <div className="text-sm font-semibold text-foreground">{value}</div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded border border-primary/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>

          {/* Project Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { label: "Projects Completed", value: "50+" },
              { label: "Technologies Used", value: "25+" },
              { label: "Client Satisfaction", value: "100%" },
              { label: "Years Experience", value: "5+" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="glass text-center p-6 rounded-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-2xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <p className="text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}