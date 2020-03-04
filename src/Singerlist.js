import React from 'react';
import './singer.css'
const Singerlist = (props) =>{
    const {singer,desc,image} = props.props
   
return(
    <div id="list">
            

             <h3>{singer}</h3>
             <p>{desc}</p>
             <img src={image} />
             {props.props.songs.map((data)=>{
              return <li key={data.id}><i className="fas fa-plus-circle" onClick={()=>props.click(data.id)}></i> {data.song}({data.min}:{data.sec})</li>
             })}
    </div>
)
}

export default Singerlist;