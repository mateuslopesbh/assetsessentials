import { subDays, subHours, subMinutes } from 'date-fns';

const now = new Date();

export const items = [
  {
    id: '719a07ce8e46dee2388d411c',
    author: {
      avatar: '/assets/avatars/avatar-alcides-antonio.png',
      name: 'Alcides Antonio'
    },
    createdAt: subMinutes(now, 15).getTime(),
    isFavorite: false,
    isPublic: false,
    items: [],
    itemsCount: 13,
    name: 'ADBE1232432432',
    size: 528381242,
    type: 'folder',
    updatedAt: null
  },
  {
    id: '719a07ce8e46dee2388d411c',
    author: {
      avatar: '/assets/avatars/avatar-alcides-antonio.png',
      name: 'Alcides Antonio'
    },
    createdAt: subMinutes(now, 15).getTime(),
    isFavorite: false,
    isPublic: false,
    items: [],
    itemsCount: 9,
    name: 'ADBE63254232',
    size: 528381242,
    type: 'folder',
    updatedAt: null
  },
  {
    id: '719a07ce8e46dee2388d411c',
    author: {
      avatar: '/assets/avatars/avatar-alcides-antonio.png',
      name: 'Alcides Antonio'
    },
    createdAt: subMinutes(now, 15).getTime(),
    isFavorite: false,
    isPublic: false,
    items: [],
    itemsCount: 5,
    name: 'ADBE1432432276',
    size: 528381242,
    type: 'folder',
    updatedAt: null
  },
  {
    id: '97c43cc1e0ad50cbbf14b6ce',
    author: {
      avatar: '/assets/avatars/avatar-anika-visser.png',
      name: 'Anika Visser'
    },
    createdAt: subDays(subHours(subMinutes(now, 1), 3), 37).getTime(),
    extension: 'docx',
    isFavorite: true,
    isPublic: false,
    name: 'Personal Questionary.docx',
    shared: [
      {
        avatar: '/assets/avatars/avatar-cao-yu.png',
        name: 'Cao Yu'
      },
      {
        avatar: '/assets/avatars/avatar-siegbert-gottfried.png',
        name: 'Siegbert Gottfried'
      }
    ],
    size: 600779531,
    tags: ['Important', 'Friends'],
    type: 'file',
    updatedAt: null
  },
  {
    id: 'c23e85a978a79a5cb53c0b0a',
    author: {
      avatar: '/assets/avatars/avatar-anika-visser.png',
      name: 'Anika Visser'
    },
    createdAt: subDays(subHours(subMinutes(now, 41), 6), 2).getTime(),
    extension: 'pdf',
    isFavorite: true,
    isPublic: false,
    name: 'Personal-rates.pdf',
    shared: [
      {
        avatar: '/assets/avatars/avatar-alcides-antonio.png',
        name: 'Alcides Antonio'
      }
    ],
    size: 472262466,
    tags: ['rates', 'Work'],
    type: 'file',
    updatedAt: null
  }
];
