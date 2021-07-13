import React, { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import produce, { Draft } from 'immer';

import Tile from 'components/Tile';
import Button from 'components/Button';

import styles from './GameBoard.module.css';

type GameBoardProps = {
  gameConfig: any;
};

function GameBoard(props: GameBoardProps) {
  const { gameConfig } = props;

  const { t } = useTranslation();

  const [gameMode, setGameMode] = useState('pickMode');
  const [gameMap, setGameMap] = useState<any>([]);

  const onGameModeChange = useCallback(
    (e: any) => {
      const {
        target: { value },
      } = e;
      setGameMode(value);
    },
    [setGameMode],
  );

  const onGameStart = useCallback(() => {
    if (gameMode !== 'pickMode') {
      setGameMap(
        Array.from({ length: gameConfig[gameMode].field }, () => [
          ...Array(gameConfig[gameMode].field).fill(false),
        ]),
      );
    }
  }, [gameMode, gameConfig]);

  const onHover = useCallback(
    (rowIndex: number, colIndex: number) => {
      setGameMap(
        produce(gameMap, (draftState: Draft<any>) => {
          draftState[rowIndex][colIndex] = !draftState[rowIndex][colIndex];
        }),
      );
    },
    [gameMap, setGameMap],
  );

  return (
    <div className={styles.gameBoard}>
      <div>
        <div className={styles.settings}>
          <select value={gameMode} onChange={onGameModeChange}>
            {['pickMode', ...Object.keys(gameConfig)].map((key: string) => {
              return (
                <option key={key} value={key}>
                  {t(`gameMode.${key}`)}
                </option>
              );
            })}
          </select>
          <Button
            label={t('common.start')}
            disabled={gameMode === 'pickMode'}
            onClick={onGameStart}
          />
        </div>
        <div className={styles.area}>
          {gameMap.map((row: any, rowIndex: number) => (
            <div className={styles.areaRow} key={String(rowIndex)}>
              {row.map((isActive: boolean, colIndex: number) => (
                <Tile
                  key={String(colIndex)}
                  rowIndex={rowIndex}
                  colIndex={colIndex}
                  isActive={isActive}
                  onHover={onHover}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.stats}>
        <div className={styles.statsTitle}>{t('common.hoverSquares')}</div>
        <div className={styles.statsItems}>
          <div>
            {gameMap.map((row: any, rowIndex: number) => {
              return row
                .filter((col: boolean) => col)
                .map((col: boolean, colIndex: number) => (
                  <div className={styles.statsItem}>{`row ${rowIndex + 1} col ${
                    colIndex + 1
                  }`}</div>
                ));
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(GameBoard);
