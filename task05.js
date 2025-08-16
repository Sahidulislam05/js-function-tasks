/**  
 * ⚠️ Function Name Must be resultReport()
 *
তোমাকে  resultReport()  নামে একটা ফাংশন বানাতে হবে, যেটা একটি নাম্বারের Array ইনপুট হিসেবে নেবে (যেখানে একজন student এর  মার্কসগুলো থাকবে) এবং রিটার্ন করবে একটি object, যেখানে থাকবে ৩ টি প্রোপার্টি —

finalScore : পরীক্ষার গড় নম্বর | pass: মোট কয়টি বিষয় পাস করেছে | fail: কয়টি বিষয় ফেল করেছে

মনে রাখতে হবেঃ  

👉 প্রতিটি সাবজেক্টে পাশ মার্ক হলো  40 
👉 finalScore কখনো দশমিক হবেনা। এটাকে rounded করে পুর্ন সংখ্যায় রুপান্তর করতে হবে।    

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

console.log(resultReport([98, 87, 67, 91, 92, 33, 87]));
