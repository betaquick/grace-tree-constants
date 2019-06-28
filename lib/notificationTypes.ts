/**
 * Enum for system notifications
 * 
 * @readonly
 * @enum {string}
 */

export enum NotificationTypes {
  CrewRegistrationEmail = 'CREW REGISTRATION EMAIL',
  UserRegistrationAdminEmail = 'NOTIFY ADMIN OF USER REGISTRATION EMAIL',
  UserStatusEmail = 'USER STATUS UPDATE EMAIL',
  UserDeliveryEmail = 'USER DELIVERY NOTIFICATION EMAIL',
  CompanyDeliveryEmail = 'COMPANY DELIVERY NOTIFICATION EMAIL',
  CompanyDeliveryRequestEmail = 'DELIVERY REQUEST EMAIL',
  DeliveryRequestAcceptanceEmail = 'DELIVERY ACCEPTANCE EMAIL',
  DeliveryWarningEmail = 'USER DELIVERY EXPIRATION EMAIL',
  UserStatusSMS = 'USER STATUS UPDATE SMS',
  UserDeliverySMS = 'USER DELIVERY NOTIFICATION SMS',
  CompanyDeliverySMS = 'COMPANY DELIVERY NOTIFICATION SMS',
  DeliveryRequestSMS = 'DELIVERY REQUEST SMS',
  DeliveryRequestAcceptanceSMS = 'DELIVERY ACCEPTANCE SMS',
  DeliveryWarningSMS = 'USER DELIVERY EXPIRATION SMS'
}