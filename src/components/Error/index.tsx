import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

function Error() {
  const { t } = useTranslation();

  return <div>{t('common.somethingWentWrong')}</div>;
}

export default memo(Error);
