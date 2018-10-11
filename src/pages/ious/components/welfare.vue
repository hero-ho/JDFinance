<template>
  <panel :title="'白条福利'" :class="$style.panel">
    <section :class="$style.content">
      <div :class="$style.item">
        <img :class="$style.img" src="//img12.360buyimg.com/jrpmobile/jfs/t4378/62/155957680/9017/16463551/58affd58Nb5c9198e.jpg?width=120&height=120" alt="">
        <div :class="$style.title">
          <h4>开通白条</h4>
          <p :class="$style.rate">送188元礼包</p>
        </div>
        <em :class="$style.go">立即开通</em>
      </div>
      <div :class="$style.item">
        <img :class="$style.img"  src="//img12.360buyimg.com/jrpmobile/jfs/t4150/330/141981421/9147/604e3e04/58affc3bNbfa8f9d7.jpg?width=120&height=120" alt="">
        <div :class="$style.title">
          <h4>白条闪付</h4>
          <p :class="$style.rate">新手享158元礼包</p>
        </div>
        <em :class="$style.go">随机立减</em>
      </div>
      <div :class="$style.item">
        <img :class="$style.img"  src="//img12.360buyimg.com/jrpmobile/jfs/t4270/96/1102370053/8651/58b7fa5a/58bd2e10N453e9464.jpg?width=120&height=120" alt="">
        <div :class="$style.title">
          <h4>白条提额</h4>
          <p :class="$style.rate">金融app专享提额礼包</p>
        </div>
        <em :class="$style.go">去提额</em>
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
            color: #999;
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


