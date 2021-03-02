import React from "react";
import { drizzleReactHooks } from "@drizzle/react-plugin";
import { newContextComponents } from "@drizzle/react-components";

const { useDrizzle, useDrizzleState } = drizzleReactHooks;
const { ContractData, ContractForm } = newContextComponents;

const TokenWallet = () => {
  const { drizzle } = useDrizzle();
  const state = useDrizzleState((state) => state);

  return (
    <div>
      <div className="App">
        <h2>Balance</h2>
        <ContractData
          drizzle={drizzle}
          contract="ERC20Token"
          drizzleState={state}
          method="balanceOf"
          methodArgs={[state.accounts[0]]}
        />
      </div>
      <div>
        <h2>Transfer</h2>
        <ContractForm
          drizzle={drizzle}
          contract="ERC20Token"
          method="transfer"
        />
      </div>
      <div>
        <h2>Transfer From</h2>
        <ContractForm
          drizzle={drizzle}
          contract="ERC20Token"
          method="transferFrom"
        />
      </div>
      <div>
        <h2>Approve</h2>
        <ContractForm
          drizzle={drizzle}
          contract="ERC20Token"
          method="approve"
        />
      </div>
    </div>
  );
};

export default TokenWallet;
