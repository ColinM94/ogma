module.exports = function (api) {
    api.cache(true)
    return {
        presets: ["babel-preset-expo"],
        plugins: [
            [
                "module-resolver",
                {
                    alias: {
                        components: "./src/components",
                        contexts: "./src/contexts",
                        api: "./src/api",
                        screens: "./src/screens",
                        common: "./src/common",
                        navigation: "./src/navigation",
                        library: "./src/library",
                        assets: "./src/assets",
                    },
                },
            ],
        ],
    }
}
