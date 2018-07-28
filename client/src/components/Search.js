import React from 'react';
import { Input } from 'semantic-ui-react';

const Search = props => 
<div className="mw8 center ba bw3 pa4 b--dotted b--black-30 br--bottom">
  <form className="flex flex-column justify-between center pa2" onSubmit={props.submit}>
    <Input icon='search' label="Search..." type="text" value={props.topic} name="topic" onChange={props.change}/>
    <Input type="text" label="Start Year" value={props.sY} name="startYear" onChange={props.change}/>
    <Input type="text" label="End Year" value={props.eY} name="endYear" onChange={props.change}/>
    <Input type="submit" value="Search" className="br bw3 b--gold br-pill bg-washed-green pa1 mw4 center"/>
  </form>
</div>

export default Search;