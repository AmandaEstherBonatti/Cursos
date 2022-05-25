import React, {Component} from 'react'

class Mount extends Component {

    constructor(props){
        super(props);
        this.state = {
            hora:'00:00:00',
            interval: null
        };
    }

    componentDidMount(){
        if (!this.state.interval) {
            const interval = setInterval(() =>{
                this.setState({ hora: new Date().toLocaleTimeString()})
            }, 1000);
            
            this.setState({interval})
        }
    }

    componentWillUnmount () {
        this.setState({interval: null})
    }

    componentDidUpdate(){
        console.log('att')
    }

    render(){
        return(
            <div>
                <h1>Meu projetinho {this.state.hora}</h1>
            </div>
        );
    }
}

export default App;