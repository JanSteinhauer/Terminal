// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';
import axios from 'axios';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `Welcome! Here are all the available commands:
  about
  banner 
  calc 
  coin 
  date 
  echo
  email 
  github 
  google 
  harvard  
  instagram
  linkedin   
  quote 
  rapido  
  resume 
  song 
  sumfetch
  weather 
  wue 

\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'sumfetch' to display summary.
`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening Github repository...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am ${config.name}. 
Welcome to my website!
More about me:
'sumfetch' - short summary.
'resume' - my latest resume.`;
};

export const resume = async (args: string[]): Promise<string> => {
  if(args.join(' ') == 'de'){
    window.open(`https://ibb.co/MMZpt5V`);
    
  } else if(args.join(' ') == 'es'){
    window.open(`https://ibb.co/t2YyNwB`);
   
  } else if(args.join(' ') == 'en'){
    window.open(`https://ibb.co/qkkRkXS`);
  } else {
    window.open(`https://ibb.co/qkkRkXS`);
  }
  return 'Opening resume...';
};



// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/SteinhauerJan`);

  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/jan-steinhauer-a18611206/`);

  return 'Opening linkedin...';
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};

export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  return `Searching reddit for ${args.join(' ')}...`;
};

export const song = async (args: string[]): Promise<string> => {
  if(args.join(' ') == 'sex'){
    window.open(`https://www.youtube.com/watch?v=Us3cGQs0Q8A`);
    return 'song aerosmith'
  } else if(args.join(' ') == 'bubatz'){
    window.open(`https://www.youtube.com/watch?v=IEpSBsUjY-0`);
    return 'song buffalo soilder'
  } else if(args.join(' ') == 'mitch'){
    window.open(`https://www.youtube.com/watch?v=pl5WHx8QCVk`);
    return 'song old town road'
  } else if(args.join(' ') == 'lisa') {
    window.open(`https://www.youtube.com/watch?v=KrYJTs3hHus`);
    return 'song Заболел но не тобой'
  } else if(args.join(' ') == 'ronja') {
    window.open(`https://www.youtube.com/watch?v=n8LUQGOe1Ks`);
    return 'song let me blow ya love'
  } else if(args.join(' ') == 'ela') {
    window.open(`https://www.youtube.com/watch?v=lgHGU8gqz9U`);
    return 'song ela'
  } else {
    return 'unknown command'
  }
 ;
  // window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  // return `Searching reddit for ${args.join(' ')}...`;
};
//https://www.instagram.com/stei.jan/
// Typical linux commands
export const insta = async (args: string[]): Promise<string> => {
  window.open(`https://www.instagram.com/stei.jan/`);
    return 'stei.jan'
};

export const instagram = async (args: string[]): Promise<string> => {
  window.open(`https://www.instagram.com/stei.jan/`);
    return 'stei.jan'
};

export const harvard = async (args: string[]): Promise<string> => {
  window.open(`https://ibb.co/t2YyNwB`);
    return 'stei.jan'
};

export const project = async (args: string[]): Promise<string> => {
  window.open(`https://ibb.co/61wFv7h`);
    return 'stei.jan'
};


export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const rapido = async (args: string[]): Promise<string> => {
  
  return `🔥Solo Hazlo🔥`;
};

