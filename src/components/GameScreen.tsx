import styled from "@emotion/styled";
import React from "react";
import useGameBoard, {Chip} from "../hooks/useGameBoard";

interface GameScreenProps {}

const GameScreen: React.FC<GameScreenProps> = () => {
  const {computedBoardState, onChipClick} = useGameBoard();

  return (
    <GameScreenWrapper>
      <BoardWrapper>
        {computedBoardState?.map((row, i) => (
          <Row key={i}>
            {row.map((chip, j) => (
              <StyledChip
                onClick={(event) => onChipClick(event, {chipPosition: [i, j], ...chip})}
                state={chip.state}
                key={j}
              >
                {chip.state === "hidden" ? null : chip.value}
              </StyledChip>
            ))}
          </Row>
        ))}
      </BoardWrapper>
    </GameScreenWrapper>
  );
};

const GameScreenWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 900px;
  max-width: 100%;
  height: 100%;
  align-items: center;
  padding: 16px;
  margin: 16px;
`;

const BoardWrapper = styled.div`
  width: 600px;
  max-width: 100%;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 16px;
`;

const StyledChip = styled.span<Pick<Chip, "state">>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({state}) =>
    state === "hidden" ? "#31485a" : state === "selected" ? "orange" : "#bcceda"};
  border-radius: 50%;
  width: 80px;
  height: 80px;
  cursor: pointer;
  color: #f5f9fa;
  font-size: 28px;
  font-family: "Courier New", Courier, monospace;
  font-weight: bold;
  border: none;
`;

export default GameScreen;