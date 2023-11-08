
import styles from './index.module.scss';
import classnames from 'classnames/bind';
import ICONS from './config';
// import Config from 'config'
import { useTranslation } from 'react-i18next';

const cn = classnames.bind(styles);

interface FollowProps {
  styleColor: 'Dark' | 'Light';
  I18N_NAMESPACE?: string;
}

const Follow = (props: FollowProps) => {
  const { styleColor,I18N_NAMESPACE } = props;
  const {t} = useTranslation(I18N_NAMESPACE)
  return (
    <div
      className={
        styleColor === cn('Light')
          ? cn('ch_footer-follow','ch_footer-follow_light')
          : cn('ch_footer-follow')
      }
    >
      <span>Follow us</span>
      <div className={cn("footer_follow-icons")}>
        {ICONS.map((_) => (
          <a
            target="_blank"
            rel="noreferrer"
            href={_.link}
            key={_.name}
            className={cn("follow-t")}
          >
            {_.render(styleColor)}
          </a>
        ))}
      </div>

      <div className={cn('footer-contact-landing')}>
        <a
          href="mailto: clicli_operations@theclicli.com"
          className={cn("footer-contact")}
        >
          {/* Contact us */}
          {t('home.footer.contact')}
        </a>
        <a
          // href={Config.HOME_ORIGIN + '/aboutus'}
          className={cn("footer-contact","footer-presskit")}
        >
          {/* Contact us */}
          {t('home.footer.presskit')}
        </a>
      </div>
    </div>
  );
};

export default Follow;
