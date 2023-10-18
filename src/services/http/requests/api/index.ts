import { createComment } from './comments';
import { getTopics, createTopic, getTopicById } from './topics';
import { createUser, login, getUserData, refreshSession } from './users';

export {
  getTopics,
  createUser,
  login,
  createTopic,
  getTopicById,
  getUserData,
  refreshSession,
  createComment
};
