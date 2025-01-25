'use client'

import { motion } from 'framer-motion'
import TeamMemberCard from '@/app/components/ui/TeamMemberCard'

const AnimatedTeamList = ({ members }) => {
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <motion.div
      className="grid grid-cols-3 gap-8 max-md:grid-cols-1"
      variants={containerVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}>
      {members.slice(0, 3).map((member, i) => (
        <motion.div key={member.id} variants={itemVariants}>
          <TeamMemberCard member={member} />
        </motion.div>
      ))}
    </motion.div>
  )
}

export default AnimatedTeamList
