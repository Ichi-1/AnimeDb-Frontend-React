export interface IAnimePoster {
    previewUrl: string;
    url: string;
}

interface IAnimeTrailer {
    name: string;
    site: string;
    url: string;
}

export interface IAnimeRating {
    await: number;
    filmCritics: number;
    imdb: number;
    kp: number;
    russianFilmCritics: number;
}

interface IAnimePremiere {
    cinema: Date;
    country: string;
    russia: Date;
    world: Date;
}

interface IAnimeSeasonsInfo {
    number: number;
    episodesCount: number;
}


export interface IAnimePerson {
    id: number;
    name: string;
    enName: string;
    description: string;
    enProfession: 'director' | 'actor' | 'design' | 'producer' | 'composer' | 'editor';
    photo: string;
}

interface IAnimeDistributors {
    distributor: string;
    distributorRelease: null;
}

interface IAnimeProdComp {
    name: string;
    previewUrl: string;
    url: string;
}

interface IAnimeSequels {
    alternativeName: string;
    enName: string;
    id: number;
    poster: IAnimePoster;
    type: string;
}

export interface ISimilarAnime {
    alternativeName: string;
    enName: string;
    id: number;
    name: string;
    poster: IAnimePoster;
}


export interface IAnime {
    ageRating: number;
    alternativeName: string;
    backdrop: {url: string};
    countries: {name: string}[];
    createDate: Date;
    description: string;
    distributors: IAnimeDistributors;
    genres: {name: string}[];
    id: number;
    enName: string;
    images: {framesCount: number}
    lists: [];
    logo: {url: string}
    AnimeLength: number;
    name: string;
    names: {name: string}[];
    persons: IAnimePerson[];
    poster: IAnimePoster;
    premiere: IAnimePremiere;
    productionCompanies: IAnimeProdComp[];
    rating: IAnimeRating;
    ratingMpaa: string;
    seasonsInfo?: IAnimeSeasonsInfo[];
    sequelsAndPrequels: IAnimeSequels[];
    shortDescription: string;
    similarAnimes: IAnime[];
    status: string;
    ticketsOnSale: boolean;
    type: string;
    typeNumber: number;
    updateDates: Date[];
    updatedAt: Date;
    videos: {trailers: IAnimeTrailer[]};
    votes: IAnimeRating;
    year: number;
}