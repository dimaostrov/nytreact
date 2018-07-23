import React from 'react';

const Search = props => 
<div className="mw8 center ba p34">
  <form className="flex center" onSubmit={props.submit}>
    <label htmlFor="">Search</label>
    <input className="mw4 h2 bb b--orange bw2" type="text" value={props.topic} name="topic" onChange={props.change}/>
    <label htmlFor="">Start Year</label>
    <input className="mw4 h2 bb b--orange bw2" type="text" value={props.sY} name="startYear" onChange={props.change}/>
    <label htmlFor="">End Year</label>
    <input className="mw4 h2 bb b--orange bw2" type="text" value={props.eY} name="endYear" onChange={props.change}/>
    <input type="submit" value="Search" className="br bw3 b--gold br4 bg-washed-green pa3 mt5 mw4 center"/>
  </form>
</div>

export default Search;