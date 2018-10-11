<template>
  <panel :title="'理财精选'" :class="$style.panel">
    <section :class="$style.content">
      <dl v-for="(item, index) in items" :key="index" :class="$style.item">
        <dt :class="$style.title">{{item.title}}<span :class="$style.red">{{item.sub}}</span></dt>
        <dd :class="$style.rate">{{item.rate}}</dd>
        <dd :class="$style.des">{{item.des}}</dd>
      </dl>
    </section>
  </panel>
</template>
<script>
import panel from '../../../public/panel.vue'
export default {
  components: {
    panel
  },
  data() {
    return {
      items: [
        {
          title: "定期理财",
          sub: "理财首选",
          rate: "5.60%",
          des: "历史年化回报率",
        }, 
        {
          title: "小白理财",
          sub: "理财首选",
          rate: "4.22%",
          des: "7日年化收益率",
        }, 
        {
          title: "月月盈",
          sub: "养老保障",
          rate: "5%",
          des: "七日年化收益率",
        }, 
        {
          title: "小白基金",
          sub: "天天赚钱",
          rate: "4.27%",
          des: "7日年化收益率",
        }
      ]
    }
  }
}
</script>
<style lang="scss" module>
@import '../../../assets/css/element.scss';
.panel{
  .content{
    @include list(row);
    justify-content: space-around;
    box-sizing: border-box;
    position: relative;
    &::before{
      content: '';
      width: 100%;
      height: 1px;
      background-color: #ddd;
      position: absolute;
      top: 50%;
      left: 0;
    }
    .item{
      position: relative;
      width: 50%;
      padding: 34px 16px;
      box-sizing: border-box;
      &::after{
        content:'';
        width: 1px;
        height: 136px;
        position: absolute;
        top: 50%;
        right: 0;
        margin-top: -68px;
        background-color: #ddd;
      }
      &:nth-child(2n){
        &::after{
          display: none;
        }
      }
      .title{
        font-size: 30px;
        line-height: 42px;
        color: #333;
        .red{
          font-size: 22px;
          color: #ff5155;
          border: 1px solid #ff5155;
          padding: 0 8px;
          vertical-align: 1px;
          margin-left: 2px;
        }
      }
      .rate{
        font-weight: 700;
        font-size: 44px;
        height: 58px;
        line-height: 58px;
        color: #FF5155;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      .des{
        font-size: 24px;
        height: 34px;
        line-height: 34px;
        color: #999;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
  }
}

</style>


