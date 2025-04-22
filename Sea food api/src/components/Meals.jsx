import axios from "axios";
import { useEffect, useState } from "react";

const Meals = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios
            .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
            .then((res) => {
                console.log(res.data.meals);
                setItems(res.data.meals);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const itemsList = items.map(({ strMeal, strMealThumb, idMeal }) => {
        return (
            <div
                key={idMeal}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4"
            >
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <img
                        src={strMealThumb}
                        alt={strMeal}
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                        <p className="text-lg font-semibold text-black mb-2">
                            {strMeal}
                        </p>
                        <p className="text-sm text-black">ID: {idMeal}</p>
                    </div>
                </div>
            </div>
        );
    });

    return (
        <div className="flex flex-wrap justify-center bg-gray-100 min-h-screen p-4">
            {itemsList}
        </div>
    );
};

export default Meals;
