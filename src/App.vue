<template>
  <el-container>
    <el-header id="header">
      <h1>Doge Frens</h1>
      <p style="line-height: 70px;">
        <el-button v-if="metamaskAccount == null || metamaskAccount['walletAddress'] ==''" type="success" @click="getMetamaskInformation" round>CONNECT WALLET</el-button>
        <el-button v-else type="text" @click="getMetamaskInformation" style="font-size: 18px;line-height: 52px;">{{metamaskAccount['walletAddress']}}</el-button>
      </p>
      <p>
        <img src="./assets/Discord.png"/>
        <img src="./assets/Twitter.png"/>
        <img src="./assets/opensea.png"/>
        <img src="./assets/Instagram.png"/>
        <img src="./assets/Medium.png"/>
      </p>
    </el-header>
    <div id="main" style="width: 100%;">
      <div class="bg_main" style="width: 100%;">
        <el-row style="width: 100%;">
        <el-col :span="12" style="margin-left: 50px;">
          <h1 style="font-size: 64px;">DOGEVERSE</h1>
          <div style="font-size: 24px;">
            <span>
              Mint or Migrate Your DogeLife Samurai Doge is a
            </span>
            <br>
            <span>
              movement of 10,000 animated NFTs on the
            </span>
            <br>
            <span>
              Ethereum Blockchain. Owning one of our NFTs
            </span>
            <br>
            <span>
              gives you the mark of the warrior to seek glory in
            </span>
            <br>
            <span>
              the Yelds of decentralized battles.NFTs
            </span>
          
          
          <p style="font-weight: bolder;margin-top: 30px;">
            Mint Price: {{ metamaskAccount.price }} ETH
          </p>
          <p style="font-weight: bolder;">
            {{ metamaskAccount.totalSupply }} / 1000 Left
          </p>
          <p style="margin-top: 50px;">
            <el-button type="danger" @click="doMint()" style="font-weight: bolder;color: #000000;font-size: 24px;">MINT</el-button>
            <el-button type="primary"  style="font-weight: bolder;color: #000000;font-size: 24px;margin-left: 100px;">BUY ON OS</el-button>
          </p>
          </div>
        </el-col>
        <el-col :span="8" style="margin-left: 40px;float:right">
          <p>
            <img style="width:300px;height:300px;margin-left:200px;" src="./assets/doge_avatar221.png"/>
          </p>
          <p>
            <img style="width:300px;height:300px;margin-left:10px;margin-top:-100px;" src="./assets/landing_image21.png"/>
          </p>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <div class="main_intro">
            <p style="padding: 290px 0 0 30px;font-size: 64px;">WHO ARE</p>
            <p style="padding-left: 30px;font-size: 64px;margin-top:-50px;"> DOGE FRENS?</p>
            <p class="main_intro_txt">
              <br>
              Doge Frens is a community drive collection of 6999 <br>
