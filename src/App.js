import './App.css';
import Container from './components/containerComponent/Container';
import { ProductListProvider } from './context/products.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Quodic Assessment</h1>
      </header>
      <ProductListProvider>
        <Container></Container>
      </ProductListProvider>
    </div>
  );
}

export default App;
