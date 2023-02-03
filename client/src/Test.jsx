import img from './content/icon_profile/profile_1.jpg'
import {useState} from "react";
import axios from "axios";

export default function Test() {

    const [profilePic, setProfilePic] = useState()

    // console.log(img)
    // console.log(profilePic)





    const handleClick = async () => {
        const formData = new FormData();
        let email = 'qwerty@gmail.com';
        let username = 'qwerty';
        let password = 'pass';

        formData.append('profilePic', profilePic)

        const res = await axios.post('/auth/register', formData)
    }

    return(
        <>
            <div>
                <input name='profilePic' type="file" value={profilePic} onChange={({target: {value}}) => setProfilePic(value)}/>
                <button onClick={handleClick}>CLICK</button>
            </div>

        </>
    )

}