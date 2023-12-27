import { FaRegEye } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { MdOutlineDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";



const CoffeeCard = ({coffee}) => {
    
    const {_id,category,photo,name,taste} = coffee


    const handleDelete = (id) => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffee/${id}`,{
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if(data. deletedCount > 0) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });
                    }
                })
            }
          });
        
    }
    return (
        <div>
            <div className="flex items-center bg-[#F4F3F0] justify-around rounded-lg">
                {/* Left Side Image */}
                <div className="">
                <img src={photo} alt="" />
                </div>
                {/* Middle Text */}
                <div className="space-y-4">
                    <h1>Name: {name}</h1>
                    <p>Chef: {category}</p>
                    <p>Price: ${taste}</p>
                </div>
                {/* Icons */}
                <div className="space-y-4">
                <FaRegEye className="bg-orange-300 text-white p-2 text-3xl mb-4"/>
                <Link to={`/updateCoffee/${_id}`}><MdEdit className="bg-black text-white p-2 text-3xl"/></Link>
                <MdOutlineDelete className="bg-red-500 text-white p-2 text-3xl" onClick={()=>handleDelete(_id)}/>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;