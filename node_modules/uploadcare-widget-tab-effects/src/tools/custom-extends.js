function customExtends(child, parent) {
  for (const key in parent) {
    if (Object.prototype.hasOwnProperty.call(parent, key)) {
      child[key] = parent[key]
    }
  }

  function Ctor() {
    this.constructor = child
  }

  Ctor.prototype = parent.prototype
  child.prototype = new Ctor()
  child.__super__ = parent.prototype

  return child
}

export default customExtends
