import React from 'react'
import { useHistory } from 'react-router';
import '../App.css';
import Check from '../images/verified.png'

export default function ConfirmFeedback() {

    const history = useHistory()

    const homepage = () => {
        history.push("/")
    }

    return (
        <div className="App">
            <header className="ConfirmFeedback-header d-flex align-items-center">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-12 col-sm-9 col-md-6 col-lg-5 col-xl-4">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row p-2 justify-content-center">
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-10">
                                            <img src={Check} width="25%" alt="check" /><br />
                                            <span style={{ color: '#000000', fontWeight: 'bold', fontSize: '24px' }}>
                                                Success!
                                            </span>
                                        </div>
                                    </div>
                                    <div className="row p-2 justify-content-center">
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                            <span style={{ color: '#9E9E9E', fontWeight: 'bold', fontSize: '18px' }}>
                                                You have successfully update<br />your info
                                            </span>
                                        </div>
                                    </div>
                                    <div className="row p-2 justify-content-center">
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                            <button className="btn" onClick={homepage} style={{ color: '#FFFFFF', backgroundColor: '#5C7AE2', fontWeight: 'bold' }}>Go to SIT-SCOR !</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}