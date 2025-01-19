import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, removeCar } from "../features/cars/carsSlice"
import { FaChevronUp } from "react-icons/fa6";
import { FaChevronDown} from "react-icons/fa6";


function CarList() {

  const {cars,count} = useSelector((state)=>state.counter)
const dispatch = useDispatch()
  const onClick = (car) => {
dispatch(removeCar(car))

}

  const renderedCars = cars.map((car, i) => {
    return (
      <div key={i} className=" border-2 bg-white rounded-xl shadow-md flex justify-between items-center">
        
        <p>
          {car.model} - ${car.price}
        </p>
        <div style={{display:"flex",justifyContent: 'center',alignItems: 'center'}}>
          <div>

        <button className='bg-[#dc2626] w-[50px] rounded' onClick={() => onClick(car.model)}>
          Sil
        </button>
          </div>
        
<div>

        <label className="mr-4 ml-4 font-bold " >Adet:<span className="ml-1 w-[5px] h-[5px] border-2 rounded-[80%] bg-[#34d399]">{car.count}
          </span>
          </label>
</div>
<div style={{display:"flex",flexDirection: 'column', }}>

        <button onClick={()=>dispatch(increment(car.model))}>
          <FaChevronUp />
          </button>
          <button onClick={()=>dispatch(decrement(car.model))}>

        <FaChevronDown />
          </button>
</div>

        </div>
      </div>
    )
  })

  return (
    <div>
      {renderedCars.length ? (
        renderedCars
      ) : (
        <div className="text-red-700" >Başlamak için araba ekleyin</div>
      )}
    </div>
  )
}

export default CarList
