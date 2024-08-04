"use client";
import React, { useEffect } from "react";
import { Button, Modal, ModalContent } from "@nextui-org/react";
import Logo from "../Logo/Logo";
import { hideConnectWallet } from "@/app/lib/features/connectWallet/connectWalletSlice";
import { Connector, useConnect, useAccount, useSignMessage } from "wagmi";
import Image from "next/image";
import images from "@/app/assets/images";
import { login } from "@/app/api/server/user";
import { clearUserInfo, setUserInfo } from "@/app/lib/features/user/usersSlice";
import { useAppDispatch, useAppSelector } from "@/app/lib/hooks";

const ConnectWallet = () => {
  const isOpen = useAppSelector((state) => state.connectWallet.isOpen);
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const { connectors, connect } = useConnect();
  const { isConnected, address } = useAccount();
  const { signMessage } = useSignMessage();

  useEffect(() => {
    if (
      address !== undefined &&
      address.toLowerCase() !== user.address.toLowerCase()
    ) {
      dispatch(clearUserInfo());
    }
  }, [address]);

  useEffect(() => {
    if (isConnected) {
      requestSignature();
    }
  }, [isConnected]);

  const handleConnect = async (connector: Connector) => {
    try {
      if (isConnected) {
        requestSignature();
      } else {
        connect({
          connector,
        });
      }
    } catch (err) {
      console.error("Connect error:", err);
    }
  };

  const getUserInfo = async (signature: string, address: string) => {
    const info = await login(signature, address);
    dispatch(setUserInfo(info));
    dispatch(hideConnectWallet());
  };

  const requestSignature = async () => {
    const message = process.env.NEXT_PUBLIC_SIGN_MESSAGE!;
    try {
      signMessage(
        { message },
        {
          onSettled(data, error, variables, context) {
            if (data && address) {
              getUserInfo(data, address);
            } else {
              console.error(error);
            }
          },
        },
      );
    } catch (err) {
      console.error("Sign message error:", err);
    }
  };

  return (
    <Modal
      shadow="lg"
      backdrop="blur"
      isOpen={isOpen}
      onOpenChange={() => dispatch(hideConnectWallet())}
    >
      <ModalContent className="relative flex-col items-center gap-4 overflow-hidden rounded-2xl bg-gray-100 bg-gradient-to-b from-grey-main p-16">
        <Logo flexDirection="col" />
        <div className="flex w-56 flex-col gap-4">
          {connectors.map((connector) => (
            <Button
              className="flex h-12 w-full items-center gap-8 text-nowrap rounded-full border border-gray-300 bg-gray-100 px-4 py-1 shadow-md hover:bg-gray-200"
              key={connector.uid}
              onClick={() => handleConnect(connector)}
            >
              <Image
                src={connector.icon || images.wallet}
                sizes="18"
                alt={connector.name}
                width={18}
                height={18}
              />
              <span className="text-sm text-gray-600">
                Connect {connector.name}
              </span>
            </Button>
          ))}
        </div>
      </ModalContent>
    </Modal>
  );
};

export default ConnectWallet;
