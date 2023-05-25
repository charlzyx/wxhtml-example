import type { Node } from 'wxhtml'
import { htmlToNodes  } from './utils'
import readme  from './readme'

Page({
  data: {
    demo: 'readme',
    theme: 'theme-pink',
    nodes: [] as Node[]
  },
  onclick(e: any) {
    const node = e.detail;
    console.log(node)
  },
  onLoad() {
    const nodes = htmlToNodes(readme)
    this.setData({ nodes });
  },
})
