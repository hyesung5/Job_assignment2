import React from 'react';

//class 형 Text 컴포넌트
// class Text extends React.Component {
//   render() {
//     return (
//       <>
//         <div
//           style={{
//             color: this.props.TextColor,
//             margin: this.props.Margin
//           }}
//         >
//           {this.props.TextTitle}
//         </div>
//       </>
//     )
//   }
// }

//함수형  Text 컴포넌트
const Text = React.memo(({TextColor, Margin, TextTitle})=> {
  return(
    <div style={{color:TextColor,
    margin: Margin}}>
{TextTitle}
    </div>
  )

})

export default Text;
