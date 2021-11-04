import React, { useEffect, useState } from 'react'
import '../App.css';
import Logo from '../images/Logo.png'
import userLoad from '../images/user-load.png'
import Register from '../images/register.png'
import Feedback from '../images/feedback.png'
import Scoreboard from '../images/scoreboard.png'
import Tasks from '../images/check_task.png'
import { Link } from 'react-router-dom';
import axios from 'axios';

const liff = window.liff;

export default function Homepage() {

    const [name, setName] = useState("")
    const [userLineID, setUserLineID] = useState("")
    const [pictureUrl, setPictureUrl] = useState("")
    const [alreadyRegister, setAlreadyRegister] = useState(Boolean)
    const [isVerify, setIsVerify] = useState(Boolean)

    useEffect(() => {
        const getProfile = () => {
            liff.init({ liffId: "1655669621-oYVQEDKQ" }, async () => {
                if (liff.isLoggedIn()) {
                    let getProfile = await liff.getProfile();
                    setName(getProfile.displayName);
                    setUserLineID(getProfile.userId);
                    setPictureUrl(getProfile.pictureUrl);
                    let uid = getProfile.userId;
                    let checkRegister = await axios.get(`https://us-central1-sit-scor-b4c38.cloudfunctions.net/app/api/liff/checkregister/${uid}`)
                    setAlreadyRegister(checkRegister.data.alreadyHaved)
                    let verify = await axios.get(`https://us-central1-sit-scor-b4c38.cloudfunctions.net/app/api/liff/student/read/${uid}`)
                    setIsVerify(verify.data.isVerify)
                } else {
                    liff.login({ redirectUrl: "https://sit-scor.github.io/sit-scor-line-liff/" })
                }
            });
        }
        getProfile()
    }, [])

    return (
        <div className="App">
            <div className="container-fluid background-header">
                <div className="row justify-content-center">
                    <div className="col-4 col-sm-3 col-md-2 col-lg-2 col-xl-1">
                        <img src={Logo} alt="logo" width="100%" />
                    </div>
                </div>
            </div>
            <header className="App-header gap-3">
                <div className="container-fluid p-3">
                    <div className="row justify-content-center">
                        <div className="col-12 col-sm-12 col-md-9 col-lg-7 col-xl-5">
                            <div className="card maincard-background">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-3 col-sm-3 col-md-2 col-lg-2 col-xl-2">
                                            {
                                                (pictureUrl && pictureUrl !== '')
                                                    ?
                                                    <img width="100%" src={pictureUrl} alt="user profile" style={{ borderRadius: '50%' }} />
                                                    :
                                                    <img width="100%" src={userLoad} alt="user loading" />
                                            }
                                        </div>
                                        <div className="col-6 col-sm-6 col-md-8 col-lg-8 col-xl-8 justify-content-center d-flex align-items-center" style={{ fontSize: '20px' }}>
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
                    </div>
                </div>
                <div className="container-fluid p-3">
                    <div className="row justify-content-center">
                        <div className="col-12 col-sm-12 col-md-9 col-lg-7 col-xl-5">
                            {
                                alreadyRegister === false
                                    ?
                                    <Link to={{
                                        pathname: '/Register',
                                        state: {
                                            userLineID: userLineID
                                        }
                                    }}>
                                        <button type="button" className="btn btn-outline-primary" style={{ backgroundColor: 'white', width: '100%', borderRadius: '15px', border: '5px solid #4E5FC6' }}>
                                            <img src={Register} alt="Register" width="30%" /><br />
                                            <span>Register</span>
                                        </button>
                                    </Link>
                                    :
                                    null
                            }
                            {
                                alreadyRegister === true && isVerify === false
                                    ?
                                    <Link to={{
                                        pathname: '/Verify',
                                        state: {
                                            userLineID: userLineID
                                        }
                                    }}>
                                        <button type="button" className="btn btn-outline-primary" style={{ backgroundColor: 'white', width: '100%', borderRadius: '15px', border: '5px solid #4E5FC6' }}>
                                            <img src={Register} alt="Register" width="30%" /><br />
                                            <span>Verify</span>
                                        </button>
                                    </Link>
                                    :
                                    null
                            }
                            {
                                alreadyRegister === true && isVerify === true
                                    ?
                                    <Link to={{
                                        pathname: '/EditInfo',
                                        state: {
                                            userLineID: userLineID
                                        }
                                    }}>
                                        <button type="button" className="btn btn-outline-primary" style={{ backgroundColor: 'white', width: '100%', borderRadius: '15px', border: '5px solid #4E5FC6' }}>
                                            <img src={Register} alt="Edit" width="30%" /><br />
                                            <span>Edit</span>
                                        </button>
                                    </Link>
                                    :
                                    null
                            }
                        </div>
                    </div>
                </div>
                <div className="container-fluid p-3">
                    <div className="row justify-content-center">
                        <div className="col-12 col-sm-12 col-md-9 col-lg-7 col-xl-5">
                            <Link to={{
                                pathname: '/Feedback',
                                state: {
                                    name: name,
                                    pictureUrl: pictureUrl
                                }
                            }}>
                                <button type="button" className="btn btn-outline-primary" style={{ backgroundColor: 'white', width: '100%', borderRadius: '15px', border: '5px solid #4E5FC6' }}>
                                    <img src={Feedback} alt="Feedback" width="30%" /><br />
                                    <span>Feedback</span>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="container-fluid p-3">
                    <div className="row justify-content-center">
                        <div className="col-12 col-sm-12 col-md-9 col-lg-7 col-xl-5">
                            {
                                alreadyRegister === true && isVerify === true
                                    ?
                                    <Link to={{
                                        pathname: '/CheckScore',
                                        state: {
                                            userLineID: userLineID,
                                            name: name,
                                            pictureUrl: pictureUrl
                                        }
                                    }}>
                                        <button type="button" className="btn btn-outline-primary" style={{ backgroundColor: 'white', width: '100%', borderRadius: '15px', border: '5px solid #4E5FC6' }}>
                                            <img src={Scoreboard} alt="Feedback" width="30%" /><br />
                                            <span>Check Score</span>
                                        </button>
                                    </Link>
                                    :
                                    null
                            }
                        </div>
                    </div>
                </div>
                <div className="container-fluid p-3">
                    <div className="row justify-content-center">
                        <div className="col-12 col-sm-12 col-md-9 col-lg-7 col-xl-5">
                            {
                                alreadyRegister === true && isVerify === true
                                    ?
                                    <Link to={{
                                        pathname: '/CheckTasks',
                                        state: {
                                            userLineID: userLineID,
                                            name: name,
                                            pictureUrl: pictureUrl
                                        }
                                    }}>
                                        <button type="button" className="btn btn-outline-primary" style={{ backgroundColor: 'white', width: '100%', borderRadius: '15px', border: '5px solid #4E5FC6' }}>
                                            <img src={Tasks} alt="Feedback" width="30%" /><br />
                                            <span>Check Task</span>
                                        </button>
                                    </Link>
                                    :
                                    null
                            }
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}