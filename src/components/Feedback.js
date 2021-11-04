import React, { useState } from 'react'
import '../App.css';
import axios from 'axios';
import Logo from '../images/Logo.png'
import userLoad from '../images/user-load.png'
import { useHistory } from 'react-router';

export default function Feedback(props) {
    const [message, setMessage] = useState("")
    const history = useHistory()

    const name = props.location.state.name
    const pictureUrl = props.location.state.pictureUrl

    const sendFeedback = (e) => {
        e.preventDefault()

        if (message !== "") {
            const request = {
                message: message
            }
            axios.post(`https://us-central1-sit-scor-b4c38.cloudfunctions.net/app/api/liff/feedback/create`, request)
                .then(() => {
                    history.push('/ConfirmFeedback')
                })
                .catch(() => {
                    window.alert("Error occured in server")
                })
        } else {
            window.alert("Please enter message!!!")
        }
    }

    const homepage = () => {
        history.push("/")
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
                        Feedback
                    </div>
                </div>
            </div>
            <div className="Feedback-header gap-3">
                <div className="container-fluid p-2">
                    <div className="card maincard-background">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-5 col-sm-5">
                                    {
                                        (pictureUrl && pictureUrl !== '')
                                            ?
                                            <img width="35%" src={pictureUrl} alt="user profile" style={{ borderRadius: '50%' }} />
                                            :
                                            <img width="35%" src={userLoad} alt="user loading" />
                                    }
                                </div>
                                <div className="col-7 col-sm-5 d-flex align-items-center" style={{ fontSize: '20px' }}>
                                    {
                                        (name && name !== '')
                                            ?
                                            <span>{name}</span>
                                            :
                                            <span>Loading</span>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid p-2">
                    <div className="card feedback-background">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-5 col-sm-5" style={{ textAlign: 'left', fontSize: '17px', color: '#000000', fontWeight: 'bold' }}>
                                    Feedback
                                </div>
                                <div className="col-7 col-sm-7" style={{ textAlign: 'right', fontSize: '17px', color: '#3654D5', fontWeight: 'bold' }}>
                                    send as anonymous
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-sm-12">
                                    <textarea type="text" style={{ width: '100%', height: '20vh' }} name="message" value={message} onChange={(e) => setMessage(e.target.value)} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid p-3">
                    <div className="row d-flex justify-content-center">
                        <div className="col-4">
                            <input type="submit" className="btn" onClick={(e) => sendFeedback(e)} style={{ backgroundColor: '#79D70F', color: '#FFFFFF', fontWeight: 'bold', fontSize: '18px' }} value="Send" />
                        </div>
                    </div>
                </div>
                <div className="container-fluid p-3">
                    <div className="row d-flex justify-content-center">
                        <div className="col-4">
                            <button className="btn" onClick={homepage} style={{ color: '#FFFFFF', backgroundColor: '#5C7AE2', fontWeight: 'bold', fontSize: '18px' }}>Home</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}