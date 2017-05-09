exports.isMixedMethod = function (linkMixedMethod) {
  return linkMixedMethod && this.mixes && (this.kind === 'function');
};
