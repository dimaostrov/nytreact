import React from "react";

const deleteArticle = x => {
  let data = x;
  fetch(`/api/articles/${data}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => res.json());
};

const ArticleS = props => (
  <div className="ba mw7 bg-washed-blue b--silver bw3 br3 pa1 ma1">
    <a href={props.x.url}>
      <div>{props.x.title}</div>
    </a>
    <div>Published on {props.x.date.split("T")[0]}</div>
    <button
      className="bg-red bt b--silver bw2 br1"
      onClick={() => deleteArticle(props.x._id)}
    >
      Delete
    </button>
    <div>Comments:</div>
    <div></div>
    <div>Search:</div>
    <form>
    <input className="mw4 center" type="text" name='comment' onSubmit={props.submit} />
    </form>
  </div>
);

export default ArticleS;
