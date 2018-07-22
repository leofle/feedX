import React from "react";
import StackGrid from "react-stack-grid";
import Search from "../Common/Search/Search";
import Btn from "../Common/Btn/Btn";
import Form from "../Common/Form/Form";
import "./Data.css";

class Data extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allItems: [],
      items: [
        {
          id:1,
          color: "blue",
          tags: "balls",
          height: 200
        },
        {
          id:2,
          color: "red",
          tags: "item",
          height: 100
        },
        {
          id:3,
          color: "orange",
          tags: "burger",
          height: 130
        },
        {
          id:4,
          color: "green",
          tags: ["item"],
          height: 250
        },
        {
          id:5,
          color: "hotpink",
          tags: "nachos",
          height: 120
        },
        {
          id:6,
          color: "red",
          tags: "tag1",
          height: 90
        },
        {
          id:7,
          color: "purple",
          tags: "lio",
          height: 220
        },
        {
          id:8,
          color: "yellow",
          tags: "burger",
          height: 250
        },
      ]
    };
  }

  searchItems = query => {
    if (!this.state.items) return false;

    let items = this.state.allItems.filter(item => {
      return item.tags.includes(query);
    });

    console.log(items);
    this.setState({ items });
  };
  componentDidMount() {
    localStorage.setItem("allItems", JSON.stringify(this.state.items));
    const items = JSON.parse(localStorage.getItem("allItems")) || [];
    this.setState({ items, allItems: items });
  }
  componentWillUnmount(){
    localStorage.setItem("allItems", JSON.stringify({}));
  }
  render() {
    return (
      <div className="dataWrapper">
        <Form>
          <Search searchItems={this.searchItems} type={'search'}/>
          <Btn type={"submit"} />
        </Form>
        {this.state.items &&
          this.state.items.length > 0 && (
            <StackGrid columnWidth={150} gutterWidth={20} gutterHeight={20}>
              {this.state.items.map((item, index) => {
                return (
                  <div
                    key={`key${index}`}
                    style={{ height: item.height, backgroundColor: item.color }}
                  >
                    {item.id}
                  </div>
                );
              })}
            </StackGrid>
          )}
      </div>
    );
  }
}

export default Data;
