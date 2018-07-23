import React from "react";

const saveArticle = x => {
  let data = {
    title: x.headline.main,
    date: x.pub_date,
    url: x.web_url
  }
  fetch("/api/articles", {
    method: "POST",
    body: JSON.stringify(data),
    headers:{
      'Content-Type': 'application/json'
    }
  }).then(res => res.json());
};

const Article = props => (
  <div className="ba mw5 bg-washed-green b--gold br3 pa3 ma1">
    <a href={props.x.web_url}>
    <div>{props.x.headline.main}</div>
    </a>
    <div>{props.x.snippet}</div>
    <div>Published on {props.x.pub_date}</div>
    <button
      className="bg-red bt b--silver bw2 br1"
      onClick={() => saveArticle(props.x)}
    >
      Save
    </button>
  </div>
);

export default Article;
