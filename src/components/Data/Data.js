import React from "react";
import StackGrid from "react-stack-grid";
import Search from "../Common/Search/Search";
import Btn from "../Common/Btn/Btn";
import Form from "../Common/Form/Form";
import Widget from "../Common/Widget/Widget";
import "./Data.css";
import {debounce} from "../../utils/utils";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../Common/Loader/Loader";
class Data extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allItems: [],
      items: this.createElems(28),
    };
  }

  makeTag = ()=> {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (let i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }


  getRandomHeight = ()=> {
    return Math.floor(Math.random() * 200) + 100;
  }

  getRandomColor = ()=> {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  createElems = (numElms, lastIndex = 0)=> {
    let objDemo = {
      id:null,
      color: "",
      tags: "",
      height: null
    }
    let arr = Array(numElms).fill(objDemo);
    let resArr = arr.map((arrelm, index)=>{
      return arrelm = Object.assign({}, objDemo, {id: lastIndex++ || index, color: this.getRandomColor(), tags: this.makeTag(), height: this.getRandomHeight()})
    })
    return resArr;
  }

  searchItems = debounce(query => {
    if (!this.state.items) return false;

    let items = this.state.allItems.filter(item => {
      return item.tags.includes(query);
    });

    this.setState({ items });
  }, 1000);

  fetchMoreData = () => {
    let index = this.state.items.length;
      this.setState({
        items: [...this.state.items, ...this.createElems(10, index)],
      });
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
        <InfiniteScroll
          dataLength={this.state.items.length}
          next={this.fetchMoreData}
          hasMore={true}
          loader={<Loader color={'grey'}/>}
        >
        {this.state.items &&
          this.state.items.length > 0 && (
            <StackGrid columnWidth={150} gutterWidth={20} gutterHeight={20}>
              {this.state.items.map((item, index) => {
                return (
                  <Widget key={`key${index}`} item={item} />
                );
              })}
            </StackGrid>
          )}
        </InfiniteScroll>
      </div>
    );
  }
}

export default Data;
