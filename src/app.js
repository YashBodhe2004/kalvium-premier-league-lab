//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(name, age, team, trophies) {
  return [name, age, team, trophies];
}

// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
function createFormation([defender, midfield, forward]) {
  if (defender === undefined || midfield === undefined) {
    return null;
  }

  return {
    defender: defender,
    midfield: midfield,
    forward: forward,
  };
}

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year) {
  let result = [];
  players.some((player) => {
    if (player.debut === parseInt(year)) result.push(player);
  });
  return result;
}

//Progression 4 - Filter players that play at the position _______
function filterByPosition(position) {
  let result = [];
  players.some((player) => {
    if (player.position === position) result.push(player);
  });
  return result;
}

//Progression 5 - Filter players that have won ______ award
function filterByAward(award) {
  let result = [];
  players.some((player) => {
    let awardStatus = false;
    player.awards.some((playerAward) => {
      if (playerAward.name === award) {
        awardStatus = true;
      }
    });
    if (awardStatus) result.push(player);
  });
  return result;
}

//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(awardName, noOfTimes) {
  let result = [];
  players.some((player) => {
    let noOfSameAward = 0;
    player.awards.some((playerAward) => {
      if (playerAward.name === awardName) {
        noOfSameAward += 1;
      }
    });
    if (noOfSameAward === parseInt(noOfTimes)) result.push(player);
  });
  return result;
}

//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry(awardName, country) {
  let result = [];
  players.some((player) => {
    let awardStatus = false;
    player.awards.some((playerAward) => {
      if (playerAward.name === awardName && player.country === country) {
        awardStatus = true;
      }
    });
    if (awardStatus) result.push(player);
  });
  return result;
}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age) {
  let result = [];
  players.some((player) => {
    if (
      player.awards.length >= parseInt(noOfAwards) &&
      player.team === team &&
      player.age <= parseInt(age)
    ) {
      result.push(player);
    }
  });
  return result;
}

//Progression 9 - Sort players in descending order of their age
function SortByAge() {
  return players.sort((a, b) => b.age - a.age);
}

//Progression 10 - Sort players beloging to _____ team in descending order of awards won
function FilterByTeamxSortByNoOfAwards(team) {
  let result = [];
  players.some((player) => {
    if (player.team === team) {
      result.push(player);
    }
  });
  return result.sort((a, b) => b.awards.length - a.awards.length);
}

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names
function SortByNamexAwardxTimes(awardName, noOfTimes, country) {
  let result = players.filter((player) => {
    let awardCount = 0;
    for (let playerAward of player.awards) {
      if (playerAward.name === awardName) {
        awardCount++;
      }
    }
    return awardCount === parseInt(noOfTimes) && player.country === country;
  });

  return result.sort((a, b) => a.name.localeCompare(b.name));
}

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
function SortByNamexOlderThan(age) {
  let result = players
    .filter((player) => player.age >= parseInt(age))
    .map((player) => ({
      ...player,
      awards: [...player.awards].sort((a, b) => b.year - a.year),
    }))
    .sort((a, b) => a.name.localeCompare(b.name));

  return result;
}