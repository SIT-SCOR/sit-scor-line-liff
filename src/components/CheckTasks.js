import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import Logo from '../images/Logo.png'
import axios from 'axios';
import $ from 'jquery'
import { Link } from 'react-router-dom';

export default function CheckTasks(props) {

    const history = useHistory()
    const userLineID = props.location.state.userLineID
    const [studentID, setStudentID] = useState("")
    const [semester, setSemester] = useState("")
    const [subject, setSubject] = useState("")
    const [password, setPassword] = useState("")

    useEffect(() => {
        const fetchInfo = async () => {
            let info = await axios.get(`https://us-central1-sit-scor-b4c38.cloudfunctions.net/app/api/liff/student/read/${userLineID}`)
            setStudentID(info.data.id)
            let semester = await axios.get(`https://us-central1-sit-scor-b4c38.cloudfunctions.net/app/api/liff/student/semester/reads/${info.data.id}`)
            let semesters = Array(semester.data)
            semesters.forEach(semester => {
                $.each(semester, function (key, value) {
                    $('#selectSemester').append($('<option>', {
                        value: value.semester,
                        text: value.semester
                    }));
                })
            })
        }
        fetchInfo()
    }, [userLineID])

    const homepage = () => {
        history.push("/")
    }

    const onChangeSemester = async (e) => {
        const selectedSemester = e.target.value
        setSemester(selectedSemester)
        let subjectList = await axios.get(`https://us-central1-sit-scor-b4c38.cloudfunctions.net/app/api/liff/student/${studentID}/semester/${selectedSemester}/subject/reads`)
        let subjects = Array(subjectList.data)
        subjects.forEach(subject => {
            $.each(subject, function (key, value) {
                $('#selectSubject').append($('<option>', {
                    value: value.subjectid,
                    text: value.subjectid
                }));
            })
        })
    }

    const onChangeSubject = (e) => {
        const selectedSubject = e.target.value
        setSubject(selectedSubject)
    }

    return (
        <div className="App">
            <div className="container-fluid background-header">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <img src={Logo} alt="logo" width="144px" height="144px" />
                    </div>
                </div>
                <div className="row" style={{ paddingBottom: "15px", fontSize: "24px", color: "#FFFFFF" }}>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        Check Task
                    </div>
                </div>
            </div>
            <div className="Editinfo-header">
                <div className="container-fluid">
                    <div className="row p-2">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <span style={{ color: '#9E9E9E', fontWeight: 'bold' }}>
                                Please enter details to edit info
                            </span>
                        </div>
                    </div>
                    <div className="row p-3 justify-content-center">
                        <div className="col-12 col-sm-12 col-md-10 col-lg-8 col-xl-6 form-group">
                            <input disabled className="form-control" placeholder="Student ID" name="studentID" value={studentID} />
                        </div>
                    </div>
                    <div className="row p-3 justify-content-center">
                        <div className="col-6 col-sm-6 col-md-5 col-lg-4 col-xl-3">
                            <select id="selectSemester" className="selectSemester form-control" onChange={(e) => onChangeSemester(e)} width="100%">
                                <option>Semester...</option>
                            </select>
                        </div>
                        <div className="col-6 col-sm-6 col-md-5 col-lg-4 col-xl-3">
                            <select id="selectSubject" className="selectSubject form-control" onChange={(e) => onChangeSubject(e)} width="100%">
                                <option>Subject...</option>
                            </select>
                        </div>
                    </div>
                    <div className="row p-3 justify-content-center">
                        <div className="col-12 col-sm-12 col-md-10 col-lg-8 col-xl-6">
                            <input type="password" className="form-control" placeholder="Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                    </div>
                    <div className="row p-2 d-flex justify-content-center">
                        <div className="col-4 col-sm-4 col-md-3 col-lg-3 col-xl-2">
                            <Link to={{
                                pathname: '/CheckTasksResult',
                                state: {
                                    studentid: studentID,
                                    semester: semester,
                                    subjectid: subject,
                                    password: password
                                }
                            }}>
                                <button className="btn" style={{ fontWeight: 'bold', color: '#FFFFFF', backgroundColor: '#91E45E', width: '100%' }}>Check</button>
                            </Link>
                        </div>
                    </div>
                    <div className="row p-2 d-flex justify-content-center">
                        <div className="col-4 col-sm-4 col-md-3 col-lg-3 col-xl-2">
                            <button className="btn" onClick={homepage} style={{ fontWeight: 'bold', color: '#FFFFFF', backgroundColor: '#8199EF', width: '100%' }}>Home</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}