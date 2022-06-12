const plugin = require('tailwindcss/plugin')

module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {},
    },
    plugins: [
        plugin(function ({ addComponents, theme }) {
            addComponents({
                '.text-overflow': {
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                },
            })
        }),
    ],
}
