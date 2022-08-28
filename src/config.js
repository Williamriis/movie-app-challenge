const config = {
    BASE_API: 'https://www.omdbapi.com/?apikey=8595b017',
    YEAR_OPTIONS_MIN: '1900',
    YEAR_OPTIONS_MAX: '2022',
    MEDIA_TYPE_OPTIONS: [
        { name: 'Any', value: '' },
        { name: 'Movie', value: 'movie' },
        { name: 'Series', value: 'series' },
        { name: 'Episode', value: 'episode' }
    ],
    WATCHLIST_KEY: 'watchlist',
    VALID_RATINGS: ['G', 'PG', 'PG-13', 'R', 'NC-17', 'TV-Y', 'TV-Y7', 'TV-G', 'TV-PG', 'TV-14', 'TV-MA']
}

export default config