import { Game } from '../../components/Img';
import { DecorButton } from '../../components/Button';
import './style.css';

export const RulePage = () => {
  return (
    <main>
      <div className="main__div1">
        <Game />
        <div>
          <h2>Co je patchwork?</h2>
          <p>
            Patchwork je styl práce s jehlou, který zahrnuje sešívání kusů látky
            do velkého celku. V minulosti to byl způsob, jak spotřebovat zbytky
            tkanin a vyrobit z nich oděvy nebo deky. Dnes je patchwork forma
            umění, ve kterém používají designéři vzácné látky k vytvoření
            nádherných vzorů. Použití obzvláště nerovných kusů látek může vést
            ke vzniku skutečných mistrovských kusů a proto je praktikováno
            velkým množstvím umělců pracujících s textiliemi.
          </p>
          <p>
            Vytvoření nádherné deky nicméně vyžaduje čas a úsilí a dostupné
            dílky navíc nebudou chtít pasovat dohromady. Takže vybírejte své
            dílky pečlivě a udržujte si též rozumnou zásobu knoflíků, abyste
            pouze nedokončili svou deku, ale vyrobili ji lepší a krásnější než
            váš soupeř.
          </p>
        </div>
      </div>
      <div className="main__div2">
        <h3>Popis hry</h3>

        <h4>
          <DecorButton sizeBoxTimer={25} size={0.9} /> Příprava hry
        </h4>
        <p>
          Každý hráč obdrží desku deky, kam bude umísťovat dílky, z nichž
          vytvoří svůj patchwork. Dále dostane 5 knoflíků užívaných ve hře jako
          platidlo. Ze zásoby dílků se vytvoří velký kruh tak, aby nejmenší
          dílek byl poslední. Barevné podsvícení označuje, které tři dílky si
          aktivní hráč může zvolit. Doprostřed se umístí časová hrací deska a na
          ni si každý hráč na startovací pole umístí žeton času své barvy. Na
          vyznačené místa se položí speciální dílky záplat. Vedle hrací desky se
          vyloží speciální kartička 7x7, kterou obdrží hráč, který jako první
          zaplní souvisle plochu o rozměru 7x7.
        </p>
        <h4>
          <DecorButton sizeBoxTimer={25} size={0.9} /> Průběh hry:
        </h4>
        <p>
          Určí se začínající hráč, který začne vybírat v kruhu záplat od
          nejmenšího dílku záplaty ve hře. Hráči se střídaji nepravidelně, dle
          žetonu času na časové ose. Kdo je více vzadu, je na tahu. Pokud jste
          na stejném poli, hráč s žetonem nahoře začíná.
        </p>
        <p>Pokud jste na tahu, máte vždy 2 možnosti:</p>
        <p>
          1. Postupte vpřed a získejte knoflíky za každe pole, o které
          postoupíte (zastavíte se vždy na poli o jedno pole před soupeřem)
        </p>
        <p>
          2. Vyberte si mezi 3 dílky, na které máte (dostatek knoflíků k
          zaplacení ceny) a umistěte ho na kartu své přikrývky, tato akce se
          skládá z pěti kroků:
        </p>
        <p>
          <li> Vyberte si vhodnou záplatu </li>
          <li> Zaplaťte záplatu - použijte knoflíky jako platidlo </li>
          <li>
            Umístěte záplatu na svou přikrývku - natočte a umistěte ji dle
            libosti
          </li>
          <li>
            Posuňte svůj žeton času na časové ose o tolik polí, kolik udává
            visačka na záplatě
          </li>
        </p>
        <h4>
          <DecorButton sizeBoxTimer={25} size={0.9} /> Konec hry:
        </h4>
        <p>
          Ve chvíli, kdy oba žetony času doputují na časové ose na poslední pole
          osy, hra končí. Vítězí hráč s vyšším počtem dosažených bodů (množství
          knoflíků mínus dvojnásobek počtu prázdných polí), v případě remízy pak
          hráč, který první dosáhl posledního pole časové osy.
        </p>
      </div>
    </main>
  );
};
