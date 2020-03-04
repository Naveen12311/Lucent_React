import React,{Component} from 'react';

class Addcart extends Component{
     state={
       songlist:[],
       timin:[],
       timsec:[],
       Amintotal:0,
       Asectotal:0,
       Bmintotal:0,
       Bsectotal:0
     }
    
     componentDidUpdate(nextprops){
      if(this.state.songlist === this.props.cartdata){
        return false
      }else{
        this.setState({songlist:this.props.cartdata},function(){
          
        })
        this.setState({timin:this.props.timemin},function(){
          console.log(this.props.timemin)
        })
        this.setState({timsec:this.props.timesec},function(){
          console.log(this.props.timesec)
        })
      let toprice =  [...this.state.timin]
      if(toprice.length == 0){
      return null
      }else{
        let totalprice = toprice.map( function(elt){ 
          return /^\d+$/.test(elt) ? parseInt(elt) : 0; 
        })
        .reduce( function(a,b){
          return a+b
        })
        console.log(totalprice)
        if(toprice.length >7){
          this.setState({Bmintotal:totalprice},function(){
            console.log(this.state.Bmintotal)
          })
        }else{
        this.setState({Amintotal:totalprice},function(){
          console.log(this.state.Amintotal)
        })
      }
      }
      let topricesec =  [...this.state.timsec]
      if(topricesec.length == 0){
        return null
      }else{
        let totalpricesec = topricesec.map( function(elt){
          return /^\d+$/.test(elt) ? parseInt(elt) : 0; 
        })
        .reduce( function(a,b){ 
          return a+b
        })
        console.log(totalpricesec)
        if(topricesec.length >7){
          this.setState({Bmintotal:totalpricesec},function(){
            console.log(this.state.Bmintotal)
          })
        }else{
        this.setState({Asectotal:totalpricesec},function(){
          console.log(this.state.Asectotal)
        })
      }
    }
      return true
      
    }
     }
       ids = ()=>{
      let dats = this.props.map(data=>{
        return data
      })
      console.log(dats)
      }
    render(){
        return(
        <React.Fragment>
        <div id="cart">
         <div id="title">ADD TO CART</div>
          <div id="sideA">
          Side A ( {this.state.Amintotal} : {this.state.Asectotal} )<br />
          22 minutes avalible
          </div>
          <div className="songlist">
          1 {this.state.songlist[0]} {this.state.timin[0]} {this.state.timsec[0]} <i class="fas fa-times" onClick={()=>this.props.remove(0)}></i><hr />
          2 {this.state.songlist[1]}  {this.state.timin[1]} {this.state.timsec[1]} <i class="fas fa-times" onClick={()=>this.props.remove(this.ids)}></i><hr />
          3 {this.state.songlist[2]}  {this.state.timin[2]} {this.state.timsec[2]} <i class="fas fa-times" onClick={()=>this.props.remove(this.ids)}></i><hr />
          4 {this.state.songlist[3]}  {this.state.timin[3]} {this.state.timsec[3]} <i class="fas fa-times" onClick={()=>this.props.remove(this.ids)}></i><hr />
          5 {this.state.songlist[4]}  {this.state.timin[4]} {this.state.timsec[4]} <i class="fas fa-times" onClick={()=>this.props.remove(this.ids)}></i><hr />
          6 {this.state.songlist[5]}  {this.state.timin[5]} {this.state.timsec[5]} <i class="fas fa-times" onClick={()=>this.props.remove(this.ids)}></i><hr />
          7 {this.state.songlist[6]}  {this.state.timin[6]} {this.state.timsec[6]} <i class="fas fa-times" onClick={()=>this.props.remove(this.ids)}></i><hr />
          8 {this.state.songlist[7]}  {this.state.timin[7]} {this.state.timsec[7]} <i class="fas fa-times" onClick={()=>this.props.remove(this.ids)}></i><hr />
          </div>
          <div id="sideB">
          Side B ( {this.state.Bmintotal} : {this.state.Bsectotal} )<br />
          22 minutes avalible
          </div>
          <div className="songlist">
          1 {this.state.songlist[8]}  {this.state.timin[8]} {this.state.timsec[8]} <i class="fas fa-times" onClick={()=>this.props.remove(this.ids)}></i><hr />
          2 {this.state.songlist[9]}  {this.state.timin[9]} {this.state.timsec[9]} <i class="fas fa-times" onClick={()=>this.props.remove(this.ids)}></i><hr />
          3 {this.state.songlist[10]} {this.state.timin[10]} {this.state.timsec[10]} <i class="fas fa-times" onClick={()=>this.props.remove(this.ids)}></i><hr />
          4 {this.state.songlist[11]}  {this.state.timin[11]} {this.state.timsec[11]} <i class="fas fa-times" onClick={()=>this.props.remove(this.ids)}></i><hr />
          5 {this.state.songlist[12]}  {this.state.timin[12]} {this.state.timsec[12]} <i class="fas fa-times" onClick={()=>this.props.remove(this.ids)}></i><hr />
          6 {this.state.songlist[13]}  {this.state.timin[13]} {this.state.timsec[13]} <i class="fas fa-times" onClick={()=>this.props.remove(this.ids)}></i><hr />
          7 {this.state.songlist[14]}  {this.state.timin[14]} {this.state.timsec[14]} <i class="fas fa-times" onClick={()=>this.props.remove(this.ids)}></i><hr />
          8 {this.state.songlist[15]}  {this.state.timin[15]} {this.state.timsec[15]} <i class="fas fa-times" onClick={()=>this.props.remove(this.ids)}></i><hr />
          </div>
        </div></React.Fragment>)
    }

}
export default Addcart;