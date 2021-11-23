import * as bs from 'bootstrap/dist/css/bootstrap.css';

import { Component } from "react";
import { ProgressBar } from 'react-bootstrap';

class LoadingIndicador extends Component {
    render() {
        return (
            <div>
                <ProgressBar now={40} label={`${40}%`}/>
            </div>
        )
    }
}

export default LoadingIndicador;