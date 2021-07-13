import React, { memo, ReactNode } from 'react';
import styles from './Layout.module.css';

type LayoutProps = {
  children: ReactNode;
};

function Layout(props: LayoutProps) {
  return <div className={styles.layout}>{props.children}</div>;
}

export default memo(Layout);
