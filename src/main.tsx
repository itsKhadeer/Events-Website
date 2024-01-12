import { Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Suspense fallback={<h1>Loading...</h1>}>
      <BrowserRouter>
              <Routes>
                {/* add page routes here */}
              </Routes>
      </BrowserRouter>
  </Suspense>,
);
