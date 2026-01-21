/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  // 🔹 Required for static deployment on Render
  output: "export",

  // 🔹 Prevent next/image issues on static hosting
  images: {
    unoptimized: true,
  },

  // 🔹 Optional but recommended (prevents routing issues)
  trailingSlash: true,
};

export default nextConfig;
