import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
// Stateless component
// class App extends Component{
//   constructor(props){
//     super();
//     this.state = {
//       first_name:"sunil",
//       last_name:"singh",
//       age:28
//     }
//   }
  
//   render(){
//     return(
//       <div>
//         <h1>Hello world Below are my details:</h1>
//         <ul>
//           <li>First Name:{this.state.first_name}</li>
//           <li>Last Name:{this.state.last_name}</li>
//           <li>Age:{this.state.age}</li>
//           </ul>
//         </div>
//       )
//     }
// }

// Event handler
/*class App extends Component{
  constructor(props){
    super();
    
    this.state = {
      count:1
    }
  }
  onUp = ()=>{
    this.setState({
        count:this.state.count+1
    })
  }
  onDown = ()=>{
    this.setState({
      count:this.state.count<1?0:this.state.count-1
    })
    

  }
  render(){
    console.log(this.state.count);  
    return(
      <div className="container">
      <div className="col-md-12">
        <h1>Leaning react js</h1>
        <div><h2>Hell Result will anounced here:{this.state.count}</h2></div>
        <div>
          <button onClick={this.onUp} className="btn btn-primary">Make me Up</button>
          <button onClick={this.onDown} className="btn btn-primary">Make me down</button>
        </div>
        </div>
      </div>
    )
  }
}
*/
class App extends Component{
  constructor(props){
    super()
    this.state = {
      //initialname:"Tom",      
      //initialnames:"Victor",
        name :"",
        email:"",
        password:""
    }
  }
  setFormData = (event)=>{
    this.setState({
      [event.target.name] : event.target.value
    })
}
  // changeName= ()=>{
  //   this.setState({
  //     initialname:"Krishna"
  //   })
  // }

  // writeName = (event)=>{
  //  this.setState({
  //    initialnames: event.target.value
  //  })
  // }



getFormData = (event)=>{
  event.preventDefault();
  axios.post('http://localhost:4000/api/auth/registration',this.state).
  then(res=>{
    console.log(res.data)
  }).catch(err=>{
    console.log("Something went wrong", err);
  });
}

  render(){
    return(
      <div className="col-md-12">
      <div className="row">
      <div className="col-md-6">
      <strong>Get multiple form data</strong> <br />
      <form>
      <div className="form-group">
      <label htmlFor="firstname">Name:{this.state.firstname}</label>
        <input className="form-control" type="text" name="name" defaultValue={this.state.name}  onChange={(data)=>this.setFormData(data)} />
      </div>
      <div className="form-group">
      <label htmlFor="email">Email:{this.state.email}</label>
        <input className="form-control" type="text" name="email" defaultValue={this.state.email} onChange={(data)=>this.setFormData(data)} />
        </div>
        <div className="form-group">
        <label htmlFor="password">Password:{this.state.password}</label>
        <input className="form-control" type="text" name="password" defaultValue={this.state.password} onChange={(e)=>this.setFormData(e)} />
        </div>
        <div className="form-group">
        <button className="btn btn-primary" onClick={(event)=> this.getFormData(event)} >Submit</button>
        </div>
      </form>
      <hr />
      <hr />
      </div>
      
      <div className="col-md-6">
      <div className="form-group">
      <strong>Reactjs two way data binding</strong> <br />
      <input className="form-control" type="text" name="first_name" onChange={this.writeName} /> <br />
      <span>Hello i am :{this.state.initialnames}</span>
      </div>
      <hr />
      <hr />
      </div>

      <div className="col-md-6">
      <div className="form-group">
      <strong>Change name on click button</strong> <br />
      <button className="btn btn-primary" onClick={this.changeName}>Change Name</button>
      <span>Hello i am :{this.state.initialname}</span>
      </div>
      <hr />
      <hr />
      </div>
      </div>
      </div>
    )
  }
}




// function App() {
//   return (
//     <div className="App">
//        <h1>Hello dost</h1>
//     </div>
//   );
// }

export default App;
