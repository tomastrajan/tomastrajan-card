#!/usr/bin/env node
const boxen = require("boxen");
const chalk = require("chalk");

const y = chalk.yellow;
const g = chalk.grey;
const c = chalk.cyan;
const b = chalk.bold;

const cardOptions = {
  padding: 1,
  margin: 1,
  borderColor: 'cyan'
};

const content = `${b('Tomas Trajan')}   Google Developer Expert for Angular and Web (GDE)
              
               
     ${g('Work')}   Swiss-based Software Consultant, Angular Trainer& Entrepreneur
${g('Omniboard')}   ${y('https://omniboard.dev')}
      ${g('Web')}   ${y('https://www.tomastrajan.com')}
  ${g('Twitter')}   ${y('https://twitter.com/tomastrajan')}
   ${g('Medium')}   ${y('https://medium.com/@tomastrajan')}
   ${g('GitHub')}   ${y('https://github.com/tomastrajan')}
 ${g('LinkedIn')}   ${y('https://linkedin.com/in/tomastrajan/')}
      ${g('GDE')}   ${y('https://developers.google.com/community/experts/directory/profile/profile-tomas-trajan')}

     ${g('Card')}   ${c('npx tomastrajan')}`;

const card = boxen(content, cardOptions);

console.log(card);
