import getItems from '../../data/api'
import * as types from '../mutation-types'

const state = {
  items: [],
  selected: {
    title: '',
    poster: '',
    link: '',
    release: ''
  }
}

const getters = {
  allItems: state => state.items,
  selectedItem: state => state.selected
}

const actions = {
  async getAllItems ({ commit }) {
    const items = await getItems()
    commit(types.RECEIVE_ITEMS, { items })
  },

  selectItem ({ commit }, item) {
    commit(types.SELECT_ITEM, item)
  }
}

const mutations = {
  [types.RECEIVE_ITEMS] (state, { items }) {
    state.items = items
  },

  [types.SELECT_ITEM] (state, { item }) {
    state.selected = item
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
