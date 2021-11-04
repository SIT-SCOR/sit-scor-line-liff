import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import Logo from '../images/Logo.png'
import axios from 'axios';

export default function EditInfo(props) {

    const history = useHistory()
    const userLineID = props.location.state.userLineID
    const [lineID, setLineID] = useState("")
    const [title, setTitle] = useState("")
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [studentID, setStudentID] = useState("")
    const [faculty, setFaculty] = useState("")
    const [year, setYear] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [repassword, setRepassword] = useState("")

    useEffect(() => {
        const fetchInfo = async () => {
            let info = await axios.get(`https://us-central1-sit-scor-b4c38.cloudfunctions.net/app/api/liff/student/read/${userLineID}`)
            setLineID(info.data.line_id)
            setTitle(info.data.title)
            setFirstname(info.data.firstname)
            setLastname(info.data.lastname)
            setStudentID(info.data.id)
            setFaculty(info.data.faculty)
            setYear(info.data.year)
            setEmail(info.data.email)
            setPassword(info.data.password)
        }
        fetchInfo()
    }, [userLineID])

    const homepage = () => {
        history.push("/")
    }

    const updateInfo = (e) => {
        e.preventDefault()

        if (lineID !== "" && title !== "" && firstname !== "" && lastname !== "" && studentID !== "" && faculty !== "" && year !== "" && email !== "" && password !== "" && repassword !== "") {
            if (password !== repassword) {
                window.alert("Password and Re-password not match. Please enter password & re-password again !")
            }
            if (password === repassword) {
                if (userLineID === lineID) {
                    let studentUpdate = {
                        title: title,
                        firstname: firstname,
                        lastname: lastname,
                        faculty: faculty,
                        year: year,
                        email: email.toLowerCase(),
                        line_id: lineID,
                        password: password
                    }
                    axios.put(`https://us-central1-sit-scor-b4c38.cloudfunctions.net/app/api/liff/student/update/${studentID}`, studentUpdate)
                        .then(() => {
                            history.push('/ConfirmEdit')
                        })
                        .error(() => {
                            window.alert("Error occur in server. Please contact admin.")
                        })
                } else {
                    let studentUpdate = {
                        title: title,
                        firstname: firstname,
                        lastname: lastname,
                        faculty: faculty,
                        year: year,
                        email: email.toLowerCase(),
                        line_id: userLineID,
                        password: password
                    }
                    axios.put(`https://us-central1-sit-scor-b4c38.cloudfunctions.net/app/api/liff/student/update/${studentID}`, studentUpdate)
                        .then(() => {
                            history.push('/ConfirmEdit')
                        })
                        .error(() => {
                            window.alert("Error occur in server. Please contact admin.")
                        })
                }
            }
        } else {
            window.alert("Please enter every input")
        }
    }

    const onChangeTitle = (e) => {
        const selectedTitle = e.target.value
        setTitle(selectedTitle)
    }

    const onChangeYear = (e) => {
        const selectedYear = e.target.value
        setYear(selectedYear)
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
                        Edit Info
                    </div>
                </div>
            </div>
            <div className="Editinfo-header">
                <div className="container-fluid">
                    <div className="row p-2">
                        <div className="col-12">
                            <span style={{ color: '#9E9E9E', fontWeight: 'bold' }}>
                                Please enter details to edit info
                            </span>
                        </div>
                    </div>
                    <div className="row p-2">
                        <div className="col-12 form-group">
                            <input disabled className="form-control" placeholder="LINE ID" name="lineid" value={lineID} />
                        </div>
                    </div>
                    <div className="row p-2">
                        <div className="col-4">
                            <select className="form-control" id="sel1" defaultValue={title} onChange={(e) => onChangeTitle(e)} >
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
                            <input className="form-control" placeholder="Faculty" name="faculty" value={faculty} onChange={(e) => setFaculty(e.target.value)} />
                        </div>
                    </div>
                    <div className="row p-2">
                        <div className="col-3">
                            <select className="form-control" id="sel1" defaultValue={year} onChange={(e) => onChangeYear(e)} >
                                <option value="Year...">Year...</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
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
                        <div className="col-4 col-sm-4 col-md-3 col-lg-3 col-xl-3">
                            <button className="btn" onClick={(e) => updateInfo(e)} style={{ fontWeight: 'bold', color: '#FFFFFF', backgroundColor: '#91E45E', width: '100%' }}>Update</button>
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