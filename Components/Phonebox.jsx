import React, {useState} from "react"
import PhoneInput from "react-phone-input-2"
import 'react-phone-input-2/lib/style.css'
import styles from '../styles/phonebox.module.css'

export default class Phonebox extends React.Component {
    constructor(props){
        super(props);
        this.state={phone: ""}
    }
   render(){
    return(
        <PhoneInput 
          country={'us'}
          
          value={this.state.phone}

          onChange={phone=>this.setState({phone})}
          />
          
);
    }
};