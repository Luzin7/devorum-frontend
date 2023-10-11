import { create } from 'zustand';
import { UserProps } from '../../types/IUser';

type User = Pick<UserProps, 'name' | 'userId' | 'notifications'>;

type ActionsProps = {
  updateUser: (update: Partial<UserProps>) => void
};

interface StoreProps {
  userState: {
    user: User
  };
  actions: ActionsProps;
}

export const useUserStore = create<StoreProps>((set) => ({
  userState: {
    user: {
      name: '',
      userId: '',
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
