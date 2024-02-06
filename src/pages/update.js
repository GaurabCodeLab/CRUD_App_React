import { Link, useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect} from 'react';

function Update(){
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const navigate = useNavigate();
const {id} = useParams();

useEffect(()=>{
    fetch(`https://6532c5f0d80bd20280f607a6.mockapi.io/users/${id}`)
    .then((result)=>{
        if(result.ok){
            return result.json();
        } else{
            throw new Error("Something went Wrong");
        }
    })
    .then((response)=>{
        setName(response.name);
        setEmail(response.email);
    })
}, [id])

const data = {name, email};
    function handleSubmit(event){
       event.preventDefault();
       handleUpdate();
    }

    function handleUpdate(){
        fetch(`https://6532c5f0d80bd20280f607a6.mockapi.io/users/${id}`, {
            method : "PUT",
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify(data)
        })
        .then((result)=>{
            if(result.ok){
                return result.json();
            } else{
                throw new Error("Something Went Wrong");
            }
        })
        .then((response)=>{
            alert("Data Updated Successfully");
            navigate("/read");
        })
        .catch((error)=>console.log(error))
    }
    return (
        <>
        <div className="mx-5 mt-4 px-5 container primary">
                <h1>Update</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                    <input type="text" value={name} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(event)=>setName(event.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Email Address</label>
                    <input type="email" value={email} className="form-control" id="exampleInputPassword1" onChange={(event)=>setEmail(event.target.value)}/>
                </div>
                <button type="submit" className="btn btn-primary me-3">Update</button>
                <Link to="/read"><button type="button" className="btn btn-dark">Back</button></Link>
            </form>
            </div>
        </>
    )
}

export default Update;
