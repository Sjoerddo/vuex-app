export const getColorClass = {
  computed: {
    getColorClass () {
      return this.item.release ? 'expecting' : 'current'
    }
  }
}
