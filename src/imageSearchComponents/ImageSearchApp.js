import React, { Component } from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import FilterBar from "./FilterBar";

class ImageSearchApp extends Component {
  state = { images: [], loading: false };
  URLlist;
  onSearchSubmit = term => {
    this.setState({ loading: true });
    unsplash
      .get("/search/photos", {
        params: {
          query: term,
          per_page: 30
        }
      })
      .then(res => {
        this.URLlist = res.data.results.map(i => {
          return {
            URL: i.urls.regular,
            AdditionalInfo: i
          };
        });
        console.log("URLList:");
        console.log(this.URLlist);
        this.setState({ images: this.URLlist, loading: false });
        console.log(this.getURLandTags(this.URLlist));
        console.log(this.filterURLsWithSpecificTag(this.URLlist, "building"));
      });
  };

  onFilterSubmit = term => {
    this.setState({
      images: this.filterURLsWithSpecificTag(this.URLlist, term)
    });
  };

  filterURLsWithSpecificTag = (Arr, tagToFind) => {
    return this.getURLandTags(Arr).filter(item => {
      return tagToFind === "" ? item : item.tags.includes(tagToFind);
    });
  };

  getURLandTags = Arr => {
    return Arr.map(obj => {
      var rObj = {};
      rObj.AdditionalInfo = obj.AdditionalInfo;
      rObj.URL = obj.URL;
      rObj.tags = this.getTagsofElement(obj);

      return rObj;
    });
  };
  getTagsofElement = ArrItem => {
    return ArrItem.AdditionalInfo.tags.map(tag => tag.title);
  };

  render() {
    return (
      <div className="container" style={{ marginTop: "10px" }}>
        <div className="row justify-content-md-center">
          <div className="col col-lg-6">
            <SearchBar onSubmit={this.onSearchSubmit} />
            <FilterBar onSubmit={this.onFilterSubmit} />
          </div>
        </div>
        <ImageList images={this.state.images} loading={this.state.loading} />
      </div>
    );
  }
}

export default ImageSearchApp;
