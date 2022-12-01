import './App.css';
import { Button } from './components/Button';
import { Form } from './components/Form';

function App() {

  const actionButton = (texto: string) => {
    alert("Click No APP: " + texto)
  }

  return (
    <div>
      <Form />
      <Button text="Clicar" clickFn={actionButton}/>
    </div>
  );
}

export default App;
