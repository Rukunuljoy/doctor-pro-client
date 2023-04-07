import { RouterProvider } from 'react-router-dom';
import { router } from './Pages/Routes/Routes/Routes';

function App() {
  return (
    <div data-theme="acid">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
