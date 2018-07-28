import React from 'react';
import ArticleS from './ArticleS';

const Saved = props => 
<div>
  <p className="tu b">Saved</p>
  <div className="flex flex-column">
    {props.articles.map(x => <ArticleS x={x} key={x._id} submit={props.submit} delArt={props.delArt} />)}
  </div>
</div>


export default Saved;