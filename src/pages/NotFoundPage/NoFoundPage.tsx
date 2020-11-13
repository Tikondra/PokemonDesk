import React from 'react';
import { navigate } from 'hookrouter';
import s from './NoFoundPage.module.scss';
import Button, { ButtonColor, ButtonSize } from '../../components/Button';
import { LinkEnum } from '../../routes';

const NoFoundPage = () => {
  return (
    <div className={s.root}>
      <div className={s.wrap}>
        <div>404</div>
        <div>
          <div>
            <span>The rocket team</span> has won this time.
          </div>
          <Button
            onClick={() => navigate(LinkEnum.HOME)}
            size={ButtonSize.medium}
            color={ButtonColor.yellow}
            isFullWidth={false}>
            Return
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NoFoundPage;
