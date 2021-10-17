import React from 'react'

export default function Feedback(props) {
    const userLineID = props.location.state.userLineID
    const name = props.location.state.name
    const pictureUrl = props.location.state.pictureUrl

    return (
        <div>
            Feedback : {userLineID} {name} {pictureUrl}
        </div>
    )
}