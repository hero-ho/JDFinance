<template>
  <section>
    <slider :items="items" :cname="$style.slider" class="slider" />
    <section :class="$style.list">
      <div v-for="item in enters" :key="item.img" :class="$style.item">
        <router-link :to="{name: item.href}" :class="$style.link">
          <div :class="$style.pack">
            <img :src="item.img" :alt="item.title" :class="$style.img">
          </div>
          <h4 :class="$style.title">{{item.title}}</h4>
        </router-link>
      </div>
    </section>
  </section>
</template>
<script>
import slider from '../../../public/slider.vue'
export default {
  components: {
    slider
  },
  data () {
    return {
      items: [
        {
          href: 'download',
          src: '//img12.360buyimg.com/jrpmobile/jfs/t1/4093/36/6284/46179/5ba222d4Ef6991e80/fcd0a90a6863602f.jpg?width=750&height=320'
        },
        {
          href: 'download',
          src: '//img12.360buyimg.com/jrpmobile/jfs/t1/870/25/6779/73570/5ba23c3fEa1eaad30/021cbdda4fd5cfaa.jpg?width=750&height=320'
        },
        {
          href: 'download',
          src: '//img12.360buyimg.com/jrpmobile/jfs/t1/2790/15/6365/41512/5ba22351E6a312896/91ede54780a0ef37.jpg?width=750&height=320'
        }
      ],
      enters: [
        {
          title: '优惠券',
          img: '//img12.360buyimg.com/jrpmobile/jfs/t3991/64/2521945388/12110/93c0139/58d1e462Ncf294123.png?width=132&height=132',
          href: 'download'
        },   
        {
          title: '领福利',
          img: '//img12.360buyimg.com/jrpmobile/jfs/t5590/252/875247023/17343/946aa72c/59224650N0f7ffc92.png?width=132&height=132',
          href: 'download'
        },
        {
          title: '抢钢镚',
          img: '//img12.360buyimg.com/jrpmobile/jfs/t4393/329/2180608902/13217/c88c0cec/58ec9dcdN1534e2d7.png?width=132&height=132',
          href: 'download'
        },
        {
          title: '白条提额',
          img: '//img12.360buyimg.com/jrpmobile/jfs/t5488/298/1036263348/12073/b4f4de97/590ac8e8Ne9def22e.png?width=135&height=135',
          href: 'download'
        },
        {
          title: '工资理财',
          img: '//img12.360buyimg.com/jrpmobile/jfs/t1/520/34/950/3686/5b9239e3Eaaf5465c/8d8c35badacfc114.png?width=90&height=90',
          href: 'download'
        }
      ]
    }
  }
}
</script>
<style lang="scss" module>
@import '../../../assets/css/element.scss';
.slider{
  .img{
    width: 100%;
  }
}
.list{
  @include list(row);
  background-color: #fff;
  padding-top: 40px;
  padding-bottom: 20px;
  .item{
    text-align: center;
    width: 20%;
    .link{
      text-decoration: none;
      display: block;
      .pack{
        width: 100%;
        height: 0;
        padding-bottom: 100%;
        overflow: hidden;
        .img{
          width: 80%;
        }
      }
      .title{
        font-size: 26px;
        margin-top: -10px;
        color: #666;
      }
    }
  }
}
</style>
<style lang="scss" scoped>
.slider{
  /deep/ .swiper{
    overflow: hidden;
    height: 0;
    padding-bottom: 42.66666666666666666666666666666667%;
    img{
      width:100%;
    }
  }
}
</style>

