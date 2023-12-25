import React, { useContext, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import "../index.css";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { adddata } from "./context/ContextProvider";
import { updatedata } from "./context/ContextProvider";
import { deletedata } from "./context/ContextProvider";


const Home = () => {

    const [getuser, setuser] = useState([]);
    const { udata, setudata } = useContext(adddata);
    const { updata, setupdatedata } = useContext(updatedata);
    const {ddata, setdeletedata} = useContext(deletedata);


    console.log(getuser);
    const getData = async (e) => {
        const res = await fetch("http://localhost:8000/getdata", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },

        });
        const data = await res.json();
        console.log(data);

        if (res.status === 404 || !data) {
            alert("Fill All The Data");
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

    const Deletedata = async (id) => {

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
            getData();
        }

    }

    return (
        <>
            {
                udata ?
                    <>
                        <div class="alert alert-success alert-dismissible fade show" role="alert">
                            <strong>Add Data</strong> Data has been successfully added into the database
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    </> : ""
            }
            {
                updata ?
                    <>
                        <div class="alert alert-primary alert-dismissible fade show" role="alert">
                            <strong>Update Data!</strong> Data has been updated successfully
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    </> : ""
            }
            {
                ddata ?
                <>
                       <div class="alert alert-danger alert-dismissible fade show" role="alert">
                            <strong>Delete Data!</strong> Data has been deleted successfully
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div> 
                </>:""
            }

            <div className="mt-5">
                <div className="container">
                    <div className="add_btn mt-2 d-flex justify-content-end ">
                        <NavLink to="/register" className="btn btn-primary fs-5">Add Data</NavLink>
                    </div>
                    <div className="mt-3">
                        <table class="table">
                            <thead>
                                <tr className="table-dark">
                                    <th scope="col">Id</th>
                                    <th scope="col">Username</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Job</th>
                                    <th scope="col">Number</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    getuser.map((element, id) => {
                                        return (
                                            <>
                                                <tr>
                                                    <th scope="row">{id + 1}</th>
                                                    <td>{element.name}</td>
                                                    <td>{element.email}</td>
                                                    <td>{element.work}</td>
                                                    <td>{element.mobile}</td>
                                                    <td className="d-flex justify-content-between">
                                                        <NavLink to={`view/${element._id}`}><button type="button" class="btn btn-success"><RemoveRedEyeIcon /></button></NavLink>
                                                        <NavLink to={`edit/${element._id}`}> <button type="button" class="btn btn-warning"><CreateIcon /></button></NavLink>
                                                        <button type="button" onClick={() => Deletedata(element._id)} class="btn btn-danger"><DeleteIcon /></button>
                                                    </td>
                                                </tr>
                                            </>
                                        )

                                    })
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Home;