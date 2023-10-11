import TopicProps from 'types';
import { create } from 'zustand';

type Topic = Pick<TopicProps, 'title' | 'content' | 'authorId'>;

type ActionsProps = {
  updateTopic: (update: Partial<TopicProps>) => void
};

interface StoreProps {
  topicState: {
    topic: Topic
  };
  topicActions: ActionsProps;
}

export const useTopicStore = create<StoreProps>((set) => ({
  topicState: {
    topic: {
      title: '',
      content: '',
      authorId: ''
    }
  },
  topicActions: {
    updateTopic: (update) =>
      set(({ topicState }) => ({
        topicState: {
          ...topicState,
          topic: {
            ...topicState.topic,
            ...update
          }
        }
      }))
  }
}));
