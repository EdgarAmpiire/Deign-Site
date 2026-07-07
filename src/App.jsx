// import './App.css'
import AppRoutes from './routes/AppRoutes'
import { SmoothScrollProvider } from './motion/SmoothScroll'
import { Cursor } from './motion/Cursor'

function App() {
  return (
    <SmoothScrollProvider>
      <Cursor />
      <AppRoutes />
    </SmoothScrollProvider>
  )
}

export default App
