import { Test, TestingModule } from '@nestjs/testing';
import { AssigneesResolver } from './assignees.resolver';
import { AssigneesService } from './assignees.service';

describe('AssigneesResolver', () => {
  let resolver: AssigneesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AssigneesResolver, AssigneesService],
    }).compile();

    resolver = module.get<AssigneesResolver>(AssigneesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
