'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

type FlashCardProps = {
  front: React.ReactNode
  back: React.ReactNode
}

export default function FlashCard({ front, back }: FlashCardProps) {
  const [flipped, setFlipped] = useState(false)

  return (
    <div
      className="relative w-80 h-56 cursor-pointer perspective-1000"
      onClick={() => setFlipped(!flipped)}
    >
      {/* 正面 */}
      <motion.div
        className="absolute w-full h-full bg-white shadow-xl rounded-md flex items-center justify-center backface-hidden"
        style={{ backfaceVisibility: 'hidden' }}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.5 }}
      >
        {front}
      </motion.div>

      {/* 反面 */}
      <motion.div
        className="absolute w-full h-full bg-white shadow-xl rounded-md flex items-center justify-center"
        style={{ transform: 'rotateY(180deg)', backfaceVisibility: 'hidden' }}
        animate={{ rotateY: flipped ? 360 : 180 }}
        transition={{ duration: 0.5 }}
      >
        {back}
      </motion.div>
    </div>
  )
}
