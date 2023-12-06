import './style.css';
import { Linda } from '../../components/Img';
import { Lucie } from '../../components/Img';

export const ContactPage = () => {
  return (
    <div className="contactPage">
      <main className="contactPage__profil contactPage__Linda">
        <h2>Linda Hrdinová</h2>
        <Linda />
        <div className="contactPage__description">
          <p>
            Jmenuji se Linda Hrdinová a tvoření je tak trochu smysl mého života.
          </p>
          <h3>První kontakt s front-endem</h3>
          <p>
            Na střední škole mě nic moc nebavilo. Výtvarka, trochu matematika,
            správná témata v biologii (rok, kdy se brala geologie, byl pro mě
            opravdu náročný) a informatika.
          </p>
          <p>
            Náš informatikář patřil mezi ty, kteří učit opravdu chtěli. Krom
            klasického wordu a excelu, nám také představil HTML, CSS,
            Javascriptu a PHP. To byl můj první kontakt s programováním a
            frontendem.
          </p>
          <h3>
            Nové věci se musí zkoušet...abychom zjistily, že ty staré jsou lepší
          </h3>
          <p>
            Protože mě v práci nejvíc bavil excel, tak mi kolegyně navrhla, ať
            se zkusíme spolu dát na cestu datové analýzy - souhlasila jsem.
            Zkusily jsme pár kurzů od Czechitas na Python a úvod do datový
            analýzy.
          </p>
          <p>
            Rychle jsem zjistila, že tohle opravdu není můj hrníček kakaa. Psát
            skripty v SQL je opravdu super, ale zbytek už moc ne. A to nemluvím
            o faktu, že jinak položený dotaz na stejná data, znamená jiný
            výsledek (nejprodávanější produkt nemusí být nejvýhodnější z pozice
            čas/výdělek).
          </p>
          <p>
            Zato kolegyně byla nadšená a přihlásila se na Digitální akademii:
            Data.
          </p>
          <p>
            Trochu jsem jí záviděla. Věděla, co jí baví a šla si za tím. V práci
            skončila, našla si jiné místo a je šťastná.
          </p>
          <h3>Návrat ke kořenům</h3>

          <p>
            Věděla jsem, že nechci dělat data, ale taky, že chci změnu. Koukala
            jsem na Akademie od Czechitas a začala zvažovat ten fronted, který
            mě už jednou bavil. Jarní běh jsem nestihla, tak jsem čekala do
            podzimu. A jak to dopadlo asi už víme :).
          </p>
        </div>
      </main>
      <main className="contactPage__profil contactPage__Lucka">
        <h2>Lucie Dušková</h2>
        <Lucie />
        <div className="contactPage__description">
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
            Teď po mateřské mám pocit, že sobě i rodině dlužím více
            bezstarostnosti a životních jistot, což doufám, že mi front-end
            developer přinese. Moc se těším na životní změnu a nový vítr do
            plachet 😀
          </p>
        </div>
      </main>
    </div>
  );
};
