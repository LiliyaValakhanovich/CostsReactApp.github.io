import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";
import {useState} from 'react';

const INITIAL_COSTS =[
  {
    id: 1,
    date: new Date(2024, 3, 16),
    description: "Холодильник",
    amount: 999.99
  },
  {
    id: 2,
    date: new Date(2024, 3, 17),
    description: "MacBook",
    amount: 999.99
  },
  {
    id: 3,
    date: new Date(2022, 3, 18),
    description: "Холодильник",
    amount: 999.99
  },
]

function App() {

  const [costs, setCosts] = useState(INITIAL_COSTS);

  const addCostHandler = (cost) => {
    setCosts((previousState)=>{
      return[cost, ...previousState]})
  }

  return (
    <div>
      <NewCost onAddCost={addCostHandler}/>
      <Costs costs={costs}/>
    </div>
  );
}

export default App;
