import React, { Component } from "react";
import Card from "./Card";
// import faker from "faker";

export default class Cards extends Component {
  constructor(props) {
    super(props);
    const array1 = [
      {
        name: "Elyssa Roob",
        email: "Maudie_Kiehn2@gmail.com",
        avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/magoo04/128.jpg"
      },
      {
        name: "Mya Robel",
        email: "Mckenna11@gmail.com",
        avatar:
          "https://s3.amazonaws.com/uifaces/faces/twitter/ajaxy_ru/128.jpg"
      },
      {
        name: "Ezequiel Koss",
        email: "Lexie_Lemke64@gmail.com",
        avatar:
          "https://s3.amazonaws.com/uifaces/faces/twitter/cdavis565/128.jpg"
      },
      {
        name: "Marianne Bartoletti",
        email: "Adrianna.Spencer59@hotmail.com",
        avatar:
          "https://s3.amazonaws.com/uifaces/faces/twitter/ryanjohnson_me/128.jpg"
      },
      {
        name: "Kara Aufderhar",
        email: "Evangeline_Borer91@hotmail.com",
        avatar:
          "https://s3.amazonaws.com/uifaces/faces/twitter/albertaugustin/128.jpg"
      },
      {
        name: "Melissa Pagac",
        email: "Lea.Windler2@hotmail.com",
        avatar:
          "https://s3.amazonaws.com/uifaces/faces/twitter/andresenfredrik/128.jpg"
      },
      {
        name: "Ms. Alanna Smitham",
        email: "Keyshawn_Kunze42@hotmail.com",
        avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/doooon/128.jpg"
      },
      {
        name: "Nikolas Powlowski PhD",
        email: "Mireya78@yahoo.com",
        avatar:
          "https://s3.amazonaws.com/uifaces/faces/twitter/jonathansimmons/128.jpg"
      },
      {
        name: "Shanny Breitenberg Sr.",
        email: "Darryl.Prohaska13@gmail.com",
        avatar:
          "https://s3.amazonaws.com/uifaces/faces/twitter/bergmartin/128.jpg"
      },
      {
        name: "Miss Sedrick Barton",
        email: "Wade_Bernier62@yahoo.com",
        avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/yecidsm/128.jpg"
      },
      {
        name: "Hertha Cartwright V",
        email: "Cora28@gmail.com",
        avatar:
          "https://s3.amazonaws.com/uifaces/faces/twitter/madewulf/128.jpg"
      },
      {
        name: "Kiarra Terry",
        email: "Bart_Pfannerstill94@yahoo.com",
        avatar:
          "https://s3.amazonaws.com/uifaces/faces/twitter/joemdesign/128.jpg"
      },
      {
        name: "Miss Jamal Langosh",
        email: "Carrie87@yahoo.com",
        avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/mattlat/128.jpg"
      },
      {
        name: "Mervin Hoeger I",
        email: "Brandyn_Johnston49@yahoo.com",
        avatar:
          "https://s3.amazonaws.com/uifaces/faces/twitter/kylefoundry/128.jpg"
      },
      {
        name: "Junior Thiel",
        email: "Ryley.Auer36@hotmail.com",
        avatar:
          "https://s3.amazonaws.com/uifaces/faces/twitter/spacewood_/128.jpg"
      },
      {
        name: "Meggie Bergnaum",
        email: "Vidal34@hotmail.com",
        avatar:
          "https://s3.amazonaws.com/uifaces/faces/twitter/sokaniwaal/128.jpg"
      },
      {
        name: "Bradford Leffler",
        email: "Lindsay.Howell@yahoo.com",
        avatar:
          "https://s3.amazonaws.com/uifaces/faces/twitter/posterjob/128.jpg"
      },
      {
        name: "Lempi Hermiston",
        email: "Kyra4@yahoo.com",
        avatar:
          "https://s3.amazonaws.com/uifaces/faces/twitter/abovefunction/128.jpg"
      },
      {
        name: "Dr. Johnathon Cartwright",
        email: "Betty_Goyette21@yahoo.com",
        avatar:
          "https://s3.amazonaws.com/uifaces/faces/twitter/batsirai/128.jpg"
      },
      {
        name: "Otilia Hyatt",
        email: "Harley31@hotmail.com",
        avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/dawidwu/128.jpg"
      },
      {
        name: "Candido Zulauf",
        email: "Ressie.Bruen55@hotmail.com",
        avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/ariil/128.jpg"
      },
      {
        name: "Leanna Hoeger",
        email: "Javon.Conroy@gmail.com",
        avatar:
          "https://s3.amazonaws.com/uifaces/faces/twitter/pehamondello/128.jpg"
      },
      {
        name: "Brooks Mante",
        email: "Judah.Blick63@hotmail.com",
        avatar:
          "https://s3.amazonaws.com/uifaces/faces/twitter/Talbi_ConSept/128.jpg"
      },
      {
        name: "Haskell Kuphal",
        email: "Cory.Fahey64@hotmail.com",
        avatar:
          "https://s3.amazonaws.com/uifaces/faces/twitter/derekebradley/128.jpg"
      },
      {
        name: "Emmalee Runolfsdottir",
        email: "Ella61@hotmail.com",
        avatar:
          "https://s3.amazonaws.com/uifaces/faces/twitter/steynviljoen/128.jpg"
      }
    ];

    this.state = {
      fullList: array1,
      displayData: null
    };

    this.pageSelector = [];

    // var array2 = [];
    // for (var i = 0; i < 25; i++) {
    //   array2.push({
    //     name: faker.name.findName(),
    //     email: faker.internet.email(),
    //     avatar: faker.image.avatar()
    //   });
    // }
    // console.log(array2);
  }

  onClick = e => {
    if (e.target.name === "dummy") {
      e.target.innerText = "No Redirect";
    }
  };

  componentDidMount() {
    let AllCardsData = [];

    let pageNumber;

    this.props.match.params.pageNumber == null
      ? (pageNumber = 1)
      : (pageNumber = this.props.match.params.pageNumber);

    for (let i = 0; i < this.state.fullList.length; i++) {
      AllCardsData.push(
        <Card
          key={`${i}_Card"`}
          cardData={this.state.fullList[i]}
          onClick={this.onClick}
        />
      );
    }

    for (let i = 0; i < Math.ceil(this.state.fullList.length / 8); i++) {
      this.pageSelector.push(
        <span key={`${i + 1}_Page`} className="mx-4">
          <a href={`/cards/${i + 1}`}>{i + 1}</a>
        </span>
      );
    }

    this.setState({
      displayData: AllCardsData.slice(8 * (pageNumber - 1), 8 * pageNumber)
    });
  }
  render() {
    return (
      <div className="container">
        <div className="text-center my-5 ">{this.pageSelector.map(e => e)}</div>
        <div className="row mt-4">{this.state.displayData}</div>
        <div />
      </div>
    );
  }
}
