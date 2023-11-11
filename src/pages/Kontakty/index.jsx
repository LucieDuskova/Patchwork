import './style.css';

export const Kontakty = () => {
  return (
    <>
      <main className="kontakty__Linda">
        <h2>Linda Hrdinová</h2>
        <img
          className="kontakty__Linda-img"
          src="../../pages/Kontakty/img/Linda.jpg"
          alt="Linda Hrdinová"
        />
        <p>Linda ... bla bla bla</p>
      </main>
      <main className="kontakty__Lucka">
        <h2>Lucie Dušková</h2>
        <img
          className="kontakty__Lucka-img"
          src="../../pages/Kontakty/img/Lucie_Duskova.jpeg"
          alt="Lucie Dušková"
        />
        <p>Lucka ... bla bla bla</p>
      </main>
    </>
  );
};
