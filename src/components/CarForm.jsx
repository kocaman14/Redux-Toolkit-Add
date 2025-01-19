import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCar } from "../features/cars/carsSlice";
import CarList from "./CarList";

function CarForm() {
  const dispatch =useDispatch()

  const [name, setName] = useState("");
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addCar({model:name,price:value}))
   

    setName("");
    setValue("");
  };

  return (
    <div className="h-screen bg-gray-300 flex justify-center items-center">

    <div className="w-[1200px] h-[900px] ">
      <div className=" border-2 bg-white rounded-xl shadow-md ">

      <h1 className="text-3xl leading-[50px]">Araba Ekle</h1>
      <form onSubmit={handleSubmit} className="flex ">
        <div>
          <label  className="font-bold">Marka</label>
          <input
          className="placeholder:pl-2 ml-2  border border-gray-300"
          value={name}
          onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div >
          <label className="font-bold ml-4">Fiyat</label>
          <input
          className="placeholder:pl-2 ml-2  border border-gray-300"
          placeholder="0"
          min="0"
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <div >
          <button className="bg-[#4f46e5] rounded ml-4">Gönder</button>
        </div>
      </form>
          </div>
         <div className="border-2 bg-white rounded-xl shadow-md ">
          <h2 className="font-bold text-xl leading-[50px]">Arabalarım</h2>
      <CarList />
          </div> 
    </div>
          </div>
  );
}

export default CarForm;
