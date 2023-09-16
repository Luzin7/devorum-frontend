/* eslint-disable @typescript-eslint/naming-convention */
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
      {comments.map(({ created_at, id, author_name, comment }) => (
        <S.QuestionWrapper key={id}>
          <div>
            <div className="flex flex-col gap-1">
              <p className="text-text opacity-70 text-sm">
                {`${author_name} - ${convertTimezone(created_at)}`}
              </p>
              <p className="text-text font-medium">{comment}</p>
            </div>
          </div>
          {/* <div className="flex flex-col justify-between items-center">
            <button type="button" className="self-end">
              <BiLike className="text-accent text-3xl active:text-primary transition-colors" />
            </button>
          </div> */}
        </S.QuestionWrapper>
      ))}
    </S.FormWrapper>
  );
}
