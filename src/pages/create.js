import { Link} from 'react-router-dom';
import { useState, useRef } from 'react';

function Create() {
  const nameEle = useRef();
  const emailEle = useRef();
let [name, setName] = useState("");
let [email, setEmail] = useState("");
const data = {name, email};

function handleSubmit(event){
  event.preventDefault(); 
}

function handleClick(){
  if(name.trim()!="" && email.trim()!=""){
    fetch("https://6532c5f0d80bd20280f607a6.mockapi.io/users", {
      method : "POST",
      headers : {
        "Content-Type" : "Application/json"
      },
      body : JSON.stringify(data)
    }).then((result)=>{
      if(result.ok){
        return result.json();
      } else{
        throw new Error("Something went wrong");
      }
    }).then((response)=>{
      alert("Data is created");
      nameEle.current.value = "";
      emailEle.current.value = "";
      name = "";
      email = "";
    })
  }
  
}
  return (
    <>
      <div className="header">
        <h1>Create</h1>
        <Link to="/read">
        <button type="button" className="btn btn-primary">
          Show Data
        </button>
        </Link>
        
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
           onChange={(event)=>setName(event.target.value)}
           ref={nameEle}
           required
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Email Address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(event)=>setEmail(event.target.value)}
            ref={emailEle}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleClick}>
          Submit
        </button>
      </form>
    </>
  );
}

export default Create;
