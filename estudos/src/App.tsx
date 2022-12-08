import './App.css';
import { Button } from './components/Button';
import { Contador } from './components/Contador';
import { Form } from './components/Form';
import { Loading } from './components/Loading';

function App() {

  const actionButton = (texto: string) => {
    alert("Click No APP: " + texto)
  }

  return (
    <div>
      {/* <Form /> */}
      {/* <Button text="Clicar" clickFn={actionButton}/> */}
      {/* <Contador title=''/> */}
      <Loading />
    </div>
  );
}

export default App;
