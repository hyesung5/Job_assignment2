import React from 'react';

// class Input extends React.Component {
// render(){
//     return(
//         <>
//         <input name={this.props.Name} placeholder={this.props.Placeholder} value={this.props.Value} onChange={this.props.OnChange} />

//         </>
//     )
// }
// }

const Input = React.memo(({Name,Placeholder,Value,OnChange }) => {
    return(
        <>
        <input name={Name} placeholder={Placeholder} value={Value} onChange={OnChange} />
        </>
    )
})

export default Input;