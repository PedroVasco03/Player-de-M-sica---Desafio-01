// next.config.js
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.(mp3|wav)$/, // Arquivos que devem ser processados
      type: 'asset/resource', // Define o tipo de processamento
      generator: {
        filename: 'static/media/[name].[hash][ext]', // Caminho e nome do arquivo gerado
      },
    });

    return config;
  },
};

module.exports = nextConfig;
