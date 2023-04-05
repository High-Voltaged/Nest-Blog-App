import { Route, Routes } from 'react-router-dom';
import PostsPage from './pages/Posts/PostsPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<PostsPage />} />
      {/* <Route path="/posts/:id" element={} /> */}
    </Routes>
  );
}

export default App;
