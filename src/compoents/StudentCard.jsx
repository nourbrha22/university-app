import Image from '../assets/image.jpg'

function StudentCard() {
    
    const etudiant = {
        nomPrenom: "Nour Ben Rhouma",
        email: "nour.benrhouma661@gmail.com",
        telephone: "+216 40 237 020",
        filiere: "Génie logiciel et système d'information",
        image: Image,
        anneEtude: "2ème année",
        groupe: "GLSI 2",
        ville: "Mahdia"
    }

    return (
    <div className="student-card">
        <div>
            <img src={Image} className="student-photo" alt="Photo de l'étudiant"/> 
        </div>

        <h1 className="student-title">Fiche étudiant</h1>

        <div className="student-info">
            <p>
                <strong>Nom & Prénom :</strong> {etudiant.nomPrenom}
            </p>

            <p>
                <strong>Email :</strong> {etudiant.email}
            </p>

            <p>
                <strong>Téléphone :</strong> {etudiant.telephone}
            </p>

            <p>
                <strong>Filière :</strong> {etudiant.filiere}
            </p>

            <p>
                <strong>Année d'étude :</strong> {etudiant.anneEtude}
            </p>

            <p>
                <strong>Groupe :</strong> {etudiant.groupe}
            </p>

            <p>
                <strong>Ville :</strong> {etudiant.ville}
            </p>
        </div>

        <button className="contact-button">
            Contacter
        </button>
    </div>

    );
}

export default StudentCard;