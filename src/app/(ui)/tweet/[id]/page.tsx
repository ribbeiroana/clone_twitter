import { TwitteItem } from '@/components/twitte/twitte-item';
import { TwittePost } from '@/components/twitte/twitte-post';
import { GeneralHeaders } from '@/components/ui/general-header';
import { tweet } from '@/data/tweet';

export default function Page() {
  return (
    <div>
      <GeneralHeaders backHref='/'>
        <div className='font-bold text-lg'>Voltar</div>
      </GeneralHeaders>
      <div className='border-t-2 border-gray-900'>
        <TwitteItem tweet={tweet} />
        <div className='border-y-8 border-gray-900'>
          <TwittePost />
        </div>
        <TwitteItem tweet={tweet} hiddenComents />
        <TwitteItem tweet={tweet} hiddenComents/>
        <TwitteItem tweet={tweet} hiddenComents/>
      </div>
    </div>
  );
} 