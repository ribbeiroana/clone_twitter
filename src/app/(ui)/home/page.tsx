import { HomeFeed } from '@/components/home/home-feed';
import { HomeHeader } from '@/components/home/home-header';
import { TwittePost } from '@/components/twitte/twitte-post';

export default function Page() {
  return (
    <div>
      <HomeHeader />
      <TwittePost />
      <HomeFeed />
    </div>
  );
}