import './App.css';
import React, { Component } from 'react'
// import Fun from './Fun';

  class App extends Component {
    
    constructor(props){
      super( props )
      this.state = { show:true } ; 
      this.toggelDiv=this.toggelDiv.bind(this );
      this.state = {currentCount:0}


    }
    timer() {
    this.setState({
      currentCount: this.state.currentCount + 1
    })
    if(this.state.currentCount > 1100) { 
      clearInterval(this.intervalId);
    }
  }
  componentDidMount() {
    this.intervalId = setInterval(this.timer.bind(this), 1000);
  }
  componentWillUnmount(){
    clearInterval(this.intervalId);
    console.log(this.state.currentCount);
  }
  // render() {
  //   return(
  //     <div>{this.state.currentCount}</div>
  //   );
  // }
  

    toggelDiv = () =>{
      const { show } = this.state;
      this.setState({ show :!show})
    }
    person = {
      fullName: "Hazem Farhati",
      bio: "make ur own bio",
      imgSrc: "/images/imgProfile.jpg" , 
      profession: "58% web developer" 
      };
  render() {
    return (

      <div className="cover">
        {/* <Fun/> */}
        <h1>{this.state.currentCount}</h1>
          {this.state.show && <Box /> }
        <button className='btn' onClick={this.toggelDiv}>Show</button>
        
    </div>
        )
  }
}
class Box extends Component{
  person = {
    fullName: "Hazem Farhati",
    bio: "Gabes,Bouchemma💜💜Club Africain⚽💗Radi🎧💙League Of Legends💻💞",
    imgSrc: <img  className='imgSrc' src="images/imgProfile.jpg" alt="aaaa" /> , 
    profession: "58% web developer" 
    };
  render(){
    return (
        <div >
      <div className='fullName'>    {this.person.fullName}  </div>
         
      <div className='bio'>  Bio :      
      <br></br>{this.person.bio}  </div>
      <div className='profession'>  profession : <br />{this.person.profession}  </div>
      <div >  {this.person.imgSrc}  </div>

        </div>


    );
  }
}


// class Clock extends Component {
//   constructor(props){
//     super(props);
//     this.state = {currentCount: 10}
//   }
//   timer() {
//     this.setState({
//       currentCount: this.state.currentCount - 1
//     })
//     if(this.state.currentCount < 1) { 
//       clearInterval(this.intervalId);
//     }
//   }
//   componentDidMount() {
//     this.intervalId = setInterval(this.timer.bind(this), 1000);
//   }
//   componentWillUnmount(){
//     clearInterval(this.intervalId);
//   }
//   render() {
//     return(
//       <div>{this.state.currentCount}</div>
//     );
//   }
// }




export default App;
