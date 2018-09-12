// Generated by BUCKLESCRIPT VERSION 3.1.5, PLEASE EDIT WITH CARE
'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Utils$Ex1 = require("./Utils.bs.js");

console.log("\n~~");

function checkKnowledge(knowledge, lang) {
  switch (knowledge) {
    case 0 : 
        if (lang >= 2) {
          return "nobody";
        } else {
          return "Junior +";
        }
    case 1 : 
        if (lang >= 2) {
          return "Not matched";
        } else {
          return "Medium knowledge";
        }
    case 2 : 
        if (lang !== 0) {
          return "Wizard";
        } else {
          return "Wizard OCaml";
        }
    
  }
}

function factorial(num) {
  var _i = 1;
  var _acc = 1;
  while(true) {
    var acc = _acc;
    var i = _i;
    if (i > num) {
      return acc;
    } else {
      _acc = Curry._2(Utils$Ex1.$$Math[/* multi */0], acc, i);
      _i = Utils$Ex1.sum(i, 1);
      continue ;
    }
  };
}

var yourAnswer = /* Yes */0;

var conferenceName = /* Name */Block.__(0, ["LambdaUp"]);

var conferenceDuration = /* Duration */Block.__(1, [20]);

var venue = /* tuple */[
  10,
  40,
  2.2
];

var tropical = /* tuple */[
  23.6,
  18.7,
  1
];

var youKnowReasonML = /* Some */["Yes, I know!"];

var youDontKnowReasonML = /* None */0;

exports.yourAnswer = yourAnswer;
exports.conferenceName = conferenceName;
exports.conferenceDuration = conferenceDuration;
exports.venue = venue;
exports.tropical = tropical;
exports.youKnowReasonML = youKnowReasonML;
exports.youDontKnowReasonML = youDontKnowReasonML;
exports.checkKnowledge = checkKnowledge;
exports.factorial = factorial;
/*  Not a pure module */
