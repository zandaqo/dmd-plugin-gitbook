exports.isMixinFunction = function () {
  return this.mixes && (this.kind === 'function');
};
