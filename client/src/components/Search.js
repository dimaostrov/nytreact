import React from 'react';

const Search = props =>
  <div className="mw8 center ba bw3 pa4 b--dotted b--black-30 br--bottom">
    <form className="flex flex-column justify-between center pa2" onSubmit={props.submit}>
      <div className="measure">
        <label htmlFor="topic" className="f6 b db mb2">Search</label>
        <input id="topic" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" value={props.topic} name="topic" onChange={props.change} />
        <label htmlFor="startYear" className="f6 b db mb2">Start Year</label>
        <input id="startYear" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" value={props.sY} name="startYear" onChange={props.change} />
        <label htmlFor="endYear" className="f6 b db mb2">End Year</label>
        <input id="endYear" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" value={props.eY} name="endYear" onChange={props.change} />
        <input type="submit" value="Search" className="br bw3 b--gold br-pill bg-washed-green pa1 mw4 center" />
      </div>
    </form>
  </div>

export default Search;