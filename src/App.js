import React,{useEffect, useState} from 'react'
import EmojiData from './emoji.json';
import './App.css';
import Icon from "react-crud-icons";

import "./react-crud-icons.css"

const App = () => {
  const [search,setSearch] = useState("");
  const [display,setDisplay] = useState("");
  const [data,setData] = useState([]);

  useEffect(()=>{
      const newData = EmojiData.filter(emoji => emoji.title.toLowerCase().includes(search.toLowerCase()));
      setData(newData);
  },[search])
  return (
    <div>
     
        <div className="head">Emoji Search!!</div> 
        <input placeholder="search for emoji" id="search" type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
       <div className="display">{display}</div>
     
        <div  className="clear">
        <Icon
        name = "remove"
        theme = "none"
        size = "medium"
        onClick={() => setDisplay("")}
      />
        </div>
        <div className="emoji">
        {data.map(emoji =>
          <div  key={emoji.title}>
          <div  onClick={() => setDisplay(display+emoji.symbol)}>
            {emoji.symbol} 
          </div>
       
        </div>
        )}
      </div>
    </div>
  )
}

export default App