<template>
  <div class="bottom-bar">
    <div class="checked-content">
      <check-button class="check-button"/>
      <span>全选</span>
      <div class="total">合计:￥{{totalPrice}}</div>
    </div>
    <div class="to-pay">去付款 ()</div>
  </div>
</template>

<script>
import CheckButton from "@/views/shopcart/childComps/CheckButton"
export default {
  name: "CartBottomBar",
  components: {
    CheckButton
  },
  computed: {
    totalPrice: function() {
      return this.$store.state.cartList.filter(item => {
        return item.checked
      }).reduce((preValue, item) => {
        return preValue + item.price * item.count
      }, 0).toFixed(2)
    },
    totalCount: function() {
      return this.$store.state.cartList.filter(item => {
        return
      })
    }
  }
}
</script>

<style scoped>
  .bottom-bar {
    display: flex;
    justify-content: space-between;
    height: 44px;
    line-height: 44px;
    background-color: #f4f4f4;
  }

  .checked-content {
    display: flex;
    padding-left: 15px;
  }
  .check-button {
    position: relative;
    top: 11px;
  }
  .checked-content span {
    padding: 0 10px;
  }
  .checked-content .total {
    padding-left: 5px;
    font-size: 16px;
  }
  .to-pay {
    padding: 0 20px;
    height: 44px;
    background-color: #ff4500;
    color: #fff;
  }
</style>
