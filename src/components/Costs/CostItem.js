import {useState} from 'react';
import './CostItem.css';
import CostDate from './CostDate';
import Card from '../UI/Card';

function CostItem (props) {
  const [description, setDescription] = useState(props.description);
  
  function changeDescriptionHandler() {
    setDescription('New text');
  }

  return (
    <Card className='cost-item'>
      <CostDate date={props.date}/>
      <div className='cost-item__description'>
        <h2>{description}</h2>
        <div className='cost-item__price'>${props.amount}</div>
      </div>
      <button onClick={changeDescriptionHandler}>change</button>
    </Card>
  )
}
export default CostItem;