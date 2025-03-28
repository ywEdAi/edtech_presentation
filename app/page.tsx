'use client'
import { useState } from 'react'
import { slides } from '@/lib/slides'
import SlideCard from '@/components/SlideCard'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : slides.length - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < slides.length - 1 ? prev + 1 : 0))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col justify-center items-center p-6">
      <div 
        className="bg-white rounded-2xl shadow-2xl overflow-hidden"
        style={{ 
          width: '1200px', 
          height: '800px',
          maxWidth: '95vw',
          maxHeight: '95vh'
        }}
      >
        {/* Header */}
        <div className="bg-blue-600 text-white py-4 px-6">
          <h1 className="text-2xl font-bold text-center">
            AI+教育创新实践
          </h1>
        </div>

        {/* Slide Container with Navigation */}
        <div className="relative h-[calc(100%-64px)] flex items-center justify-center">
          {/* Previous Button */}
          <button 
            onClick={handlePrev} 
            className="absolute left-4 z-10 bg-white/60 hover:bg-white/80 rounded-full p-2 shadow-md transition-all duration-300"
          >
            <ChevronLeft className="w-10 h-10 text-blue-700" />
          </button>

          {/* Slide Content */}
          <div className="w-full h-full p-6">
            <div className="h-full border-2 border-blue-100 rounded-xl overflow-hidden">
              <SlideCard slide={slides[currentIndex]} />
            </div>
          </div>

          {/* Next Button */}
          <button 
            onClick={handleNext} 
            className="absolute right-4 z-10 bg-white/60 hover:bg-white/80 rounded-full p-2 shadow-md transition-all duration-300"
          >
            <ChevronRight className="w-10 h-10 text-blue-700" />
          </button>
        </div>

        {/* Slide Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <span 
              key={index} 
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-blue-600 w-6' : 'bg-blue-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}