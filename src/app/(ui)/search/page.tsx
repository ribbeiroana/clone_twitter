import { TwitteItem } from '@/components/twitte/twitte-item';
import { GeneralHeaders } from '@/components/ui/general-header';
import { SearchInput } from '@/components/ui/search-input';
import { tweet } from '@/data/tweet';
import { redirect } from 'next/navigation';

type Props = {
  searchParams: {
    q: string | undefined;
  }
}
export default function Page({ searchParams }: Props) {
  if (!searchParams.q) redirect('/');
  return (
    <div>
      <GeneralHeaders backHref='/' >
        <SearchInput defaultValue={searchParams.q} />
      </GeneralHeaders>

      <div className='border-t-2 border-gray-900'>
        <TwitteItem tweet={tweet} />
        <TwitteItem tweet={tweet} />
        <TwitteItem tweet={tweet} />
        <TwitteItem tweet={tweet} />
      </div>

    </div>
  );
}