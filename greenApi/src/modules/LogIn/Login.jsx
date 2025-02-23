import "./LogIn.css";
import { useState } from "react";
import handleSubmit from "../../actions/handleSubmit";
import getData from "../../actions/getData";

const LogIn = () => {
    const [idInstance, setIdInstance] = useState("");
    const [apiTokenInstance, setApiTokenInstance] = useState("");

    const onSubmit = (event) => {
        handleSubmit(event, idInstance, apiTokenInstance)
    };

    return (
        <div className="pre-log-in">
            <form className="log-in" onSubmit={onSubmit}>
                <label className="title">Green-api</label>
                <input
                    className="field"
                    type="text"
                    placeholder="idInstance"
                    value={idInstance}
                    onChange={(e) => setIdInstance(e.target.value)}
                />
                <input
                    className="field"
                    type="password"
                    placeholder="apiTokenInstance"
                    value={apiTokenInstance}
                    onChange={(e) => setApiTokenInstance(e.target.value)} 
                />
                <input className="submit" type="submit" value="Вход" />
            </form>
        </div>
    );
}

export default LogIn;
