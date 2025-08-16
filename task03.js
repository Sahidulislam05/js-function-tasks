/**  
 * ⚠️ Function Name Must be bestTeam()
 * 
ফুটবল খেলার মাঠে শুধু গোল নয়, ফাউল, হলুদ কার্ড, লাল কার্ডও খুব গুরুত্বপূর্ণ! 
দুইটি দল খেলেছে—তারা কে কত ফাউল করেছে, কয়টা হলুদ কার্ড ও লাল কার্ড পেয়েছে তা দেখে বিচারক ঠিক করবে কে বেশি ফেয়ার প্লে করেছে। তোমার কাজ হচ্ছে একটি ফাংশন বানানো, যার নাম হবে bestTeam(). এই ফাংশনটি দুইটি দলের খেলার রিপোর্ট (object আকারে) ইনপুট হিসেবে নেবে আর রিটার্ন করবে সেই দলের নাম যে সবচেয়ে কম নিয়ম ভেঙেছে অর্থাৎ বেশি ফেয়ার ছিল।  

👉 যেই দলের  foul + redCard + yellowCard এর পরিমান  কম → সেই দল বেশি ফেয়ার

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

console.log(
  bestTeam({ name: "Germany", foul: 10, cardY: 1, cardR: 1 }, "France")
);
