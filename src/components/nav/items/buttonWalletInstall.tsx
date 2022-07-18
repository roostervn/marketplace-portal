type Props = {};

const URL = process.env.REACT_APP_KEPLR_DOMAIN;
/**
 * Button link to Keplr
 * @returns React.Node
 */
export default function ItemButtonWalletInstall() {
  return (
    <div className="sc-btn-top mg-r-12" id="site-header">
      <a
        target="_blank"
        href={URL}
        id="connectbtn"
        className="sc-button header-slider style style-1 wallet fl-button pri-1"
      >
        <span>Install Wallet</span>
      </a>
    </div>
  );
}
