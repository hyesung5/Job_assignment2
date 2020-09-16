import React from 'react';

class Button extends React.Component {


  render() {
    return (
      <>
      {this.props.Text ==="삭제" ?
        <button style={{color:this.props.FontColor}} onClick={() =>this.props.onClick(this.props.info_id)} >{this.props.Text}{this.props.info_id}</button>:
        <button>{this.props.Text}</button>
    }
      </>
    )
  }
}

export default Button;
