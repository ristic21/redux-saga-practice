import logo from './logo.svg';
import './App.css';
import { Counter } from './components/counter/Counter';
import AppLayout from './components/layout/AppLayout';
import { Provider } from 'react-redux';
import store from './store'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
          <AppLayout/>
      </Provider>
    </div>
  );
}

export default App;
