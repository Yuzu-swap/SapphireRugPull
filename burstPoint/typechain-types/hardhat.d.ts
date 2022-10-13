/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "BurstPoint",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BurstPoint__factory>;
    getContractFactory(
      name: "BurstPoint",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BurstPoint__factory>;
    getContractFactory(
      name: "BurstPoint",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BurstPoint__factory>;
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "Greeter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Greeter__factory>;

    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "BurstPoint",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BurstPoint>;
    getContractAt(
      name: "BurstPoint",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BurstPoint>;
    getContractAt(
      name: "BurstPoint",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BurstPoint>;
    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "Greeter",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Greeter>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
