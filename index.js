// code your solution here
function saturdayFun(plan = "roller-skate") {
  return `This Saturday, I want to ${plan}!`;
}
saturdayFun();

function mondayWork(check = "go to the office") {
  return `This Monday, I will ${check}.`;
}
mondayWork("This Monday, I will work from home.");

function wrapAdjective(adjective) {
  const specialChar = function (start) {
    return `You are ${adjective}${start}${adjective}!`;
  }
  return specialChar
  
}
wrapAdjective("*")