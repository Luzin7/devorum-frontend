interface UserProps {
  name: string;
  password: string;
  contact: string;
  questions?: string[];
}

interface PublicUserProps {
  name: string;
  contact: string;
  questions?: string[];
}

export type { UserProps, PublicUserProps };
