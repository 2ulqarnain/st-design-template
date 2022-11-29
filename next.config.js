/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  exportPathMap:async ()=>{
    return {
      "/":{page:"/"},
      "/about":{page:"/about"},
      __nextDefaultLocate:"/"
    }
  }
}

module.exports = nextConfig
