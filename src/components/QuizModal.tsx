import React, { useState, useEffect } from 'react';
import { X, CheckCircle, XCircle, RefreshCw, Trophy } from 'lucide-react';
import { quizzes, Question } from '../data/quizzes';

interface QuizModalProps {
  categoryId: string;
  categoryName: string;
  onClose: () => void;
}

export default function QuizModal({ categoryId, categoryName, onClose }: QuizModalProps) {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isFinished, setIsFinished] = useState(false);
  const [isChecking, setIsChecking] = useState(false);

  // Initialize and shuffle questions
  useEffect(() => {
    startQuiz();
  }, [categoryId]);

  const startQuiz = () => {
    const bank = quizzes[categoryId] || [];
    // Shuffle and pick up to 15 questions
    const shuffled = [...bank].sort(() => 0.5 - Math.random()).slice(0, 15);
    setQuestions(shuffled);
    setCurrentIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setIsFinished(false);
    setIsChecking(false);
  };

  const handleAnswer = (index: number) => {
    if (isChecking) return;
    
    setSelectedAnswer(index);
    setIsChecking(true);

    const isCorrect = index === questions[currentIndex].correctAnswer;
    if (isCorrect) {
      setScore(prev => prev + 1);
    }

    setTimeout(() => {
      if (currentIndex + 1 < questions.length) {
        setCurrentIndex(prev => prev + 1);
        setSelectedAnswer(null);
        setIsChecking(false);
      } else {
        setIsFinished(true);
      }
    }, 1200);
  };

  const getRecommendation = (score: number, total: number) => {
    const percentage = (score / total) * 100;
    if (percentage < 40) return { level: 'Beginner', node: 'Basics / Fundamentals', color: 'text-emerald-500', bg: 'bg-emerald-500/10' };
    if (percentage < 70) return { level: 'Intermediate', node: 'Core Concepts', color: 'text-blue-500', bg: 'bg-blue-500/10' };
    if (percentage < 90) return { level: 'Advanced', node: 'Advanced / Specialization', color: 'text-purple-500', bg: 'bg-purple-500/10' };
    return { level: 'Expert', node: 'Real-world Projects / Expert', color: 'text-rose-500', bg: 'bg-rose-500/10' };
  };

  if (questions.length === 0) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 max-w-md w-full shadow-2xl text-center">
          <h2 className="text-xl font-bold mb-4">No Quiz Available</h2>
          <p className="text-zinc-500 mb-6">We don't have a quiz for this category yet.</p>
          <button onClick={onClose} className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium">Close</button>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentIndex];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl max-w-lg w-full max-h-[90vh] flex flex-col shadow-2xl transform transition-all relative overflow-hidden">
        
        <div className="p-6 md:p-8 overflow-y-auto flex-1">
          {/* Header */}
          <div className="flex justify-between items-center mb-6 md:mb-8 relative z-10">
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-white">
                {categoryName} Quiz
              </h2>
              {!isFinished && (
                <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mt-1">
                  Question {currentIndex + 1} of {questions.length}
                </p>
              )}
            </div>
            <button 
              onClick={onClose} 
              className="p-2 text-zinc-400 hover:text-zinc-900 dark:hover:text-white bg-zinc-100 dark:bg-zinc-800 rounded-full transition-colors flex-shrink-0 ml-4"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="relative z-10">
            {isFinished ? (
              <div className="text-center py-4 md:py-8">
                <div className="w-16 h-16 md:w-20 md:h-20 mx-auto bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4 md:mb-6">
                  <Trophy className="w-8 h-8 md:w-10 md:h-10 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white mb-2">Quiz Complete!</h3>
                <p className="text-base md:text-lg text-zinc-500 dark:text-zinc-400 mb-6">
                  You scored <span className="font-bold text-zinc-900 dark:text-white">{score}</span> out of {questions.length}
                </p>
                
                {/* Smart Recommendation */}
                <div className={`mb-6 md:mb-8 p-4 md:p-6 rounded-2xl border border-zinc-200 dark:border-zinc-700/50 ${getRecommendation(score, questions.length).bg}`}>
                  <h4 className="text-xs md:text-sm font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-3">Your Assessment</h4>
                  <div className="flex flex-col gap-2 items-center">
                    <div className="flex items-center gap-2 text-base md:text-lg">
                      <span className="text-zinc-600 dark:text-zinc-300">Level:</span>
                      <span className={`font-bold ${getRecommendation(score, questions.length).color}`}>
                        {getRecommendation(score, questions.length).level}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-base md:text-lg">
                      <span className="text-zinc-600 dark:text-zinc-300">Start At:</span>
                      <span className={`font-bold ${getRecommendation(score, questions.length).color}`}>
                        {getRecommendation(score, questions.length).node}
                      </span>
                    </div>
                  </div>
                  <p className="text-xs md:text-sm text-zinc-500 dark:text-zinc-400 mt-4 leading-relaxed">
                    Based on your score, we recommend starting your learning journey at the <strong>{getRecommendation(score, questions.length).node}</strong> nodes in the roadmap.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button 
                    onClick={startQuiz}
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-900 dark:text-white rounded-xl font-medium transition-colors w-full sm:w-auto"
                  >
                    <RefreshCw className="w-5 h-5" />
                    Try Again
                  </button>
                  <button 
                    onClick={onClose}
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-colors shadow-lg shadow-blue-500/20 w-full sm:w-auto"
                  >
                    Close
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <h3 className="text-lg md:text-xl font-medium text-zinc-800 dark:text-zinc-200 leading-relaxed">
                  {currentQ.question}
                </h3>
                
                <div className="space-y-3">
                  {currentQ.options.map((option, idx) => {
                    const isSelected = selectedAnswer === idx;
                    const isCorrect = idx === currentQ.correctAnswer;
                    
                    let buttonClass = "w-full text-left p-4 rounded-xl border-2 transition-all duration-200 flex items-center justify-between group ";
                    
                    if (!isChecking) {
                      buttonClass += "border-zinc-200 dark:border-zinc-700/50 bg-white dark:bg-zinc-800/50 hover:border-blue-500 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20";
                    } else {
                      if (isCorrect) {
                        buttonClass += "border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300";
                      } else if (isSelected && !isCorrect) {
                        buttonClass += "border-red-500 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300";
                      } else {
                        buttonClass += "border-zinc-200 dark:border-zinc-700/50 bg-white dark:bg-zinc-800/50 opacity-50";
                      }
                    }

                    return (
                      <button
                        key={idx}
                        onClick={() => handleAnswer(idx)}
                        disabled={isChecking}
                        className={buttonClass}
                      >
                        <span className="font-medium text-sm md:text-base">{option}</span>
                        {isChecking && isCorrect && <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 ml-2" />}
                        {isChecking && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 ml-2" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Progress Bar */}
        {!isFinished && (
          <div className="h-1.5 bg-zinc-100 dark:bg-zinc-800 w-full flex-shrink-0">
            <div 
              className="h-full bg-blue-500 transition-all duration-300 ease-out"
              style={{ width: `${((currentIndex) / questions.length) * 100}%` }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
