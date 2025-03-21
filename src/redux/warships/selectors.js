export const selectBattleField_1 = (state) => state.warships.battleField_1;
export const selectBattleField_2 = (state) => state.warships.battleField_2;

export const selectIsLoading = (state) => state.warships.isLoading;
export const selectError = (state) => state.warships.error;

export const selectPlayer = (state) => state.warships.player;
export const selectFirstPlayerIsReady = (state) =>
  state.warships.firstPlayerIsReadyToPlay;
export const selectSecondPlayerIsReady = (state) =>
  state.warships.secondPlayerIsReadyToPlay;

export const selectEngagedFirstPlayer = (state) =>
  state.warships.firstPlayerEngaged;
export const selectEngagedSecondPlayer = (state) =>
  state.warships.secondPlayerEngaged;
