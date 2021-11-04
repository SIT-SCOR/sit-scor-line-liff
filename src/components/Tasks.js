import React from 'react'

export default function Tasks(props) {
    const { scores } = props

    if (scores.length > 0) {
        return (
            scores.map((score, index) => {
                return (
                    <div className="row" style={{ marginBottom: "10px" }}>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12" style={{ textAlign: 'left', fontWeight: 'bold' }}>
                            <span style={{ color: "#000000" }}>{score.activityid}</span><br />
                            <span style={{ color: "#ffffff" }}>{score.activityname}</span>
                        </div>
                    </div>
                )
            })
        )
    } else {
        return (
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">

                </div>
            </div>
        )
    }
}