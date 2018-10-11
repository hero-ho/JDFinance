<template>
  <panel :title="'生活服务'" :class="$style.panel">
    <ul :class="$style.content">
      <li :class="$style.item">
        <div :class="$style.pack">
          <img :class="$style.img" src="//img12.360buyimg.com/jrpmobile/jfs/t4375/104/1184122472/3976/89741da4/58be8a6eNf10193d0.png?width=135&height=135" alt="">
        </div>
        <p :class="$style.title">惠加油</p>
      </li>
      <li :class="$style.item">
        <div :class="$style.pack">
          <img :class="$style.img" src="//img12.360buyimg.com/jrpmobile/jfs/t4747/185/1901740991/5892/1383fb93/58f57851N17ee6993.jpg?width=132&height=132" alt="">
        </div>
        <p :class="$style.title">小白信用</p>
        <p :class="$style.des">全新升级</p>
      </li>
      <li :class="$style.item">
        <div :class="$style.pack">
          <img :class="$style.img" src="//img12.360buyimg.com/jrpmobile/jfs/t3241/234/8044685271/3713/7b29f77f/58be89c8Nb9d41295.png?width=135&height=135" alt="">
        </div>
        <p :class="$style.title">信用卡还款</p>
      </li>
      <li :class="$style.item">
        <div :class="$style.pack">
          <img :class="$style.img" src="//img12.360buyimg.com/jrpmobile/jfs/t3172/259/7993557249/4351/fd082707/58be8a81Nd7716a06.png?width=135&height=135" alt="">        
        </div>
        <p :class="$style.title">卡转让</p>
      </li>
      <li :class="$style.item">
        <div :class="$style.pack">
          <img :class="$style.img" src="//img12.360buyimg.com/jrpmobile/jfs/t3085/320/8107659086/4344/cdbba2dd/58be8acfNdadcaf00.png?width=135&height=135" alt="">
        </div>
        <p :class="$style.title">定期还款</p>
      </li>
    </ul>
  </panel>
</template>
<script>
import panel from "../../../public/panel.vue"
export default {
  components: {
    panel
  }
}
</script>
<style lang="scss" module>
@import '../../../assets/css/element.scss';
.panel{
  .content{
    @include list(row);
    padding-bottom: 28px;
    .item{
      width: 20%;
      text-align: center;
      font-size: 26px;
      .pack{
        height: 0;
        padding-bottom: 80%;
        overflow: hidden;
        .img{
          width: 80%;
        }
      }
      .title{
        color: #666;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        margin-top: 14px;
      }
      .des{
        color: #FF801A;
        margin-top: 14px;
      }    
    }
  }
}
</style>

