import React from 'react';
import { Link } from 'react-router-dom';

const QuestionList = ({ questions, courseId, currentQuestionId }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">List Soal</h2>
        <div className="grid grid-cols-5 gap-2">
          {questions.map((question, index) => (
            <Link
              key={question.id}
              to={`/course/${courseId}/qa/${question.id}`}
              className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                question.id === currentQuestionId
                  ? 'bg-blue-500 text-white border-blue-500'
                  : 'bg-white text-gray-700 border-gray-300 hover:border-blue-500'
              }`}
            >
              {index + 1}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionList;