import React, { useState } from 'react'
import { useHistory } from 'react-router'
import Logo from '../images/Logo.png'
import axios from 'axios';

export default function Register(props) {

    const history = useHistory()
    const userLineID = props.location.state.userLineID
    const [title, setTitle] = useState("")
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [studentID, setStudentID] = useState("")
    const [faculty, setFaculty] = useState("")
    const [year, setYear] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [repassword, setRepassword] = useState("")

    const homepage = () => {
        history.push("/")
    }

    const onChangeTitle = (e) => {
        const selectedTitle = e.target.value
        setTitle(selectedTitle)
    }

    const registerInfo = async (e) => {
        e.preventDefault()

        let checkByID = await axios.get(`https://us-central1-sit-scor-b4c38.cloudfunctions.net/app/api/liff/register/check/${studentID}`)
        if (password === repassword) {
            if (checkByID.data.alreadyHaved === true) {
                let update = {
                    title: title,
                    firstname: firstname,
                    lastname: lastname,
                    faculty: faculty,
                    year: year,
                    email: email.toLowerCase(),
                    line_id: userLineID,
                    password: password
                }
                axios.put(`https://us-central1-sit-scor-b4c38.cloudfunctions.net/app/api/liff/student/update/${studentID}`, update)
                    .then(() => {
                        axios.post(`https://us-central1-sit-scor-b4c38.cloudfunctions.net/app/api/liff/genandsend/${studentID}`)
                        history.push('/')
                    })
            } else {
                let create = {
                    email: email.toLowerCase(),
                    faculty: faculty,
                    firstname: firstname,
                    lastname: lastname,
                    line_id: userLineID,
                    password: password,
                    title: title,
                    year: year
                }
                axios.post(`https://us-central1-sit-scor-b4c38.cloudfunctions.net/app/api/liff/student/create/${studentID}`, create)
                    .then(() => {
                        axios.post(`https://us-central1-sit-scor-b4c38.cloudfunctions.net/app/api/liff/genandsend/${studentID}`)
                        history.push('/')
                    })
            }
        }
    }

    return (
        <div className="App">
            <div className="container background-header">
                <div className="row">
                    <div className="col-12 col-sm-12">
                        <img src={Logo} alt="logo" width="144px" height="144px" />
                    </div>
                </div>
                <div className="row" style={{ paddingBottom: "15px", fontSize: "24px", color: "#FFFFFF" }}>
                    <div className="col-12 col-sm-12">
                        Register
                    </div>
                </div>
            </div>
            <div className="Editinfo-header">
                <div className="container-fluid">
                    <div className="row p-2">
                        <div className="col-12">
                            <span style={{ color: '#9E9E9E', fontWeight: 'bold' }}>
                                Please enter details to register
                            </span>
                        </div>
                    </div>
                    <div className="row p-2">
                        <div className="col-12 form-group">
                            <input disabled className="form-control" placeholder="LINE ID" name="lineid" value={userLineID} />
                        </div>
                    </div>
                    <div className="row p-2">
                        <div className="col-4">
                            <select className="form-control" id="sel1" defaultValue={title} onChange={(e) => onChangeTitle(e)} >
                                <option value="Title...">Select...</option>
                                <option value="Mr.">Mr.</option>
                                <option value="Mrs.">Mrs.</option>
                                <option value="Miss">Miss</option>
                            </select>
                        </div>
                        <div className="col-4">
                            <input className="form-control" placeholder="Firstname" name="firstname" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
                        </div>
                        <div className="col-4">
                            <input className="form-control" placeholder="Lastname" name="lastname" value={lastname} onChange={(e) => setLastname(e.target.value)} />
                        </div>
                    </div>
                    <div className="row p-2">
                        <div className="col-6">
                            <input className="form-control" placeholder="Student ID" name="studentid" value={studentID} onChange={(e) => setStudentID(e.target.value)} />
                        </div>
                        <div className="col-6">
                            <input className="form-control" placeholder="Faculty" name="faculty" value={faculty} onChange={(e) => setFaculty(e.target.value)} />
                        </div>
                    </div>
                    <div className="row p-2">
                        <div className="col-3">
                            <input className="form-control" placeholder="Year" name="year" value={year} onChange={(e) => setYear(e.target.value)} />
                        </div>
                        <div className="col-9">
                            <input className="form-control" placeholder="Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                    </div>
                    <div className="row p-2">
                        <div className="col-12 form-group">
                            <input type="password" className="form-control" placeholder="Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                    </div>
                    <div className="row p-2">
                        <div className="col-12 form-group">
                            <input type="password" className="form-control" placeholder="Re-Password" name="repassword" value={repassword} onChange={(e) => setRepassword(e.target.value)} />
                        </div>
                    </div>
                    <div className="row p-2 d-flex justify-content-center">
                        <div className="col-4">
                            <button className="btn" onClick={(e) => registerInfo(e)} style={{ fontWeight: 'bold', color: '#FFFFFF', backgroundColor: '#91E45E', width: '100%' }}>Register</button>
                        </div>
                    </div>
                    <div className="row p-2 d-flex justify-content-center">
                        <div className="col-4">
                            <button className="btn" onClick={homepage} style={{ fontWeight: 'bold', color: '#FFFFFF', backgroundColor: '#8199EF', width: '100%' }}>Home</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}