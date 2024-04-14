'use strict'
function checkForSpam(message){
    const isSpam1 = 'spam';
    const isSpam2 = 'sale';
    const foundBanWord1 = message.toLowerCase().includes(isSpam1);
    const foundBanWord2 = message.toLowerCase().includes(isSpam2);
    if (foundBanWord1 || foundBanWord2){
        return true;
    } else{
        return false;
    }
}

console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
