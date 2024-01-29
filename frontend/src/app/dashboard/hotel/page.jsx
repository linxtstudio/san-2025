import Button from '@/common/components/Button/Button';
import EventFilter from '@/modules/event/components/EventFilter';
import TableParticipant from '@/modules/participant/components/TableParticipant';
import Link from 'next/link';
export default function Dashboard() {
  return (
    <div className="flex flex-col">
      <div className="mb-6 self-end">
        <Link href="/dashboard/hotel/update">
          <Button>Edit Hotel</Button>
        </Link>
      </div>
      <div className="gap flex flex-col rounded-[20px] border-2 border-orange-1 px-8 py-4">
        <EventFilter useEvent={false} useGroup={false} />
        <div className="mt-4">
          <TableParticipant type="hotel" />
        </div>
      </div>
    </div>
  );
}
