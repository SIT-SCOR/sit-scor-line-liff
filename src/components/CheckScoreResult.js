import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import Logo from '../images/Logo.png'
import Results from './Results'
import MaterialTable from 'material-table'

export default function CheckScore(props) {

    const history = useHistory()
    const userLineID = props.location.state.userLineID;
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
            let fetchScore = await axios.get(`https://us-central1-sit-scor-b4c38.cloudfunctions.net/app/api/liff/checkscore/${studentid}/${semester}/${subjectid}/${password}`)
            setScores(fetchScore.data)
        }
        fetchScore()
    }, [studentid, semester, subjectid, password])

    const homepage = () => {
        history.push("/")
    }

    console.log(scores)

    return (
        <div className="App">
            <header className="CheckScore-header">
                <div className="container p-4">
                    <div className="card">
                        <div className="card-body" style={{ minHeight: "94vh" }}>
                            <div className="row">
                                <div className="col-6">
                                    <span style={{ fontWeight: "bold", fontSize: "45px" }}>Check</span>
                                    <br />
                                    <span style={{ fontWeight: "bold", fontSize: "45px", color: "#5C7AE2" }}>Score</span>
                                </div>
                                <div className="col-6">
                                    <img src={Logo} alt="logo" width="110%" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="card">
                                        <div className="card-body" style={{ borderRadius: "30px", border: "2px solid #5C7AE2", backgroundColor: "#A7C5EB" }}>
                                            <span style={{ color: "#ffffff" }}>
                                                {subjectid} {subjectname}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row" style={{ marginTop: "2vh" }}>
                                <div className="col-12">
                                    <div className="card">
                                        <div className="card-body" style={{ backgroundColor: "#A7C5EB", borderRadius: "15px", minHeight: "50vh" }}>
                                            {/* <MaterialTable
                                                columns={[
                                                    { title: 'Activity ID', field: 'activityid' },
                                                    { title: 'Activity Name', field: 'activityname' },
                                                    { title: 'Score', field: 'score' }
                                                ]}
                                                data={scores}
                                                options={{
                                                    showTitle: false,
                                                    search: false,
                                                    header: false
                                                }}
                                            /> */}
                                            <Results scores={scores} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row" style={{ marginTop: "3vh" }}>
                                <div className="col-12">
                                    <button className="btn" onClick={homepage} style={{ color: '#FFFFFF', backgroundColor: '#5C7AE2', fontWeight: 'bold' }}>Home</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}