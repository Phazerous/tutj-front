import useSWR from 'swr';
import { get } from '../lib/routing/base';

const route = 'notExistingPath';

export default function Text() {
  const { data, error } = useSWR('test', get);

  return <h1>Dev</h1>;
}
