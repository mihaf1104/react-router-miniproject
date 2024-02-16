import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router';
import style from '../style.module.css'
import { Link } from 'react-router-dom';
import {getUserByIDService, setUserService,updateUserService} from '../services/UserService';
import { jpAxios } from '../JpAxios';

const AddUser = () => {

    const { userId } = useParams();
    const [data, setData] = useState({
        name: "",
        username: "",
        email: "",
        address: {
            street: "",
            city: "",
            suite: "",
            zipcode: ""
        }
    })
    const navigate = useNavigate();
 
    const handleAddUser = (e) => {
        e.preventDefault();
        if (!userId) {
            setUserService(data);
        }
        else {
            updateUserService(data,userId);
        }
    }
    const getUserById=async()=>{
       const res=await  getUserByIDService(userId);
       if (res){
        setData({
            name: res.data.name,
            username: res.data.username,
            email: res.data.email,
            address: {
                street: res.data.address.street,
                city: res.data.address.city,
                suite: res.data.address.suite,
                zipcode: res.data.address.zipcode
            }
        })
       }
    }

    useEffect(() => {
       getUserById();

        // jpAxios.get(`/users/${userId}`)
        //     .then(res => {
        //         console.log(res.data)
        //         setData({
        //             name: res.data.name,
        //             username: res.data.username,
        //             email: res.data.email,
        //             address: {
        //                 street: res.data.address.street,
        //                 city: res.data.address.city,
        //                 suite: res.data.address.suite,
        //                 zipcode: res.data.address.zipcode
        //             }
        //         })
        //     })
        //     .catch(err => console.log(`error${err}`))
    })

    return (
        <div className={`${style.item_content} mt-5 p-4 container-fluid container`}>
            <h4 className="text-center text-primary">
                {userId ? "ویرایش کاربر" : "افزودن کاربر"}
            </h4>
            <div className="row justify-content-center mt-5 ">
                <form onSubmit={handleAddUser} className="col-12 col-md-6 bg-light rounded shadow-lg p-3">
                    <div className="mb-3">
                        <label className="form-label">نام و نام خانوادگی</label>
                        <input type="text" className="form-control" value={data.name} onChange={(c) => setData({ ...data, name: c.target.value })} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">نام کاربری</label>
                        <input type="text" className="form-control" value={data.username} onChange={(c) => setData({ ...data, username: c.target.value })} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">ایمیل</label>
                        <input type="email" className="form-control" value={data.email} onChange={(c) => setData({ ...data, email: c.target.value })} />
                    </div>
                    <div className="mb-3 row">
                        <label className="form-label">آدرس</label>
                        <div className="col-6 my-1">
                            <input type="text" className="form-control" placeholder="شهر" value={data.address.city} onChange={(c) => setData({ ...data, address: { ...data.address, city: c.target.value } })} />
                        </div>
                        <div className="col-6 my-1">
                            <input type="text" className="form-control" placeholder="خیابان" value={data.address.street} onChange={(c) => setData({ ...data, address: { ...data.address, street: c.target.value } })} />
                        </div>
                        <div className="col-6 my-1">
                            <input type="text" className="form-control" placeholder="ادامه آدرس" value={data.address.suite} onChange={(c) => setData({ ...data, address: { ...data.address, suite: c.target.value } })} />
                        </div>
                        <div className="col-6 my-1">
                            <input type="text" className="form-control" placeholder="کد پستی" value={data.address.zipcode} onChange={(c) => setData({ ...data, address: { ...data.address, zipcode: c.target.value } })} />
                        </div>
                    </div>

                    <div className="col-12 text-start">
                        <Link to="/users">
                            <button type="button" className="btn btn-danger ms-2"
                                onClick={() => navigate(-1)}>بازگشت</button>
                        </Link>
                        <button type="submit" className="btn btn-primary" >
                            {userId ? "ویرایش " : "افزودن "}
                        </button>
                    </div>
                </form>
            </div>

            {<Outlet />}


        </div>
    )
}

export default AddUser;