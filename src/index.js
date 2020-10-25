module.exports = function toReadable (number) {
   const num = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 
   'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
   const numTen = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
   if (number === 0) return 'zero';
   else if (number < 20) return num[number];
   else if (number >= 20 && number < 100) {
       return (numTen[Math.trunc(number / 10)] + ' ' + num[number % 10]).trim();
   }
   else if (number >=100 && number <= 999) {
       let hundred = Math.trunc(number / 100);
        let ostHundred = number - hundred * 100;
        let ten;
        if (ostHundred < 20) {
            ten = num[ostHundred];
            return (num[hundred] + ' hundred' + ' ' + ten).trim();
        }
        else ten = Math.trunc((number - hundred * 100) / 10);
       let one = number - hundred * 100 - ten * 10;
       return (num[hundred] + ' hundred' + ' ' + numTen[ten] + ' ' + num[one]).trim();
   }
}
