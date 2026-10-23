import './App.css'
import StudentCard from './compoents/StudentCard'
import Image from './assets/image.jpg'
import Header from './compoents/Header'
import Footer from './compoents/Footer'
import Navbar from './compoents/navbar'

function App() { 

  const etudiants = [
    {
          nomPrenom: "Nour Ben Rhouma",
          email: "nour.benrhouma661@gmail.com",
          telephone: "+216 40 237 020",
          filiere: "Génie logiciel et système d'information",
          image: null ,
          anneEtude: "2ème année",
          groupe: "GLSI 2",
          ville: "Mahdia"
    },
    {
          nomPrenom: "Slim Boubaker",
          email: "slimboubaker@gmail.com",
          telephone: "+216 99 999 999",
          filiere: "Génie logiciel et système d'information",
          image: null,
          anneEtude: "2ème année",
          groupe: "GLSI 2",
          ville: "Mahdia"
    },
    {
          nomPrenom: "Sarra Trabelsi",
          email: "sarra.trabelsi@gmail.com",
          telephone: "+216 22 345 678",
          filiere: "Génie logiciel et système d'information",
          image: null,
          anneEtude: "2ème année",
          groupe: "GLSI 2",
          ville: "Mahdia"
    }  
]
  return <div className="container">
    <Header />
    <Navbar />
    <div className='students-grid'>
      {etudiants.map(etudiant => ( 
        <StudentCard key={etudiant.email} etudiant={etudiant}/>
      ))}
    </div>
    <Footer /> 
  </div>
}

export default App
