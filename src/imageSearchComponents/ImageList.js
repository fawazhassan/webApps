import React from "react";
import "./ImageList.css";
import ImageCard from "./ImageCard";
import Spinner from "./common/spinner";
const ImageList = props => {
  const images = props.images.map(image => {
    return (
      <ImageCard key={image.AdditionalInfo.id} image={image} />
      //   <img
      //     key={image.AdditionalInfo.id}
      //     src={image.URL}
      //     alt={image.AdditionalInfo.description}
      //   />
    );
  });

  return props.loading ? (
    <div style={{ textAlign: "center" }}>
      <Spinner />
    </div>
  ) : (
    <div className="image-list">{images}</div>
  );
};

export default ImageList;
