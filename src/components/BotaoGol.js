import React,{Component} from 'react';

class BotaoGol extends Component{
    handleClick(event){
        event.preventDefault();
        this.props.marcarGol();
    }
    render(){
        return(
            <button onClick={this.handleClick.bind(this)} >{this.props.label}</button>
        );
    }
}
BotaoGol.defaultProps = {
    label: 'Gol!'
}
export default BotaoGol;