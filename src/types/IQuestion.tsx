interface QuestionProps {
  date: number;
  id: string;
  authorId: string;
  author: string;
  title: string;
  question: string;
  upvotes: number;
  comments: string[];
}

export default QuestionProps;
