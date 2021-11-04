import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import Logo from '../images/Logo.png'
import axios from 'axios';
import verifyIcon from '../images/verify.png'
import PinInput from "react-pin-input";

export default function Verify(props) {

    const history = useHistory()
    const userLineID = props.location.state.userLineID
    const [studentID, setStudentID] = useState("")
    const [pincode, setPincode] = useState("")

    useEffect(() => {
        const fetchInfo = async () => {
            let info = await axios.get(`https://us-central1-sit-scor-b4c38.cloudfunctions.net/app/api/liff/student/read/${userLineID}`)
            setStudentID(info.data.id)
        }
        fetchInfo()
    }, [userLineID])

    const verify = (e) => {
        e.preventDefault()

        axios.get(`https://us-central1-sit-scor-b4c38.cloudfunctions.net/app/api/liff/verify/${studentID}/${pincode}`)
            .then(() => {
                window.alert("Your account has been verify successfully!!!")
                history.push("/ConfirmVerify")
            })
            .catch(() => {
                window.alert("Invalid pincode. Please check your pincode and each input have one number.")
            })
    }

    const onChange = (value) => {
        setPincode(value)
    }

    const resend = (e) => {
        e.preventDefault()

        axios.get(`https://us-central1-sit-scor-b4c38.cloudfunctions.net/app/api/liff/resend/${studentID}`)
            .then(() => {
                window.alert("Email has been send to your email. Please view in your email.")
            })
    }

    return (
        <div className="App">
            <div className="container-fluid background-header">
                <div className="row">
                    <div className="col-12 col-sm-12">
                        <img src={Logo} alt="logo" width="144px" height="144px" />
                    </div>
                </div>
                <div className="row" style={{ paddingBottom: "15px", fontSize: "24px", color: "#FFFFFF", fontWeight: 'bold' }}>
                    <div className="col-12 col-sm-12">
                        Verify Email
                    </div>
                </div>
            </div>
            <div className="Verify-header">
                <div className="container-fluid">
                    <div className="row p-2">
                        <div className="col-12">
                            <img src={verifyIcon} width="30%" style={{ marginTop: "10px" }} alt="verify logo" />
                        </div>
                    </div>
                    <div className="row p-2">
                        <div className="col-12">
                            <span style={{ color: '#9E9E9E', fontWeight: 'bold' }}>
                                Enter the 4 digits code we sent you<br />via email to continue
                            </span>
                        </div>
                    </div>
                    <div className="row" style={{ marginTop: '10px' }} >
                        <div className="col-12">
                            <div className="row justify-content-center">
                                <PinInput
                                    length={4}
                                    focus
                                    secret
                                    type="numeric"
                                    inputStyle={{ width: "45px", height: "60px", fontSize: '30px', textAlign: 'center', backgroundColor: '#C4C4C4', borderRadius: '15px' }}
                                    onChange={onChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row p-4 d-flex justify-content-center">
                        <div className="col-7">
                            <button className="btn" onClick={(e) => verify(e)} style={{ fontWeight: 'bold', color: '#FFFFFF', backgroundColor: '#91E45E', width: '100%', fontSize: '24px' }}>Verify</button>
                        </div>
                    </div>
                    <div className="row p-2 d-flex justify-content-center">
                        <div className="col-12">
                            <span style={{ fontWeight: 'bold', color: '#9E9E9E' }}>
                                Didn't get the code? <span className="SpanHover" onClick={resend} style={{ color: '#5C7AE2' }}>Resend code</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}