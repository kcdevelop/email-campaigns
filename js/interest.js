import getData from './modules/get-data.js';
import pushAnalyticsData from './modules/push-analytics-data.js';

const currentSchool = document.querySelector('#current-school'),
mainHeading = document.querySelector('.main-heading'),
interestFormBtn = document.querySelector('.interest-form-btn'),
questionBlock = document.querySelector('.question-block');

const headingText = 'Thanks for your response';

const declineMessage = `
  <p class="message-block">
    Would you like to reconcider?
  </p>
`;

const interestedMessage = `
  <p class="question-block">
    Please take a few moments to complete the short interest form. There you can share your comments or ask questions.
  </p>
`;

function showReaction(reaction) {
  let reactionImages = document.querySelectorAll(`.reaction-block img`),
  currentImage = document.querySelector(`.${reaction}-face-image`);

  reactionImages.forEach((reactionImage) => {
    reactionImage.classList.remove('show');
  });

  currentImage.classList.add('show');
}

function displayMessage(data, changeAnswer=null) {
  if(data.length > 0) {
    let [school, answer] = data,
    formattedSchool = school.replaceAll('+', ' '),
    interestFormUrl = `https://docs.google.com/forms/d/e/1FAIpQLScMgFLN1-BhsXAc3AmrdpcuRYrI0jmWaBudcwrC2PMOc9FEWg/viewform?usp=pp_url&entry.1935347158=${school}`;
      
    questionBlock.innerHTML = '';

    if(answer === 'interested') {
      currentSchool.value = `${formattedSchool} ${answer}.`;
      questionBlock.insertAdjacentHTML(
        "afterbegin", 
        interestedMessage
      );
      showReaction('glad');
    }
    
    if(answer === 'declined') {
      questionBlock.insertAdjacentHTML(
        "afterbegin", 
        declineMessage
      );
      showReaction('sad');

      if(changeAnswer !== null) {
        currentSchool.value = `${formattedSchool} ${changeAnswer}.`;
        
        if(changeAnswer === 'converted') {
          showReaction('glad');
        } else if (changeAnswer === 'declined') {
          showReaction('sad');
        }
      }
    }
    
    mainHeading.innerHTML = `${headingText }${answer === 'declined' ? '.' : '!'}`;
    interestFormBtn.href = `${interestFormUrl}`;
      
    pushAnalyticsData(school, answer);
  }
}

interestFormBtn.addEventListener('mouseover', () => {
  displayMessage(getData(), 'converted');
});

interestFormBtn.addEventListener('mouseout', () => {
  displayMessage(getData(), 'declined');
});

displayMessage(getData());