import React from 'react';

//class 형 Input 컴포넌트
// class Input extends React.Component {
// render(){
//     return(
//         <>
//         <input name={this.props.Name} placeholder={this.props.Placeholder} value={this.props.Value} onChange={this.props.OnChange} />

//         </>
//     )
// }
// }

//함수형 Input 컴포넌트
const Input = React.memo(({Name,Placeholder,Value,OnChange }) => {
    return(
        <>
        <input name={Name} placeholder={Placeholder} value={Value} onChange={OnChange} />
        </>
    )
})

export default Input;