// next.config.js
module.exports = {
    i18n: {
        // These are all the locales you want to support in
        // your application
        // locales: ["es", "en", "ca"],
        locales: ['es'],
        // This is the default locale you want to be used when visiting
        // a non-locale prefixed path e.g. `/hello`
        defaultLocale: 'es',
    },
    images: {
        domains: ['localhost'],
    },
    // typescript: {
    //     ignoreBuildErrors: true,
    // },
    // eslint: {
    //     // Warning: Dangerously allow production builds to successfully complete even if
    //     // your project has ESLint errors.
    //     ignoreDuringBuilds: true,
    // },
}
