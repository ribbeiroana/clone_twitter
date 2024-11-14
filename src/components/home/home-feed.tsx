import { tweet } from '@/data/tweet';
import { TwitteItem } from '../twitte/twitte-item';

export const HomeFeed = () => {
  return (
    <div>
      <TwitteItem tweet={tweet} />
      <TwitteItem tweet={tweet} />
      <TwitteItem tweet={tweet} />
      <TwitteItem tweet={tweet} />
    </div>
  );
}