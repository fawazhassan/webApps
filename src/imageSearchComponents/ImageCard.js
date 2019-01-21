import React, { Component } from "react";
import Modal from "react-responsive-modal";
import "./ImageList.css";

class ImageCard extends Component {
  constructor(props) {
    super(props);

    this.imageRef = React.createRef();
    this.state = { spans: 0, open: false };
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);

    this.setState({ spans });
  };

  render() {
    const { AdditionalInfo, URL } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img
          className="imgIcon"
          ref={this.imageRef}
          alt={AdditionalInfo.description}
          src={URL}
          onClick={this.onOpenModal}
          style={{ margin: "auto", display: "block" }}
        />
        <Modal
          open={this.state.open}
          onClose={this.onCloseModal}
          center
          styles={{ width: "90vw" }}
        >
          <img
            src={URL}
            alt={AdditionalInfo.description}
            style={{ display: "block", margin: "auto", width: "90%" }}
          />

          <div className="centered"> {AdditionalInfo.description}</div>
        </Modal>
      </div>
    );
  }
}

export default ImageCard;
