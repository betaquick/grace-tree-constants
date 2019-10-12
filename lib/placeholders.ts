/**
 * Enum for available template placeholders
 * 
 * @readonly
 * @enum {string}
 */

 import { NotificationTypes } from './notificationTypes';


 export enum Placeholders {
   RecipientFirstName = '{{RECIPIENTFIRSTNAME}}',
   RecipientLastName = '{{RECIPIENTLASTNAME}}',
   RecipientPhoneNumber = '{{RECIPIENTPHONENUMBER}}',
   RecipientAddress = '{{RECIPIENTADDRESS}}',
   RecipientEmail = '{{RECIPIENTEMAIL}}',
   NewCrewEmail = '{{NEWCREWEMAIL}}',
   NewCrewPassword = '{{NEWCREWPASSWORD}}',
   NewCrewPhoneNumber = '{{NEWCREWPHONENUMBER}}',
   CompanyName = '{{COMPANYNAME}}',
   CompanyAddress = '{{COMPANYADDRESS}}',
   AdditionalRecipientText = '{{ADDITIONALRECIPIENTTEXT}}',
   AdditionalCompanyText = '{{ADDITIONALCOMPANYTEXT}}',
   AssignedUserFirstName = '{{ASSIGNEDUSERFIRSTNAME}}',
   AssignedUserLastName = '{{ASSIGNEDUSERLASTNAME}}',
   AssignedUserPhoneNumber = '{{ASSIGNEDUSERPHONENUMBER}}',
   DeliveryRequestUrl = '{{DELIVERYREQUESTURL}}',
   DeliveryProducts = '{{DELIVERYPRODUCTS}}',
   SiteUrl = '{{SITEURL}}',
   SiteLoginUrl = '{{SITELOGINPAGE}}'
 }

 const RecipientDetails = [
   Placeholders.RecipientAddress, Placeholders.RecipientEmail,
   Placeholders.RecipientLastName, Placeholders.RecipientFirstName,
   Placeholders.RecipientPhoneNumber
  ];

  const AssignedUserDetails = [
    Placeholders.AssignedUserFirstName, Placeholders.AssignedUserLastName,
    Placeholders.AssignedUserPhoneNumber
  ];
  

export const AvailablePlaceholders = {
  [NotificationTypes.CrewRegistrationEmail]: [
    Placeholders.SiteLoginUrl, Placeholders.SiteUrl,
    Placeholders.NewCrewEmail, Placeholders.NewCrewPassword,
    Placeholders.CompanyName, Placeholders.RecipientFirstName,
    Placeholders.RecipientLastName, Placeholders.NewCrewPhoneNumber
  ],
  [NotificationTypes.CrewRegistrationSMS]: [
    Placeholders.SiteLoginUrl, Placeholders.SiteUrl,
    Placeholders.NewCrewEmail, Placeholders.NewCrewPassword,
    Placeholders.CompanyName, Placeholders.RecipientFirstName,
    Placeholders.RecipientLastName, Placeholders.NewCrewPhoneNumber
  ],
  [NotificationTypes.UserRegistrationAdminEmail]: [
    ...RecipientDetails
  ],
  [NotificationTypes.UserStatusEmail]: [
    Placeholders.RecipientLastName, Placeholders.RecipientFirstName,
  ],
  [NotificationTypes.UserStatusSMS]: [
    Placeholders.RecipientLastName, Placeholders.RecipientFirstName,
  ],
  [NotificationTypes.UserDeliveryEmail]: [
    ...RecipientDetails, Placeholders.CompanyAddress, Placeholders.CompanyName,
    ...AssignedUserDetails, Placeholders.AdditionalRecipientText,
    Placeholders.AdditionalCompanyText
  ],
  [NotificationTypes.CompanyDeliveryEmail]: [
    ...AssignedUserDetails, ...RecipientDetails,
    Placeholders.AdditionalCompanyText, Placeholders.AdditionalRecipientText,
    Placeholders.CompanyAddress, Placeholders.CompanyName,
    Placeholders.DeliveryProducts
  ],
  [NotificationTypes.CompanyDeliveryRequestEmail]: [
    Placeholders.DeliveryRequestUrl, Placeholders.CompanyAddress,
    Placeholders.CompanyName, Placeholders.RecipientFirstName
  ],
  [NotificationTypes.DeliveryRequestSMS]: [
    Placeholders.DeliveryRequestUrl, Placeholders.CompanyAddress,
    Placeholders.CompanyName
  ],
  [NotificationTypes.DeliveryRequestAcceptanceEmail]: [
    ...AssignedUserDetails, ...RecipientDetails, Placeholders.CompanyName
  ],
  [NotificationTypes.DeliveryRequestAcceptanceSMS]: [
    Placeholders.RecipientFirstName, Placeholders.RecipientLastName
  ],
  [NotificationTypes.DeliveryWarningEmail]: [
    ...RecipientDetails, Placeholders.CompanyAddress,
    Placeholders.CompanyName
  ],
  [NotificationTypes.CompanyDeliverySMS]: [
    ...AssignedUserDetails, ...RecipientDetails,
    Placeholders.DeliveryProducts
  ],
  [NotificationTypes.UserDeliverySMS]: [
    Placeholders.AssignedUserPhoneNumber, Placeholders.CompanyName
  ],
  [NotificationTypes.DeliveryWarningEmail]: [
    Placeholders.RecipientFirstName, Placeholders.CompanyName,
    Placeholders.RecipientLastName
  ],
  [NotificationTypes.DeliveryWarningSMS]: [
    Placeholders.RecipientFirstName, Placeholders.CompanyName,
    Placeholders.RecipientLastName
  ]
 };

