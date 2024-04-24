import mongoose from 'mongoose'

mongoose.connect(process.env.MONGODB_URI)

const movieSchema = new mongoose.Schema ({
    contentType: String,
    title: String,
    overview: String,
    streamingInfo: {
        us: [{
            service: String,
            streamingType: String,
            quality: String,
            link: String,
            audios: [{
                language: String,
                region: String
            }],
            subtitles: [{
                locale: {
                    language: String,
                    region: String
                },
                closedCaptions: Boolean
            }],
            price: {
                amount: String,
                currency: String,
                formatted: String
            },
            availableSince: Number
        }]
    },
    cast: [ String ],
    year: Number,
    imdbId: String,
    tmdbId: { type: Number, unique: true },
    originalTitle: String,
    genres: [{
        id: Number,
        name: String
    }],
    directors: [ String ]
})

const MovieEntry = mongoose.model('movieList', movieSchema)