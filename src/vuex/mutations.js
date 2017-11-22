const mutations = {
  increment: state => state.count++,
  decrement: state => state.count--,
  changeStatus: state => state.status = !state.status
}
export default mutations
