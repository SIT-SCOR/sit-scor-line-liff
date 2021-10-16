import React, { useEffect, useState } from 'react'
import '../App.css';
import Button from '@material-ui/core/Button';

const liff = window.liff;

export default function Homepage() {

    const [name, setName] = useState("")
    const [userLineID, setUserLineID] = useState("")
    const [pictureUrl, setPictureUrl] = useState("")
    const [statusMessage, setStatusMessage] = useState("")

    useEffect(() => {
        const getProfile = () => {
            liff.init(async () => {
                let getProfile = await liff.getProfile();
                setName(getProfile.displayName);
                setUserLineID(getProfile.userId);
                setPictureUrl(getProfile.pictureUrl);
                setStatusMessage(getProfile.statusMessage);
            });
        }
        getProfile()
    }, [])

    const sendMessage = () => {
        liff.sendMessages([{
            type: 'text',
            text: "Hi LIFF"
        }]).then(() => {
            liff.closeWindow();
        });
    }

    const closeLIFF = () => {
        liff.closeWindow();
    }

    return (
        <div className="App">
            <header className="App-header">
                <div className="support">
                    <img width="25%" src="https://img.icons8.com/color/420/line-me.png" alt="" />
                </div>
                <div className="support">
                    {
                        (pictureUrl && pictureUrl !== '')
                            ?
                            <img width="25%" src={pictureUrl} alt="" />
                            :
                            null
                    }
                </div>
                {
                    (name && name !== '')
                        ?
                        <p>Name: {name}</p>
                        :
                        null
                }
                {
                    (userLineID && userLineID !== '')
                        ?
                        <p>LineID: {userLineID}</p>
                        :
                        null
                }
                {
                    (statusMessage && statusMessage !== '')
                        ?
                        <p>statusMessage: {statusMessage}</p>
                        :
                        null
                }
                <div className="support">
                    <Button variant="contained" onClick={sendMessage.bind(this)} style={{ marginRight: '20px' }}>
                        Send Message
                    </Button>
                    <Button variant="contained" onClick={closeLIFF.bind(this)} color="secondary">
                        Close LIFF
                    </Button>
                </div>
            </header>
        </div>
    )
}

// class Homepage extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             name: '',
//             userLineID: '',
//             pictureUrl: '',
//             statusMessage: ''
//         };
//     }

//     getProfile() {
//         liff.init(async () => {
//             let getProfile = await liff.getProfile();
//             this.setState({
//                 name: getProfile.displayName,
//                 userLineID: getProfile.userId,
//                 pictureUrl: getProfile.pictureUrl,
//                 statusMessage: getProfile.statusMessage
//             });
//         });
//     }

//     sendMessage() {
//         liff.sendMessages([{
//             type: 'text',
//             text: "Hi LIFF"
//         }]).then(() => {
//             liff.closeWindow();
//         });
//     }

//     closeLIFF() {
//         liff.closeWindow();
//     }

//     render() {
//         return (
//             <div className="App">
//                 <header className="App-header">
//                     <div className="support">
//                         <img width="25%" src="https://img.icons8.com/color/420/line-me.png" alt="" />
//                     </div>
//                     <div className="support">
//                         {
//                             (this.state.pictureUrl && this.state.pictureUrl !== '')
//                                 ?
//                                 <img width="25%" src={this.state.pictureUrl} alt="" />
//                                 :
//                                 null
//                         }
//                     </div>
//                     {
//                         (this.state.name && this.state.name !== '')
//                             ?
//                             <p>Name: {this.state.name}</p>
//                             :
//                             null
//                     }
//                     {
//                         (this.state.userLineID && this.state.userLineID !== '')
//                             ?
//                             <p>LineID: {this.state.userLineID}</p>
//                             :
//                             null
//                     }
//                     {
//                         (this.state.statusMessage && this.state.statusMessage !== '')
//                             ?
//                             <p>statusMessage: {this.state.statusMessage}</p>
//                             :
//                             null
//                     }
//                     <div className="support">
//                         <Button variant="contained" onClick={this.getProfile.bind(this)} style={{ marginRight: '20px' }} color="primary">
//                             Getdata INFO
//                         </Button>
//                         <Button variant="contained" onClick={this.sendMessage.bind(this)} style={{ marginRight: '20px' }}>
//                             Send Message
//                         </Button>
//                         <Button variant="contained" onClick={this.closeLIFF.bind(this)} color="secondary">
//                             Close LIFF
//                         </Button>
//                     </div>
//                 </header>
//             </div>
//         );
//     }
// }

// export default Homepage;