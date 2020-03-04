import React,{Component} from 'react';
import './App.css';
import {data} from './data';
import Singer from './Singer';
import Addcart from './Addcart';
class App extends Component{
  state = {
    singersdata:data,
    cart:[],
    timemin:[],
    timesec:[]
  }

  removeitem =(id)=>{
    let cart = [...this.state.cart];
    let updatedcart = cart.filter(item=>{return item.id !== id});
      this.setState(()=>{return{cart:updatedcart}})
 }

   click = (id) =>{
   let a = this.state.singersdata.map(data=>{
      return data.songs.map(subdata=>{
        return subdata
      })
     })
    let singer = a.map(data=>{
      return data.find(item =>{
        if(item.id === id)
        return item.song
      })
    })
    if(id === 'k1' || id === 'k2' || id === 'k3' || id === 'k4' || id === 'k5' || id === 'k6' || id === 'k7' || id === 'k8'){
    let perry = singer[0].song;
    let timin = singer[0].min;
    let timsec = singer[0].sec;
     this.setState({cart:[...this.state.cart,perry]},function(){
      console.log(this.state.cart)
    })
    this.setState({timemin:[...this.state.timemin,timin]},function(){
      console.log(this.state.timemin)
    })
    this.setState({timesec:[...this.state.timesec,timsec]},function(){
      console.log(this.state.timesec)
    })
    }
    else if(id === 'j1' || id ==='j2' || id === 'j3' || id === 'j4' || id === 'j5' || id === 'j6' || id=== 'j7' || id === 'j8'){
     let nick = singer[1].song
     let timinn = singer[1].min 
     let timsecn = singer[1].sec;
      this.setState({cart:[...this.state.cart,nick]},function(){
      console.log(this.state.cart)
    })
    this.setState({timemin:[...this.state.timemin,timinn]},function(){
      console.log(this.state.time)
    })
    this.setState({timesec:[...this.state.timesec,timsecn]},function(){
      console.log(this.state.timesec)
    })
  }else if(id === 'a1' || id === 'a2' || id ==='a3' || id === 'a4' || id === 'a5' || id === 'a6' || id === 'a7' || id === 'a8'){
   let akon = singer[2].song;
   let timina = singer[2].min;
   let timseca = singer[2].sec;
    this.setState({cart:[...this.state.cart,akon]},function(){
    console.log(this.state.cart)
  })
  this.setState({timemin:[...this.state.timemin,timina]},function(){
    console.log(this.state.time)
  })
  this.setState({timesec:[...this.state.timesec,timseca]},function(){
    console.log(this.state.timesec)
  })
  }
}

  render(){
  return (
    <React.Fragment>
    <h1>Tonina - Build Your Greatest Hits </h1>
    <div id="center">
         <Addcart props={this.state.singersdata} cartdata={this.state.cart} timemin={this.state.timemin} timesec={this.state.timesec} remove={(id)=>this.removeitem(id)}/>
         <Singer props={this.state.singersdata} click={(id)=>this.click(id)} />
    </div>
    </React.Fragment>
  );
}
}

export default App;
