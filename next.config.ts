import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: "/drain-cleaning-sewer-repair-service-bloomingdale-nj",
        destination: "/",
        permanent: true,
      },
      {
        source: "/drain-cleaning-sewer-repair-service-verona-nj",
        destination: "/",
        permanent: true,
      },
      {
        source: "/drain-and-sewer-service-bergen-county-nj",
        destination: "/",
        permanent: true,
      },
      {
        source: "/drain-and-sewer-service-essex-county-nj",
        destination: "/",
        permanent: true,
      },
      {
        source: "/drain-cleaning-sewer-repair-service-hawthorne-nj",
        destination: "/",
        permanent: true,
      },
      {
        source: "/drain-and-sewer-service-hudson-county-nj",
        destination: "/",
        permanent: true,
      },
      {
        source: "/drain-and-sewer-service-passaic-county-nj",
        destination: "/",
        permanent: true,
      },
      {
        source: "/free-estimates",
        destination: "/",
        permanent: true,
      },
      {
        source: "/blog",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;