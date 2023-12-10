import './style.css';
import { Linda } from '../../components/Img';
import { Lucie } from '../../components/Img';
import { DecorButton } from '../../components/Button';

export const ContactPage = () => {
  return (
    <div className="contactPage">
      <main className="contactPage__profil contactPage__Linda">
        <Linda />
        <div className="contactPage__description">
          <h2>
            Jmenuji se Linda Hrdinová a tvoření je tak trochu smysl mého života.
          </h2>
          <p>
            <a href="https://www.linkedin.com/in/linda-hrdinova/">LinkedIn</a>
          </p>
          <p>
            <a href="https://github.com/LilyEmilyHero">GitHub</a>
          </p>
          <h3>
            <DecorButton sizeBoxTimer={25} size={0.9} /> První kontakt s
            front-endem
          </h3>
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
            <DecorButton sizeBoxTimer={25} size={0.9} /> Nové věci se musí
            zkoušet...abychom zjistily, že ty staré jsou lepší
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
          <h3>
            <DecorButton sizeBoxTimer={25} size={0.9} /> Návrat ke kořenům
          </h3>

          <p>
            Věděla jsem, že nechci dělat data, ale taky, že chci změnu. Koukala
            jsem na Akademie od Czechitas a začala zvažovat ten fronted, který
            mě už jednou bavil. Jarní běh jsem nestihla, tak jsem čekala do
            podzimu. A jak to dopadlo asi už víme :).
          </p>
        </div>
      </main>
      <main className="contactPage__profil contactPage__Lucka">
        <Lucie />
        <div className="contactPage__description">
          <h2>
            Jmenuje se Lucie Dušková a měním směr svého pracovního života.
          </h2>
          <p>
            <a href="www.linkedin.com/in/duskova-lucie">LinkedIn</a>
          </p>
          <p>
            <a href="https://github.com/LucieDuskova">GitHub</a>
          </p>
          <h3>
            <DecorButton sizeBoxTimer={25} size={0.9} /> První kontakt s "AjTý"
          </h3>
          <p>
            Už od školy jsem měla ráda logiku, matematiku, analytické myšlení a
            prostě vše co dává smysl. Mám ráda preciznost a jasnost. Kódování
            tedy byla jasná volba. Moc se mi líbí, že IT svět nabízí možnost
            vzdělávat se a posouvat své hranice.
          </p>
          <p>
            V roce 2017 mě poprvé napadla myšlenka programovat. Začala jsem se
            sama a pomocí přátel učit Javu, a moc mě to bavilo. Po několika
            měsících však přišly příjemné rodinné události a programování muselo
            jít na nějaký čas stranou.
          </p>
          <h3>
            <DecorButton sizeBoxTimer={25} size={0.9} /> Skutečná změna
          </h3>
          <p>
            Mnoho let jsem byla pohodlná a spokojená v práci, kde jsem si
            oddělala své a šla domů. Nyní vím, že život mi dává možnost plnit si
            sny a byla by škoda toho nevyužít.
          </p>
          <p>
            Od roku 2022 jsem měla nutkání se vzdělávat a posunout se dál.
            Nejprve jsem si dala za cím zlepšit se v angličtině. Po několika
            měsících jsem zjistila, že cizí jazyk je sice super, ale není ten
            směr, který mě láká. Opět jsme se tedy vrhla na programování.
            Tentokrát jsem si vybrala Python a vše dávalo smysl. Učila jsem se
            sama, občas s pomocí přátel, ale pokroky nebyly tak rychlé.
          </p>
          <h3>
            <DecorButton sizeBoxTimer={25} size={0.9} /> Czechitas a digitální
            akademie WEB
          </h3>
          <p>
            Dozvěděla jsem se o Czechitas a digitální akademii Web. Tohle byla
            moje cesta. Vše nabralo rychlý spád, přihláška, výběr, a velmi
            intezivní výuka. CSS/HTML, JavaScript, React, základy UX, UI - šla
            mi z toho hlava kolem :) Ale vím, že programování, kodování a motání
            se kolem webu je cílem mého pracovního života.
          </p>
          <p>
            Pro závěrečný projekt jsme si vybrali interaktivní hru, která má
            přesah akademie. Bylo super spolupracovat se zkušeným programátorem
            a opět se dozvědět o dalších možnostech programování.
          </p>
        </div>
      </main>
    </div>
  );
};
