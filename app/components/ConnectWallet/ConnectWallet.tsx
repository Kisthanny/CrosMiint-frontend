"use client";
// components/ConnectWallet.tsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal, ModalBody, ModalContent } from "@nextui-org/react";
import type { RootState } from "@/app/lib/store";
import Logo from "../Logo/Logo";
import { hideConnectWallet } from "@/app/lib/features/connectWallet/connectWalletSlice";

const ConnectWallet = () => {
  const isOpen = useSelector((state: RootState) => state.connectWallet.isOpen);
  const dispatch = useDispatch();

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={() => dispatch(hideConnectWallet())}
    >
      <ModalContent>
        <ModalBody>
          <Logo />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ConnectWallet;
