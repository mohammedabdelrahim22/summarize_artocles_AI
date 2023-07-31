import Hero from './Components/Hero'
import Demo from './Components/Demo'
import './App.css'
function App() {
    return (
        <main>
            <div className='main'>
                <div className='gradient' />
            </div>
            <div className='app'>
                <Hero />
                <Demo />
            </div>
        </main>
    )
}

export default App