/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["api.json-generator.com", "i.picsum.photos"],
    loader: "custom",
    path: "./utils",
  },
};
