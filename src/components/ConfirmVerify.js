import React from 'react'
import { useHistory } from 'react-router';
import '../App.css';
import Check from '../images/verified.png'

export default function ConfirmVerify() {

    const history = useHistory()

    const homepage = () => {
        history.push("/")
    }

    return (
        <div className="App">
            <header className="ConfirmFeedback-header d-flex align-items-center">
                <div className="container-fluid">
                    <div className="card">
                        <div className="card-body">
                            <div className="row p-2">
                                <div className="col-12">
                                    <img src={Check} width="25%" alt="check" /><br />
                                    <span style={{ color: '#000000', fontWeight: 'bold', fontSize: '24px' }}>
                                        Verified!
                                    </span>
                                </div>
                            </div>
                            <div className="row p-2">
                                <div className="col-12">
                                    <span style={{ color: '#9E9E9E', fontWeight: 'bold', fontSize: '18px' }}>
                                        You have successfully verified<br />the account
                                    </span>
                                </div>
                            </div>
                            <div className="row p-2">
                                <div className="col-12">
                                    <button className="btn" onClick={homepage} style={{ color: '#FFFFFF', backgroundColor: '#5C7AE2', fontWeight: 'bold' }}>Go to SIT-SCOR !</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}