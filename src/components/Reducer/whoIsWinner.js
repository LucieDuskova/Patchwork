export const whoIsWinner = (state) => {
  // je konec hry? Pokud ano, vyhodnoť to
  if (state.player1.score >= 59 && state.player2.score >= 59) {
    // kdo je vítěz?
    let whoisWinner = '';
    if (
      state.player1.buttons - state.player1.holes * 2 >
      state.player2.buttons - state.player2.holes * 2
    ) {
      whoisWinner = 'Vyhrál hráč 1';
    } else if (
      state.player2.buttons - state.player2.holes * 2 >
      state.player1.buttons - state.player1.holes * 2
    ) {
      whoisWinner = 'Vyhrál hráč 2';
    } else {
      whoisWinner = 'Vyhráli jste oba, je to remíza.';
    }

    // Zpoždění alertu o 2000 milisekund (2 sekundy)
    setTimeout(() => {
      alert(`HRA SKONČILA. ${whoisWinner}`);
    }, 500);
  }
};
