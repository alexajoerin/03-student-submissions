"use strict";

// #1
const submissions = [
  {
    name: "Jane",
    score: 95,
    passed: true,
  },
  {
    name: "Joe",
    score: 77,
    passed: true,
  },
  {
    name: "Jack",
    score: 59,
    passed: false,
  },
  {
    name: "Jill",
    score: 88,
    passed: true,
  },
];

// #2
const addSubmission = (array, newName, newScore) => {
  array.push({ name: newName, score: newScore, passed: newScore >= 60 });
};

// addSubmission(submissions, "James", 100);
// console.log(submissions);

// #3
const deleteSubmissionByIndex = (array, index) => array.splice(index, 1);

// deleteSubmissionByIndex(submissions, 0);
// console.log(submissions);

// #4
const deleteSubmissionByName = (array, name) => {
  const indexOfName = array.findIndex((item) => item.name === name);
  array.splice(indexOfName, 1);
};

// deleteSubmissionByName(submissions, "Joe");
// console.log(submissions);

// #5
const editSubmission = (array, index, score) => {
  array[index].score = score;
  array[index].passed = score >= 60;
};

// editSubmission(submissions, 2, 80);
// console.log(submissions);

// #6
const findSubmissionByName = (array, name) =>
  array.find((item) => item.name === name);
// console.log(findSubmissionByName(submissions, "Joe"));

// #7
const findLowestScore = (array) => {
  // pv = array[0] cv = array[1] if none defined
  // loop through array, if cv.score is less than pv.score, return cv. If not, return pv
  return array.reduce((pv, cv) => (cv.score < pv.score ? cv : pv));
  //   let currentLowest = array[0];
  //   array.forEach((item) => {
  //     if (item.score < currentLowest.score) {
  //       currentLowest = item;
  //     }
  //   });
  //   return currentLowest;
};
// console.log(findLowestScore(submissions));

// #8
const findAverageScore = (array) => {
  return array.reduce((pv, cv) => pv + cv.score, 0) / array.length;
};
// console.log(findAverageScore(submissions));

// #9
const filterPassing = (array) => array.filter((item) => item.passed);
// const filterPassing = (array) => array.filter((item) => item.score >= 60);
// console.log(filterPassing(submissions));

// #10
const filter90AndAbove = (array) => array.filter((item) => item.score >= 90);
// console.log(filter90AndAbove(submissions));
