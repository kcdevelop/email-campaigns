import templateCollection from './template-collection.js';

const emailContent = document.querySelector('.content');
 
function createCodeField(template, schoolName=null) {
    let currentHeading = document.createElement('h1'),
    currentField = document.createElement('textarea');

    currentHeading.setAttribute('class', 'raw-code-heading');
    currentHeading.innerHTML = schoolName;

    currentField.setAttribute('class', 'raw-code');
    currentField.insertAdjacentHTML("afterbegin", template);

    return currentField;
}

function populateData(template=null, emailData, contactData=null) {
    let { previewText, subjectLine, resourceUrl, bodyText } = emailData;
    if(
        template !== null && 
        emailData !== ''
    ) {
      let contentHeading = '';

        template = template.replace('PREVIEW_TEXT', previewText);
        template = template.replace('TITLE', subjectLine);
        template = template.replaceAll('RESOURCE_URL', resourceUrl);

        bodyText.forEach((text, index) => {
          template = template.replace(`MAIN_COPY_${index}`, text);
        });

        if(contactData) {
          let schoolName = contactData.schoolName.replaceAll(' ', '+');
          template = template.replaceAll('SCHOOL_NAME', schoolName);

          contentHeading = `
            <h1 class="raw-code-heading">${subjectLine}: ${contactData.schoolName}</h1>
            <p class="recipients">${contactData.contactPerson}</p>
            <p class="emails">${contactData.email}</p>
          `;
        } else {
          contentHeading = `<h1 class="raw-code-heading">${subjectLine}</h1>`;
        }

        emailContent.insertAdjacentHTML(
            "beforeend", 
            contentHeading +
            template
        );

        if(contactData) {
          emailContent.append(createCodeField(template, contactData.schoolName));
        } else {
          emailContent.append(createCodeField(template, subjectLine));
        }
    }
}

function genenrateTemplates(selectedTemplate=null, dataSet=null, contactSet=null) {
  if(
      selectedTemplate !== null && 
      selectedTemplate !== ''
    ) {
    let emailTemplate = templateCollection[selectedTemplate];
    
    if(contactSet !== null) {
      contactSet.forEach(contactData => {
        populateData(emailTemplate, dataSet[selectedTemplate], contactData);
      });
    } else {
      populateData(emailTemplate, dataSet[selectedTemplate]);
    }
  } else {
    emailContent.innerHTML = 'No Template Selected!';
  }
}

export default genenrateTemplates;