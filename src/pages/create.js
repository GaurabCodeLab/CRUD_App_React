import { Link} from 'react-router-dom';
import { useState} from 'react';

function Create() {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const data = {name, email};
    function handleSubmit(event){
        event.preventDefault();
        handleClick();
    }
    function handleClick(){
        if(name.trim() !== "" && email.trim() !== ""){
            fetch("https://6532c5f0d80bd20280f607a6.mockapi.io/users", {
                method : "POST",
                headers : {
                    "Content-type" : "application/json",
                },
                body : JSON.stringify(data)
            })
            .then((result)=>{
                if(result.ok){
                    return result.json();
                } else{
                    throw new Error("something went wrong");
                }
            })
            .then((response)=>{
                alert("data is created");
                setName("");
                setEmail("");
            })
            .catch((error)=>{
                console.log(error);
            })
        }
        
    }
    return (
        <>
        <div className="container mx-5 px-5 mt-4 primary">
            <div className="d-flex justify-content-between">
                <h1>Create</h1>
                <Link to="/read"><button type="button" className="btn btn-primary">Show Data</button></Link>
                
            </div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                    <input type="text" value={name} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(event)=>setName(event.target.value)} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Email Address</label>
                    <input type="email" value={email} className="form-control" id="exampleInputPassword1" onChange={(event)=>setEmail(event.target.value)} required />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            </div>
        </>
    )
}

export default Create;
