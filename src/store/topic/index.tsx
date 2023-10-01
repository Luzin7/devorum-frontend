import Topic from 'types';
import { create } from 'zustand';

type TopicProps = Pick<Topic, 'title' | 'content'>;

type ActionsProps = {
  updateTopic: (update: Partial<TopicProps>) => void
};

interface StoreProps {
  state: {
    topic: TopicProps
  };
  actions: ActionsProps;
}

export const useTopicStore = create<StoreProps>((set) => ({
  state: {
    topic: {
      title: '',
      content: ''
    }
  },
  actions: {
    updateTopic: (update) =>
      set(({ state }) => ({
        state: {
          ...state,
          topic: {
            ...state.topic,
            ...update
          }
        }
      }))
  }
}));
