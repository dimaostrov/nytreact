import rp from "request-promise";

const apiKey = {
  "api-key": "e6c4c7ac070049fab4d34eaa40c38dbf"
};

export const postSearch = (query = "", startYear = "", endYear = "") => {
  return rp({
    url: `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query +
      validateYears([startYear, endYear])}`,
    qs: apiKey
  }).then(body => JSON.parse(body))
    .catch(err => console.log(err));
};

export const defaultSearch = () => {
  // make request
  return rp({
    url: `https://api.nytimes.com/svc/search/v2/articlesearch.json`,
    qs: apiKey
  })
    .then(res => JSON.parse(res))
    .catch(err => console.log(err));
};

export const savedArticles = () => {
  return fetch('/api/articles').then(res => res.json());
}

const validateYears = years => {
  let result = years
    .map(year => {
      return String(year.length) === 4 && year > 1899
        ? `&begin_date=${year}0101`
        : "";
    })
    .join("");
  return result;
};
