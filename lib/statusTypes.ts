/**
 * Enum for types of status.
 *
 * @readonly
 * @enum {string}
 */
export enum UserStatus {
  Ready = 'Ready',
  Pause = 'Pause',
  Stop  = 'Stop'
}

export enum DeliveryStatus {
  Delivered = 'Delivered', 
  Canceled = 'Canceled',
  Postponed = 'Postponed'
}