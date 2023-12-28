import IconUpload from "@/common/icons/IconUpload"

const UploadFile = ({value = {}, onChange}) => {
  return   <label class="flex justify-between items-center py-[10px] px-[20px] border-2 border-grey-3 bg-white rounded-[10px]">
   
     <span className="text-grey-1 text-[20px]">{value.name ? value.name : 'Upload Bukti Pembayaran'}</span> 
    <IconUpload />
  <input type="file"  onChange={onChange} class="hidden"/>
</label>
}

export default UploadFile