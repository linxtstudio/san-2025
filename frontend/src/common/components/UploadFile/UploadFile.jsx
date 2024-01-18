import IconUpload from '@/common/icons/IconUpload';

const UploadFile = ({ value = {}, onChange }) => {
  return (
    <label class="flex items-center justify-between rounded-[10px] border-2 border-grey-3 bg-white px-[20px] py-[10px]">
      <span className="text-[20px] text-grey-1">
        {value.name ? value.name : 'Upload Payment Proof'}
      </span>
      <IconUpload />
      <input type="file" onChange={onChange} class="hidden" />
    </label>
  );
};

export default UploadFile;
