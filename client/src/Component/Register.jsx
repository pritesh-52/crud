import React, { useContext, useState } from 'react'
import { NavLink, Link } from "react-router-dom";
import {useHistory} from "react-router-dom";
import { adddata } from './context/ContextProvider';
import Navbar from './Navbar';


const Register = () => {
    const { udata, setudata } = useContext(adddata);
    
    const [inpval, setinpval] = useState({
        name: "",
        email: "",
        age: "",
        mobile: "",
        work: "",
        address: "",
        desc: "",
    })
    const histroy=useHistory();

    const setdata = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setinpval((preval) => {
            return {
                ...preval,
                [name]: value
            }
        })
    }
    const addData = async (e) => {
        e.preventDefault();
        const { name, email, age, mobile, work, address, desc } = inpval;
        const res = await fetch("https://mernappbackend-y4vu.onrender.com/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, age, mobile, work, address, desc
            })
        });
        const data = await res.json();
        console.log(data);

        if (res.status === 404 || !data) {
            alert("Fill All The Data");
            console.log("error");
        }
        else {
            setudata(data);
            console.log("data added");
            histroy.push("/home");
        }
    }
    return (
        <>
        <Navbar></Navbar>
        <div className='container'>
            <div className="mt-3 fs-5">
                <NavLink exact to="/" >Home</NavLink>
            </div>
            <div className='mt-3'>
                <form>
                    <div className='row'>
                        <div class="mb-3 col-lg-6 col-md-6 col-12">
                            <label for="exampleInputEmail1" class="form-label">Name</label>
                            <input type="text" name="name" value={inpval.name} class="form-control" id="exampleInputEmail1" onChange={setdata} />
                        </div>
                        <div class="mb-3 col-lg-6 col-md-6 col-12">
                            <label for="exampleInputPassword1" class="form-label">Email</label>
                            <input type="email" name="email" value={inpval.email} class="form-control" id="exampleInputPassword1" onChange={setdata} />
                        </div>
                        <div class="mb-3 col-lg-6 col-md-6 col-12">
                            <label for="exampleInputPassword1" class="form-label">Age</label>
                            <input type="text" name="age" value={inpval.age} class="form-control" id="exampleInputPassword1" onChange={setdata} />
                        </div>
                        <div class="mb-3 col-lg-6 col-md-6 col-12">
                            <label for="exampleInputPassword1" class="form-label">Mobile</label>
                            <input type="text" name="mobile" value={inpval.mobile} class="form-control" id="exampleInputPassword1" onChange={setdata} />
                        </div>
                        <div class="mb-3 col-lg-6 col-md-6 col-12 ">
                            <label for="exampleInputPassword1" class="form-label">Work</label>
                            <input type="text" name="work" value={inpval.work} class="form-control" id="exampleInputPassword1" onChange={setdata} />
                        </div>
                        <div class="mb-3 col-lg-6 col-md-6 col-12 ">
                            <label for="exampleInputPassword1" class="form-label">Address</label>
                            <input type="text" name="address" value={inpval.address} class="form-control" id="exampleInputPassword1" onChange={setdata} />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Description</label>
                            <textarea type="" name="desc" value={inpval.desc} class="form-control" id="exampleInputPassword1" rows="5" cols="5" onChange={setdata} />
                        </div>

                        <button type="submit" onClick={addData} class="btn btn-primary ">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </>


    )
}

export default Register;