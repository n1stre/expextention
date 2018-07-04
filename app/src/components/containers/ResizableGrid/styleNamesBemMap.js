import BemMap from '../../../utils/BemMap'

export default BemMap.create((b, e, m) => ({
  resizableGrid: b('resizable-grid', {
    unidir: m('unidirectional'),
    item: e('item'),
    container: e('container'),
    separatorTitle: e('separator-title'),
    separator: e('separator', {
      withTitle: m('with-title')
    })
  })
}))
