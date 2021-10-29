import React from 'react'

export default function Verify(props) {

    const userLineID = props.location.state.userLineID

    return (
        <div>
            {userLineID}
        </div>
    )

}