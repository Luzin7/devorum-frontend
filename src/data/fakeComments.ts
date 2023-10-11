import { Comment } from 'types/IComments';

export const fakeComments: Comment[] = [
  {
    authorId: 'authorId1',
    topicId: 'id1',
    content: 'eita que massa esse post e olha que top esse comentario',
    createdAt: new Date(),
    updatedAt: null
  },
  {
    authorId: 'authorId2',
    topicId: 'id2',
    content:
      'eita que massa esse post e olha que top esse comentario show de bola!!!!!!',
    createdAt: new Date(),
    updatedAt: null
  }
];
