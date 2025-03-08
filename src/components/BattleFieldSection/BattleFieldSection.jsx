import Field from "../Field/Field";
import ResetBtn from "../ResetBtn/ResetBtn";
import SaveBtn from "../SaveBtn/SaveBtn";
import css from "./BattleFieldSection.module.css";

const BattleFieldSection = (
  list,
  battleFieldNumber,
  blockedCells,
  resetBlockedCellsBF
) => {
  return (
    <div>
      <Field
        list={list}
        battleFieldNumber={battleFieldNumber}
        blockedCells={blockedCells}
      />
      {list.filter((e) => !e.empty).length === 20 && (
        <SaveBtn battleFieldNumber={battleFieldNumber} />
      )}
      <ResetBtn
        battleFieldNumber={battleFieldNumber}
        resetBlockedCells={resetBlockedCellsBF}
      />
    </div>
  );
};

export default BattleFieldSection;
