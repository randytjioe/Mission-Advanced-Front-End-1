import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAnswer, vote, markAsResolved } from '../redux/slices/questionSlice';

const QuestionAndAnswer = ({ question, courseId }) => {
  const [answerContent, setAnswerContent] = useState('');
  const dispatch = useDispatch();

  const handleAnswerSubmit = () => {
    dispatch(addAnswer({ questionId: question.id, content: answerContent }));
    setAnswerContent('');
  };

  const handleVote = (answerId, voteType) => {
    dispatch(vote({ answerId, voteType }));
  };

  const handleMarkAsResolved = () => {
    dispatch(markAsResolved(question.id));
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-6">
        <div className="flex items-start mb-4">
          <img src={question.authorAvatar} alt={question.author} className="w-10 h-10 rounded-full mr-3" />
          <div className="flex-grow">
            <h3 className="font-semibold">{question.author}</h3>
            <div className="text-gray-600" dangerouslySetInnerHTML={{ __html: question.content }} />
            <p className="text-sm text-gray-500 mt-1">
              Asked on {new Date(question.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>
        {question.answers.map((answer) => (
          <div key={answer.id} className="ml-12 mt-4 bg-gray-50 p-4 rounded-lg">
            <div className="flex items-start">
              <img src={answer.authorAvatar} alt={answer.author} className="w-8 h-8 rounded-full mr-2" />
              <div className="flex-grow">
                <h4 className="font-semibold">{answer.author}</h4>
                <div className="text-gray-600" dangerouslySetInnerHTML={{ __html: answer.content }} />
                <p className="text-sm text-gray-500 mt-1">
                  Answered on {new Date(answer.createdAt).toLocaleDateString()}
                </p>
                <div className="mt-2">
                  <button
                    onClick={() => handleVote(answer.id, 'upvote')}
                    className="text-green-500 hover:text-green-700 mr-2"
                  >
                    ▲ {answer.upvotes}
                  </button>
                  <button
                    onClick={() => handleVote(answer.id, 'downvote')}
                    className="text-red-500 hover:text-red-700"
                  >
                    ▼ {answer.downvotes}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="mt-6">
          <h4 className="font-semibold mb-2">Your Answer</h4>
          <textarea
            value={answerContent}
            onChange={(e) => setAnswerContent(e.target.value)}
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
            rows="4"
            placeholder="Type your answer here..."
          ></textarea>
          <div className="flex justify-between items-center mt-4">
            <button
              onClick={handleAnswerSubmit}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
            >
              Submit Answer
            </button>
            <button
              onClick={handleMarkAsResolved}
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-200"
            >
              Selesaikan Quiz
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionAndAnswer;