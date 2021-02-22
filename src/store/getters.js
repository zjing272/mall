export default {
  //计算购物车中的商品个数
  allCount: state => {
    return state.cartList.length
  },
  cartList: state => {
    return state.cartList
  }
}
