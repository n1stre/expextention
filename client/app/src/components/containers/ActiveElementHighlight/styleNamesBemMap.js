import BemMap from '@utils/BemMap'

export default BemMap.create((b, e, m) => ({
  elementHighlight: b('elm-high', {
    box: e('color-box'),
    tooltip: e('info'),
    withElement: m('with-element')
  })
}))
