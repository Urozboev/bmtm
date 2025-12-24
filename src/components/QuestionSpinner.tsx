import React, { useState, useEffect } from 'react';
import { RotateCcw, Play, Pause } from 'lucide-react';
import { questions } from '../data/content';

interface QuestionSpinnerProps {
  filteredQuestions?: typeof questions;
}

const QuestionSpinner: React.FC<QuestionSpinnerProps> = ({ filteredQuestions }) => {
  const availableQuestions = filteredQuestions || questions;
  const [currentQuestion, setCurrentQuestion] = useState(availableQuestions[0]);
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);

  const spinQuestion = () => {
    if (isSpinning || availableQuestions.length === 0) return;
    
    setIsSpinning(true);
    const spins = 5 + Math.random() * 5; // 5-10 spins
    const finalRotation = rotation + spins * 360;
    setRotation(finalRotation);

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * availableQuestions.length);
      setCurrentQuestion(availableQuestions[randomIndex]);
      setIsSpinning(false);
    }, 3000); // 3 seconds spin duration
  };

  const categories = [...new Set(availableQuestions.map(q => q.category))];

  // Update current question when available questions change
  useEffect(() => {
    if (availableQuestions.length > 0) {
      setCurrentQuestion(availableQuestions[0]);
    }
  }, [availableQuestions]);

  if (availableQuestions.length === 0) {
    return (
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto text-center">
        <h3 className="text-xl font-bold text-gray-700 mb-4">Savollar topilmadi</h3>
        <p className="text-gray-500">Bu mavzu uchun savollar hali kiritilmagan.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Tasodifiy savol g'ildiragi
        </h2>
        <p className="text-gray-600">
          Quyidagi g'ildirakni aylantiring va tasodifiy savol oling!
        </p>
      </div>

      {/* Spinner Wheel */}
      <div className="relative mb-8">
        <div className="w-64 h-64 mx-auto relative">
          {/* Wheel Background */}
          <div 
            className={`w-full h-full rounded-full border-8 border-blue-200 relative overflow-hidden transition-transform duration-3000 ease-out ${
              isSpinning ? 'animate-pulse' : ''
            }`}
            style={{ 
              transform: `rotate(${rotation}deg)`,
              background: `conic-gradient(from 0deg, 
                #3B82F6 0deg ${360/categories.length}deg, 
                #8B5CF6 ${360/categories.length}deg ${2*360/categories.length}deg,
                #10B981 ${2*360/categories.length}deg ${3*360/categories.length}deg,
                #F59E0B ${3*360/categories.length}deg ${4*360/categories.length}deg,
                #EF4444 ${4*360/categories.length}deg ${5*360/categories.length}deg,
                #3B82F6 ${5*360/categories.length}deg 360deg)`
            }}
          >
            {/* Center Circle */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center border-4 border-blue-300">
              {isSpinning ? (
                <Pause className="h-6 w-6 text-blue-600 animate-spin" />
              ) : (
                <Play className="h-6 w-6 text-blue-600" />
              )}
            </div>
            
            {/* Category Labels */}
            {categories.map((category, index) => {
              const angle = (360 / categories.length) * index + 180 / categories.length;
              return (
                <div
                  key={category}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 text-xs font-semibold text-white text-center"
                  style={{
                    transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-90px) rotate(-${angle}deg)`,
                    transformOrigin: 'center',
                  }}
                >
                  <div className="whitespace-nowrap">{category}</div>
                </div>
              );
            })}
          </div>

          {/* Pointer */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 z-10">
            <div className="w-0 h-0 border-l-4 border-r-4 border-b-8 border-l-transparent border-r-transparent border-b-red-500"></div>
          </div>
        </div>
      </div>

      {/* Spin Button */}
      <div className="text-center mb-8">
        <button
          onClick={spinQuestion}
          disabled={isSpinning}
          className={`inline-flex items-center px-6 py-3 rounded-full font-semibold text-white transition-all duration-200 ${
            isSpinning
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 shadow-lg'
          }`}
        >
          <RotateCcw className={`h-5 w-5 mr-2 ${isSpinning ? 'animate-spin' : ''}`} />
          {isSpinning ? 'Aylanayapti...' : 'G\'ildirakni Aylantirish'}
        </button>
      </div>

      {/* Question Display */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200">
        <div className="mb-3">
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
            {currentQuestion.category}
          </span>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 leading-relaxed">
          {currentQuestion.question}
        </h3>
      </div>

      {/* Stats */}
      <div className="mt-6 grid grid-cols-3 gap-4 text-center">
        <div className="bg-gray-50 rounded-lg p-3">
          <div className="text-2xl font-bold text-gray-900">{availableQuestions.length}</div>
          <div className="text-sm text-gray-600">Mavzu savoli</div>
        </div>
        <div className="bg-gray-50 rounded-lg p-3">
          <div className="text-2xl font-bold text-gray-900">{categories.length}</div>
          <div className="text-sm text-gray-600">Bo'lim</div>
        </div>
        <div className="bg-gray-50 rounded-lg p-3">
          <div className="text-2xl font-bold text-gray-900">1</div>
          <div className="text-sm text-gray-600">Tasodifiy</div>
        </div>
      </div>
    </div>
  );
};

export default QuestionSpinner;