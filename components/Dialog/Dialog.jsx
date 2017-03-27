import React from 'react';
import BlurPageDialog from './BlurPageDialog';

class Dialog extends React.Component {
  render() {
    if (this.props.isOpen === false) {
      return null;
    }

    const { children, onRequestClose } = this.props;

    return (
      <div>
        <button
          className="close-button-icon"
          onClick={this.context.onRequestClose}
        >
          x
        </button>
        <div className="dialog">
          {children}
        </div>
        <BlurPageDialog onRequestClose={onRequestClose} />
      </div>
    );
  }
}

Dialog.contextTypes = {
  onRequestClose: React.PropTypes.func
};

export default Dialog;
