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
          color: "blue",
          tag: "balls",
          height: 200
        },
        {
          color: "red",
          tag: "item",
          height: 100
        },
        {
          color: "orange",
          tag: "balls",
          height: 130
        },
        {
          color: "green",
          tag: "item",
          height: 250
        },
        {
          color: "hotpink",
          tag: "itemballs",
          height: 120
        }
      ]
    };
  }
  searchItems = query => {
    if (!this.state.items) return false;

    let items = this.state.allItems.filter(item => {
      return item.tag.includes(query);
    });
    this.setState({ items });
  };
  componentDidMount() {
    localStorage.setItem("allItems", JSON.stringify(this.state.items));
    const items = JSON.parse(localStorage.getItem("allItems")) || [];
    this.setState({ items, allItems: items });
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
                    {item.text}
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
