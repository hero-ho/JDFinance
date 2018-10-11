<template>
  <panel :title="'理财精选'" :class="$style.panel">
    <section :class="$style.content">
      <div :class="$style.item">
        <img :class="$style.img" src="//img12.360buyimg.com/jrpmobile/jfs/t3670/58/543125556/2606/a65096b9/580d80afN63b1085a.png?width=76&height=76" alt="">
        <div :class="$style.title">
          <h4>月度理财</h4>
          <p :class="$style.rate">预期年化收益率4.50%</p>
        </div>
        <em :class="$style.go">去赚钱</em>
      </div>
      <div :class="$style.item">
        <img :class="$style.img"  src="//img12.360buyimg.com/jrpmobile/jfs/t3679/44/511862277/2728/c1c6b2bf/580d8189N6b6f8052.png?width=76&height=76" alt="">
        <div :class="$style.title">
          <h4>季度理财</h4>
          <p :class="$style.rate">历史年化回报率5.50%</p>
        </div>
        <em :class="$style.go">去赚钱</em>
      </div>
      <div :class="$style.item">
        <img :class="$style.img"  src="//img12.360buyimg.com/jrpmobile/jfs/t3331/69/580199498/3074/d5bb21c5/580d7f6cN7f35e596.png?width=76&height=76" alt="">
        <div :class="$style.title">
          <h4>一年理财</h4>
          <p :class="$style.rate">历史年化回报率5.80%</p>
        </div>
        <em :class="$style.go">去赚钱</em>
      </div>
    </section>
  </panel>
</template>
<script>
import panel from '../../../public/panel.vue'
export default {
  components: {
    panel
  }
}
</script>
<style lang="scss" module>
  @import "../../../assets/css/element.scss";
  .panel{
    >h4{
      border-bottom: 1px solid #ddd;
    }
    .content{
      .item{
        @include flex(row);
        align-items: center;
        height: 130px;
        position: relative; 
        &:after{
          content: " ";
          height: 1px;
          width: 100%;
          background-color: #ddd;
          margin-left: 150px;
        }
        &:last-child:after{
          background-color: #fff;
        }
        >.img{
          width: 88px;
          height: 88px;
          margin: 0 32px;
        }
        >.title{
          font-size: 32px;
          color: #333;
          line-height: 1.8;
          .rate{
            color: #ff3232;
            font-size: 24px;
            line-height: 1.1;
          }
        }
        >.go{
          color: #FF801A;
          font-size: 28px;
          position: absolute;
          right: 0;
          margin-right: 32px;
        }
      }
    }
  }
</style>


