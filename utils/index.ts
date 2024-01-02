export const timeout = (t: number) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(1);
        }, t);
    });
}