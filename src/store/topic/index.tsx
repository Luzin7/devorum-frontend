import { UUID } from 'crypto';
import { NewTopicProps } from 'types/ITopic';
import { create } from 'zustand';

interface Topic extends NewTopicProps {
  topicId: UUID;
}

type ActionsProps = {
  updateTopic: (update: Partial<Topic>) => void;
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
      author: '' as UUID,
      topicId: '' as UUID
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
