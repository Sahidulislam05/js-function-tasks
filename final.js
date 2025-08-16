/**
 * Problem_01
 */

function totalFine(fare) {
  if (fare <= 0 || typeof fare !== "number") {
    return "Invalid";
  }
  fine = fare + fare * (20 / 100) + 30;
  return fine;
}

/**
 * Problem_02
 */

function onlyCharacter(str) {
  if (typeof str !== "string") {
    return "Invalid";
  }
  const character = str.split(" ").join("").toUpperCase();
  return character;
}

/**
 * Problem_03
 */

function bestTeam(player1, player2) {
  if (typeof player1 !== "object" || typeof player2 !== "object") {
    return "Invalid";
  }
  const firstTeam = player1.foul + player1.cardY + player1.cardR;
  const secondTeam = player2.foul + player2.cardY + player2.cardR;

  if (firstTeam < secondTeam) {
    return player1.name;
  }
  if (secondTeam < firstTeam) {
    return player2.name;
  }
  return "Tie";
}

/**
 * Problem_04
 */

function isSame(arr1, arr2) {
  if (Array.isArray(arr1) == false || Array.isArray(arr2) == false) {
    return "Invalid";
  }
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

/**
 * Problem_05
 */

function resultReport(marks) {
  if (Array.isArray(marks) == false) {
    return "Invalid";
  }
  if (marks.length === 0) {
    return { finalScore: 0, pass: 0, fail: 0 };
  }
  let sum = 0;
  let passMark = 0;
  let failMark = 0;
  for (let i = 0; i < marks.length; i++) {
    if (marks[i] < 40) {
      failMark++;
    } else {
      passMark++;
    }
    sum += marks[i];
  }

  let score = Math.round(sum / marks.length);

  let result = {
    finalScore: score,
    pass: passMark,
    fail: failMark,
  };

  return result;
}
