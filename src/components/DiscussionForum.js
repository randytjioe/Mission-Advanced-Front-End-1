import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { getDiscussions, createDiscussion, createReply } from '../services/api/discussionApi';

const DiscussionForum = ({ courseId }) => {
  const { user } = useAuth();
  const [discussions, setDiscussions] = useState([]);
  const [newDiscussion, setNewDiscussion] = useState({ title: '', content: '' });
  const [replyContent, setReplyContent] = useState('');
  const [replyingTo, setReplyingTo] = useState(null);

  useEffect(() => {
    const fetchDiscussions = async () => {
      try {
        const fetchedDiscussions = await getDiscussions(courseId);
        setDiscussions(fetchedDiscussions);
      } catch (error) {
        console.error('Failed to fetch discussions:', error);
      }
    };

    fetchDiscussions();
  }, [courseId]);

  const handleDiscussionSubmit = async (e) => {
    e.preventDefault();
    try {
      const createdDiscussion = await createDiscussion(courseId, newDiscussion);
      setDiscussions([...discussions, createdDiscussion]);
      setNewDiscussion({ title: '', content: '' });
    } catch (error) {
      console.error('Failed to create discussion:', error);
    }
  };

  const handleReplySubmit = async (discussionId) => {
    try {
      const createdReply = await createReply(discussionId, replyContent);
      const updatedDiscussions = discussions.map(discussion =>
        discussion.id === discussionId
          ? { ...discussion, replies: [...discussion.replies, createdReply] }
          : discussion
      );
      setDiscussions(updatedDiscussions);
      setReplyContent('');
      setReplyingTo(null);
    } catch (error) {
      console.error('Failed to create reply:', error);
    }
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">Discussion Forum</h2>
      <form onSubmit={handleDiscussionSubmit} className="mb-8">
        <input
          type="text"
          placeholder="Discussion Title"
          value={newDiscussion.title}
          onChange={(e) => setNewDiscussion({ ...newDiscussion, title: e.target.value })}
          className="w-full px-3 py-2 border rounded-md mb-2"
          required
        />
        <textarea
          placeholder="Discussion Content"
          value={newDiscussion.content}
          onChange={(e) => setNewDiscussion({ ...newDiscussion, content: e.target.value })}
          className="w-full px-3 py-2 border rounded-md mb-2"
          rows="3"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Start Discussion
        </button>
      </form>
      {discussions.map((discussion) => (
        <div key={discussion.id} className="bg-white shadow-md rounded-lg p-4 mb-4">
          <h3 className="text-xl font-semibold mb-2">{discussion.title}</h3>
          <p className="text-gray-700 mb-2">{discussion.content}</p>
          <p className="text-sm text-gray-500">
            Posted by {discussion.author} on {new Date(discussion.createdAt).toLocaleDateString()}
          </p>
          {discussion.replies.map((reply) => (
            <div key={reply.id} className="ml-8 mt-4 bg-gray-100 p-3 rounded-md">
              <p className="text-gray-700">{reply.content}</p>
              <p className="text-sm text-gray-500">
                Reply by {reply.author} on {new Date(reply.createdAt).toLocaleDateString()}
              </p>
            </div>
          ))}
          {replyingTo === discussion.id ? (
            <div className="mt-4">
              <textarea
                placeholder="Your reply"
                value={replyContent}
                onChange={(e) => setReplyContent(e.target.value)}
                className="w-full px-3 py-2 border rounded-md mb-2"
                rows="2"
              ></textarea>
                <button
                onClick={() => handleReplySubmit(discussion.id)}
                className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 mr-2"
              >
                Submit Reply
              </button>
              <button
                onClick={() => setReplyingTo(null)}
                className="bg-gray-300 text-gray-700 px-3 py-1 rounded-md hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          ) : (
            <button
              onClick={() => setReplyingTo(discussion.id)}
              className="mt-2 text-blue-500 hover:underline"
            >
              Reply
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default DiscussionForum;