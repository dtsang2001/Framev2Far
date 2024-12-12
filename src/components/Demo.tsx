"use client";

import { useEffect, useCallback, useState } from "react";
import sdk, {
  FrameNotificationDetails,
  type FrameContext,
} from "@farcaster/frame-sdk";
import {
  useAccount,
  useDisconnect,
  useConnect,
  useSwitchChain,
  useChainId,
} from "wagmi";

import { config } from "~/components/providers/WagmiProvider";
import { Button } from "~/components/ui/Button";
import { truncateAddress } from "~/lib/truncateAddress";
import { base, optimism } from "wagmi/chains";
import { BaseError, UserRejectedRequestError } from "viem";
import Head from "next/head";
import styles from "~/app/index.module.css";
import Board from "~/components/2048/board";
import Score from "~/components/2048/score";

export default function Demo(
  { title }: { title?: string } = { title: "Play 2048 in Farcaster" }
) {
  const [isSDKLoaded, setIsSDKLoaded] = useState(false);
  const [context, setContext] = useState<FrameContext>();
  const [isContextOpen, setIsContextOpen] = useState(false);
  const [txHash, setTxHash] = useState<string | null>(null);
  const [addFrameResult, setAddFrameResult] = useState("");
  const [notificationDetails, setNotificationDetails] =
    useState<FrameNotificationDetails | null>(null);
  const [sendNotificationResult, setSendNotificationResult] = useState("");

  useEffect(() => {
    setNotificationDetails(context?.client.notificationDetails ?? null);
  }, [context]);

  const { address, isConnected } = useAccount();
  const chainId = useChainId();

  const { disconnect } = useDisconnect();
  const { connect } = useConnect();

  useEffect(() => {
    const load = async () => {
      setContext(await sdk.context);
      sdk.actions.ready({});
    };
    if (sdk && !isSDKLoaded) {
      setIsSDKLoaded(true);
      load();
    }
  }, [isSDKLoaded]);

  const openProfileAuth = useCallback(() => {
    sdk.actions.openUrl("https://warpcast.com/dangs.eth");
  }, []);

  const close = useCallback(() => {
    sdk.actions.close();
  }, []);

  const addFrame = useCallback(async () => {
    try {
      setNotificationDetails(null);

      const result = await sdk.actions.addFrame();

      if (result.added) {
        if (result.notificationDetails) {
          setNotificationDetails(result.notificationDetails);
        }
        setAddFrameResult(
          result.notificationDetails
            ? `Added, got notificaton token ${result.notificationDetails.token} and url ${result.notificationDetails.url}`
            : "Added, got no notification details"
        );
      } else {
        setAddFrameResult(`Not added: ${result.reason}`);
      }
    } catch (error) {
      setAddFrameResult(`Error: ${error}`);
    }
  }, []);

  if (!isSDKLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.twenty48}>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Play 2048 in Farcaster FrameV2 - By dangs.eth"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <header>
        <div className={styles.player}>
          <img src={context?.user.pfpUrl ?? 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y'} alt={context?.user.username ?? ''} />
        </div>
        <Score name={context?.user.username ?? 'player'} />
      </header>
      <main>
        <Board />
      </main>
      <div>
        <p>🚀 Game make by <code className={styles.profileAuth} onClick={openProfileAuth}>dangs.eth</code></p>
        <p>💰 Whether the market is 🟩 or 🟥, let's relieve stress with this game, an experimental project of mine on Frame V2.</p>
      </div>
      <div className={styles.groupbtn}>
        <Button onClick={addFrame} disabled={context?.client.added}>
          Add Client
        </Button>
        <Button onClick={close}>Close</Button>
      </div>
    </div>
  );
}
const renderError = (error: Error | null) => {
  if (!error) return null;
  if (error instanceof BaseError) {
    const isUserRejection = error.walk(
      (e) => e instanceof UserRejectedRequestError
    );

    if (isUserRejection) {
      return <div className="text-red-500 text-xs mt-1">Rejected by user.</div>;
    }
  }

  return <div className="text-red-500 text-xs mt-1">{error.message}</div>;
};
