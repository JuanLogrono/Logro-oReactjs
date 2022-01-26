import ItemDetail from './components/ItemDetail';
import ItemList from './components/ItemList';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <section>
        <ItemList />
      </section>
      <section>
       <ItemDetail />
      </section>
      </div>
  );
}

export default App;
