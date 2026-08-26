import { FC, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from 'src/features/Main'

// import TestStage from './features/TestStage'

// Routes
const Landing = lazy(() => import('src/features/Landing'))
const Transmission = lazy(() => import('src/features/Transmission'))
const Received = lazy(() => import('src/features/Received'))

const AppRouter: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main />}>
        <Route index element={<Landing />} />
        <Route path='/transmission' element={<Transmission />} />
        <Route path='/received' element={<Received />} />
        {/* <Route path='/test' element={<TestStage />} /> */}
      </Route>
    </Routes>
  </BrowserRouter>
)

export default AppRouter
