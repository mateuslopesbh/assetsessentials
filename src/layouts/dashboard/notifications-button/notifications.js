import { subDays, subHours } from 'date-fns';

const now = new Date();

export const notifications = [
  {
    id: '5e8883f1b51cc1956a5a1ec0',
    author: 'Jason Barnett',
    avatar: '/assets/avatars/avatar-jie-yan-song.png',
    createdAt: subHours(now, 2).getTime(),
    job: 'Email MKT for #100 Auto Insurance customers',
    read: false,
    type: 'job_add'
  },
  {
    id: '20d9df4f23fff19668d7031c',
    createdAt: subDays(now, 1).getTime(),
    description: 'Comissions Dashboard',
    read: false,
    type: 'new_feature'
  }
];
