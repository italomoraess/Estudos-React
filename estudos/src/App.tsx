import './App.css';
import styled from 'styled-components';
// import { Button } from './components/Button';
// import { Contador } from './components/Contador';
// import { Form } from './components/Form';
// import { Loading } from './components/Loading';

const Test = styled.div`
  backgound-color: blue;
  color: white
`;

function App() {

  // const actionButton = (texto: string) => {
  //   alert("Click No APP: " + texto)
  // }

  return (
    <div>
      {/* <Form /> */}
      {/* <Button text="Clicar" clickFn={actionButton}/> */}
      {/* <Contador title=''/> */}
      {/* <Loading /> */}
      <Test>
        <button className='button'>Clique aqui</button>
      </Test>
    </div>
  );
}

export default App;
