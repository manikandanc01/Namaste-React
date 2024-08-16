// -------------------------------------------------------------------------

/*
 1. Nested div's inside the root

  <div id="parent">
    <div id="child">
      <h1>I'm the h1 tag</h1>
    </div>
  </div>

  2. Nested div's with sibilings
     
  <div id="parent">
    <div id="child">
      <h1>I'm the h1 tag</h1>
      <h2>I'm the h2 tag </ h2> 
    </div>
  </div>

  (Single child - Give it directly)
  (Many child(sibilings) - Give it in the array child)

  3. Multiple div's

  <div id="parent">
    <div id="child">
      <h1>I'm the h1 tag</h1>
      <h2>I'm the h2 tag </ h2> 
    </div>
     <div id="child2">
      <h1>I'm the h1 tag</h1>
      <h2>I'm the h2 tag </ h2> 
    </div>
  </div>

    
*/

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm a h1 tag"),
    React.createElement("h2", {}, "I'm a h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm a h1 tag"),
    React.createElement("h2", {}, "I'm a h2 tag"),
  ]),
]);

// console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent); //Repalce the child inside the root with parent 

// -------------------------------------------------------------------------------

/*
//  already <div id="root"></div> is there in the HTML
//  we are going to add <h1 id="heading">Hello World from React!</h1> child to the root div

//  <div id="root">
//     <h1 id="heading">Hello World from React!</h1>  //child
//  </div>


const heading = React.createElement(
  "h1",
  { id: "heading", class: "element" },
  "Hello World from React!"
);

// console.log(heading); // It is a React Element(Object)

const root = ReactDOM.createRoot(document.getElementById("root"));

// console.log(root);

root.render(heading); // Render into HTML Element (Browser Understands)

*/
