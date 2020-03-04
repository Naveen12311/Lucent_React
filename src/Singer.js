import React from 'react';
import Singerlist from './Singerlist';
const Singer = (props) =>{
    let data = props.props.map((data,index)=>{
       
      return <Singerlist props={data} key={index} click={(id)=>props.click(id)}/>
    })
    return(
    <React.Fragment>
        
   {data}
    </React.Fragment>)
 
}

export default Singer;