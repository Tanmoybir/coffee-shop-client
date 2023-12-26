import { useLoaderData } from "react-router-dom";
import CoffeeCard from "../../components/cards/coffeeCard";


const Home = () => {
    const coffees = useLoaderData()

    return (
        <div>
            {/* Banner */}
            <div className=""></div>
            {/* Coffee Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {
                    coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee}/>)
                }
            </div>
        </div>
    );
};

export default Home;