import styles from './footer.module.scss';
import chassnames from 'classnames/bind';
// import Infos from './components/infos';
// import Links from './components/links';
// import Follow from './components/follow';

const cn = chassnames.bind(styles);
type CommonPcFooterProps = {
  styleColor: 'Dark' | 'Light';
  I18N_NAMESPACE?: string;
};

const CommonPcFooter = (props: CommonPcFooterProps) => {
  const { styleColor = 'Dark' } = props;

  return (
    <div className={cn('ch_footer', `ch_footer-${styleColor}`)}>
      {/* <Infos styleColor={styleColor} I18N_NAMESPACE={I18N_NAMESPACE} /> */}
      <div className={cn('ch_footer_links_wrapper')}>
        2233211
        {/* <Links config={menu} styleColor={styleColor} /> */}
        {/* <Follow styleColor={styleColor} I18N_NAMESPACE={I18N_NAMESPACE} /> */}
      </div>
    </div>
  );
};

export default CommonPcFooter;
