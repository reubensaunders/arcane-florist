import React, {Component} from 'react';
import Anime from 'react-anime';

class Level extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const divStyle = {
            backgroundColor: 'blue',
            display: 'block',
            height: '10px',
            width: this.props.level + '%',
          };
          
        return(            
            <div className="level" style={divStyle}></div>
        )
        
    }
}

export default Level;