import React from "react";
import "./directory.styles.scss";
import MenuItem from "../menu-item/menu-item.component";

class Directory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl: "http://localhost:3000/images/collections/hats.png",
          id: 1,
          size: "small",
          linkUrl: "shop/hats",
        },
        {
          title: "jackets",
          imageUrl: "http://localhost:3000/images/collections/jackets.png",
          id: 2,
          size: "small",
          linkUrl: "shop/jackets",
        },
        {
          title: "sneakers",
          imageUrl: "http://localhost:3000/images/collections/sneakers.png",
          id: 3,
          size: "small",
          linkUrl: "shop/sneakers",
        },
        {
          title: "womens",
          imageUrl: "http://localhost:3000/images/collections/womens.png",
          size: "large",
          id: 4,
          linkUrl: "shop/womens",
        },
        {
          title: "mens",
          imageUrl: "http://localhost:3000/images/collections/men.png",
          size: "large",
          id: 5,
          linkUrl: "shop/mens",
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map((section) => {
          return (
            <MenuItem
              key={section.id}
              title={section.title}
              imageUrl={section.imageUrl}
              linkUrl={section.linkUrl}
              sectionSize={section.size}
            />
          );
        })}
      </div>
    );
  }
}

export default Directory;
