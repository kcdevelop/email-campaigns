import emailData from './modules/email-data.js';
import contactData from './modules/contact-data.js';
import genenrateTemplates from './modules/generate-multiple-templates.js';

genenrateTemplates('introduction', emailData, contactData);
//genenrateTemplates('adapt', emailData, contactData);
