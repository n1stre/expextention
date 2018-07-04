const defaultOptions = {
  elementSeparator: '__',
  modifierSeparator: '--'
}

const createBemMap = (callback, customOptions) => {
  const options = {
    ...defaultOptions,
    ...customOptions
  }

  const result = callback(
    makeBlock(options),
    makeElement(options),
    makeModifier(options)
  )

  Object.keys(result).forEach(key => {
    result[key] = stringifyAndTraverse(result[key])
  })

  return result
}

const provideToString = (branch = {}, resultString) => {
  return Object.assign(branch, {
    toString: () => resultString,
    valueOf: () => resultString
  })
}

const stringifyAndTraverse = (branch, prefix = '') => {
  if (branch) {
    const stringName = prefix + branch

    provideToString(branch, stringName)
    whitelistedKeys(branch).forEach(key => {
      branch[key] = stringifyAndTraverse(branch[key], stringName)
    })
  }

  return branch
}

const makeBlock = options => (blockName, branch = {}) => {
  return provideToString(branch, blockName)
}

const makeElement = options => (elmName, branch = {}) => {
  return provideToString(branch, options.elementSeparator + elmName)
}

const makeModifier = options => (modName, branch = {}) => {
  return provideToString(branch, options.modifierSeparator + modName)
}

const whitelistedKeys = object => {
  return Object.keys(object).filter(isPropWhitelisted)
}

const isPropWhitelisted = propName => (
  propName !== 'toString' &&
  propName !== 'valueOf'
)

export default {
  create: createBemMap
}

// const bm = createBemMap((b,e,m) => ({
//   resizer: b('unidir-children-resizer', {
//     unique: m('unique'),
//     separator: e('separator', {
//       withTitle: m('with-title')
//     })
//   }),
//   ammo: b('ammo', {
//     outfit: e('outfit'),
//     damage: e('damage'),
//     gunshot: e('gunshot', {
//       slingshot: m('sling')
//     }),
//   })
// }));
