// import React from 'react';
// import { useTranslation } from 'react-i18next';
// import Logo from '../../../Logo';
import classnames from 'classnames/bind';

import styles from './index.module.scss';
import { useTranslation } from 'react-i18next';

const cn = classnames.bind(styles);

type Props = {
  styleColor: 'Dark' | 'Light';
  I18N_NAMESPACE?: string;
};

const Infos = (props: Props) => {
  const { styleColor,I18N_NAMESPACE } = props;
  // const { t } = useTranslation();

  const {t} = useTranslation(I18N_NAMESPACE)
  return (
    <div
      className={cn('ch_footer-infos', `ch_footer-infos-${styleColor}`)}
    >
      <div className={cn("footer_infos")}>
        {/* <Logo/> */}

        <p>Copyright © 2022 CLICLI INTERACTIVE PTE. LTD.</p>
        <p>
          {/* Company Address:{' '} */}
          {t('home.company.address.title')}{' '}
          <span>
            {/* 10 Collyer Quay #10-01 Ocean Financial Centre Singapore 04931 */}
            {t('home.company.address.address')}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Infos;
