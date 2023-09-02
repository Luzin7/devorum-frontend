class User {
  name: string;
  password: string;
  contact: string;
  questions?: string[];

  constructor(
    name: string,
    password: string,
    contact: string,
    questions?: string[],
  ) {
    this.name = name;
    this.password = password;
    this.contact = contact;
    this.questions = questions;
  }
}

export default User;
