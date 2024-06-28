import {INotification} from '../types/Notification';

const notificationsData: INotification[] = [
  {
    id: 1,
    type: 'request',
    message: 'You have a new request from John Doe.',
    read: false,
  },
  {
    id: 2,
    type: 'statusChange',
    message: 'Your order status has been changed to on hold.',
    read: false,
  },
  {
    id: 3,
    type: 'newFeature',
    message: 'Check out our new feature: Dark Mode!',
    read: true,
  },
  {
    id: 4,
    type: 'request',
    message: 'New request: Please review the latest document.',
    read: true,
  },
  {
    id: 5,
    type: 'statusChange',
    message: 'Your subscription status has been updated to on hold.',
    read: false,
  },
  {
    id: 6,
    type: 'newFeature',
    message: 'New feature added: Multi-language support.',
    read: true,
  },
];

export default notificationsData;
