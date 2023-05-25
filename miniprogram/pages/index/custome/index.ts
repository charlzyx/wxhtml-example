const wxtags ={
  img: true,
  video: true,
}
Component({
  options: {
    virtualHost: true
  },
  properties: {
    node: Object,
  },
  data: {
    wxtags
  },
  methods: {
    bindtap(e: any) {
      console.log("custome element bind tap e", e)
    },
  },
  lifetimes: {
    ready() {
      console.log("--custome ", this.data.node)
    }
  }
})
