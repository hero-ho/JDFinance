<template>
    <panel :title="'In货推荐'" :class="$style.panel">
        <section :class="$style.content">
            <div :class="$style.item" v-for="item in items" :key="item.category">
                <div :class="$style.pack">
                    <img :src="item.category" :class="$style.img" alt="">
                </div>
                <section :class="$style.list">
                    <div :class="$style.product" v-for="product in item.list" :key="product.img">
                        <div :class="$style.pack">
                            <img :class="$style.img" :src="product.img" alt="">
                        </div>
                        <p :class="$style.title">{{ product.title }}</p>
                        <p :class="$style.price">
                            <em :class="$style.money">{{ product.price }}</em>起</p>
                        <div :class="$style.progressContainer">
                            <div :class="$style.progress">
                                <div :class="$style.inner" :style="{width:product.progress+'%'}" />
                            </div>
                            <p :class="$style.rate">{{ product.progress }}%</p>
                        </div>
                        <label v-if="product.selection" :class="$style.selection">{{product.selection}}</label>
                    </div>
                </section>
            </div>
        </section>
    </panel>
</template>

<script>
import panel from "../../../public/panel.vue"
export default {
    components: {
        panel
    },
    data() {
        return {
            items: [
                {
                    category:
                        "//img12.360buyimg.com/jrpmobile/jfs/t3406/210/2247820735/50952/86016eea/5846d8e7N20446dbd.png?width=750&height=200",
                    list: [
                        {
                            img:
                                "https://img30.360buyimg.com/cf/s250x250_jfs/t14881/283/656508232/143980/9b606acf/5a33a171N18c9c80a.jpg",
                            title: "双响炮蓝牙音箱",
                            price: "29.00",
                            progress: 100,
                            selection: "精选",
                        },
                        {
                            img:
                                "https://img30.360buyimg.com/cf/s250x250_jfs/t15529/308/632300625/135123/adb9c6d0/5a37676dNc31da9ea.jpg",
                            title: "脑波相机",
                            price: "998.00",
                            progress: 98,
                        },
                    ],
                },
                {
                    category:
                        "//img12.360buyimg.com/jrpmobile/jfs/t3739/82/2244582797/54399/746c7d79/5846a953N66b67d05.png?width=750&height=200",
                    list: [
                        {
                            img:
                                "https://img30.360buyimg.com/cf/s250x250_jfs/t11257/287/2281727659/55759/e00b90a/5a138f21N32dca834.jpg",
                            title: "智能电动牙刷",
                            price: "19.00",
                            progress: 90,
                        },
                        {
                            img:
                                "https://img30.360buyimg.com/cf/s250x250_jfs/t14209/293/662014092/61635/bba5c330/5a33a983N077cac56.jpg",
                            title: "烟草加热电子烟",
                            price: "258.00",
                            progress: 100,
                            selection: "精选",
                        },
                    ],
                },
                {
                    category:
                        "//img12.360buyimg.com/jrpmobile/jfs/t3214/113/4408032436/61548/ce316eef/5846d310Ne93f00c9.png?width=750&height=200",
                    list: [
                        {
                            img:
                                "https://img30.360buyimg.com/cf/s250x250_jfs/t15007/47/884045069/149879/17987250/5a3cb182N15868ea1.jpg",
                            title: "赖公高淮封藏老酒",
                            price: "99.00",
                            progress: 80,
                        },
                        {
                            img:
                                "https://img30.360buyimg.com/cf/s250x250_jfs/t14197/160/546457496/134173/4e1baccd/5a30ccc5Na44f7492.jpg",
                            title: "泗洪花雕醉蟹",
                            price: "58.00",
                            progress: 50,
                        },
                    ],
                },
            ],
        }
    },
}
</script>

<style lang="scss" module>
@import '../../../assets/css/element.scss';
.panel {
  .content {
    .item {
      margin-bottom: 40px;
      .pack {
        width: 100%;
        height: 0;
        padding-bottom: 26.666666666666666666666666667%;
        overflow: hidden;
        .img {
          display: block;
          width: 100%;
        }
      }
      .list {
        @include flex(row);
        .product {
          width: 50%;
          box-sizing: border-box;
          background: rgba(0, 0, 0, 0.02);
          text-align: center;
          position: relative;
          .pack {
            width: 60%;
            height: 0;
            padding-bottom: 60%;
            overflow: hidden;
            margin: 44px auto 20px;
            .img {
              width: 100%;
            }
          }
          .title {
            font-family: PingFangSC-Medium;
            font-size: 28px;
            color: #444;
          }
          .price {
            font-family: PingFangSC-Semibold;
            font-size: 20px;
            color: #999;
            line-height: 60px;
            .money {
              font-size: 36px;
              color: #ff3232;
              margin-right: 4px;
              &:before {
                content: '￥';
                font-size: 28px;
              }
            }
          }
          .progressContainer {
            @include flex(row);
            align-items: center;
            justify-content: space-around;
            padding: 0 20px;
            height: 50px;
            line-height: 50px;
            .progress {
              width: 60%;
              height: 10px;
              background: #f6e6e6;
              border-radius: 22px;
              .inner {
                max-width: 100%;
                height: 10px;
                background-image: linear-gradient(
                  270deg,
                  #f55 1%,
                  #ff9c31 100%
                );
                border-radius: 22px;
              }
            }
            .rate {
              font-size: 24px;
              color: #999;
            }
          }
          .selection {
            position: absolute;
            left: 20px;
            top: 0;
            font-family: PingFangSC-Medium;
            font-size: 20px;
            color: #ff0000;
            text-align: center;
            padding: 4px 8px;
            background-image: linear-gradient(-35deg, #c1c1c1 0, #acacac 100%);
          }
        }
      }
    }
  }
}
</style>
