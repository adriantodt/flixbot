import { SonarrSeason } from './SonarrSeason';

export interface SonarrSeries {
  title: string;
  alternateTitles: AlternateTitle[];
  sortTitle: string;
  seasonCount: number;
  totalEpisodeCount: number;
  episodeCount: number;
  episodeFileCount: number;
  sizeOnDisk: number;
  status: string;
  overview: string;
  previousAiring: string;
  network: string;
  airTime: string;
  images: Image[];
  seasons: SonarrSeason[];
  year: number;
  path: string;
  profileId: number;
  languageProfileId: number;
  seasonFolder: boolean;
  monitored: boolean;
  useSceneNumbering: boolean;
  runtime: number;
  tvdbId: number;
  tvRageId: number;
  tvMazeId: number;
  firstAired: string;
  lastInfoSync: string;
  seriesType: string;
  cleanTitle: string;
  imdbId: string;
  titleSlug: string;
  certification: string;
  genres: string[];
  tags: any[];
  added: string;
  ratings: SeriesRatings;
  qualityProfileId: number;
  id: number;
}

export interface AlternateTitle {
  title: string;
  seasonNumber: number;
}

export interface Image {
  coverType: string;
  url: string;
  remoteUrl: string;
}

export interface SeriesRatings {
  votes: number;
  value: number;
}
