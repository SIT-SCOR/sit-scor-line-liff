import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import Logo from '../images/Logo.png'
import Tasks from './Tasks';

export default function CheckTasksResult(props) {

    const history = useHistory()
    const studentid = props.location.state.studentid;
    const semester = props.location.state.semester;
    const subjectid = props.location.state.subjectid;
    const password = props.location.state.password;
    const [scores, setScores] = useState([])
    const [subjectname, setSubjectname] = useState("")

    useEffect(() => {
        const fetchScore = async () => {
            let subject = await axios.get(`https://us-central1-sit-scor-b4c38.cloudfunctions.net/app/api/liff/score/subject/reads/${studentid}/${semester}/${subjectid}/${password}`)
            setSubjectname(subject.data.subjectname)
            let fetchScore = await axios.get(`https://us-central1-sit-scor-b4c38.cloudfunctions.net/app/api/liff/checktasks/${studentid}/${semester}/${subjectid}/${password}`)
            setScores(fetchScore.data)
        }
        fetchScore()
    }, [studentid, semester, subjectid, password])

    const homepage = () => {
        history.push("/")
    }

    return (
        <div className="App">
            <header className="CheckTasks-header">
                <div className="container p-4">
                    <div className="card">
                        <div className="card-body" style={{ minHeight: "94vh" }}>
                            <div className="row">
                                <div className="col-6">
                                    <span style={{ fontWeight: "bold", fontSize: "45px" }}>Check</span>
                                    <br />
                                    <span style={{ fontWeight: "bold", fontSize: "45px", color: "#FFA78F" }}>Tasks</span>
                                </div>
                                <div className="col-6">
                                    <img src={Logo} alt="logo" width="110%" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="card" style={{ borderRadius: "30px" }}>
                                        <div className="card-body" style={{ borderRadius: "30px", border: "2px solid #FF7B0D", backgroundColor: "#FFA78F" }}>
                                            <span style={{ color: "#ffffff", fontWeight: 'bold' }}>
                                                {subjectid} {subjectname}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row" style={{ marginTop: "2vh" }}>
                                <div className="col-12">
                                    <div className="card" style={{ borderRadius: "15px" }}>
                                        <div className="card-body" style={{ backgroundColor: "#FFA78F", borderRadius: "15px", minHeight: "50vh" }}>
                                            <Tasks scores={scores} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row" style={{ marginTop: "3vh" }}>
                                <div className="col-12">
                                    <button className="btn" onClick={homepage} style={{ color: '#FFFFFF', backgroundColor: '#FFA78F', fontWeight: 'bold' }}>Home</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}