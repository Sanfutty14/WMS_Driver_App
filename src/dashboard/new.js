import './styles.css';
import React, {useState} from 'react';
export default function App() {
  const [counter, setCounter] = useState([
    {name: 'sanfar', married: false},
    {name: 'nikshay', married: true},
    {name: 'karthick', married: false},
  ]);
  const changeKarthick = id => {
    console.log(id);
    let updateArray = counter;
    let index = counter.findIndex(item => item.name === id);
    updateArray[index].married = !counter[index].married;
    setCounter([...updateArray]);
  };
  console.log(counter);
  return (
    <div className="App">
      {counter.map((item, index) => (
        <div key={index}>
          <p>{item.name}</p>
          <p>{item.married === true ? 'Yes' : 'No'}</p>
        </div>
      ))}
      <button onClick={() => changeKarthick('karthick')}>Click me</button>
    </div>
  );
}
