import React from 'react';

const CourseProgress = ({ completedLessons, totalLessons }) => {
  const progressPercentage = (completedLessons / totalLessons) * 100;

  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold mb-2">Your Progress</h3>
      <div className="relative pt-1">
        <div className="flex mb-2 items-center justify-between">
          <div>
            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200">
              {completedLessons} / {totalLessons} Lessons Completed
            </span>
          </div>
          <div className="text-right">
            <span className="text-xs font-semibold inline-block text-teal-600">
              {progressPercentage.toFixed(0)}%
            </span>
          </div>
        </div>
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-teal-200">
          <div
            style={{ width: `${progressPercentage}%` }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-teal-500"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default CourseProgress;