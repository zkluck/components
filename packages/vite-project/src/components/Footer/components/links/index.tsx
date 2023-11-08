import  { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import classsnames from 'classnames/bind';
import styles from './index.module.scss';
// import { useTrack } from 'lib/track';
import { useTranslation } from 'react-i18next';
const cn = classsnames.bind(styles);

interface LinksProps {
  styleColor: 'Dark' | 'Light';
  config: any;
  I18N_NAMESPACE?: string;
}

const Links = (props: LinksProps) => {
  const { config: CONFIG, styleColor,I18N_NAMESPACE } = props;
  const CONFIG_KEYS = Object.keys(CONFIG);
  const {t,i18n} = useTranslation(I18N_NAMESPACE)
  // const track = useTrack()

  // const sendData = () => {
  // //   if (name === 'Download') {
  // //     track('click_home_btn_install');
  // //   }
  // //   if (name === 'Privacy Policy') {
  // //     track('click_footer_provicy_btn');
  // //   }
  // //   if (name === 'User Agreement') {
  // //     track('click_footer_user_btn');
  // //   }
  // //   if (name === 'Creator Agreement') {
  // //     track('click_footer_creater_btn');
  // //   }
  // //   if (name === 'Cookie Policy') {
  // //     track('click_footer_creater_btn');
  // //   }
  // };

  const { ref: inViewRef, inView } = useInView();
  useEffect(() => {
    if (inView) {
      // track('view_page_home_btn_install');
    }
  }, [inView]);
  return (
    <div className={cn('ch_footer-links')}>
      {CONFIG_KEYS.map((menus) => {
        return (
          <div
            key={menus}
            className={cn(
              'footer_links',
              `footer_links-${styleColor}`
            )}
          >
          <span>
              {i18n.exists(`home.footer.title.${menus}`)
                ? t(`home.footer.title.${menus}`)
                : menus}
            </span>

            {CONFIG[menus].map(
              (_: { link: string; name: string; key: string }) => {
                return (
                  <a
                    // onClick={() => sendData(_)}
                    rel="noreferrer"
                    key={_.link}
                    href={_.link}
                    id={_.name}
                    ref={_.name === 'Download' ? inViewRef : null}
                  >
                    {/* {_.name} */}
                    {i18n.exists(_.key) ? t(_.key) : _.name}
                  </a>
                );
              }
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Links;