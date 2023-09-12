import { BiLike } from 'react-icons/bi';
import { type ReactElement } from 'react';

import * as S from './styleds';
import { type CommentProps } from '../../../types';
import convertTimezone from '../../../functions/timezoneConverter';

interface CommentsProps {
  comments: CommentProps[];
}

export default function Comments({ comments }: CommentsProps): ReactElement {
  return (
    <S.FormWrapper>
      {comments.map(({ date, id, author, comment }) => (
        <S.QuestionWrapper key={id}>
          <div>
            <div className="flex flex-col gap-1">
              <p className="text-secondary opacity-70 text-sm">
                {`${author} - ${convertTimezone(date)}`}
              </p>
              <p className="text-primary font-medium">{comment}</p>
            </div>
          </div>
          <div className="flex flex-col justify-between items-center">
            <button type="button" className="self-end">
              <BiLike className="text-accent text-3xl active:text-primary transition-colors" />
            </button>
          </div>
        </S.QuestionWrapper>
      ))}
    </S.FormWrapper>
  );
}
