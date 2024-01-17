import Button from '@/common/components/Button/Button';
import IconScan from '@/common/icons/IconScan';
import EventFilter from '@/modules/event/components/EventFilter';

export default function Dashboard() {
  return (
    <div className="flex flex-col">
      <div className="self-end">
        <Button>
          Scan Ticket
          <IconScan />
        </Button>
      </div>
      <div className="flex flex-col rounded-[20px] border-2 border-orange-1 px-8 py-4">
        <EventFilter />
      </div>
    </div>
  );
}
