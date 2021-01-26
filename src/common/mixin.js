import {debounce} from "@/common/utils";

export const imgListenerMixin = {
  data() {
    return {
      imgItemListener: null,
    }
  },
  mounted() {
    //img标签确实被挂载，但是其中的图片还没有占据高度
    //监听item中图片加载完成
    const newRefresh = debounce(this.$refs.scroll.refresh, 100);
    //保存监听函数
    this.imgItemListener = () => {
      newRefresh()
    };
    this.$EventBus.$on('itemImageLoad', this.imgItemListener)
  },
  deactivated() {
    /*
     *detail页面推荐部分图片加载时，会在home页面监听
     * 方法2：当离开详情页面时取消对image的监听（$off 第二个参数：要监听的函数）
     */
    this.$EventBus.$off('itemImageLoad', this.imgItemListener)
  }
}
