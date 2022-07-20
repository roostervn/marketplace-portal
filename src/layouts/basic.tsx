import React, { useEffect, useState } from "react";
import ComponentNav from "../components/nav";
import { Window as KeplrWindow } from "@keplr-wallet/types";
import { WalletProfile } from "../type/wallet";

const dwindow = window as KeplrWindow;
const chainId: string = process.env.REACT_APP_KEPLR_CHAIN_ID as string;

export default function LayoutBasic({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isKeplrInstalled, setKeplrInstalled] = useState(false);
  const [myKeplrProfile, setKeplrProfile] = useState([]);

  useEffect(() => {
    if (!dwindow.keplr) {
      setKeplrInstalled(true);
    }
  }, []);

  /**
   * Get info wallet
   * @returns {address: string, algo: string, pubkey: string[]}
   */
  const checkWallet = async (): Promise<WalletProfile[] | null> => {
    if (!dwindow.keplr) {
      setKeplrInstalled(true);
      return null;
    }
    const offlineSigner = dwindow.keplr.getOfflineSigner(chainId);
    const accounts = await offlineSigner.getAccounts();
    const result: WalletProfile[] = accounts.map((acs: any) => ({
      address: acs.address,
      algo: acs.address,
      pubkey: acs.address,
    }));
    return result;
  };

  const handleConnectWallet = async () => {
    if (!dwindow.keplr) {
      setKeplrInstalled(true);
      return;
    }
    await dwindow.keplr.enable(chainId);
    await checkWallet().then((data: any) => {
      setKeplrProfile(data)
    });
  };

  return (
    <div id="wrapper">
      <div id="page" className="clearfix">
        <ComponentNav
          enableWallet={isKeplrInstalled}
          profilesWallet={myKeplrProfile}
          handleConnectWallet={handleConnectWallet}
        ></ComponentNav>
        <section className="tf-section live-auctions style1 pad-b-54 mobie-style">
          {children}
        </section>
      </div>
    </div>
  );
}
