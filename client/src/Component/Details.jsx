import React, { useContext } from 'react';
import { useState,useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import profile from "../profile.png";
import MailIcon from '@mui/icons-material/Mail';
import WorkIcon from '@mui/icons-material/Work';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import PlaceIcon from '@mui/icons-material/Place';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import "../index.css";
import { useParams } from 'react-router-dom/cjs/react-router-dom';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import {useHistory} from "react-router-dom";
import { deletedata } from './context/ContextProvider';
import Navbar from './Navbar';
const Details = () => {

    const {id}=useParams("");
    console.log(id);
    const histroy=useHistory();

    const [getuser, setuser] = useState([]);
    const {ddata, setdeletedata} = useContext(deletedata);
    
    console.log(getuser);

    const getData = async (e) => {
        const res = await fetch(`http://localhost:8000/getuser/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },

        });
        const data = await res.json();
        console.log(data);

        if (res.status === 404 || !data) {
            console.log("error");
        }
        else {
            setuser(data);
            console.log("data added");
        }
    }

    useEffect(() => {
        getData();
    }, []);

    const Deletedata=async()=>{
        const res2 = await fetch(`http://localhost:8000/delete/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data2 = await res2.json();
        console.log(data2);

        if (res2.status === 404 || !data2) {
            console.log("error");
        }
        else {
            setdeletedata(data2);
            histroy.push("/home");
        }


    }

    return (
        <>
        <Navbar></Navbar>
        <div className='container mt-3'>
            <h1>Welcome Pritesh</h1>

            <Card sx={{ maxWidth: 600 }}>
                <CardContent>
                    <div className="right">
                       <NavLink to={`/edit/${id}`}><button class="btn btn-warning"><CreateIcon /></button></NavLink>  
                       &nbsp;&nbsp;&nbsp;
                        <button type="button" class="btn btn-danger" onClick={()=>Deletedata(getuser._id)}><DeleteIcon /></button>
                    </div>
                    <div className='row'>
                        <div className="left_view  col-lg-6 col-md-6 col-12">
                            <img src={profile} style={{ width: 50 }} alt="" />
                            <h3 className='mt-3'>Name :<span >{getuser.name}</span></h3>
                            <h3 className='mt-3'>Age: <span >{getuser.age}</span></h3>
                            <p className='mt-3'><MailIcon />Email : <span >{getuser.email}</span></p>
                            <p className='mt-3'><WorkIcon />Occupation : <span>{getuser.work}</span></p>
                        </div>
                        <div className="right_view col-lg-6 col-md-6 col-12">

                            <p className='mt-5'><PhoneAndroidIcon />Mobile: <span>{getuser.mobile}</span></p>
                            <p className='mt-3'><PlaceIcon />Location : <span>{getuser.address}</span></p>
                            <p className='mt-3'>Description : <span>{getuser.desc}</span></p>
                        </div>


                    </div>


                </CardContent>
            </Card>
        </div>
    </>
    )
}

export default Details;