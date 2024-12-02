import { Test, TestingModule } from '@nestjs/testing';
import { AssigneesService } from './assignees.service';

describe('AssigneesService', () => {
  let service: AssigneesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AssigneesService],
    }).compile();

    service = module.get<AssigneesService>(AssigneesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
