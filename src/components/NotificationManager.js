import React from 'react';
import { useNotification } from '../context/NotificationContext';

const NotificationManager = () => {
  const { notifications, removeNotification } = useNotification();

  return (
    <div className="fixed bottom-0 right-0 p-4 space-y-2">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className={`px-4 py-2 rounded-md shadow-md ${
            notification.type === 'error' ? 'bg-red-500' : 'bg-green-500'
          } text-white`}
        >
          {notification.message}
          <button
            onClick={() => removeNotification(notification.id)}
            className="ml-2 text-white hover:text-gray-200"
          >
            &times;
          </button>
        </div>
      ))}
    </div>
  );
};

export default NotificationManager;