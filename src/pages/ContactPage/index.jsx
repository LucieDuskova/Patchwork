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
        <div className='contactPage__description'>
        <p>Linda ... bla bla bla</p>
        </div>
      </main>
      <main className="contactPage__profil contactPage__Lucka">
        <h2>Lucie Dušková</h2>
        <img
          className="contactPage__img contactPage__Lucka-img"
          src="../../pages/ContactPage/img/Lucie_Duskova.jpeg"
          alt="Lucie Dušková"
        />
        <div className='contactPage__description'>
          <p>Jmenuje se Lucka a jsem hrdá máma 3 skvělých dětí.❤️❤️❤️</p>
          <p>
            Před mateřskou dovolenou jsem byla pohodlná a spokojená v práci, kde
            jsem si oddělala své a šla domů. Nyní vím, že život dává možnost mít
            se co nejlépe.
          </p>
          <p>
            Už od školy jsem měla ráda logiku, matematiku, analytické myšlení a
            prostě vše co dává smysl. Kódy tedy byla jasná volba. Moc se mi
            líbí, že IT svět nabízí možnost vzdělávat se a v čase si vybírat,
            který směr bude ten nejlepší.
          </p>
          <p>
            Teď po mateřské mám pocit, že sobě i rodině dlužím více bezstarostnosti a životních jistot, což doufám, že mi front-end developer přinese. Moc se těším na životní změnu a nový vítr do plachet 😀
          </p>
        </div>
      </main>
    </div>
  );
};
