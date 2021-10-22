import React from 'react'

export default function Results(props) {
    const { scores } = props

    if (scores.length > 0) {
        return (
            scores.map((score, index) => {
                return (
                    <div className="row">
                        <div className="col-12">
                            <span style={{color: "#4E5FC6"}}>{score.activityid}</span><br />
                            <span style={{color: "#ffffff"}}>{score.activityname}</span><br />
                            <span style={{color: "#000000"}}>{score.score}</span>
                        </div>
                    </div>
                )
            })
        )
    } else {
        return (
            <div className="row">
                <div className="col-12">

                </div>
            </div>
        )
    }
}