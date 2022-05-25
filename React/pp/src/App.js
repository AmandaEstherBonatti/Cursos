<<<<<<< HEAD
import React from 'react';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
=======
import React, {Component} from "react";
import Membro from './components/membros';

class App extends Component{
    render(){
        return(
            <div>
                <Membro nome='visitante'/>
            </div>
        );
    }
}
>>>>>>> 8a2a13fbf1185e11baca4612030794ceabaf1c1d

            </div>
        )
    }
}