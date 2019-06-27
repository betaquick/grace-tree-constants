/**
 * Enum for available template placeholders
 * 
 * @readonly
 * @enum {string}
 */

 export enum Placeholders {
   RecipientFirstName = '{{RECIPIENTFIRSTNAME}}',
   RecipientLastName = '{{RECIPIENTLASTNAME}}',
   RecipientPhoneNumber = '{{RECIPIENTPHONENUMBER}}',
   RecipientAddress = '{{RECIPIENTADDRESS}}',
   CompanyName = '{{COMPANYNAME}}',
   CompanyAddress = '{{COMPANYADDRESS}}',
   AdditionalRecipientText = '{{ADDITIONALRECIPIENTTEXT}}',
   AdditionalCompanyText = '{{ADDITIONALCOMPANYTEXT}}',
   AssignedUserFirstName = '{{ASSIGNEDUSERFIRSTNAME}}',
   AssignedUserLastName = '{{ASSIGNEDUSERLASTNAME}}',
   AssignedUserPhoneNumber = '{{ASSIGNEDUSERPHONENUMBER}}'
 }