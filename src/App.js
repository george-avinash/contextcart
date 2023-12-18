import CartPage from './CartPage';
// import './App.css';
import { CartProvider } from './CartContext'
function App() {
  return (
    <div className="App">
   <CartProvider>
      <div>
        <h1>React Context Cart </h1>
        <CartPage />
      </div>
      </CartProvider>
    </div>
  );
}

export default App;
