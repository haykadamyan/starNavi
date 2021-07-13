import React from 'react';
import { useAsync } from 'react-async';
import fetchGameConfig from 'services/api/fetchGameConfig';

import Layout from 'components/Layout';
import Loading from 'components/Loading';
import Error from 'components/Error';
import GameBoard from 'components/GameBoard';

function App() {
  const { data: gameConfig, error, isPending } = useAsync({
    promiseFn: fetchGameConfig,
  });

  return (
    <Layout>
      {isPending && <Loading />}
      {error && <Error />}
      {gameConfig && <GameBoard gameConfig={gameConfig} />}
    </Layout>
  );
}

export default App;
