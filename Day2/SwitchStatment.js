// useful when we have multiple possible conditions to check and we want to execute different block of cde based on those condition.
/* real life scenario --> we can use switch statment for evaluate our grades */

const grade = "A";
switch (grade) {
  case "A":
    console.log("Excellent");
    break;

  case "B":
    console.log("Good");
    break;

  case "C":
    console.log("You Passed");
    break;

  case "D":
    console.log("Okey Only");
    break;

  case "F":
    console.log("Failed");
    break;
    default:
    console.log("Invalid grade");
}