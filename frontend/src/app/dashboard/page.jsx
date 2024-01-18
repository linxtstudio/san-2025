import Button from '@/common/components/Button/Button';
import IconScan from '@/common/icons/IconScan';
import EventFilter from '@/modules/event/components/EventFilter';
import ListTableParticipant from '@/modules/participant/components/ListTableParticipant';

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
        <div className="mt-4">
          <ListTableParticipant />
        </div>
      </div>
    </div>
  );
}
