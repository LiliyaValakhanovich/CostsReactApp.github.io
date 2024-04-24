import './Costs.css';
import Card from '../UI/Card';
import CostFilter from './CostFilter';
import {useState} from 'react';
import CostList from './CostList';

function Costs (props) {

  const [selectedYear, setSelectedYear] = useState('2022');

  const changeYearHandler = (inputYear) => {
    setSelectedYear(inputYear);
    console.log(inputYear);
  }

  const filteredCosts = props.costs.filter(cost=>{
    return cost.date.getFullYear().toString() === selectedYear;
  })

  return(
    <div>
      <Card className="costs">
      <CostFilter year={selectedYear} onChangeYear={changeYearHandler}/>
      <CostList costs={filteredCosts}/>
      </Card>
    </div>
  )
}
export default Costs;