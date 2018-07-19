import React from "react";
import StackGrid from "react-stack-grid";
import Search from "../Common/Search/Search";
import Btn from "../Common/Btn/Btn";
import Form from "../Common/Form/Form";
import "./Data.css";

const Data = () => (
  <div className="dataWrapper">
    <Form>
      <Search />
      <Btn type={"submit"} />
    </Form>
    <StackGrid columnWidth={150} gutterWidth={20} gutterHeight={20}>
      <div key="key1" style={{ height: 200, backgroundColor: "blue" }}>
        Item 1
      </div>
      <div key="key2" style={{ height: 130, backgroundColor: "red" }}>
        Item 2
      </div>
      <div key="key3" style={{ height: 300, backgroundColor: "orange" }}>
        Item 3
      </div>
      <div key="key4" style={{ height: 200, backgroundColor: "purple" }}>
        Item 1
      </div>
      <div key="key5" style={{ height: 170, backgroundColor: "pink" }}>
        Item 2
      </div>
      <div key="key6" style={{ height: 200, backgroundColor: "yellow" }}>
        Item 3
      </div>
      <div key="key7" style={{ height: 140, backgroundColor: "navajowhite" }}>
        Item 1
      </div>
      <div key="key8" style={{ height: 90, backgroundColor: "hotpink" }}>
        Item 2
      </div>
      <div key="key9" style={{ height: 230, backgroundColor: "blue" }}>
        Item 3
      </div>
    </StackGrid>
  </div>
);

export default Data;
