import { UUID } from 'crypto';
import { NewTopicProps } from 'types/ITopic';
import { create } from 'zustand';

type Topic = Pick<NewTopicProps, 'title' | 'content' | 'author'>;

type ActionsProps = {
  updateTopic: (update: Partial<NewTopicProps>) => void;
};

interface StoreProps {
  topicState: {
    topic: Topic;
  };
  topicActions: ActionsProps;
}

export const useTopicStore = create<StoreProps>((set) => ({
  topicState: {
    topic: {
      title: '',
      content: '',
      author: '' as UUID
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
