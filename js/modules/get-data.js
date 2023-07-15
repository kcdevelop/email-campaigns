function getData() {
  let parameterList = location.hash.split(/(#|%23)/),
  filteredParameterList = parameterList.filter(param => {

    let formatParam = param.replace('+', '');
    
    return formatParam !== '' && formatParam !== '#' && formatParam !== '%23';
  });

  return filteredParameterList;
}

export default getData;