import { parse } from 'html5parser';


export const htmlToNodes = (html: string) => {
  const ast = parse(html);
  const toNodes = (nodes: any[]): any[] => {
    return nodes.reduce((tree, node) => {
      const lite = {
        name: node.name,
        attrs: node.attributes?.reduce((map: any, attr: any) => {
          const black = [/aria\-/];
          const name = attr.name.value;
          if (black.some((r) => r.test(name))) return map;
          if (/data-/.test(name)) {
            map.dataset = map.dataset || {};
            map.dataset[name] = attr.value.value;
          } else {
            const value = attr.value?.value;
            map[name] = value;
          }
          return map;
        }, {}),
        children: node.body ? toNodes(node.body) : node.value,
      };

      // merge space
      if (/\s\s+/.test(lite.children)) {
        lite.children = lite.children.replace(/\s\s+/g, ' ')
      }
      // skip empty text
      if (/^\s$/.test(lite.children)) {
        return tree;
      }

      tree.push(
        lite,
      );
      return tree;
    }, []);
  };
  return toNodes(ast)
}
