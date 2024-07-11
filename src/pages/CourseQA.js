import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchQuestions } from '../redux/slices/questionSlice';
import QuestionList from '../components/QuestionList';
import QuestionAndAnswer from '../components/QuestionAndAnswer';

const CourseQA = () => {
  const { id, questionId } = useParams();
  const dispatch = useDispatch();
  const { items: questions, status, error } = useSelector(state => state.questions);
  const course = useSelector(state => state.courses.items.find(c => c.id === id));

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchQuestions(id));
    }
  }, [status, dispatch, id]);

  if (status === 'loading') return <div className="text-center">Loading...</div>;
  if (status === 'failed') return <div className="text-center text-red-500">Error: {error}</div>;

  const currentQuestion = questions.find(q => q.id === questionId) || questions[0];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/4 pr-4 mb-6 md:mb-0">
          <div className="bg-white shadow-lg rounded-lg p-4 mb-4">
            <h2 className="text-xl font-bold mb-2">{course.title}</h2>
            <p className="text-gray-600 mb-2">{course.description}</p>
            <p className="font-semibold">Instructor: {course.instructor}</p>
            <Link
              to={`/course/${id}`}
              className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
            >
              Back to Course
            </Link>
          </div>
          <QuestionList 
            questions={questions} 
            courseId={id} 
            currentQuestionId={currentQuestion?.id}
          />
        </div>
        <div className="md:w-3/4">
          <h1 className="text-3xl font-bold mb-6">Q&A Section</h1>
          {currentQuestion && (
            <QuestionAndAnswer 
              key={currentQuestion.id}
              question={currentQuestion}
              courseId={id}
              onQuestionResolved={() => {
                // Refresh questions or update the current question
                dispatch(fetchQuestions(id));
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseQA;