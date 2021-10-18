import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import Logo from '../images/Logo.png'
import axios from 'axios';
import $ from 'jquery'

export default function CheckScore(props) {

    const history = useHistory()
    const userLineID = props.location.state.userLineID
    const [studentID, setStudentID] = useState("")
    const [semester, setSemester] = useState("")
    const [subject, setSubject] = useState("")
    const [password, setPassword] = useState("")
    const [fetchPassword, setFetchPassword] = useState("")

    useEffect(() => {
        const fetchInfo = async () => {
            let info = await axios.get(`https://us-central1-sit-scor-b4c38.cloudfunctions.net/app/api/liff/student/read/${userLineID}`)
            setStudentID(info.data.id)
            setFetchPassword(info.data.password)
            let semester = await axios.get(`https://us-central1-sit-scor-b4c38.cloudfunctions.net/app/api/liff/student/semester/reads/${info.data.id}`)
            let semesters = Array(semester.data)
            semesters.forEach(semester => {
                $.each(semester, function (key, value) {
                    $('#selectSemester').append($('<option>', {
                        value: value,
                        text: value
                    }));
                })
            })
        }
        fetchInfo()
    }, [userLineID])

    const checkScore = (e) => {
        e.preventDefault()


    }

    const homepage = () => {
        history.push("/")
    }

    const onChangeSemester = (e) => {
        const selectedSemester = e.target.value
        setSemester(selectedSemester)
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
                        Check Score
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
                    <div className="row p-3">
                        <div className="col-12 form-group">
                            <input disabled className="form-control" placeholder="Student ID" name="studentID" value={studentID} />
                        </div>
                    </div>
                    <div className="row p-3">
                        <div className="col-12">
                            <select id="selectSemester" className="selectSemester" onChange={(e) => onChangeSemester(e)}></select>
                        </div>
                    </div>
                    <div className="row p-3">
                        <div className="col-12">
                            <input className="form-control" placeholder="Subject" name="subject" value={subject} onChange={(e) => setStudentID(e.target.value)} />
                        </div>
                    </div>
                    <div className="row p-3">
                        <div className="col-12">
                            <input className="form-control" placeholder="Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                    </div>
                    <div className="row p-2 d-flex justify-content-center">
                        <div className="col-4">
                            <button className="btn" onClick={(e) => checkScore(e)} style={{ fontWeight: 'bold', color: '#FFFFFF', backgroundColor: '#91E45E', width: '100%' }}>Update</button>
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