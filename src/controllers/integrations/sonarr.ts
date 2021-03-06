import { Service } from 'typedi';
import { createLogger } from '@/common/logger';
import process from 'process';
import { SyncSonarrJob } from '@/jobs/sync-sonarr';
import { SonarrIntegrationService } from '@/services/integrations/sonarr';

@Service()
export class SonarrIntegration {

  private static readonly logger = createLogger('SonarrIntegration');

  constructor(private readonly sonarr: SonarrIntegrationService) {
    const url = process.env.SONARR_URL!;
    const apiKey = process.env.SONARR_API_KEY!;

    if (!(url && apiKey)) {
      if (!url) {
        SonarrIntegration.logger.error('SONARR_URL environment variable is not set!');
      }
      if (!apiKey) {
        SonarrIntegration.logger.error('SONARR_API_KEY environment variable is not set!');
      }
    } else {
      // TODO Register job
      new SyncSonarrJob(this.sonarr, url, apiKey);
    }
  }
}
