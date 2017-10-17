import DataService from '../../../src/components/services/dataService';

test(async () => {
  const result = await DataService.getProject(4);

  expect(result.length).toBe(1);
});