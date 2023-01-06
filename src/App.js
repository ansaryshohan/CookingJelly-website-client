
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routers/Router';
import 'react-photo-view/dist/react-photo-view.css';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div >
      <RouterProvider router={router} />
      <Toaster position="top-center"
        toastOptions={{
          // Define default options
          className: '',
          duration: 5000,
          style: {
            background: '#363636',
            color: '#fff',
          }}} />
    </div>
  );
}

export default App;