randomly generated NFTs on the Ethereum <br>
blockchain. Our goal is to build the biggest group of <br>
frens in the Dogeverse. For price of 0.069 ETH you <br>
receive 1 Doge Fren NFT that provides you<br>
            </p>
          </div>
        </el-col>
      </el-row>
      <el-row style="width: 100%">
        <el-col>
          <p style="font-size: 64px;text-align:center;">
            WHY DOGEVERSE?
          </p>
        </el-col>
      </el-row>
      <el-row style="margin-top: 150px;">
        <el-col class="frame-8">
          <div class="function1">
            <img class="function1-1" src="./assets/function1.png" />
            <div class="frens-community valign-text-middle robotoslab-normal-white-45px">Frens<br />Community</div>
          </div>
          <div class="function2">
              <img class="function2-1" src="./assets/function2.png" />
              <div class="community-land-on-sandbox valign-text-middle">Community Land<br />On Sandbox</div>
            </div>
            <div class="function3">
              <img class="function3-1" src="./assets/function3.png" />
              <div class="voxel-nft-for-dogeverse valign-text-middle">
                Voxel NFT<br />
                For Dogeverse
              </div>
            </div>
            <div class="function4">
              <img class="function4-1" src="./assets/function4.png" />
              <div class="nft-staking-utility-token valign-text-middle robotoslab-normal-white-45px">
                NFT Staking<br />
                &amp;Utility Token
              </div>
            </div>
            <div class="function5">
              <img class="function5-1" src="./assets/function5.png" />
              <div class="p2-e-game valign-text-middle robotoslab-normal-white-45px">P2E Game</div>
            </div>
        </el-col>
      </el-row>
      </div>
     <div id="roadmap">
       <el-row  style="width: 100%;">
        <el-row>
          <el-col>
            <img style="width: 100%;margin-top: -60px;" src="./assets/roadmap_banner.png"/>
          </el-col>
        </el-row>
        
        <el-row style="width: 100%;text-align:center;">
          <el-col :span="24">
            <p style="width: 100%;font-size:84px;font-weight: bold;">ROADMAP</p>
            <p style="width: 100%;">
              <img src="./assets/roadmap_dig.png"/>
            </p>
          </el-col>
      </el-row>

      <el-row style="width: 100%;text-align:center;margin-top:50px;">
        <el-col :span="7">
          <div style="margin-top: 600px;">
            <div class="btnCls btnCls2">COMING SOON</div>
            <div class="btnTxt">
              <h1 style="font-size: 48px;">FEBRUARY 20th</h1>
              <h2 style="margin-top: -40px;font-size:32px;">Doge Frens Launch Day!</h2>
              </div>
          </div>
          <div style="margin-top: 450px;">
            <div class="btnCls btnCls2">COMING SOON</div>
            <div class="btnTxt">
              <h1 style="font-size: 48px;">FEBRUARY 20th</h1>
              <h2 style="margin-top: -40px;font-size:32px;">Doge Frens Launch Day!</h2>
              </div>
          </div>
        </el-col>
        <el-col :span="10">
          <img src="./assets/Group13.png"/>
          <img style="margin-top: -150px;" src="./assets/roadmap_gold.png"/>
        </el-col>
        <el-col :span="7">
          <div>
            <div class="btnCls">ACCOMPLISHED</div>
            <div class="btnTxt">
              <h1 style="font-size: 48px;">FEBRUARY 20th</h1>
              <h2 style="margin-top: -40px;font-size:32px;">Doge Frens Launch Day!</h2>
              </div>
          </div>

          <div style="margin-top: 500px;">
            <div class="btnCls btnCls2">COMING SOON</div>
            <div class="btnTxt">
              <h1 style="font-size: 48px;">FEBRUARY 20th</h1>
              <h2 style="margin-top: -40px;font-size:32px;">Doge Frens Launch Day!</h2>
              </div>
          </div>

          <div style="margin-top: 500px;">
            <div class="btnCls btnCls2">COMING SOON</div>
            <div class="btnTxt">
              <h1 style="font-size: 48px;">FEBRUARY 20th</h1>
              <h2 style="margin-top: -40px;font-size:32px;">Doge Frens Launch Day!</h2>
              </div>
          </div>
        </el-col>
      </el-row>

      <el-row style="width: 100%;margin-top: 200px;color:#000000;text-align:center;">
        <el-col>
          <h1 style="font-size: 64px">FAQ's</h1>
        </el-col>
      </el-row>
      
      <el-row style="width: 100%;color:#000000;text-align:center;">
        <el-col>
          <div class="faqCls">
            <h1>WHAT IS DOGE FREN?</h1>
          </div>
          <div class="faqCls">
            <h1>WHAT IS DOGE FREN?</h1>
          </div>
          <div class="faqCls">
            <h1>WHAT IS DOGE FREN?</h1>
          </div>
          <div class="faqCls">
            <h1>WHAT IS DOGE FREN?</h1>
          </div>
          <div class="faqCls">
            <h1>WHAT IS DOGE FREN?</h1>
          </div>
          <div class="faqCls">
            <h1>WHAT IS DOGE FREN?</h1>
          </div>
        </el-col>
      </el-row>

      <el-row>
        <el-col>
          <img style="width:100%" src="./assets/Footer.png"/>
        </el-col>
      </el-row>
      </el-row>
     </div>
      
  
    </div>
  </el-container>

</template>

<script>
import { computed, watch } from 'vue'
import { useStore } from 'vuex'
// import { ElMessage } from 'element-plus'

