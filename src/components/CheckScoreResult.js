import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function CheckScore(props) {

    const userLineID = props.location.state.userLineID;
    const studentid = props.location.state.studentid;
    const semester = props.location.state.semester;
    const subjectid = props.location.state.subjectid;
    const password = props.location.state.password;
    const [scores, setScores] = useState("")

    useEffect(() => {
        const fetchScore = async () => {
            let subject = await axios.get(`https://us-central1-sit-scor-b4c38.cloudfunctions.net/app/api/liff/score/subject/reads/${studentid}/${semester}/${subjectid}/${password}`)
            let activities = await axios.get(`https://us-central1-sit-scor-b4c38.cloudfunctions.net/app/api/liff/score/activity/reads/${semester}/${subject.data.id}/${subject.data.sectionid}`)
            let arrayActivity = activities.data
            let scores = [];
            await arrayActivity.forEach(async (activity) => {
                console.log(activity.activityid)
                if (activity.activitytype === "Individual") {
                    let score = await axios.get(`https://us-central1-sit-scor-b4c38.cloudfunctions.net/app/api/liff/score/individual/read/${studentid}/${semester}/${subject.data.id}/${subject.data.sectionid}/${activity.activityid}`)
                    scores.push(score.data)
                }
                //     if (activity.activitytype === "Group") {
                //         const fetchGroup = async () => {
                //             let groups = await axios.get(`https://us-central1-sit-scor-b4c38.cloudfunctions.net/app/api/liff/score/groupid/reads/${semester}/${subject.data.id}/${subject.data.sectionid}/${activity.activityid}`)
                //             let arrayGroups = Array(groups.data)
                //             console.log(arrayGroups)
                //             arrayGroups.forEach((group) => {
                //                 const fetchScore2 = async () => {
                //                     let score = await axios.get(`https://us-central1-sit-scor-b4c38.cloudfunctions.net/app/api/liff/score/group/read/${studentid}/${semester}/${subject.data.id}/${subject.data.sectionid}/${activity.activityid}/${group.id}`)
                //                     scores.push(score.data)
                //                 }
                //                 fetchScore2()
                //             })
                //         }
                //         fetchGroup()
                //     }
            })
            console.log(scores)
            setScores(scores)
        }
        fetchScore()
    }, [studentid, semester, subjectid, password])

    return (
        <div style={{ color: '#000000' }}>
            Line ID: {userLineID}<br />
            Student ID: {studentid}<br />
            Semester: {semester}<br />
            Subject ID: {subjectid}<br />
            Password: {password}<br />
            Scores: {scores}
        </div>
    )
}