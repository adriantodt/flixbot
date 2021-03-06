export interface JellyfinWebhookEvent {
  ServerId: string;
  ServerName: string;
  ServerVersion: string;
  ServerUrl: string;
  NotificationType: string;
  Timestamp?: Date;
  UtcTimestamp?: Date;
  Name: string;
  Overview?: string;
  Tagline?: string;
  ItemId?: string;
  ItemType?: string;
  RunTimeTicks?: number;
  RunTime?: string;
  SeriesName?: string;
  SeasonNumber?: number;
  SeasonNumber00?: string;
  SeasonNumber000?: string;
  EpisodeNumber?: number;
  EpisodeNumber00?: string;
  EpisodeNumber000?: string;
  Year?: number;
  Video_0_Title?: string;
  Video_0_Type?: string;
  Video_0_Codec?: string;
  Video_0_Profile?: string;
  Video_0_Level?: number;
  Video_0_Height?: number;
  Video_0_Width?: number;
  Video_0_AspectRatio?: string;
  Video_0_Interlaced?: boolean;
  Video_0_FrameRate?: number;
  Video_0_VideoRange?: string;
  Video_0_ColorSpace?: string;
  Video_0_ColorTransfer?: string;
  Video_0_ColorPrimaries?: string;
  Video_0_PixelFormat?: string;
  Video_0_RefFrames?: number;
  Audio_0_Title?: string;
  Audio_0_Type?: string;
  Audio_0_Language?: string;
  Audio_0_Codec?: string;
  Audio_0_Channels?: number;
  Audio_0_Bitrate?: number;
  Audio_0_SampleRate?: number;
  Audio_0_Default?: boolean;
  Audio_1_Title?: string;
  Audio_1_Type?: string;
  Audio_1_Language?: string;
  Audio_1_Codec?: string;
  Audio_1_Channels?: number;
  Audio_1_Bitrate?: number;
  Audio_1_SampleRate?: number;
  Audio_1_Default?: boolean;
  Subtitle_0_Title?: string;
  Subtitle_0_Type?: string;
  Subtitle_0_Language?: string;
  Subtitle_0_Codec?: string;
  Subtitle_0_Default?: boolean;
  Subtitle_0_Forced?: boolean;
  Subtitle_0_External?: boolean;
  Subtitle_1_Title?: string;
  Subtitle_1_Type?: string;
  Subtitle_1_Language?: string;
  Subtitle_1_Codec?: string;
  Subtitle_1_Default?: boolean;
  Subtitle_1_Forced?: boolean;
  Subtitle_1_External?: boolean;
  MentionType?: string;
  EmbedColor?: number;
  Provider_tvdb?: string;
  Provider_imdb?: string;
  Provider_tvrage?: string;
  Description?: string;
  Date?: Date;
  Level?: string;
  Url?: null;
  Username?: string;
  UserId?: string;
  Subtitle_2_Title?: string;
  Subtitle_2_Type?: string;
  Subtitle_2_Language?: string;
  Subtitle_2_Codec?: string;
  Subtitle_2_Default?: boolean;
  Subtitle_2_Forced?: boolean;
  Subtitle_2_External?: boolean;
  Subtitle_3_Title?: string;
  Subtitle_3_Type?: string;
  Subtitle_3_Language?: string;
  Subtitle_3_Codec?: string;
  Subtitle_3_Default?: boolean;
  Subtitle_3_Forced?: boolean;
  Subtitle_3_External?: boolean;
  Provider_tmdb?: string;
}
