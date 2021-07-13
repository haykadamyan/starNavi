import React, { memo, useCallback } from 'react';
import classNames from 'classnames';
import styles from './Tile.module.css';

type TileProps = {
  rowIndex: number;
  colIndex: number;
  isActive: boolean;
  onHover(rowIndex: number, colIndex: number): void;
};

function Tile(props: TileProps) {
  const onHover = useCallback(() => {
    props.onHover(props.rowIndex, props.colIndex);
  }, [props.rowIndex, props.colIndex, props.onHover]);

  return (
    <div
      className={classNames(styles.tile, {
        [styles.active]: props.isActive,
      })}
      onMouseOver={onHover}
    />
  );
}

export default memo(Tile);
