const timeout = (t) => {
    return new Promise(resolve => setTimeout(() => {
        resolve()
    }, t))
}

export { timeout }