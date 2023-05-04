import {useState} from 'react'
import Shop from './Shop';
import Header from './Header';

function App() {

  const [total, setTotal] = useState({
    precio: 0, 
    stock: 0
  })

  return (
    <div className="App">
      <Header total={total}/>
      <Shop total={total} setTotal={setTotal} />
    </div>
  );
}

export default App;