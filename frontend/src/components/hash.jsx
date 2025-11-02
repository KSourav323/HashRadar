import React, { useEffect, useState } from "react";
import axios from "axios";
import '../style/hash.css'
import { GoCodescan } from "react-icons/go";
import { toast } from 'react-toastify';

const Hash = () => {
  
  const API_URL = "http://127.0.0.1:8000";
  const [inputText, setInputText] = useState("");
  const [response, setResponse] = useState("");

  const sendText = async () => {
      try {
        if (inputText.trim() === "") {
          toast.warning("Please enter a valid hash before submitting!");
        }
        else {
        const res = await axios.post(`${API_URL}/search`, { text: inputText });
        setResponse(res.data.response);
        }
      } catch (error) {
        console.error("Error sending text:", error);
      }
    };

  return (
    <div id="hash-component">
      <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Enter hash..."
          id="hash-input"
          required
      />
      <button id="submit" onClick={sendText}><GoCodescan id="scan-icon"/></button>
      {response && (
                <div id="response-section">
                    <h4>Response from FastAPI:</h4>
                    <p>{response}</p>
                </div>
      )}

    </div>
  )
}

export default Hash