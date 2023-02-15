import img from './content/icon_profile/profile_1.jpg'
import {useState} from "react";
import axios from "axios";

export default function Test() {

    const [profilePic, setProfilePic] = useState()
    const [fileName, setFileName] = useState("");

    // console.log(img)
    // console.log(profilePic)



    const saveFile = (e) => {
        setProfilePic(e.target.files[0]);
        // setFileName(e.target.files[0].name);
    };



    const handleClick = async () => {
        const formData = new FormData();
        let email = 'qwerty@gmail.com';
        let username = 'qwerty';
        let password = 'pass';
        console.log(profilePic)


        formData.append('profilePic', profilePic)
        formData.append("fileName", fileName);

        const res = await axios.post('/auth/verify')
        console.log(res)
    }

    return(
        <>
            <div>
                <input name='profilePic'  type="file" onChange={saveFile}/>
                <button onClick={handleClick}>CLICK</button>
            </div>

        </>
    )

}


