import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavbar from './components/navbar';
import ShoppingList from './components/shoppingList';
import ItemModal from './components/itemModal';
import { Container } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <Container>
        <ItemModal />
        <ShoppingList />
      </Container>
    </div>
  );
}

export default App;
