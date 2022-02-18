import Web3 from 'web3'
import createKeccakHash from 'keccak'
// eslint-disable-next-line no-unused-vars
let web3Instance

function toChecksumAddress(address) {
  address = address.toLowerCase().replace('0x', '')
  const hash = createKeccakHash('keccak256').update(address).digest('hex')
  let ret = '0x'

  for (let i = 0; i < address.length; i++) {
    if (parseInt(hash[i], 16) >= 8) {
      ret += address[i].toUpperCase()
    } else {
      ret += address[i]
    }
  }

  return ret
}

let nftAbi = [{"inputs":[{"internalType":"address[]","name":"addresses","type":"address[]"},{"internalType":"uint256[]","name":"_tokenIds","type":"uint256[]"}],"name":"addToAllowList","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"numberOfTokens","type":"uint256"}],"name":"ownerMinting","outputs":[],"stateMutability":"payable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"uint256","name":"numberOfTokens","type":"uint256"}],"name":"purchase","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"purchaseAllowList","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"addresses","type":"address[]"},{"internalType":"uint256[]","name":"_tokenIds","type":"uint256[]"}],"name":"removeFromAllowList","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"isActive","type":"bool"}],"name":"setActive","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"maxMint","type":"uint256"}],"name":"setAllowListMaxMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"URI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"URI","type":"string"}],"name":"setContractURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_isAllowListActive","type":"bool"}],"name":"setIsAllowListActive","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_price","type":"uint256"}],"name":"setPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_limit","type":"uint256"}],"name":"setPurchaseLimit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"setStopSet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"allowListClaimedBy","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"allowListMaxMint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"contractURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isAllowListActive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"NFTA_MAX","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"NFTA_PUBLIC","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"onAllowList","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"price","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"purchaseClaimedBy","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"purchaseLimit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"walletOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"}]
let contractAddr = '0x36f99297a6ec3ab39284Bd0dEB54108018566eEb'

const actions = {
  async getMetamaskProvider({ commit }) {
    // check window ethereum provider
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum)
      try {
        await window.ethereum.enable()
        web3Instance = web3
      } catch(error) {
        commit('global/SET_FLASH_MESSAGE', { message: 'Please install Metamask', type: 'error' }, { root: true })
      }
      console.log('------------- web3 instance -------------------')
      console.log(web3Instance)
    } else {
      commit('global/SET_FLASH_MESSAGE', { message: 'Please install Metamask', type: 'error' }, { root: true })
    }
  },

  async getMetamaskInformation({ dispatch, commit }) {
    // step 1: check window ethereum provider
    await dispatch('getMetamaskProvider')
    if (!web3Instance) {
      commit('global/SET_FLASH_MESSAGE', { message: 'Please install Metamask', type: 'error' }, { root: true })
      return
    }

    // step 2: get account
    await dispatch('getMetamaskAccount')
  },

  async getMetamaskAccount({ commit, dispatch }) {
    await web3Instance.eth.getAccounts()
      .then(async accounts => {
        if (accounts.length > 0) {
          commit('STORE_METAMASK_ACCOUNT', {
            walletAddress: accounts[0]
          })
          commit('global/SET_FLASH_MESSAGE', { message: 'Success to connect account', type: 'success' }, { root: true })
          dispatch('observerProvider')
          await dispatch('getAccountBalance', accounts[0])
          await dispatch('getTotalSupply')
          await dispatch('getPrice')
        } else {
          commit('global/SET_FLASH_MESSAGE', { message: 'Failed to connect account', type: 'error' }, { root: true })
        }
      })
      .catch(error => {
        throw error
      })
  },

  observerProvider({ commit, state, dispatch }) {
    if (!web3Instance) {
      commit('global/SET_FLASH_MESSAGE', { message: 'Please install Metamask', type: 'error' }, { root: true })
    } else {
      web3Instance.currentProvider.on('accountsChanged', async accounts => {
        if (!accounts.length) {
          commit('CLEAR_CURRENT_DATA')
          commit('global/SET_FLASH_MESSAGE', { message: 'Failed to connect account', type: 'error' }, { root: true })
        } else if (accounts[0] !== state.account) {
          commit('STORE_METAMASK_ACCOUNT', {
            walletAddress: accounts[0]
          })
          await dispatch('getAccountBalance', accounts[0])
        }
      })
    }
  },

  async getAccountBalance({ commit }, account) {
    await web3Instance.eth.getBalance(toChecksumAddress(account))
      .then(balance => {
        commit('STORE_METAMASK_ACCOUNT', {
          balance: balance / (Math.pow(10, 18))
        })
      })
      .catch(error => {
        throw error
      })
  },

  async sendETH({ state, commit }) {
    if (!web3Instance) {
      return commit('global/SET_FLASH_MESSAGE', { message: 'Please install Metamask', type: 'error' }, { root: true })
    }

    if (!state.account.walletAddress) {
      return commit('global/SET_FLASH_MESSAGE', { message: 'Please connect Metamask', type: 'error' }, { root: true })
    }

    commit('TOGGLE_LOADING')
    await web3Instance.eth.sendTransaction({
      from: state.account.walletAddress,
      to: toChecksumAddress(''),
      value: Web3.utils.toWei('0.0005')
    }).then(res => {
      console.log(res)
      commit('STORE_TRANSACTION', res)
    })
    .catch(error => {
      throw error
    })
    .finally(() => {
      commit('TOGGLE_LOADING')
    })
  },

  async doMint({ state, dispatch }) {
    let nftContract = new web3Instance.eth.Contract(nftAbi, contractAddr)
    await nftContract.methods.purchaseAllowList().send({from: state.account.walletAddress})
      .then(result => {
        console.log('result:', result)
      })
      .catch(error => {
        throw error
      })
    await dispatch('getTotalSupply')
  },

  async getTotalSupply({ commit }) {
    let nftContract = new web3Instance.eth.Contract(nftAbi, contractAddr)
    nftContract.methods.totalSupply().call()
      .then(totalSupply => {
        commit('STORE_METAMASK_ACCOUNT', {
          totalSupply: totalSupply
        })
      })
      .catch(error => {
        throw error
      })
  },
  async getPrice({ commit }) {
    let nftContract = new web3Instance.eth.Contract(nftAbi, contractAddr)
    await nftContract.methods.price().call()
      .then(price => {
        // return price / (Math.pow(10, 18))
        commit('STORE_METAMASK_ACCOUNT', {
          price: price / (Math.pow(10, 18))
        })
      })
      .catch(error => {
        throw error
      })
  },

}

export default actions
