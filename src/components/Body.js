import RestrauntCard from "./RestrauntCard";
import resList from "../utils/mockData"
import { useState } from "react"; // WE NEED TO IMPORT THE USESTATE FROM REACT, and we have to import it like named import
import resList from "../utils/mockData";

const Body = () =>{

// state variable its like state of the component, its a lingo used in react, - super powerful variable, to create super-powerful variable, we use hooks, we use react hooks which is known as use state, a hook is a normal javascript function at the end of the day which is given to us by react and that function comes with some superpowers and that function has some pre written code which gives it superpowers, also why usestate() is called state variable? because it maintains the state of your application/component
// local state variable - super powerful variable
// a local satte variables scope is inside that component
// how to create a state variable, we use the syntax const[stateVariable name] = useState();
// whenever you call a state variable like this -> usestate();          then how do you recieve that state varaible? we receive it inside an array, like const[listOfRestraunts] = useState();
// const[listOfRestraunts] = useState(); is similar to let listOfRestraunts; i.e. a normal JS variable
// how to pass default value? use the syntax const[stateVariable name] = useState([]);

// const [listOfRestraunts, setListOfRestraunts] = useState([{
//     "info": {
//       "id": "84718",
//       "name": "Pizza Hut",
//       "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
//       "costForTwo": "₹350 for two",
//       "cuisines": [
//         "Pizzas"
//       ],
//       "avgRating": 3.8,
//       "sla": {
//         "deliveryTime": 25,
//       },
//     },
//   },
//   {
//     "info": {
//         "id": "493172",
//         "name": "NIC Ice Creams",
//         "cloudinaryImageId": "85825a6d74b1059a63a9b688de9f67ce",
//         "costForTwo": "₹120 for two",
//         "cuisines": [
//           "Ice Cream",
//           "Desserts"
//         ],
//         "avgRating": 4.5,
//         "veg": true,
//         "sla": {
//           "deliveryTime": 22,
//     },
//   },
// },
//   {
//     "info": {
//         "id": "217033",
//         "name": "Domino's Pizza",
//         "cloudinaryImageId": "d0450ce1a6ba19ea60cd724471ed54a8",
//         "costForTwo": "₹400 for two",
//         "cuisines": [
//           "Pizzas",
//           "Italian",
//           "Pastas",
//           "Desserts"
//         ],
//         "avgRating": 4.1,
//         "sla": {
//           "deliveryTime": 30,
//       },
//     },
//   }])

  // now how do you modify this variable? because it is not normal variable which you declare by writing const before variable name, it is a state/ spatial variable with its unique declaration, we have to create it in a speacial way using a hook, usestate() hook, which gives you an array, so how do you modify it? by using a function and the function comes as the second parameterin the array, and here we have to write set before our state variable name like const [listOfRestraunts, setListOfRestraunts] = useState()
  // setListOfRestraunts function is used to update the list
// super powerful variable keeps the data layer in sync with the UI layer
// whenever a state variable updates, react rerenders the component, this is called rendering
    // normal javascript variable
    // let listOfRestrauntsJs =    [ {
    //     "info": {
    //       "id": "84718",
    //       "name": "Pizza Hut",
    //       "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
    //       "costForTwo": "₹350 for two",
    //       "cuisines": [
    //         "Pizzas"
    //       ],
    //       "avgRating": 3.8,
    //       "sla": {
    //         "deliveryTime": 25,
    //       },
    //     },
    //   },
    //   {
    //     "info": {
    //         "id": "493172",
    //         "name": "NIC Ice Creams",
    //         "cloudinaryImageId": "85825a6d74b1059a63a9b688de9f67ce",
    //         "costForTwo": "₹120 for two",
    //         "cuisines": [
    //           "Ice Cream",
    //           "Desserts"
    //         ],
    //         "avgRating": 4.5,
    //         "veg": true,
    //         "sla": {
    //           "deliveryTime": 22,
    //     },
    //   },
    // },
    //   {
    //     "info": {
    //         "id": "217033",
    //         "name": "Domino's Pizza",
    //         "cloudinaryImageId": "d0450ce1a6ba19ea60cd724471ed54a8",
    //         "costForTwo": "₹400 for two",
    //         "cuisines": [
    //           "Pizzas",
    //           "Italian",
    //           "Pastas",
    //           "Desserts"
    //         ],
    //         "avgRating": 4.1,
    //         "sla": {
    //           "deliveryTime": 30,
    //       },
    //     },
    //   }];

    const [listOfRestraunts, setListOfRestraunts] = useState(resList)
    return(
        <div className='body'>
            <div className='filter'> <button className = 'filter-btn' onClick= {() => 
              {
                // listOfRestraunts = listOfRestraunts.filter((res) => res.info.avgRating>4 ); console.log(listOfRestraunts)}
                const filteredList = listOfRestraunts.filter((res) => res.info.avgRating>4 );
                setListOfRestraunts(filteredList);
            }}>
                Top-Rated Restraunts</button> </div>
            <div className="res-container">
                {listOfRestraunts.map(restraunt => (<RestrauntCard key = {restraunt.info.id} resData={restraunt}/>))};
            </div>
        </div>  
    );
};

export default Body;













                {/* <RestrauntCard resData = {resList[0]}/>
                <RestrauntCard resData = {resList[1]}/>
                <RestrauntCard resData = {resList[2]}/>
                <RestrauntCard resData = {resList[3]}/>
                <RestrauntCard resData = {resList[4]}/>
                <RestrauntCard resData = {resList[5]}/>
                <RestrauntCard resData = {resList[6]}/>
                <RestrauntCard resData = {resList[7]}/>
                <RestrauntCard resData = {resList[8]}/>
                <RestrauntCard resData = {resList[9]}/>
                <RestrauntCard resData = {resList[10]}/>
                <RestrauntCard resData = {resList[11]}/>
                <RestrauntCard resData = {resList[12]}/>
                <RestrauntCard resData = {resList[13]}/>
                <RestrauntCard resData = {resList[14]}/>
                <RestrauntCard resData = {resList[15]}/>
                <RestrauntCard resData = {resList[16]}/>
                <RestrauntCard resData = {resList[17]}/>
                <RestrauntCard resData = {resList[18]}/>
                <RestrauntCard resData = {resList[19]}/> */}