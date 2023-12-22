import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import "../index.css";

const Home = () => {
    return (
        <>
            <div className="mt-5">
                <div className="container">
                    <div className="add_btn mt-2 d-flex justify-content-end ">
                        <button type="button" className="btn btn-primary fs-5">Add Data</button>
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
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>9033174261</td>
                                    <td className="d-flex justify-content-between">
                                        <button type="button" class="btn btn-success"><RemoveRedEyeIcon/></button>
                                        <button type="button" class="btn btn-warning"><CreateIcon/></button>
                                        <button type="button" class="btn btn-danger"><DeleteIcon/></button>
                                    </td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Home;