type Props = {
  handleConnectWallet: Function;
};

export default function ItemButtonWalletConnect({
  handleConnectWallet,
}: Props) {
  return (
    <div className="sc-btn-top mg-r-12" id="site-header">
      <a
        id="connectbtn"
        className="sc-button header-slider style style-1 wallet fl-button pri-1"
        onClick={() => handleConnectWallet()}
      >
        <span>Wallet connect</span>
      </a>
    </div>
  );
}
