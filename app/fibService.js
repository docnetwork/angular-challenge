app.service('fib', function () {
  // Populate with base cases
  const fibCache = new Map([ [0, 1,], [1, 2] ])

  return { fastFib }

  function fastFib (n) {
    if (fibCache.has(n)) {
      return fibCache.get(n)
    }

    const result = fastFib(n - 1) + fastFib(n - 2)
    fibCache.set(n, result)

    return result
  }
})
