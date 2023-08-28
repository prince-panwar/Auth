/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../common";
import type {
  PremiumContract,
  PremiumContractInterface,
} from "../../Auth.sol/PremiumContract";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "enum PremiumContract.PremiumType",
        name: "_newPremiumType",
        type: "uint8",
      },
    ],
    name: "changePremium",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "checkValidPremium",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "enum PremiumContract.PremiumType",
        name: "_premiumType",
        type: "uint8",
      },
    ],
    name: "purchasePremium",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "repayPremium",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506040518060400160405280670de0b6b3a76400008152602001601e815250600160008060028111156100865761008561019b565b5b60028111156100985761009761019b565b5b815260200190815260200160002060008201518160000155602082015181600101559050506040518060400160405280674563918244f400008152602001603c81525060016000600160028111156100f3576100f261019b565b5b60028111156101055761010461019b565b5b815260200190815260200160002060008201518160000155602082015181600101559050506040518060400160405280677ce66c50e2840000815260200160788152506001600060028081111561015f5761015e61019b565b5b60028111156101715761017061019b565b5b815260200190815260200160002060008201518160000155602082015181600101559050506101ca565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b610bbb806101d96000396000f3fe60806040526004361061004a5760003560e01c80638ccb8c9a1461004f5780638da5cb5b1461006b578063c381daf614610096578063dbd8a8c7146100c1578063ee7dbd1d146100cb575b600080fd5b610069600480360381019061006491906108d5565b6100f4565b005b34801561007757600080fd5b506100806102f9565b60405161008d9190610943565b60405180910390f35b3480156100a257600080fd5b506100ab61031d565b6040516100b89190610979565b60405180910390f35b6100c961041e565b005b3480156100d757600080fd5b506100f260048036038101906100ed91906108d5565b61072a565b005b6001600082600281111561010b5761010a610994565b5b600281111561011d5761011c610994565b5b8152602001908152602001600020600001543414610170576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161016790610a20565b60405180910390fd5b60006001600083600281111561018957610188610994565b5b600281111561019b5761019a610994565b5b815260200190815260200160002060405180604001604052908160008201548152602001600182015481525050905060008160200151426101dc9190610a79565b905060405180608001604052803373ffffffffffffffffffffffffffffffffffffffff16815260200184600281111561021857610217610994565b5b815260200142815260200182815250600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160000160146101000a81548160ff021916908360028111156102d8576102d7610994565b5b02179055506040820151816001015560608201518160020155905050505050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600080600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060800160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016000820160149054906101000a900460ff1660028111156103e5576103e4610994565b5b60028111156103f7576103f6610994565b5b81526020016001820154815260200160028201548152505090504281606001511191505090565b6000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090506000600160008360000160149054906101000a900460ff16600281111561048b5761048a610994565b5b600281111561049d5761049c610994565b5b81526020019081526020016000206040518060400160405290816000820154815260200160018201548152505090503373ffffffffffffffffffffffffffffffffffffffff168260000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461055e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161055590610af9565b60405180910390fd5b428260020154106105a4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161059b90610b65565b60405180910390fd5b806000015134146105ea576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105e190610a20565b60405180910390fd5b60008160200151426105fc9190610a79565b905060405180608001604052803373ffffffffffffffffffffffffffffffffffffffff1681526020018460000160149054906101000a900460ff16600281111561064957610648610994565b5b815260200142815260200182815250600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160000160146101000a81548160ff0219169083600281111561070957610708610994565b5b02179055506040820151816001015560608201518160020155905050505050565b6000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090503373ffffffffffffffffffffffffffffffffffffffff168160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146107ff576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107f690610af9565b60405180910390fd5b60006001600084600281111561081857610817610994565b5b600281111561082a57610829610994565b5b8152602001908152602001600020604051806040016040529081600082015481526020016001820154815250509050828260000160146101000a81548160ff021916908360028111156108805761087f610994565b5b021790555042826001018190555080602001514261089e9190610a79565b8260020181905550505050565b600080fd5b600381106108bd57600080fd5b50565b6000813590506108cf816108b0565b92915050565b6000602082840312156108eb576108ea6108ab565b5b60006108f9848285016108c0565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061092d82610902565b9050919050565b61093d81610922565b82525050565b60006020820190506109586000830184610934565b92915050565b60008115159050919050565b6109738161095e565b82525050565b600060208201905061098e600083018461096a565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b600082825260208201905092915050565b7f496e636f7272656374207072656d69756d20616d6f756e740000000000000000600082015250565b6000610a0a6018836109c3565b9150610a15826109d4565b602082019050919050565b60006020820190508181036000830152610a39816109fd565b9050919050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610a8482610a40565b9150610a8f83610a40565b9250828201905080821115610aa757610aa6610a4a565b5b92915050565b7f55736572206e6f7420666f756e64000000000000000000000000000000000000600082015250565b6000610ae3600e836109c3565b9150610aee82610aad565b602082019050919050565b60006020820190508181036000830152610b1281610ad6565b9050919050565b7f596f7572205072656d75696d206973206e6f7420657870697265642079657400600082015250565b6000610b4f601f836109c3565b9150610b5a82610b19565b602082019050919050565b60006020820190508181036000830152610b7e81610b42565b905091905056fea2646970667358221220d082090d25d5501514a292b1190cd19d968c76dfd4b5322715921a740303790b64736f6c63430008130033";

type PremiumContractConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PremiumContractConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PremiumContract__factory extends ContractFactory {
  constructor(...args: PremiumContractConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      PremiumContract & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): PremiumContract__factory {
    return super.connect(runner) as PremiumContract__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PremiumContractInterface {
    return new Interface(_abi) as PremiumContractInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): PremiumContract {
    return new Contract(address, _abi, runner) as unknown as PremiumContract;
  }
}