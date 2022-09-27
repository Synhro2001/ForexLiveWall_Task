import { Component } from "react";
// Component field //
import InputForm from "../input-form/input-form";

// Style field //
import "./app.css";

class App extends Component{
    
    render() {
        return (
            <div className="app-container">
                <InputForm/>
            </div>
        );
       
    }

}

export default App;
