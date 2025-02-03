module.exports = function (api) {
	api.cache(true);
	return {
		presets: ["babel-preset-expo"],
		plugins: [
			[
				"module-resolver",
				{
					alias: {
						"@assets": "./src/assets",
						"@components": "./src/components",
						"@containers": "./src/containers",
						"@controllers": "./src/controllers",
						"@hooks": "./src/hooks",
						"@interfaces": "./src/interfaces",
						"@models": "./src/models",
						"@routes": "./src/routes",
						"@services": "./src/services",
						"@stores": "./src/stores",
						"@themes": "./src/themes",
						"@utils": "./src/utils",
						"@views": "./src/views",
						types: "./src/types",
					},
				},
			],
			"react-native-reanimated/plugin",
		],
	};
};
