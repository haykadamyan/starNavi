import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

function Loading() {
  const { t } = useTranslation();

  return <div>{t('common.loading')}</div>;
}

export default memo(Loading);
