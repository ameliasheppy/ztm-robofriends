import React from "react";

//we've learned props and state. Now let's learn children.
//scroll can use children to do things.
//using props.children allows us to make a scrollable comp
//make a div, put {props.children} in it
//you can make a css scroll file or do inline

const Scroll = (props) => {
  console.log(props);
  //go look in the console and props has children
  return (
    <div
      style={{
        overflowY: "scroll",
        border: "5px solid black",
        height: "500px",
      }}
    >
      {props.children}
    </div>
  );
};
export default Scroll;
