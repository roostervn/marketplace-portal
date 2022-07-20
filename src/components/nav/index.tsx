import { WalletProfile } from "../../type/wallet";
import ComponentPopupUser from "../popupUser";
import ItemButtonWalletConnect from "./items/buttonWalletConnect";
import ItemButtonWalletInstall from "./items/buttonWalletInstall";

type Props = {
  enableWallet: boolean; // check keplr wallet was installed or not
  profilesWallet: WalletProfile[];
  handleConnectWallet: Function;
};

export default function ComponentNav({
  enableWallet,
  profilesWallet,
  handleConnectWallet,
}: Props) {
  return (
    <header id="header_main" className="header_1 js-header">
      <div className="themesflat-container">
        <div className="row">
          <div className="col-md-12">
            <div id="site-header-inner">
              <div className="wrap-box flex">
                <div id="site-logo" className="clearfix">
                  <div id="site-logo-inner">
                    <a href="/" rel="home" className="main-logo">
                      {/* <img
                        id="logo_header"
                        src="assets/images/logo/logo_dark.png"
                        alt="nft-gaming"
                        width={133}
                        height={56}
                        data-retina="assets/images/logo/logo_dark@2x.png"
                        data-width={133}
                        data-height={56}
                      /> */}
                      <h3>ChickenSIX</h3>
                    </a>
                  </div>
                </div>
                <div className="mobile-button">
                  <span />
                </div>
                {/* /.mobile-button */}
                <nav id="main-nav" className="main-nav">
                  <ul id="menu-primary-menu" className="menu">
                    <li className="menu-item current-menu-item ">
                      <a href="#">Home</a>
                      {/* <ul className="sub-menu">
                        <li className="menu-item current-item">
                          <a href="index.html">Home 1</a>
                        </li>
                        <li className="menu-item menu-item-has-children">
                          <a href="#">Slider Styles</a>
                          <ul className="sub-menu">
                            <li className="menu-item">
                              <a href="slider-typer-text.html">Text Type</a>
                            </li>
                          </ul>
                        </li>
                      </ul> */}
                    </li>
                    <li className="menu-item menu-item-has-children">
                      <a href="#">Explore</a>
                      <ul className="sub-menu">
                        <li className="menu-item">
                          <a href="explore-1.html">Explore Style 1</a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item menu-item-has-children">
                      <a href="#">Activity</a>
                      <ul className="sub-menu">
                        <li className="menu-item">
                          <a href="activity1.html">Activity 1</a>
                        </li>
                        <li className="menu-item">
                          <a href="activity2.html">Activity 2</a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item menu-item-has-children">
                      <a href="#">Community</a>
                      <ul className="sub-menu">
                        <li className="menu-item">
                          <a href="blog.html">Blog</a>
                        </li>
                        <li className="menu-item">
                          <a href="blog-details.html">Blog Details</a>
                        </li>
                        <li className="menu-item">
                          <a href="help-center.html">Help Center</a>
                        </li>
                      </ul>
                    </li>
                
                    <li className="menu-item ">
                      <a href="#">Contact</a>
                      {/* <ul className="sub-menu">
                        <li className="menu-item">
                          <a href="contact1.html">Contact 1</a>
                        </li>
                        <li className="menu-item">
                          <a href="contact2.html">Contact 2</a>
                        </li>
                      </ul> */}
                    </li>
                  </ul>
                </nav>
                {/* /#main-nav */}
                <div className="flat-search-btn flex">
                  {profilesWallet && profilesWallet.length > 0 ? (
                    <>
                      <div className="connect-wal">
                        <ComponentPopupUser profilesWallet={profilesWallet}/>
                      </div>
                    </>
                  ) : (
                    <>
                      {enableWallet ? (
                        <ItemButtonWalletInstall />
                      ) : (
                        <ItemButtonWalletConnect
                          handleConnectWallet={handleConnectWallet}
                        />
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
