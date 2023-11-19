import Post from './Post';
import Header from './components/Header';

function App() {
  return (
    
       // não pode ter múltiplos elementos, um abaixo do outro sem que involva por uma div
       <div>
        <Header />
           <Post 
            author="Jane Cooper"
            content="Dev Front-End" />
            
            <Post 
            author="Devon Lane"
            content="Dev Front-End" />

            <Post 
            author="Jenny Wilson"
            content="Fullstack dev" />

            <Post 
            author="Bessie Cooper"
            content="Analista de BI" />

       </div>
  )
}

export default App
