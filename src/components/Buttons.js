import satData from "./satData";
import "./styling.css";

const Buttons = ({ filterByType, setSat, displaySats }) => {
  // Chose to use destructuring instead of reading properties from function parameters
  // const filterByType = props.filterByType;
  // const setSat = props.setSat;
  // const displaySats = props.displaySats;

  return (
    <div className={'flex-container'}>
      {/* <button>Placeholder Button</button> */}
      	
      {displaySats.map((sat, id) => {
        return (
          <button onClick={() => filterByType(sat)} key={id}>
            {sat} Orbit
          </button>
        );
      })}

      <button onClick={() => setSat(satData)}>All Orbits</button>
    </div>
  )
};

export default Buttons;