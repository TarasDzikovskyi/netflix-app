// import './chatGPT.scss';
// import Navbar from "../../components/navbar/Navbar";
// import {Configuration, OpenAIApi} from "openai";
// import {useState} from "react";
// const OPENAI_API_KEY = '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'
//
// export default function ChatGPT() {
//     const [value, setValue] = useState('');
//     const [text, setText] = useState('');
//     const configuration = new Configuration({
//         apiKey: OPENAI_API_KEY,
//     });
//     const openai = new OpenAIApi(configuration);
//
//     const generateText = async (prompt) => {
//         const response = await openai.createCompletion({
//             model: "text-davinci-003",
//             prompt: prompt,
//             max_tokens: 4000,
//             temperature: 0.9,
//             n: 2,
//             logprobs: 5
//         });
//
//         setText(response.data.choices[0].text)
//     }
//
//     // console.log(value)
//
//     return (
//         <div className='gpt_box'>
//             <Navbar/>
//
//             <div className="gpt_wrapper">
//                 <div className="block">
//                     <div className='response'>
//                         <div className="text_block">
//                             {text}
//                         </div>
//                     </div>
//
//                     <div className="request">
//                         <input
//                             className='input_text'
//                             type="text"
//                             onChange={(e) => setValue(e.target.value)}/>
//                         <button className='input_button' onClick={() => generateText(value)}>Click</button>
//                     </div>
//
//                 </div>
//             </div>
//
//         </div>
//     )
// };

// <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAYfKal4wz-LWL7PtyR18k_PVQndeaQxgI&callback=initMap" async defer></script> 

// String path = URLDecoder.decode(req.getPathInfo().substring(1), "UTF-8");

import React from 'react'
import {Helmet, HelmetProvider} from 'react-helmet-async';
import './chatGPT.scss'
let map;

export default function ChatGPT() {

    if (typeof window != "undefined") {
        window.initMap = () => {
            map = new window.google.maps.Map(document.getElementById("map"), {
                center: {lat: -34.397, lng: 150.644},
                zoom: 8,
            })
        }


        return (
            <HelmetProvider>
                <>
                    <Helmet>
                        <script defer
                                src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAYfKal4wz-LWL7PtyR18k_PVQndeaQxgI&callback=initMap">
                        </script>
                    </Helmet>
                    <div id="map"></div>
                </>
            </HelmetProvider>

        )
    }
}