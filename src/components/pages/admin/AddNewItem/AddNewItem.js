import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import axios from 'axios';
import useAuth from './../../../../Hooks/useAuth';


const AddNewItem = () => {
    const {user}=useAuth();
    const [massage, setMassage] = useState('');
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        const event = new Date();
        data['addedOn'] = event.toLocaleDateString();
        data['addedBy'] = user.email;
        console.log(data)
        async function postPackageData(data) {
            await axios.post('http://localhost:5000/add-item', data).then(res => {
                setMassage(res.data);
            });
        }
        postPackageData(data);
        reset();
    };
    return (
        <div>
            <Container>
            {massage ?
                <div className="packages-section-head">
                    <h5 className="my-3">{massage}</h5>
                </div>:''}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-row ">
                        <div className="form-group col-md-6 mx-auto my-3">
                            <label htmlFor="cakeName">Cake Name   {errors.cakeName && <span className="text-danger">  This field is required</span>}</label>
                            <input type="text" className="form-control" id="cakeName" {...register("cakeName", { required: true })} placeholder="Enter cake Name.." />
                        </div>
                        <div className="form-group col-md-6 mx-auto my-3">
                            <label htmlFor="title">Title {errors.title && <span className="text-danger">  This field is required</span>} </label>
                            <input type="text" className="form-control" id="day" {...register("title", { required: true })} placeholder="Give a short title.." />
                        </div>
                        <div className="form-group col-md-6 mx-auto my-3">
                            <label htmlFor="cakeDiscription">cake Discription {errors.cakeDiscription && <span className="text-danger">  This field is required</span>} </label>
                            <textarea type="text" rows="5" className="form-control" id="cakeDiscription" {...register("cakeDiscription", { required: true })} placeholder="Write brife cake discription .." ></textarea>
                        </div>
                        <div className="row mx-auto">
                            <div className="form-group col-6 col-md-3 my-3">
                                <label htmlFor="price">Price {errors.price && <span className="text-danger">Required</span>}</label>
                                <input type="number" className="form-control" id="price" {...register("price", { required: true })} placeholder="0" />
                            </div>
                            <div className="form-group col-6 col-md-3 my-3">
                                <label htmlFor="weight">Weight in KG{errors.weight && <span className="text-danger">Required</span>} </label>
                                <input type="number" className="form-control" id="weight" {...register("weight", { required: true })} placeholder="0" />
                            </div>
                            <div className="form-group col-6 col-md-3  my-3">
                                <label htmlFor="layerNumber">layer number{errors.layerNumber && <span className="text-danger">Required</span>} </label>
                                <input type="number" className="form-control" id="layerNumber" {...register("layerNumber", { required: true })} placeholder="0" />
                            </div>
                            {/* <div className="form-group col-6 col-md-3 my-3">
                                <label htmlFor="hitImpact">Hit Impact{errors.hitImpact && <span className="text-danger">Required</span>} </label>
                                <input type="number" className="form-control" id="hitImpact" {...register("hitImpact", { required: true })} placeholder="0" />
                            </div> */}
                        </div>
                        <div className="form-group col-md-6 mx-auto my-3">
                            <label htmlFor="image">Image url {errors.image && <span className="text-danger">  This field is required</span>} </label>
                            <input type="text" className="form-control" id="image" {...register("image", { required: true })} placeholder="Example : bb.img/asdkads" />
                        </div>
                    </div>
                    <div className="d-flex">
                        <button type="submit" className="main-button mx-auto my-3" ><span>Add new Item</span></button>
                    </div>
                </form> :

            </Container>
        </div>
    );
};

export default AddNewItem;