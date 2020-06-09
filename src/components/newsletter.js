import { useState } from "react";
import axios from "axios";
import utilStyles from '../styles/utils.module.css'

export default () => {
  const [email, setEmail] = useState("");
  const [state, setState] = useState("IDLE");
  const [errorMessage, setErrorMessage] = useState(null);

  const subscribe = async () => {
    setState("LOADING");
    setErrorMessage(null);
    try {
      const response = await axios.post("/api/newsletter", { email });
      setState("SUCCESS");
    } catch (e) {
      setErrorMessage(e.response.data.error);
      setState("ERROR");
    }
  };

  return (
    <div className="flex flex-col items-center w-full p-8 border-gray-500 border-solid border rounded-sm mt-8">
      <div className="inputDiv">
        <input
          className=""
          type="text"
          placeholder="justin @ uottawa"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className={`lg:ml-2 w-full lg:w-1/3 shadow bg-brand2 focus:shadow-outline focus:outline-none text-center text-white font-bold py-2 px-4 rounded flex ${
            state === "LOADING" ? "button-gradient-loading" : ""
          }`}
          type="button"
          disabled={state === "LOADING"}
          onClick={subscribe}
        >
          Join
        </button>
        <p className={utilStyles.pp}>For those who ♡ Ottawa and want to make it a better place for everyone</p>
      </div>
      <div className="notification"> 
      {state === "ERROR" && (
        <p className="errorMe">{errorMessage}</p>
      )}
      {state === "SUCCESS" && (
        <p className="w-1/2 mt-2 text-green-600">Success!</p>
      )}
      </div>
      <style jsx>{` 

        .notification {
          text-align: center;
          margin-top: 3rem;
          color: #D03838;
          background-color: #white;
          font-size: 18px; 
          font-family: Courier;
          
          
          border-radius: 6px;
        }
      
        .inputDiv {
          padding-top: 1rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .inputDiv input{
          padding: 0.5rem;
          min-width: 125px;    
          width:100%;
          font-size: max(24px);      
          text-align: center;
          border: none;
          border-radius: 6px;  
                
        }

        .inputDiv input:focus{
          outline: none;
          
         
        }

        .inputDiv input[type=text]{
          
        }
      
        .inputDiv button {
          margin-top: 1rem;
          border: none;
          
          border-radius: 6px;
          cursor: pointer;
          padding: 0.5rem;
          min-width: 125px;    
          width: max(100%, 250px);
          font-size:  22px;   
          font-weight: 400;   
          text-align: center;
          transition: 0.3s;
        }
      
        .inputDiv button:hover {
          box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
          color: black;
        }

      `}</style>
    </div>
  );
};