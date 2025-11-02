import '../style/landing.css'
import { useNavigate} from 'react-router-dom';
import React, { useEffect, useState } from "react";
import axios from "axios";

const Landing = () => {
    const API_URL = "http://127.0.0.1:8000";
    const navigate = useNavigate();
    const [message, setMessage] = useState(null);
    const [inputText, setInputText] = useState("");
    const [response, setResponse] = useState("");

  const sendText = async () => {
    try {
      const res = await axios.post(`${API_URL}/search`, { text: inputText });
      setResponse(res.data.response);
    } catch (error) {
      console.error("Error sending text:", error);
    }
  };

    

    return (
        <div className='landing'>
            <div className='body'>
                <p>Welcome to HashRadar. </p>


                <h3>Send Hash to FastAPI</h3>
                <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Enter hash..."
                    style={{
                    padding: "8px",
                    width: "250px",
                    marginRight: "10px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                    }}
                />
                <button onClick={sendText}>Send</button>
            </div>
            {response && (
                <div className="response-section">
                    <h4>Response from FastAPI:</h4>
                    <p>{response}</p>
                </div>
            )}
            
        </div>

    );
}

export default Landing;
