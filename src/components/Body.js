import RestrauntCard from "./RestrauntCard";
import resList from "../utils/mockData"
import { useState, useEffect } from "react"; // WE NEED TO IMPORT THE USESTATE AND USEEFFECT FROM REACT, and we have to import it like named import
// import resList from "../utils/mockData";
import Shimmer from "./Shimmer";

const Body = () =>{

// state variable its like state of the component, its a lingo used in react, - super powerful variable, to create super-powerful variable, we use hooks, we use react hooks which is known as use state, a hook is a normal javascript function at the end of the day which is given to us by react and that function comes with some superpowers and that function has some pre written code which gives it superpowers, also why usestate() is called state variable? because it maintains the state of your application/component
// local state variable - super powerful variable
// a local satte variables scope is inside that component
// how to create a state variable, we use the syntax const[stateVariable name] = useState();
// whenever you call a state variable like this -> usestate();  then how do you recieve that state varaible? we receive it inside an array, like const[listOfRestraunts] = useState();
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

    // const [listOfRestraunts, setListOfRestraunts] = useState(resList)
    const [listOfRestraunts, setListOfRestraunts] = useState([]);
    const [fliteredRestraunt,setFilteredRestraunt] = useState([]);

    useEffect(() => {
      fetchData();
    }, []);// syntax of useEffect is useEffect(); as it is a hook and a hook is a normal javascipt function, useEffect takes 2 arguments, 1st is an arrow function which is a callback function, 2nd argument is a dependency array, i.e. the default syntax of useEffect is useEffect(()=> {}, []);
    // now question is that when will this useEffect callback function will be called? so the answer is that it will be called after your component renders ,so if you have to do something after rendering the component, tou have to write it inside useEffect, this is the purpose of useEffect
    // console.log("Body Rendered");
    // why we are using useEffect, it will be helpful when we are using the 2nd Approach to render the components of our web page for better UX i.e. user experience which was loads -> render -> API -> Renders
const [searchText, setSearchText] = useState("");
    const fetchData = async () => {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1913502&lng=81.6515577&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
      // now we have data right, we need to convert this data into JSON
      // lets convert this readable stream into JSON
      // i will again do a await and will wait for the promise to resolve and will convert this data to JSON
       const json = await data.json();
       console.log(json);
       // we couldn't call due to CORS policy, so basically calling swiggy.com from localhost has been blocked due to CORS policy, who is blocking us? so the answer is our browsers block us to call API from one origin to different origin, i.e. our browsers are not allowing us to call Swiggy API from localhost from one origin to different origin, so if there is an origin mismatch then the browser blocks that API call, that is a CORS policy, we can use an extension allow CORS to bypass the CORS policy

       // as soon as we got this data, i will put that data in my listOfRestraunts, and as soon my listOfRestraunts updates, React will re-render this component and it will update the UI with the new data that the listOfRestraunts has

      //  setListOfRestraunts(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
      // we will do optional chaining, why? Optional chaining (?.) is a JavaScript feature introduced in ES2020 (ES11) that allows you to access nested object properties in a safe way, without experiencing errors if one of the intermediate properties along the chain is null or undefined. If any of the intermediate properties (data, cards[1], card, card, gridElements, or infoWithStyle) is null or undefined, the expression will short-circuit and return undefined instead of throwing an error.
       setListOfRestraunts(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
       setFilteredRestraunt(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
//conditional rendering
    // if(listOfRestraunts.length === 0){  // listOfRestraunts.length === 0 means that the API hasn't responded to us yet
    //   return <Shimmer />
    // }
    //we will use swiggy API in our local machine, and what does fetch returns? it returns a promise and how do we handle a promise? we handle a promise by using .then and and writing try and catch, instead of doing that we can use another method which is the industry standard i.e. async await promise
    return listOfRestraunts.length === 0 ? <Shimmer/> : (  // using ternary operator to do conditional operating
        <div className='body'>
            <div className='filter'> 
            <div className='search'>
              <input type="text" placeholder="Search Restraunts" className="search-box" value = {searchText} onChange={(e) => {setSearchText(e.target.value)}} />
              <button className="search-btn" onClick={() => {
                //Filter the Restraunt cards and update the UI
                // to do this, i need to get the value of the value of whatever is written in the input box and bind that value to a local state variable
                // whenever we change the local state variable, react re-renders the component, i.e. whenever searchText is getting changed after every key press, my whole body component is getting re-rendered 
                // whenever state variables update, react triggers a reconciliation cycle(re-renders the component)
                console.log(searchText);
                const fliteredRestraunt = listOfRestraunts.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase())  );
                setFilteredRestraunt(fliteredRestraunt);
              }}>Search
              </button>
            </div>
            <button className = 'filter-btn' onClick= {() => 
              {
                // listOfRestraunts = listOfRestraunts.filter((res) => res.info.avgRating>4 ); console.log(listOfRestraunts)}
                const filteredList = listOfRestraunts.filter((res) => res.info.avgRating>4 );
                setListOfRestraunts(filteredList);
            }}>
                Top-Rated Restraunts</button> </div>
            <div className="res-container">
                {fliteredRestraunt.map(restraunt => (<RestrauntCard key = {restraunt.info.id} resData={restraunt}/>))};
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