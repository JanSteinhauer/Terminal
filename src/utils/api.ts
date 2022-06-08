import axios from 'axios';
import config from '../../config.json';

export const getProjects = async () => {
  const { data } = await axios.get(
    `https://api.github.com/users/${config.social.github}/repos`,
  );
  return data;
};

export const getStock = async (): Promise<string> => {
  const { data } = await axios.get(
    `https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2020-06-01/2020-06-08?apiKey=O4c9h01iVa7DNbpkvi1bpr9R5szjJ0Wl`,
  );
  // return {
  //   quote: `“${data.adjusted}” — ${data.results}`,
  // };
  var x = "error"
  data.results.forEach(element => {
    console.log(element);
    console.log("Hello Guys");
    console.log(element.v);
    x = element.V;
  });
  return x;
};


export const lul = async (args: string[]): Promise<string> => {
  const { data } = await axios.get(
    `https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2020-06-01/2020-06-08?apiKey=O4c9h01iVa7DNbpkvi1bpr9R5szjJ0Wl`,
  );
  // return {
  //   quote: `“${data.adjusted}” — ${data.results}`,
  // };
  var x = "error"
  data.results.forEach(element => {
    console.log(element);
    console.log("Hello Guys");
    console.log(element.v);
    x = element.V;
  });
  return x;
};






export const getWeather = async (city: string) => {
  try {
    const { data } = await axios.get(`https://wttr.in/${city}?ATm`);
    return data;
  } catch (error) {
    return error;
  }
};

export const getQuote = async () => {
  const { data } = await axios.get('https://api.quotable.io/random');
  return {
    quote: `“${data.content}” — ${data.author}`,
  };
};
