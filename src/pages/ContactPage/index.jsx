import './style.css';

export const ContactPage = () => {
  return (
    <>
      <main className="contactPage__Linda">
        <h2>Linda Hrdinová</h2>
        <img
          className="contactPage__Linda-img"
          src="../../pages/ContactPage/img/Linda.jpg"
          alt="Linda Hrdinová"
        />
        <p>Linda ... bla bla bla</p>
      </main>
      <main className="contactPage__Lucka">
        <h2>Lucie Dušková</h2>
        <img
          className="contactPage__Lucka-img"
          src="../../pages/ContactPage/img/Lucie_Duskova.jpeg"
          alt="Lucie Dušková"
        />
        <p>Lucka ... bla bla bla</p>
      </main>
    </>
  );
};
