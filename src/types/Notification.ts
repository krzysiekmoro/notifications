export type NotificationType = 'request' | 'statusChange' | 'newFeature';

export interface INotification {
  id: number;
  type: NotificationType;
  message: string;
  read: boolean;
}
