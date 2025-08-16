/**  
 * ⚠️ Function Name Must be onlyCharacter()
 * 
রাফি একজন উঠতি Ethical Hacker. 💻সে প্রতিদিন নানা ধরণের এনক্রিপ্টেড তথ্য নিয়ে কাজ করে। সর্বশেষ এক মিশনে সে কিছু সিক্রেট বার্তা পায়, কিন্তু বার্তা গুলো তে মাঝখানে অনেক স্পেস, ছোট হাতের অক্ষর , বড় হাতের অক্ষর  এবং নানা রকম গ্যাপ থাকে। যা পড়তে দুর্ভেদ্য লাগে। 
রাফি চায়, সে যেন যেকোনো string ফরম্যাট করার জন্য একটি টুল বানাতে পারে, যা শুধুমাত্র  ক্যারেক্টার রেখে বাকিটুকু বাদ দিবে এবং সব ক্যাপিটাল লেটারে রূপান্তর করবে।  
 
তোমার কাজ হলো রাফির জন্য onlyCharacter() নামের একটি ফাংশন তৈরি করা, যা যেকোনো স্ট্রিং ইনপুট থেকে শুধুমাত্র character বের করে সেই character গুলোর বড় হাতের সংস্করণ রিটার্ন করবে।
 */

/* 
function onlyCharacter(str) {
  if (typeof str !== "string") {
    return "Invalid";
  }

  const freeSpace = str.replaceAll(" ", "");
  const character = freeSpace.toUpperCase();
  return character;
}

console.log(onlyCharacter("Cy   bar- At  tac k  "));

*/

function onlyCharacter(str) {
  if (typeof str !== "string") {
    return "Invalid";
  }
  const character = str.split(" ").join("").toUpperCase();
  return character;
}

console.log(onlyCharacter(true));
