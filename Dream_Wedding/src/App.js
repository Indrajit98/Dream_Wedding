import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes/Routes';

function App() {
  return (
    <div data-theme="cupcake">
      <div className="container mx-auto" >
        <RouterProvider router={routes}></RouterProvider>
      </div>
    </div>

  );
}

export default App;
