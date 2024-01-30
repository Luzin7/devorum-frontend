import { createComment, deleteComment } from './comments';
import {
  getTopics,
  createTopic,
  getTopicById,
  deleteTopic,
  updateTopic
} from './topics';
import { createUser, login, getUserData, refreshSession } from './users';

export {
  getTopics,
  createUser,
  login,
  createTopic,
  getTopicById,
  getUserData,
  refreshSession,
  createComment,
  deleteComment,
  deleteTopic,
  updateTopic
};