export default {
  name: 'App',

  setup() {
    const store = useStore()
    const flashMessage = computed(() => store.state.global.flashMessage)
    const metamaskAccount = computed(() => store.state.dapp.account)
    const transactions = computed(() => store.state.dapp.transactions)
    const loading = computed(() => store.state.dapp.waiting)
    

    const getMetamaskInformation = () => store.dispatch('dapp/getMetamaskInformation')
    const sendETH = () => store.dispatch('dapp/sendETH')
    const doMint = () => store.dispatch('dapp/doMint')
    // const price = () => store.dispatch('dapp/getPrice')
    

    // const showMessage = () => {
    //   const { type, message, duration } = flashMessage.value
    //   if (message) ElMessage({
    //     showClose: true,
    //     message,
    //     type,
    //     duration
    //   })
    // }

    // showMessage()
    getMetamaskInformation()
    watch(flashMessage)

    return {
      // state
      metamaskAccount,
      transactions,
      loading,
      // price,

      // methods
      getMetamaskInformation,
      sendETH,
      doMint
    }
  },
}
</script>
<style scoped>
  #header {
    width: 100%;
    height: 100px;
    background-image: url("./assets/holder.png");
    border-bottom: solid #9C9C9C 4px;
  }
  #header h1 {
    color: #ffffff;
    font-size: 42px;
    font-weight: bolder;
    line-height: 20px;
    padding-left: 50px;
    float: left;
  }
  #header p {
    float: right;
    padding-right: 30px;
  }
  #header p img {
    margin-left: 30px;
  }
  #main {
    width: 100%;
    /* min-height: 5200px; */
    color: #ffffff;
  }
  .bg_main {
    width: 100%;
    background-image: url("./assets/BG.png");
    background-size: 100% 100%;
    min-height: 4600px;
  }
  .main_intro {
    margin-top: 200px;
    width: 100%;
    /* height:600px; */
    background:url('./assets/main_bg.png');
    background-size:100% 100%;
  }
  .main_intro_txt {
    width: 100%;
    height: 450px;
    background:url('./assets/main.png') no-repeat;
    background-size:100% 100%;
    font-size: 32px;
    line-height: 60px;
    padding-left: 30px;
  }

  .frame-8 {
    align-items: flex-start;
    display: flex;
    height: 483px;
    left: 0;
    width: 100%;
    position: absolute;
    top: 0;
  }
  .function1 {
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 437px;
  width: 20%;
}

.function1-1 {
  height: 250px;
  margin-right: 2.0px;
  width: 221px;
}

.frens-community {
  height: 118px;
  letter-spacing: 0;
  margin-right: 2.0px;
  margin-top: 39px;
  text-align: center;
  width: 213px;
  font-size: 36px;
}
.function2 {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-left: 5px;
  min-height: 483px;
  width: 20%;
}

.function2-1 {
  height: 284px;
  margin-right: 29.0px;
  width: 231px;
}

.community-land-on-sandbox {
  color: var(--white);
  font-family: var(--font-family-roboto_slab);
  font-size: var(--font-size-xl);
  font-weight: 400;
  height: 118px;
  letter-spacing: 0;
  margin-right: 2.0px;
  margin-top: 21px;
  text-align: center;
  width: 372px;
  font-size: 36px;
}

.function3 {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-left: 5px;
  min-height: 445px;
  width: 20%;
}

.function3-1 {
  height: 250px;
  margin-left: 28.34px;
  width: 202px;
}

.voxel-nft-for-dogeverse {
  color: var(--white);
  font-family: var(--font-family-roboto_slab);
  font-size: var(--font-size-xl);
  font-weight: 400;
  height: 110px;
  letter-spacing: 0;
  margin-right: 2.0px;
  margin-top: 55px;
  min-width: 289px;
  text-align: center;
  font-size: 36px;
}

.function4 {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-left: 5px;
  min-height: 449px;
  width: 20%;
}

.function4-1 {
  height: 242px;
  margin-left: 0.34px;
  width: 228px;
}

.nft-staking-utility-token {
  height: 118px;
  letter-spacing: 0;
  margin-right: 2.0px;
  margin-top: 49px;
  min-width: 319px;
  text-align: center;
  font-size: 36px;
}

.function5 {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-left: 5px;
  min-height: 382px;
  width: 20%;
}

.function5-1 {
  height: 202px;
  margin-right: 2.0px;
  width: 248px;
}

.p2-e-game {
  height: 59px;
  letter-spacing: 0;
  margin-right: 1.0px;
  margin-top: 91px;
  min-width: 215px;
  text-align: center;
  font-size: 36px;
}
#roadmap {
  margin-top: -1700px;
  background-image: url("./assets/background.png");
  background-size: 100% 100%;
}
.btnCls {
  /* min-height: 85px; */
  width: 270px;
  font-size: 28px;
  line-height: 85px;
  color: #000000;

  background: url(./assets/roadmap_1@.png) no-repeat;
  margin: 223px 21px;
  text-align: center;
}
.btnTxt {
  margin-top: -200px;
}
.btnCls2 {
  background: url(./assets/Rectangle6.png) no-repeat
}

.faqCls {
  margin: 0 auto;
  width: 80%;
  border: 3px solid #000000;
  border-radius: 5%;
  margin-top: 30px;
  background-color: #ffffff;
  text-align: left;
  padding-left: 30px;
}
</style>
