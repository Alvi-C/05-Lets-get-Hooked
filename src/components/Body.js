import { useState } from "react"
import { restaurantList } from "../config"
import RestaurantCard from "./RestaurantCard"

function filterData(searchText, restaurants) {
    const data = restaurants.filter((restaurant) => restaurant.data.name.includes(searchText))
    return data;
}


const Body = () => {
    const [restaurants, setRestaurants] = useState(restaurantList)
    const [searchText, setSearchText] = useState("");

    return (
        <>
            <div className="search-container">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)} />
                <button
                    className="search-btn"
                    onClick={() => {
                        // need to filter data
                        const data = filterData(searchText, restaurants)
                        // update the state - restaurants
                        setRestaurants(data)
                    }}
                >
                    Search
                </button>
            </div>

            <div className="restaurant-list">
                {
                    restaurants.map((restaurant) => {
                        return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
                    })
                }
            </div>
        </>
    )
}

export default Body;