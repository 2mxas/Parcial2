import { Injectable } from '@nestjs/common';
import { CpmQueryDto } from './dto/cpm-query.dto';
import { EngagementQueryDto } from './dto/engagement-query.dto';

@Injectable()
export class MetricsService {
  getEngagement(engagementQueryDto: EngagementQueryDto) {
    const { likes, comments, followers } = engagementQueryDto;
    const rate = (likes + comments) / followers * 100;
    return { rate };
  }

  getCpm(cpmQueryDto: CpmQueryDto) {
    const { cost, impressions } = cpmQueryDto;
    const cpm = (cost / impressions) * 1000;
    return { cpm };
  }
}
