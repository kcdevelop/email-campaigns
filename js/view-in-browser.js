import getData from './modules/get-data.js';

const yesCta = document.querySelector('a.yes-cta'),
noCta = document.querySelector('a.no-cta');

var interestedUrl = 'https://kcdevelop.github.io/email-campaigns/adapt/program-introduction/interest.html#SCHOOL_NAME#interested',
notInterestedUrl = 'https://kcdevelop.github.io/email-campaigns/adapt/program-introduction/interest.html#SCHOOL_NAME#declined';

function displayMessage(data) {
  if(data.length > 0) {
    let [school] = data;

    yesCta.href = interestedUrl.replaceAll('SCHOOL_NAME', school);
    noCta.href = notInterestedUrl.replaceAll('SCHOOL_NAME', school);
  }
}

displayMessage(getData());