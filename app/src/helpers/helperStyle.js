const filterByPresense = arr => arr.filter(name => Boolean(name))

export const styleNames = (...styleNamesArr) => {
  return filterByPresense(styleNamesArr).join(' ')
}

export const styleRules = (...styleRulesArr) => {
  return filterByPresense(styleRulesArr)
}
