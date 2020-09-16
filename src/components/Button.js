import React from 'react';

// class Button extends React.Component {


//   render() {
//     return (
//       <>
//       {this.props.Text ==="삭제" ?
//         <button style={{color:this.props.FontColor}} onClick={() =>this.props.OnClick(this.props.Info_id)} >{this.props.Text}{this.props.info_id}</button>:
//         <button>{this.props.Text}</button>
//     }
//       </>
//     )
//   }
// }


const Button =(({Text, FontColor, Info_id, OnClick})=>{
  const handleRemove =(id) => {
   
    OnClick(id)
  }
  
if(Text === "등록") return <button>{Text}</button>;
else return<button style={{color:FontColor}} onClick={() => handleRemove(Info_id)} >{Text}</button>;

})

export default Button;
