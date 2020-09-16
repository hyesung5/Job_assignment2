import React from 'react';

class Input extends React.Component {
render(){
    return(
        <>
        <input name={this.props.Name} placeholder={this.props.Placeholder} value={this.props.Value} onChange={this.props.OnChange} />

        </>
    )
}
}

export default Input;