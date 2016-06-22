// Mocking the interal storage for react native

function mockStorage(config) {
    return {
        get(key) {
            return new Promise((resolve, reject) => {
                if (config.getFail) {
                    reject(config.getError);
                }
                resolve(config.storage[key]);
            });
        },
        save(key, data) {
            return new Promise((resolve, reject) => {
                if (config.saveFail) {
                    reject(config.saveError);
                }
                resolve();
            });
        }
    };
}

export default mockStorage;
