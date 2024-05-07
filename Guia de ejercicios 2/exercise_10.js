//un valor expresado en minutos, si el valor supera los 60 min pasarlo a horas de lo contrario dejarlo en minutos y aclarar si son minutos o horas
const min = 550;
if (min > 60) {
  const splitted = (min / 60).toFixed(2).split(".");
  console.log(splitted[0], "hrs, ", splitted[1], "mins.");
  // interpolación (sólo es aplicable a strings)
  //console.log(`${splitted[0]} hrs, ${splitted[1]} mins.`);
} else {
  console.log("los minutos son", min);
}
//const m = min > 60 ? console.log("mayor") : console.log("menor");
