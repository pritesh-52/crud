import React from 'react';
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
const Details = () => {
    return (
        <div className='container mt-3'>
            <h1>Welcome Pritesh</h1>

            <Card sx={{ maxWidth: 600 }}>
                <CardContent>
                    <div className="right">
                        <button type="button" class="btn btn-warning"><CreateIcon /></button>
                        <button type="button" class="btn btn-danger"><DeleteIcon /></button>
                    </div>
                    <div className='row'>
                        <div className="left_view  col-lg-6 col-md-6 col-12">
                            <img src={profile} style={{ width: 50 }} alt="" />
                            <h3 className='mt-3'>Name :<span >Pritesh</span></h3>
                            <h3 className='mt-3'>Age: <span >22</span></h3>
                            <p className='mt-3'><MailIcon />Email : <span >pritesh@gmail.com</span></p>
                            <p className='mt-3'><WorkIcon />Occupation : <span>Web Developer</span></p>
                        </div>
                        <div className="right_view col-lg-6 col-md-6 col-12">

                            <p className='mt-5'><PhoneAndroidIcon />Mobile: <span>+91 9033174261</span></p>
                            <p className='mt-3'><PlaceIcon />Location : <span>Amd 380006</span></p>
                            <p className='mt-3'>Description : <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic modi</span></p>
                        </div>


                    </div>


                </CardContent>
            </Card>
        </div>
    )
}

export default Details;