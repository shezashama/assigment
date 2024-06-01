import './App.css'
import Header from './Components/Header'
import Body from './Components/Body'
import Footer from './Components/Footer'


function App() {
  // axios.defaults.baseURL = 'http://localhost:5000';
  // axios.defaults.withCredentials = true;
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  )
}

export default App
