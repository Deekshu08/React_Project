/**
 *
 * < id="parent">
 *  <div id="child">
 *    <h1>I'm an h1 tag</h1>
 *    <h2>I'm an h2 tag</h2>
 *  </div>
 *  <div id="child2">
 *    <h1>I'm an h1 tag</h1>
 *    <h2>I'm an h2 tag</h2>
 *  </div>
 * </div>;
 *
 * ReactElement(Object) = HTML(Browser Understands)
 *
 */

// It is for one children

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" },
//     React.createElement("h1", {}, "I'm an h1 tag"),
//     )
// );

// It is for one or more siblings then they wrapup inti into an array i.e., []

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "I'm an h1 tag"),
//     React.createElement("h2", {}, "I'm an h2 tag"),
//   ])
// );

// It is for one or more children then they wrapup inti into an array i.e., []


const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag"),
  ]),
]);


// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Hello world from React!"
// );

// console.log(heading);
console.log(parent);  // object

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(parent);
