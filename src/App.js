import logo from './logo.svg'
import './App.css'
import SampleComponent from './components/SampleComponent'

const App = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h2>Mini Mek</h2>
      </header>
      <SampleComponent />
    </div>
  )
}

export default App
