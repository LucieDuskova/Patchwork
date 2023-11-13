import './style.css';

export const ContactPage = () => {
  return (
    <div className="contactPage">
      <main className="contactPage__profil contactPage__Linda">
        <h2>Linda Hrdinová</h2>
        <img
          className="contactPage__img contactPage__Linda-img"
          src="../../pages/ContactPage/img/Linda.jpg"
          alt="Linda Hrdinová"
        />
        <p>Linda ... bla bla bla</p>
      </main>
      <main className="contactPage__profil contactPage__Lucka">
        <h2>Lucie Dušková</h2>
        <img
          className="contactPage__img contactPage__Lucka-img"
          src="../../pages/ContactPage/img/Lucie_Duskova.jpeg"
          alt="Lucie Dušková"
        />
        <p>Lucka ... bla bla bla</p>
      </main>
    </div>
  );
};
