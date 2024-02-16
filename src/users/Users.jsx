import React, { Fragment, useEffect, useState } from 'react';
import style from '../style.module.css'
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import axios from 'axios';
import WithAlert from '../HOC/WithAlert';
const Users = (props) => {

    const navigate = useNavigate();
    const [users, setUsers] = useState([])
    const [mainUsers, setMainUsers] = useState([])
    const { Confirm, Alert } = props;
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                setUsers(res.data)
                setMainUsers(res.data)
            })
            .catch(err => { })
        console.log("useeffect")
    }, [])
    const handleSearch = (e) => {
        setUsers(mainUsers.filter(a => a.name.includes(e.target.value)))
        console.log(users);
        console.log('main')
        console.log(mainUsers);
    }
    const handleDelete = async (itemId) => {

        // let res=await confirm(`آیا از حذف رکورد ${itemId} مطمئن هستید ؟`);

        // swal({
        //     title: "حذف رکورد!",
        //     text: `آیا از حذف رکورد ${itemId} مطمئن هستید ؟`,
        //     icon: "warning",
        //     dangerMode: true,
        //     buttons: ["خیر", "بله"],
        // }).then((willDelete) => {
        //     if (willDelete) {

        if (await Confirm(`آیا از حذف رکورد ${itemId} مطمئن هستید ؟`)) {
            // axios.delete(`https://jsonplaceholder.typicode.com/users/${itemId}`)
            axios({
                method: "DELETE",
                url: `https://jsonplaceholder.typicode.com/users/${itemId}`

            }).then(res => {
                console.log(res)
                if (res.status === 200) {
                    console.log("200")
                    let newUsers = users.filter(a => a.id !== itemId);
                    setUsers(newUsers)
                    Alert("حذف با موفقیت انجام شد", "success")
                }
            })
                .catch(err => {
                    Alert("حذف انجام نشد", "error")
                })
        } else {
            Alert("شما از حذف رکورد منصرف شدید","info")
        }

    }
    return (
        <Fragment>
            <div className={`${style.item_content} mt-5 p-4 container-fluid`}>

                <h4 className="text-center">مدیریت کاربران</h4>
                <div className="row my-2 mb-4 justify-content-between w-100 mx-0">
                    <div className="form-group col-10 col-md-6 col-lg-4">
                        <input type="text" className="form-control shadow" placeholder="جستجو" onChange={handleSearch} />
                    </div>
                    <div className="col-2 text-start px-0">
                        <Link to="/users/add" >
                            <button className="btn btn-success">
                                <i className="fas fa-plus text-light"></i>
                            </button>
                        </Link>
                    </div>
                </div>
                {
                    users.length ?
                        (

                            <table className="table bg-light shadow">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>نام</th>
                                        <th>نام کاربری</th>
                                        <th>ایمیل</th>
                                        <th>عملیات</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map((u) =>
                                        <tr key={u.id}>
                                            <td>{u.id}</td>
                                            <td>{u.name}</td>
                                            <td>{u.username}</td>
                                            <td>{u.email}</td>
                                            <td>
                                                <i className="fas fa-edit text-warning mx-2 pointer"
                                                    onClick={() => navigate(`/users/add/${u.id}`)}
                                                ></i>

                                                <i className="fas fa-trash text-danger mx-2 pointer"
                                                    onClick={() => handleDelete(u.id)}></i>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>


                        )
                        : (

                            <h4 className="text-center text-info" >لطفا صبر کنید ...</h4>
                        )
                }
            </div>
        </Fragment>

    )

}

export default WithAlert(Users);