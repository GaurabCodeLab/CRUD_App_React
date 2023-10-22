import {useState, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {useParams} from 'react-router-dom';

function Update(){
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const {id} = useParams();
  const navigate = useNavigate();
  const data = {name, email};
  useEffect(()=>{
      fetch(`https://6532c5f0d80bd20280f607a6.mockapi.io/users/${id}`)
      .then((result)=>{
        if(result.ok){
          return result.json();
        } else{
          throw new Error("Something went wrong");
        }
      }).then((response)=>{
        setName(response.name);
        setEmail(response.email);
      }).catch((error)=>{
        console.log(error);
      }) 
  },[])
  function handleSubmit(event){
    event.preventDefault();  
  }

  function handleClick(){
    if(name.trim()!="" && email.trim()!=""){
      fetch(`https://6532c5f0d80bd20280f607a6.mockapi.io/users/${id}`, {
        method : "PUT",
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify(data)
      }).then((result)=>{
        if(result.ok){
          return result.json()
        } else{
          throw new Error("Something went wrong");
        }
      }).then((response)=>{
        alert("Details updated successfully");
        navigate("/read");
      }).catch((error)=>{
        console.log(error);
      })
    }
    
  }
  
    return(
        <>
        <h1 className="my-3">Update</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={name}
            onChange={(event)=>setName(event.target.value)}
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
            value={email}
            onChange={(event)=>setEmail(event.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleClick}>
          Update
        </button>
        <Link to="/read">
        <button type="button" class="btn btn-dark mx-3">Back</button>
        </Link>
      </form>
        </>
    )
}

export default Update;