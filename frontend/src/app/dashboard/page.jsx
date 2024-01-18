import Button from '@/common/components/Button/Button';
import IconScan from '@/common/icons/IconScan';
import EventFilter from '@/modules/event/components/EventFilter';
import TableParticipant from '@/modules/participant/components/TableParticipant';

export default function Dashboard() {
  return (
    <div className="flex flex-col">
      <div className="mb-6 self-end">
        <Button>
          Scan Ticket
          <IconScan />
        </Button>
      </div>
      <div className="gap flex flex-col rounded-[20px] border-2 border-orange-1 px-8 py-4">
        <EventFilter />
        <TableParticipant />
      </div>
    </div>
  );
}
