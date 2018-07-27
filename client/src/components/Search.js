import React from 'react';

const Search = props => 
<div className="mw8 center ba bw3 pa4 b--dotted b--black-30 br--bottom">
  <form className="flex flex-column justify-between center pa2" onSubmit={props.submit}>
    <label htmlFor="">Search</label>
    <input className="mw4 h2 bb b--orange bw2 ma2" type="text" value={props.topic} name="topic" onChange={props.change}/>
    <label htmlFor="">Start Year</label>
    <input className="mw4 h2 bb b--orange bw2 ma2" type="text" value={props.sY} name="startYear" onChange={props.change}/>
    <label htmlFor="">End Year</label>
    <input className="mw4 h2 bb b--orange bw2 ma2" type="text" value={props.eY} name="endYear" onChange={props.change}/>
    <input type="submit" value="Search" className="br bw3 b--gold br-pill bg-washed-green pa1 mw4 center"/>
  </form>
</div>

export default Search;