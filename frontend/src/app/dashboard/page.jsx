import Button from '@/common/components/Button/Button';
import IconScan from '@/common/icons/IconScan';
import EventFilter from '@/modules/event/components/EventFilter';
import EventTotalTransaction from '@/modules/event/components/EventTotalTransaction';
import ListTableParticipant from '@/modules/participant/components/ListTableParticipant';
import Link from 'next/link';

export default function Dashboard() {
  return (
    <div className=" flex flex-col">
      <div className="mb-6 flex items-end justify-between">
        <EventTotalTransaction />
        <div>
          <Link href="/dashboard">
            <Button>
              Scan Ticket
              <IconScan />
            </Button>
          </Link>
        </div>
      </div>

      <div className="gap flex flex-col rounded-[20px] border-2 border-orange-1 px-8 py-4">
        <EventFilter />
        <div className="mt-4">
          <ListTableParticipant />
        </div>
      </div>
    </div>
  );
}
