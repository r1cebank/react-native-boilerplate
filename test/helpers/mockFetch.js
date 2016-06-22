// Mocking the interal fetch for react native

function mockFetch(config) {
    return (url, params) => {
        return new Promise((resolve, reject) => {
            if (config.fetchFail) {
                reject(config.fetchError);
            }
            resolve({
                json() {
                    return config.jsonContent;
                }
            });
        });
    };
}

export default mockFetch;
