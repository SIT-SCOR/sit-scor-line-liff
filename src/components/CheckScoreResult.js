import React from 'react'

export default function CheckScore(props) {
    
    const userLineID = props.location.state.userLineID;
    const studentid = props.location.state.studentid;
    const semester = props.location.state.semester;
    const subjectid = props.location.state.subjectid;
    const password = props.location.state.password;
    const fetchPassword = props.location.state.fetchPassword;

    return (
        <div>
            {userLineID}<br />
            {studentid}<br />
            {semester}<br />
            {subjectid}<br />
            {password}<br />
            {fetchPassword}<br />
        </div>
    )
}