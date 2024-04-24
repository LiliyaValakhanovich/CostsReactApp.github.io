import './DiagramBar.css';


function DiagramBar (props) {
  return(
    <div className='diagram-bar'>
      <div className='diagram-bar__inner'>
        <div className='diagram-bar__fill'></div>
      </div>
      <div className='diagram-bar__label'>{props.label}</div>
    </div>
  );
};
export default DiagramBar;