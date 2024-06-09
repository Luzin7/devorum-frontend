import { UUID } from 'crypto';
import { create } from 'zustand';
import { UserProps } from '../../types/IUser';

type User = Pick<UserProps, 'name' | 'id' | 'notifications'>;

type ActionsProps = {
  updateUser: (update: Partial<UserProps>) => void;
};

interface StoreProps {
  userState: {
    user: User;
  };
  actions: ActionsProps;
}

export const useUserStore = create<StoreProps>((set) => ({
  userState: {
    user: {
      name: '',
      id: '' as string as UUID,
      notifications: []
    }
  },
  actions: {
    updateUser: (update) =>
      set(({ userState }) => ({
        userState: {
          ...userState,
          user: {
            ...userState.user,
            ...update
          }
        }
      }))
  }
}));
