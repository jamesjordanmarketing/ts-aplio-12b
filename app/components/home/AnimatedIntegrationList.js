'use client'

import { motion } from 'framer-motion'
import IntegrationCard from '@/app/components/ui/IntegrationCard'
import { integrationData, integrationBackground } from '@/app/data/integrationData'

const AnimatedIntegrationList = () => {
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <div className="relative z-10 mx-auto">
      {/* Background Effects */}
      <div className="absolute left-1/2 top-1/2 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-md:hidden max-md:flex-col">
        <div
          className={`${integrationBackground.effects.blur.base} ${integrationBackground.effects.blur.sizes.default} ${integrationBackground.effects.blur.colors.primary}`}></div>
        <div
          className={`-ml-[170px] ${integrationBackground.effects.blur.base} ${integrationBackground.effects.blur.sizes.default} ${integrationBackground.effects.blur.colors.accent} max-md:ml-0`}></div>
        <div
          className={`-ml-[170px] ${integrationBackground.effects.blur.base} ${integrationBackground.effects.blur.sizes.default} ${integrationBackground.effects.blur.colors.primary} max-md:ml-0`}></div>
      </div>

      {/* Mobile Background */}
      <div className="absolute -top-[300px] left-1/2 -z-10 h-[550px] w-full -translate-x-1/2 bg-[url('/images/hero-gradient.png')] bg-cover bg-center bg-no-repeat opacity-70 md:hidden"></div>

      {/* Integration Cards Grid */}
      <motion.div
        className="grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-md:grid-cols-1"
        variants={containerVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}>
        {integrationData.map((item) => (
          <motion.div key={item.id} variants={itemVariants}>
            <IntegrationCard image={item.image} title={item.title} details={item.details} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default AnimatedIntegrationList
