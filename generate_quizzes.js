const fs = require('fs');

const categories = [
  'cybersecurity', 'it', 'cs', 'ai', 'iot', 'blockchain', 'game', 'mobile',
  'devops', 'languages', 'frameworks', 'webdev', 'databases', 'design',
  'management', 'best-practices', '3d-design'
];

const generateQuestions = (category, count) => {
  const questions = [];
  for (let i = 1; i <= count; i++) {
    questions.push(`    { question: "Sample question ${i} for ${category}?", options: ["Option A", "Option B", "Option C", "Option D"], correctAnswer: Math.floor(Math.random() * 4) }`);
  }
  return questions.join(',\n');
};

let fileContent = `export type Question = {
  question: string;
  options: string[];
  correctAnswer: number;
};

export const quizzes: Record<string, Question[]> = {
`;

categories.forEach(category => {
  fileContent += `  '${category}': [\n${generateQuestions(category, 100)}\n  ],\n`;
});

fileContent += `};\n`;

fs.writeFileSync('src/data/quizzes.ts', fileContent);
console.log('Successfully generated 100 questions per category.');
