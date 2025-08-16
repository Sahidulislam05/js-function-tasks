/*** 
 * ⚠️ Function Name Must be isSame()
 * 
তোমার কাজ হচ্ছে একটি ফাংশন তৈরি করা যার নাম হবে isSame()। এই ফাংশনটি দুটি অ্যারে ইনপুট হিসেবে নেবে, তারপর চেক করবে — এই দুইটি অ্যারে Same কিনা  যদি ২ টা  Array সেইম হয় তাহলে ফাংশন টি return করবে true ।  আর না হলে return করবে false ।
২ টা Array Same হবার শর্ত - 

🚩Array ২ টির length সমান হতে হবে।
🚩Array ২ টির  প্রতিটি index এর value exactly  same হতে হবে।

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

console.log(isSame({ data: [2, 5, 6] }, [2, 5, 6]));
