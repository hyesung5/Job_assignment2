import React from 'react';

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

const Text = React.memo(({TextColor, Margin, TextTitle})=> {
  return(
    <div style={{color:TextColor,
    margin: Margin}}>
{TextTitle}
    </div>
  )

})

export default Text;
