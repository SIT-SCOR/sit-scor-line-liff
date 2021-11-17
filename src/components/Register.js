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
    const [errorStatus, setErrorStatus] = useState("")

    const homepage = () => {
        history.push("/")
    }

    const onChangeTitle = (e) => {
        const selectedTitle = e.target.value
        setTitle(selectedTitle)
    }

    const validationEmail = (e) => {
        const email = String(e.target.value)

        const splitEmail = email.split("@")

        if (splitEmail[1] === "mail.kmutt.ac.th") {
            console.log("Split email: " + splitEmail[0])
            console.log("Split domain " + splitEmail[1])
            setEmail(e.target.value)
            setErrorStatus("Your email valid.")
        } else {
            setErrorStatus("Your email not longer in kmutt domain.")
        }
    }

    const onChangeYear = (e) => {
        const selectedYear = e.target.value
        setYear(selectedYear)
    }

    const onChangeFaculty = (e) => {
        const selectedFaculty = e.target.value
        setFaculty(selectedFaculty)
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
            <div className="container-fluid background-header">
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
                    <div className="row justify-content-center">
                        <div className="col-12 col-sm-12 col-md-10 col-lg-8 col-xl-6">
                            <div className="row p-2">
                                <div className="col-12 form-group">
                                    <input disabled className="form-control" placeholder="LINE ID" name="lineid" value={userLineID} />
                                </div>
                            </div>
                            <div className="row p-2">
                                <div className="col-4">
                                    <select className="form-control" id="sel1" name="title" value={title} onChange={(e) => onChangeTitle(e)} >
                                        <option value="Title...">Title...</option>
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
                                    <select className="form-control" id="sel1" name="faculty" value={faculty} onChange={(e) => onChangeFaculty(e)} >
                                        <option value="Faculty...">Year...</option>
                                        <option value="IT">IT</option>
                                        <option value="CS">CS</option>
                                        <option value="DSI">DSI</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row p-2">
                                <div className="col-3">
                                    <select className="form-control" id="sel1" name="year" value={year} onChange={(e) => onChangeYear(e)} >
                                        <option value="Year...">Year...</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                    </select>
                                </div>
                                <div className="col-9">
                                    <input className="form-control" placeholder="Email" name="email" value={email} onChange={(e) => validationEmail(e)} />
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
                            <div className="row p-2">
                                <div className="col-12 form-group">
                                    {errorStatus}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row p-2 d-flex justify-content-center">
                        <div className="col-4 col-sm-4 col-md-3 col-lg-3 col-xl-3">
                            <button className="btn" onClick={(e) => registerInfo(e)} style={{ fontWeight: 'bold', color: '#FFFFFF', backgroundColor: '#91E45E', width: '100%' }}>Register</button>
                        </div>
                    </div>
                    <div className="row p-2 d-flex justify-content-center">
                        <div className="col-4 col-sm-4 col-md-3 col-lg-3 col-xl-3">
                            <button className="btn" onClick={homepage} style={{ fontWeight: 'bold', color: '#FFFFFF', backgroundColor: '#8199EF', width: '100%' }}>Home</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}