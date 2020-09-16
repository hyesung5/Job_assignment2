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


const Button =React.memo(({Text, FontColor, Info_id, OnClick})=>{
  return(
<>
{Text === "등록" ? <button>{Text}</button>: <button style={{color:FontColor}} onClick={()=>OnClick(Info_id)} >{Text}</button>}

</>
  )

})

export default Button;
