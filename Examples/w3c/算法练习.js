/*字符串反转算法的实现*/
var str = 'hello world';
var rstr = '';
console.log(str);
for (let index = str.length - 1; index >= 0; index--) {
    rstr += str[index];
}
/*官方给出的反转方法*/
var str = 'asdfghjkl';
var strReverse = str.split('').reverse().join(''); // 'lkjhgfdsa'
console.log(rstr);
/*字符串的切割方法*/
var names = 'Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand ';

console.log(names);

var re = /\s*;\s*/;
var nameList = names.split(re);

console.log(nameList);
/*特殊字符去掉的回文文本的判断*/
var str = "ab;c";
var newStr = str.replace(/[\ |\~|`|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\-|\_|\+|\=|\||\|\[|\]|\{|\}|\;|\:|\"|\'|\,|\<|\.|\>|\/|\?]/g, "");
console.log(newStr);

var nStr = str.replace(/[\ |\~|\`|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\-|\_|\+|\=|\||\\|\[|\]|\{|\}|\;|\:|\"|\'|\,|\<|\.|\>|\/|\?]/g, "");
str = 'race car';
var nStr = str.replace(/[\ |\~|\`|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\-|\_|\+|\=|\||\\|\[|\]|\{|\}|\;|\:|\"|\'|\,|\<|\.|\>|\/|\?]/g, "");
nStr = nStr.split('').reverse().join('').toLowerCase();
var flg = (str.toLowerCase() == nStr);
console.log('End.');