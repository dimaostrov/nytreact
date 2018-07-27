import React from 'react';
import Article from './Article'

const Result = props => 
<div className="flex flex-wrap mw8 center">  
  { props.results.length > 0 ?
    props.results.map(x => <Article x={x} key={x._id} /> )
    : <div>Loading ...</div>
  }
</div>



export default Result;