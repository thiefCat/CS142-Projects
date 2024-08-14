"use strict";

function Cs142TemplateProcessor(template) {
  this.template = template;
}


Cs142TemplateProcessor.prototype.fillIn = function(dictionary) {
  const re = /{{[^{}]*}}/g;
  const result = this.template.replace(re, function(match) {
    const key = match.substring(2, match.length-2);
    return dictionary[key] === undefined ? '' : dictionary[key];
  });
  return result;
};


// var template = "My favorite month is {{month}} but not the day {{day}} or the year {{year}}";
// var dateTemplate = new Cs142TemplateProcessor(template);
// var dictionary = {month: "July", day: "1", year: "2016"};
// var str = dateTemplate.fillIn(dictionary);
// console.log(str);


// var dictionary2 = {day: "1", year: "2016"};
// var str = dateTemplate.fillIn(dictionary2);
// console.log(str);