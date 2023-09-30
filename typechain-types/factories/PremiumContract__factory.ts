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
import type { NonPayableOverrides } from "../common";
import type {
  PremiumContract,
  PremiumContractInterface,
} from "../PremiumContract";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_password",
        type: "string",
      },
    ],
    name: "checkValidPassword",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "premiums",
    outputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "validity",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_premiumIndex",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_password",
        type: "string",
      },
    ],
    name: "purchasePremium",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600160405180606001604052806040518060400160405280600881526020017f4f6e654d6f6e74680000000000000000000000000000000000000000000000008152508152602001655af3107a40008152602001601e81525090806001815401808255809150506001900390600052602060002090600302016000909190919091506000820151816000019081620000eb9190620004e3565b5060208201518160010155604082015181600201555050600160405180606001604052806040518060400160405280600981526020017f5369784d6f6e7468730000000000000000000000000000000000000000000000815250815260200165b5e620f480008152602001603c815250908060018154018082558091505060019003906000526020600020906003020160009091909190915060008201518160000190816200019b9190620004e3565b5060208201518160010155604082015181600201555050600160405180606001604052806040518060400160405280600781526020017f4f6e6559656172000000000000000000000000000000000000000000000000008152508152602001660110d9316ec00081526020016078815250908060018154018082558091505060019003906000526020600020906003020160009091909190915060008201518160000190816200024c9190620004e3565b5060208201518160010155604082015181600201555050620005ca565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620002eb57607f821691505b602082108103620003015762000300620002a3565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026200036b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826200032c565b6200037786836200032c565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b6000620003c4620003be620003b8846200038f565b62000399565b6200038f565b9050919050565b6000819050919050565b620003e083620003a3565b620003f8620003ef82620003cb565b84845462000339565b825550505050565b600090565b6200040f62000400565b6200041c818484620003d5565b505050565b5b8181101562000444576200043860008262000405565b60018101905062000422565b5050565b601f82111562000493576200045d8162000307565b62000468846200031c565b8101602085101562000478578190505b6200049062000487856200031c565b83018262000421565b50505b505050565b600082821c905092915050565b6000620004b86000198460080262000498565b1980831691505092915050565b6000620004d38383620004a5565b9150826002028217905092915050565b620004ee8262000269565b67ffffffffffffffff8111156200050a576200050962000274565b5b620005168254620002d2565b6200052382828562000448565b600060209050601f8311600181146200055b576000841562000546578287015190505b620005528582620004c5565b865550620005c2565b601f1984166200056b8662000307565b60005b8281101562000595578489015182556001820191506020850194506020810190506200056e565b86831015620005b55784890151620005b1601f891682620004a5565b8355505b6001600288020188555050505b505050505050565b610dec80620005da6000396000f3fe60806040526004361061004a5760003560e01c8063094642611461004f5780633b2d2db11461008e5780637eb6e8bb146100cb5780638da5cb5b146100e7578063c381daf614610112575b600080fd5b34801561005b57600080fd5b5061007660048036038101906100719190610781565b61013d565b6040516100859392919061084d565b60405180910390f35b34801561009a57600080fd5b506100b560048036038101906100b091906109c0565b6101ff565b6040516100c29190610a24565b60405180910390f35b6100e560048036038101906100e09190610a9f565b610316565b005b3480156100f357600080fd5b506100fc610639565b6040516101099190610b40565b60405180910390f35b34801561011e57600080fd5b5061012761065d565b6040516101349190610a24565b60405180910390f35b6001818154811061014d57600080fd5b906000526020600020906003020160009150905080600001805461017090610b8a565b80601f016020809104026020016040519081016040528092919081815260200182805461019c90610b8a565b80156101e95780601f106101be576101008083540402835291602001916101e9565b820191906000526020600020905b8154815290600101906020018083116101cc57829003601f168201915b5050505050908060010154908060020154905083565b600080600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060a00160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160018201548152602001600282015481526020016003820154815260200160048201548152505090506000836040516020016102df9190610bf7565b60405160208183030381529060405280519060200120905080826020015114801561030d5750428260800151115b92505050919050565b600180549050831061035d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161035490610c5a565b60405180910390fd5b6001838154811061037157610370610c7a565b5b90600052602060002090600302016001015434146103c4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103bb90610cf5565b60405180910390fd5b6000600184815481106103da576103d9610c7a565b5b906000526020600020906003020160405180606001604052908160008201805461040390610b8a565b80601f016020809104026020016040519081016040528092919081815260200182805461042f90610b8a565b801561047c5780601f106104515761010080835404028352916020019161047c565b820191906000526020600020905b81548152906001019060200180831161045f57829003601f168201915b5050505050815260200160018201548152602001600282015481525050905060008160400151426104ad9190610d44565b9050600084846040516020016104c4929190610d9d565b6040516020818303038152906040528051906020012090506040518060a001604052803373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200187815260200142815260200183815250600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506020820151816001015560408201518160020155606082015181600301556080820151816004015590505060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f19350505050158015610630573d6000803e3d6000fd5b50505050505050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600080600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060a00160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160018201548152602001600282015481526020016003820154815260200160048201548152505090504281608001511191505090565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b61075e8161074b565b811461076957600080fd5b50565b60008135905061077b81610755565b92915050565b60006020828403121561079757610796610741565b5b60006107a58482850161076c565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156107e85780820151818401526020810190506107cd565b60008484015250505050565b6000601f19601f8301169050919050565b6000610810826107ae565b61081a81856107b9565b935061082a8185602086016107ca565b610833816107f4565b840191505092915050565b6108478161074b565b82525050565b600060608201905081810360008301526108678186610805565b9050610876602083018561083e565b610883604083018461083e565b949350505050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6108cd826107f4565b810181811067ffffffffffffffff821117156108ec576108eb610895565b5b80604052505050565b60006108ff610737565b905061090b82826108c4565b919050565b600067ffffffffffffffff82111561092b5761092a610895565b5b610934826107f4565b9050602081019050919050565b82818337600083830152505050565b600061096361095e84610910565b6108f5565b90508281526020810184848401111561097f5761097e610890565b5b61098a848285610941565b509392505050565b600082601f8301126109a7576109a661088b565b5b81356109b7848260208601610950565b91505092915050565b6000602082840312156109d6576109d5610741565b5b600082013567ffffffffffffffff8111156109f4576109f3610746565b5b610a0084828501610992565b91505092915050565b60008115159050919050565b610a1e81610a09565b82525050565b6000602082019050610a396000830184610a15565b92915050565b600080fd5b600080fd5b60008083601f840112610a5f57610a5e61088b565b5b8235905067ffffffffffffffff811115610a7c57610a7b610a3f565b5b602083019150836001820283011115610a9857610a97610a44565b5b9250929050565b600080600060408486031215610ab857610ab7610741565b5b6000610ac68682870161076c565b935050602084013567ffffffffffffffff811115610ae757610ae6610746565b5b610af386828701610a49565b92509250509250925092565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610b2a82610aff565b9050919050565b610b3a81610b1f565b82525050565b6000602082019050610b556000830184610b31565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610ba257607f821691505b602082108103610bb557610bb4610b5b565b5b50919050565b600081905092915050565b6000610bd1826107ae565b610bdb8185610bbb565b9350610beb8185602086016107ca565b80840191505092915050565b6000610c038284610bc6565b915081905092915050565b7f496e76616c6964207072656d69756d20696e6465780000000000000000000000600082015250565b6000610c446015836107b9565b9150610c4f82610c0e565b602082019050919050565b60006020820190508181036000830152610c7381610c37565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f496e636f7272656374207072656d69756d20616d6f756e740000000000000000600082015250565b6000610cdf6018836107b9565b9150610cea82610ca9565b602082019050919050565b60006020820190508181036000830152610d0e81610cd2565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610d4f8261074b565b9150610d5a8361074b565b9250828201905080821115610d7257610d71610d15565b5b92915050565b6000610d848385610bbb565b9350610d91838584610941565b82840190509392505050565b6000610daa828486610d78565b9150819050939250505056fea2646970667358221220b71f083fa44524d1c6b5e097e4d2d49cd5a0328558b1a41fe8f64f529a82c26164736f6c63430008130033";

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
