import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { MetricsService } from './metrics.service';
import { CreateMetricDto } from './dto/create-metric.dto';
import { UpdateMetricDto } from './dto/update-metric.dto';
import { EngagementQueryDto } from './dto/engagement-query.dto';
import { CpmQueryDto } from './dto/cpm-query.dto';

@Controller('metrics')
export class MetricsController {
  constructor(private readonly metricsService: MetricsService) { }

  @Get('/engagement')
  engagement(@Query() dto: EngagementQueryDto) {
    return this.metricsService.getEngagement(dto);
  }

  @Get('/cpm')
  cpm(@Query() dto: CpmQueryDto) {
    return this.metricsService.getCpm(dto);
  }
}
