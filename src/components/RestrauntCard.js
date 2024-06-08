import { CDN_URL } from "../utils/constants"
const RestrauntCard = (props) => { // props is just like an argument to a function, like in react world we say that we have passed props to a react component, whenever you have to pass dynamically some data to a component, you pass it as a props 
    // console.log(props); // prints objectwhere resname : Meghana Foods and cuisine, similarly for KFC also
    const {resData} = props;
    const{cloudinaryImageId, name, cuisines, avgRating, costForTwo,sla } = resData.info; // doing oprional chaining and destructiring on the flyer
    const { deliveryTime } = sla; // Extract deliveryTime from sla
    return(
        <div className="res-card" style = {{backgroundColor: "#f0f0f0"}}>
            <img className= "res-logo" alt = "res-logo" src ={ CDN_URL + resData.info.cloudinaryImageId}/>            
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    );  
};
export default RestrauntCard;