export const calc = async (args: string[]): Promise<string> => {
  let myArray = args.join(' ').split(" ");
  let num1 = parseInt(myArray[0]);
  let num2 = parseInt(myArray[2]);
  if(myArray[1]=="+"){
    let erg = num1 + num2;
    return `Ergebniss `+ erg ;
  } else if (myArray[1]=="*"){
    let erg = num1 * num2;
    return `Ergebniss `+ erg ;
  } else if (myArray[1]=="/"){
    let erg = num1 / num2;
    return `Ergebniss `+ erg ;
  } else if (myArray[1]=="-"){
    let erg = num1 - num2;
    return `Ergebniss `+ erg ;
  } else if (myArray[1]=="%"){
    let erg = num1 % num2;
    return `Ergebniss `+ erg ;
  } else if (myArray[1]=="pow"){
    let erg = Math.pow(num1, num2)
    return `Ergebniss `+ erg ;
  } else if (myArray[1]=="sqrt"){
    let erg = Math.sqrt(num1)
    return `Ergebniss `+ erg ;
  } else{
    return `Sorrry an error has occured` ;
  }
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const coin = async (args: string[]): Promise<string> => {
  if(Math.random() > 0.5){
    return `Head`;
  }else{
    return `Tail`;
  }
  
};

export const wue = async (args: string[]): Promise<string> => {
  window.open(`https://wuecampus2.uni-wuerzburg.de/moodle/login/index.php`);
  return `Open WueCampus`;
  
};

export const willi = async (args: string[]): Promise<string> => {
  window.open(`https://wuecampus2.uni-wuerzburg.de/moodle/course/view.php?id=48673`);
  return `Open Allg. Psycho`;
  
};

export const tick = async (args: string[]): Promise<string> => {
  const axios = require('axios')
  var hello = "problem"
const getBreeds = async () => {
  try {
    hello = await axios.get('https://dog.ceo/api/breeds/list/all')
   
  } catch (error) {
    console.error(error)
    return error
  }
}
return hello
  
  
};
// export const test = async (args: string[]): Promise<string> => {
//   const request = require('request')
   
//   // Request URL
//   var url = 'https://jsonplaceholder.typicode.com/todos/1';
    
//   request(url, (error, response, body)=>{
       
//       // Printing the error if occurred
//       if(error) console.log(error)
      
//       // Printing status code
//       console.log(response.statusCode);
        
//       // Printing body
//       return body
//   }); 
//   return `Open Allg. Psycho`;
  
// };






export const ticker = async (args: string[]): Promise<string> => {
  // var yahooFinance = require('yahoo-finance');

  // yahooFinance.quote({
  //   symbol: 'AAPL',
  //   modules: [ 'price' ] // see the docs for the full list
  // }, function (err, quotes) {
  //   return quotes;
  // });
 
// var request = require('request');

// replace the "demo" apikey below with your own key from https://www.alphavantage.co/support/#api-key
var url = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo';

// request.get({
//     url: url,
//     json: true,
//     headers: {'User-Agent': 'request'}
//   }, (err, res, data) => {
//     if (err) {
//       console.log('Error:', err);
//     } else if (res.statusCode !== 200) {
//       console.log('Status:', res.statusCode);
//     } else {
//       // data is successfully parsed as a JSON object:
//       console.log(data);
//     }
// });
  return url;
};


export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};


export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/channel/UCC49UqD1xN_vBc58BRpX33w/videos', '_blank'); // ...I'm sorry
  return ``;
};

// Banner
export const banner = (args?: string[]): string => {
  return `
  █████████   █████              ███             █████                                             
 ███░░░░░███ ░░███              ░░░             ░░███                                              
░███    ░░░  ███████    ██████  ████  ████████   ░███████    ██████   █████ ████  ██████  ████████ 
░░█████████ ░░░███░    ███░░███░░███ ░░███░░███  ░███░░███  ░░░░░███ ░░███ ░███  ███░░███░░███░░███
 ░░░░░░░░███  ░███    ░███████  ░███  ░███ ░███  ░███ ░███   ███████  ░███ ░███ ░███████  ░███ ░░░ 
 ███    ░███  ░███ ███░███░░░   ░███  ░███ ░███  ░███ ░███  ███░░███  ░███ ░███ ░███░░░   ░███     
░░█████████   ░░█████ ░░██████  █████ ████ █████ ████ █████░░████████ ░░████████░░██████  █████    
 ░░░░░░░░░     ░░░░░   ░░░░░░  ░░░░░ ░░░░ ░░░░░ ░░░░ ░░░░░  ░░░░░░░░   ░░░░░░░░  ░░░░░░  ░░░░░     
                                                                                                   
                                                                                                   
                                                                                                   
 █████                                                                                             
░░███                                                                                              
 ░███  ████████    ██████                                                                          
 ░███ ░░███░░███  ███░░███                                                                         
 ░███  ░███ ░███ ░███ ░░░                                                                          
 ░███  ░███ ░███ ░███  ███                                                                         
 █████ ████ █████░░██████                                                                          
░░░░░ ░░░░ ░░░░░  ░░░░░░                                                                           
                                                                                                   
                                                                                                                                                                                                     
Type 'help' to see the list of available commands.
Type 'sumfetch' to display summary.
`;
};
