import { Service } from 'typedi';
import {
  JellyfinDataState,
  PrismaClient,
  RadarrDataState,
  SonarrDataState,
  SonarrEpisodeDataState,
} from '@/prisma-client';
import { createLogger } from '@/common/logger';

@Service()
export class DatabaseController {
  private static readonly logger = createLogger('DatabaseController');

  constructor(private readonly client: PrismaClient) {
    // TODO Register this task as user-triggerable
    // Probably as a Job class?
    setInterval(() => {
      this.hourlyCleanup().catch(error => {
        DatabaseController.logger.error('Error while cleaning up database', { error });
      });
    }, 3600000);
  }

  private async hourlyCleanup() {
    DatabaseController.logger.info('(Task) Cleaning up database...');
    const result = await Promise.all([
      this.client.show.deleteMany({
        where: {
          sonarrState: SonarrDataState.NONE,
          jellyfinState: JellyfinDataState.NONE,
        },
      }),
      this.client.showSeason.deleteMany({
        where: {
          sonarrState: SonarrDataState.NONE,
          jellyfinState: JellyfinDataState.NONE,
        },
      }),
      this.client.showEpisode.deleteMany({
        where: {
          sonarrState: SonarrEpisodeDataState.NONE,
          jellyfinState: JellyfinDataState.NONE,
        },
      }),
      this.client.movie.deleteMany({
        where: {
          radarrState: RadarrDataState.NONE,
          jellyfinState: JellyfinDataState.NONE,
        },
      }),
    ]);

    const total = result.reduce((acc, cur) => acc + cur.count, 0);
    const report = total > 0 ? `Cleaned up ${total === 1 ? '1 objects' : `${total} objects`}` : 'No objects cleaned up';
    DatabaseController.logger.info(`(Task) Database cleanup finished. ${report}`);
  }
}
