export default function(api) {
  const isProduction = api.env('production');

  return {
    presets: ['@babel/preset-env', '@babel/preset-react'],
    plugins: isProduction ? ['transform-remove-console'] : [],
  };
}