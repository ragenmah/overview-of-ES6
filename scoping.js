/************************************************************************************
 *   Keyword  *      scope     * Hoisting * Can be reassigned * Can be redeclared   *
 ************************************************************************************
 *    var     * Function scope * Yes      * Yes               * Yes                 *
 *    let     * Block scope    * No       * Yes               * No                  *
 *    const   * Block Scope    * No       * No                * No                  *
 *************************************************************************************/

var fullName = "Ajay shah";
let className = "Class 8";
const rollNumber = 8;
console.log(passedYear); // undefined will be appear
var passedYear = 2018;
console.log(passedYear); // value will be defined
// let className = "Class 6"; // this cannot be done for let variables
{
  // this is the block
  fullName = "Ram Shah"; // reassigned
  // let fullName = "Shyam Shah";// trying to redeclared using let but not allowed to do
  var fullName = "Hari shah"; // var can be redclared and reassigned
  console.log(fullName);

  let className = "Class 9";
  console.log(className); // this shows let have a block scope

  
}

console.log(fullName);
console.log(className);
console.log(rollNumber);
