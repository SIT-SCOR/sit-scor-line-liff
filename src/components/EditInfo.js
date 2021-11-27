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
    const [errorStatus, setErrorStatus] = useState("")

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
            if (studentID.length === 11) {
                const splitEmail = email.split("@")
                if (splitEmail[1] === "mail.kmutt.ac.th") {
                    if (password.length >= 8 && repassword.length >= 8) {
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
                        } else {
                            setErrorStatus("Password and Re-password not match")
                        }
                    } else {
                        setErrorStatus("Your password or repassword must equal 8 or more than.")
                    }
                } else {
                    setErrorStatus("Your email not longer in KMUTT domain.")
                }
            } else {
                setErrorStatus("Student ID must have 11 characters")
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

    const onChangeFaculty = (e) => {
        const selectedFaculty = e.target.value
        setFaculty(selectedFaculty)
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
                    <div className="row justify-content-center">
                        <div className="col-12 col-sm-12 col-md-10 col-lg-8 col-xl-6">
                            <div className="row p-2">
                                <div className="col-12 form-group">
                                    <div className="form-floating">
                                        <input disabled className="form-control" placeholder="LINE ID" name="lineid" id="floatingLineid" value={lineID} />
                                        <label for="floatingLineid" style={{color: "grey", fontSize: "16px"}}>LINE ID</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row p-2">
                                <div className="col-4">
                                    <div className="form-floating">
                                        <select className="form-control" id="sel1" name="title" id="floatingTitle" value={title} onChange={(e) => onChangeTitle(e)} >
                                            <option value="Title...">Title...</option>
                                            <option value="Mr.">Mr.</option>
                                            <option value="Mrs.">Mrs.</option>
                                            <option value="Miss">Miss</option>
                                        </select>
                                        <label for="floatingTitle" style={{color: "grey", fontSize: "16px"}}>Title</label>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-floating">
                                        <input className="form-control" placeholder="Firstname" name="firstname" id="floatingFirstname" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
                                        <label for="floatingFirstname" style={{color: "grey", fontSize: "16px"}}>Firstname</label>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-floating">
                                        <input className="form-control" placeholder="Lastname" name="lastname" id="floatingLastname" value={lastname} onChange={(e) => setLastname(e.target.value)} />
                                        <label for="floatingLastname" style={{color: "grey", fontSize: "16px"}}>Lastname</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row p-2">
                                <div className="col-6">
                                    <div className="form-floating">
                                        <input className="form-control" placeholder="Student ID" name="studentid" id="floatingStudentID" value={studentID} onChange={(e) => setStudentID(e.target.value)} />
                                        <label for="floatingStudentID" style={{color: "grey", fontSize: "16px"}}>StudentID (ex 61130500111)</label>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-floating">
                                        <select className="form-control" id="sel1" name="faculty" id="floatingFaculty" value={faculty} onChange={(e) => onChangeFaculty(e)} >
                                            <option value="Faculty...">Faculty...</option>
                                            <option value="IT">IT</option>
                                            <option value="CS">CS</option>
                                            <option value="DSI">DSI</option>
                                        </select>
                                        <label for="floatingFaculty" style={{color: "grey", fontSize: "16px"}}>Faculty</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row p-2">
                                <div className="col-3">
                                    <div className="form-floating">
                                        <select className="form-control" id="sel1" name="year" id="floatingYear" value={year} onChange={(e) => onChangeYear(e)} >
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
                                        <label for="floatingYear" style={{color: "grey", fontSize: "16px"}}>Year</label>
                                    </div>
                                </div>
                                <div className="col-9">
                                    <div className="form-floating">
                                        <input className="form-control" placeholder="Email ex. name.xxx@mail.kmutt.ac.th" name="email" id="floatingEmail" value={email} onChange={(e) => setEmail(e.target.value)} />
                                        <label for="floatingEmail" style={{color: "grey", fontSize: "16px"}}>Email(ex xx.xx@mail.kmutt.ac.th)</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row p-2">
                                <div className="col-12 form-group">
                                    <div className="form-floating">
                                        <input type="password" className="form-control" placeholder="Password" name="password" id="floatingPassword" value={password} onChange={(e) => setPassword(e.target.value)} />
                                        <label for="floatingPassword" style={{color: "grey", fontSize: "16px"}}>Password (equal 8 or more than)</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row p-2">
                                <div className="col-12 form-group">
                                    <div className="form-floating">
                                        <input type="password" className="form-control" placeholder="Re-Password" name="repassword" id="floatingRepassword" value={repassword} onChange={(e) => setRepassword(e.target.value)} />
                                        <label for="floatingRepassword" style={{color: "grey", fontSize: "16px"}}>Re-Password</label>
                                    </div>
                                </div>
                            </div>
                            {
                                errorStatus !== "" ?
                                    <div className="row p-2">
                                        <div className="col-12 form-group">
                                            <div className="alert alert-warning" style={{fontSize: '1rem'}}>{errorStatus}</div>
                                        </div>
                                    </div>
                                    :
                                    null
                            }
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