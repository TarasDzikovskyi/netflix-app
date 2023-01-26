import './chatGPT.scss';
import Navbar from "../../components/navbar/Navbar";
import {Configuration, OpenAIApi} from "openai";
import {useState} from "react";
const OPENAI_API_KEY = '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'

export default function ChatGPT() {
    const [value, setValue] = useState('');
    const [text, setText] = useState('');
    const configuration = new Configuration({
        apiKey: OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    const generateText = async (prompt) => {
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: prompt,
            max_tokens: 4000,
            temperature: 0.9,
            n: 2,
            logprobs: 5
        });

        setText(response.data.choices[0].text)
    }

    // console.log(value)

    return (
        <div className='gpt_box'>
            <Navbar/>

            <div className="gpt_wrapper">
                <div className="block">
                    <div className='response'>
                        <div className="text_block">
                            {text}
                        </div>
                    </div>

                    <div className="request">
                        <input
                            className='input_text'
                            type="text"
                            onChange={(e) => setValue(e.target.value)}/>
                        <button className='input_button' onClick={() => generateText(value)}>Click</button>
                    </div>

                </div>
            </div>

        </div>
    )
};