import { IMG_CDN_URL } from "../config";
const RestaurantCard = (props) => {
    const { name, slugs, cuisines, avgRating, cloudinaryImageId } = props
    return (
        <div className="card">
            <img src={IMG_CDN_URL + cloudinaryImageId} alt="img" />
            <h2>{name}</h2>
            <p>{slugs?.restaurant}</p>
            <h5>{cuisines.join(", ")}</h5>
            <h5>Rating: {avgRating}</h5>
        </div>
    )
}

export default RestaurantCard;