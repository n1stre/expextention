import BemMap from '@utils/BemMap'

export default BemMap.create((b, e, m) => ({
  resizableGrid: b('resizable-grid', {
    isHorizontal: m('is-horizontal'),
    isFullSize: m('is-full-size'),
    item: e('item'),
    container: e('container'),
    separatorTitle: e('separator-title'),
    separator: e('separator', {
      withTitle: m('with-title')
    })
  })
}))
