import React, { useEffect, useState } from 'react'
import '../App.css';
// eslint-disable-next-line
import Button from '@material-ui/core/Button';
import Logo from '../images/Logo.png'
import userLoad from '../images/user-load.png'
import Register from '../images/register.png'
import Feedback from '../images/feedback.png'

const liff = window.liff;

export default function Homepage() {

    const [name, setName] = useState("")
    const [userLineID, setUserLineID] = useState("")
    const [pictureUrl, setPictureUrl] = useState("")
    // const [statusMessage, setStatusMessage] = useState("")

    useEffect(() => {
        const getProfile = () => {
            liff.init(async () => {
                let getProfile = await liff.getProfile();
                setName(getProfile.displayName);
                setUserLineID(getProfile.userId);
                setPictureUrl(getProfile.pictureUrl);
                // setStatusMessage(getProfile.statusMessage);
            });
        }
        getProfile()
    }, [])
    // eslint-disable-next-line
    const sendMessage = () => {
        liff.sendMessages([{
            type: 'text',
            text: "Hi LIFF"
        }]).then(() => {
            liff.closeWindow();
        });
    }
    // eslint-disable-next-line
    const closeLIFF = () => {
        liff.closeWindow();
    }

    return (
        <div className="App">
            <div className="container background-header">
                <div className="row">
                    <div className="col-12">
                        <img src={Logo} alt="logo" width="90px" height="95px" />
                    </div>
                </div>
            </div>
            <header className="App-header gap-3">
                <div className="container-fluid p-3">
                    <div className="card maincard-background">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-5">
                                    {
                                        (pictureUrl && pictureUrl !== '')
                                            ?
                                            <img width="35%" src={pictureUrl} alt="user profile" style={{borderRadius: '50%'}} />
                                            :
                                            <img width="35%" src={userLoad} alt="user loading" />
                                    }
                                </div>
                                <div className="col-7 d-flex align-items-center" style={{ fontSize: '20px' }}>
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
                <div className="container-fluid p-3">
                    <div className="row">
                        <div className="col-12">
                            <button type="button" className="btn btn-outline-primary" style={{ backgroundColor: 'white', width: '100%', height: '22vh', borderRadius: '15px', border: '5px solid #4E5FC6' }}>
                                <img src={Register} alt="Register" width="37%" />
                                <p>Register</p>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="container-fluid p-3">
                    <div className="row">
                        <div className="col-12">
                            <button type="button" className="btn btn-outline-primary" style={{ backgroundColor: 'white', width: '100%', height: '22vh', borderRadius: '15px', border: '5px solid #4E5FC6' }}>
                                <img src={Feedback} alt="Feedback" width="37%" />
                                <p>Feedback</p>
                            </button>
                        </div>
                    </div>
                </div>
                {/* {
                    (userLineID && userLineID !== '')
                        ?
                        <p>LineID: {userLineID}</p>
                        :
                        null
                } */}
                {/* {
                    (statusMessage && statusMessage !== '')
                        ?
                        <p>statusMessage: {statusMessage}</p>
                        :
                        null
                } */}
                {/* <div className="support">
                    <Button variant="contained" onClick={sendMessage.bind(this)} style={{ marginRight: '20px' }}>
                        Send Message
                    </Button>
                    <Button variant="contained" onClick={closeLIFF.bind(this)} color="secondary">
                        Close LIFF
                    </Button>
                </div> */}
            </header>
        </div>
    )
}