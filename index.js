function scuberGreetingForFeet(rideFeet){
  let result;
  if (rideFeet <= 400 ){
    return ('This one is on me!')
  }
  else if (
    rideFeet > 400 && rideFeet <=2000){
return ('That will be twenty bucks.');
  }
  else if (
    rideFeet > 2000){
      return ('I will gladly take your thirty bucks.');
    }
  else if (
    rideFeet > 2500){
      return ('No can do');
    }

function ternaryCheckCity(city){
  let result2 ;
  if (city === 'NYC'){
    return ('Ok sounds good!')
  }
else {
  return ('No go')
}
let city = Pittsburgh


function switchOnCharmFromTip(tipResponse){
  switch (tipResponse){
    case "generous":
      return "Thank you so much."
  
  case "not as generous":
    return "Thank you."

default: return "Bye."
  }
}
