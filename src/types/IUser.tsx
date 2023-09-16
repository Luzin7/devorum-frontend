interface User {
  created_at?: number;
  id: string;
  name: string;
  password?: string;
  salt?: string;
  contact: string;
  questions: null | string[];
}

export default User;
