import { Slide } from '@/lib/slides'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import { motion } from 'framer-motion'

// Define layout types
type LayoutType = 'default' | 'two-column' | 'narrative' | 'summary' | 'contrast'

// Animated Bullet Renderer (from previous implementation)
function AnimatedBulletRenderer({ bullets }: { bullets: any[] }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  }

  return (
    <motion.ul 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="list-disc list-inside text-gray-800 space-y-3"
    >
      {bullets.map((item, index) => {
        if (typeof item === 'string') {
          return (
            <motion.li 
              key={index} 
              variants={itemVariants}
              className="text-base leading-relaxed hover:bg-blue-50/30 p-2 rounded-lg transition-all duration-300 ease-in-out"
            >
              {item}
            </motion.li>
          )
        } else {
          return (
            <motion.li 
              key={index} 
              variants={itemVariants}
              className="text-base leading-relaxed hover:bg-blue-50/30 p-2 rounded-lg transition-all duration-300 ease-in-out"
            >
              {item.bullet}
              {item.subBullets && (
                <motion.ul 
                  variants={containerVariants}
                  className="list-disc list-inside ml-5 text-sm text-gray-700 space-y-2 mt-2"
                >
                  {item.subBullets.map((sub, subIndex) => (
                    <motion.li 
                      key={subIndex} 
                      variants={itemVariants}
                      className="hover:bg-blue-50/30 p-1 rounded transition-all duration-300 ease-in-out"
                    >
                      {sub}
                    </motion.li>
                  ))}
                </motion.ul>
              )}
            </motion.li>
          )
        }
      })}
    </motion.ul>
  )
}

// Default layout - most common layout
function DefaultLayout({ slide }: { slide: Slide }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-4"
    >
      <h3 className="font-semibold text-xl text-gray-900 mb-3 border-b pb-2">
        {slide.content.heading}
      </h3>
      <AnimatedBulletRenderer bullets={slide.content.bullets} />
    </motion.div>
  )
}

// Two-column layout for complex content
function TwoColumnLayout({ slide }: { slide: Slide }) {
  // Split all bullet items (whether string or object) into two columns
  const bullets = slide.content.bullets;
  const half = Math.ceil(bullets.length / 2);
  const leftBullets = bullets.slice(0, half);
  const rightBullets = bullets.slice(half);

  return (
    <div className="grid grid-cols-2 gap-6 p-4">
      <div>
        <AnimatedBulletRenderer bullets={leftBullets} />
      </div>
      <div>
        <AnimatedBulletRenderer bullets={rightBullets} />
      </div>
    </div>
  )
}

// Narrative layout for storytelling slides
function NarrativeLayout({ slide }: { slide: Slide }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-6 text-center"
    >
      <h3 className="font-bold text-2xl text-blue-800 mb-4">
        {slide.content.heading}
      </h3>
      <div className="space-y-3">
        <AnimatedBulletRenderer bullets={slide.content.bullets} />
      </div>
    </motion.div>
  )
}

// Summary layout for overview and conclusion slides
function SummaryLayout({ slide }: { slide: Slide }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-blue-50 p-6 rounded-lg"
    >
      <h3 className="font-semibold text-xl text-blue-900 mb-4 border-b pb-2">
        {slide.content.heading}
      </h3>
      <AnimatedBulletRenderer bullets={slide.content.bullets} />
    </motion.div>
  )
}

// Contrast layout for comparison slides with alternating colors
function ContrastLayout({ slide }: { slide: Slide }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-4"
    >
      <h3 className="font-semibold text-xl text-gray-900 mb-3 border-b pb-2">
        {slide.content.heading}
      </h3>
      <div className="grid grid-cols-2 gap-6">
        {slide.content.bullets.map((item, index) => {
          // Alternate background and text colors for contrast.
          const bgClass = index % 2 === 0 ? "bg-blue-100" : "bg-yellow-100";
          const textClass = index % 2 === 0 ? "text-blue-900" : "text-yellow-900";
          return (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`${bgClass} p-4 rounded-lg shadow-md hover:opacity-80 transition`}
            >
              {typeof item === 'object' ? (
                <>
                  <h4 className={`font-semibold text-lg mb-3 ${textClass}`}>
                    {item.bullet}
                  </h4>
                  {item.subBullets && (
                    <ul className="list-disc list-inside space-y-2">
                      {item.subBullets.map((sub, subIndex) => (
                        <li key={subIndex} className="text-base">
                          {sub}
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <p className={`font-semibold text-lg ${textClass}`}>{item}</p>
              )}
            </motion.div>
          )
        })}
      </div>
    </motion.div>
  )
}

// Mapping of special layout rendering functions
const layoutRenderers: Record<LayoutType, React.FC<{ slide: Slide }>> = {
  default: DefaultLayout,
  'two-column': TwoColumnLayout,
  'narrative': NarrativeLayout,
  'summary': SummaryLayout,
  'contrast': ContrastLayout,
}

// Determine layout based on slide properties and content.
// First, use the layout defined in the slide data (if any).
function determineLayout(slide: Slide): LayoutType {
  if (slide.content.layout) return slide.content.layout as LayoutType;
  // Special layout logic based on slide content
  if (slide.id === 1) return 'narrative' // Cover slide
  if (slide.id === 2) return 'summary' // Agenda slide
  if (slide.id === 13 || slide.id === 18) return 'summary' // Overview and summary slides
  if (slide.id >= 14 && slide.id <= 17) return 'contrast' // Comparison slides
  if (slide.content.bullets.some(item =>
    typeof item === 'object' &&
    'subBullets' in item &&
    item.subBullets &&
    item.subBullets.length > 2
  )) return 'two-column'
  return 'default'
}

export default function SlideCard({ slide }: { slide: Slide }) {
  const layoutType = determineLayout(slide)
  const LayoutComponent = layoutRenderers[layoutType]

  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0.8 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Card className="border border-blue-100 shadow-2xl hover:shadow-3xl transform transition duration-300 w-full h-full overflow-hidden">
        <CardHeader className="bg-blue-50/50 p-4 border-b border-blue-100">
          <CardTitle className="text-blue-800 text-2xl font-bold tracking-tight">
            {slide.title}
          </CardTitle>
        </CardHeader>
        {slide.images && slide.images.length > 0 && (
          <div className="w-full p-4">
            <img src={slide.images[0]} alt={slide.title} className="mx-auto" />
          </div>
        )}
        <CardContent className="p-6 space-y-4 overflow-y-auto max-h-[720px]">
          <LayoutComponent slide={slide} />
        </CardContent>
      </Card>
    </motion.div>
  )
}
