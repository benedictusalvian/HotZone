// import React, { Component } from "react";
//   const todoItems = [
    // {
    //   ID: 1,
    //   name: "Kennedy Town",
    //   coordinateX: 100,
    //   coordinateY: 23,
    //   address: "Kennedy Town, Hong Kong",
    //   completed: false
    // },
    // {
    //   ID: 2,
    //   name: "Yuen Long",
    //   coordinateX: 245,
    //   coordinateY: 234,
    //   address: "Yuen Long, Hong Kong",
    //   completed: false
    // }
//   ];
//   class LandingPage extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         viewCompleted: false,
//         todoList: todoItems
//       };
//     }
//     displayCompleted = status => {
//       if (status) {
//         return this.setState({ viewCompleted: true });
//       }
//       return this.setState({ viewCompleted: false });
//     };
//     renderTabList = () => {
//       return (
//         <div className="my-5 tab-list">
//           <span
//             onClick={() => this.displayCompleted(true)}
//             className={this.state.viewCompleted ? "active" : ""}
//           >
//             Cases
//           </span>
//           <span
//             onClick={() => this.displayCompleted(false)}
//             className={this.state.viewCompleted ? "" : "active"}
//           >
//             Locations
//           </span>
//         </div>
//       );
//     };
//     renderItems = () => {
//       const { viewCompleted } = this.state;
//       const newItems = this.state.todoList.filter(
//         item => item.completed == viewCompleted
//       );
//       return newItems.map(item => (
//         <li
//           key={item.ID}
//           className="list-group-item d-flex justify-content-between align-items-center"
//         >
//           <span
//             className={`todo-title mr-2 ${
//               this.state.viewCompleted ? "completed-todo" : ""
//             }`}
//             title={item.name}
//           >
//             {item.name} X:{item.coordinateX} Y:{item.coordinateY} {item.address}
//           </span>
//           <span>
//             <button className="btn btn-secondary mr-2"> Edit </button>
//             <button className="btn btn-danger">Delete </button>
//           </span>
//         </li>
//       ));
//     };
//     render() {
//       return (
//         <main className="content">
//           <h1 className="text-white text-center my-4">HotZone 🔥</h1>
//           <div className="row ">
//             <div className="col-md-6 col-sm-10 mx-auto p-0">
//               <div className="card p-3">
//                 <div className="">
//                   <button className="btn btn-primary">Add location</button>
//                 </div>
//                 {this.renderTabList()}
//                 <ul className="list-group list-group-flush">
//                   {this.renderItems()}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </main>
//       );
//     }
//   }
//   export default LandingPage;