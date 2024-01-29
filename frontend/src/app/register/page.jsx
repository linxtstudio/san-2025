'use client';
import { useEffect, useState } from 'react';

import Input from '@/common/components/Input/Input';
import MultipleCheck from '@/common/components/MultipleCheck/MultipleCheck';
import Select from '@/common/components/Select/Select';
import Image from 'next/image';
import UploadFile from '@/common/components/UploadFile/UploadFile';
import { getEvents } from '@/modules/event/services/getEvent';
import { getProvinces } from '@/modules/region/services/getProvinces';
import { getCities } from '@/modules/region/services/getCities';
import Button from '@/common/components/Button/Button';
import { uploadFile } from '@/common/services/uploadFile';
import { register } from '@/modules/event/services/register';
import toast from 'react-hot-toast';
import { formatRupiah } from '@/common/helper/formatRupiah';
import IconBack from '@/common/icons/IconBack';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { getHotels } from '@/modules/hotel/services/getHotels';
import Radio from '@/common/components/Radio/Radio';

const RegisterPage = ({}) => {
  const [eventList, setEventList] = useState([]);
  const [provinceList, setProvinceList] = useState([]);
  const [cityList, setCityList] = useState([]);
  const [hotelList, setHotelList] = useState([]);

  const [selectedValues, setSelectedValues] = useState([]);

  const [hotelSelectedValue, setHotelSelectedValue] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const [selectedProvince, setSelectedProvince] = useState('');
  const router = useRouter();

  const [selectedFile, setSelectedFile] = useState({});
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone_number: '',
    city_id: '',
    transfer_receipt_image: '',
    event_type_ids: [],
    event_participant_hotel_facility: {
      hotel_facility_id: '',
      stay_duration: null,
    },
    contribution: 0,
  });

  const resetState = () => {
    setCityList([]);
    setSelectedValues([]);
    setSelectedProvince('');
    setSelectedFile({});
    setForm({
      name: '',
      email: '',
      phone_number: '',
      city_id: '',
      transfer_receipt_image: '',
      event_type_ids: [],
      event_participant_hotel_facility: {
        hotel_facility_id: '',
        stay_duration: null,
      },
    });
  };

  const handleGetEvents = async () => {
    try {
      const response = await getEvents({ paginate: false });
      if (response.status === 200) {
        setEventList(response.data.data.data);
      }
    } catch (error) {
      toast.error('error');
    }
  };

  const handleGetProvinces = async () => {
    try {
      const payload = {
        params: {
          paginate: false,
        },
      };
      const response = await getProvinces(payload);

      if (response.status === 200) {
        setProvinceList(
          response.data.data.map((province) => ({
            label: province.name,
            value: province.id,
          }))
        );
      }
    } catch (error) {
      toast.error('error');
    }
  };

  const handleGetHotels = async (id) => {
    try {
      const response = await getHotels();

      if (response.status === 200) {
        // setHotelList(response.data.data.data);
        setHotelList(
          response.data.data.data.map((hotel) => {
            return {
              ...hotel,
              price: Math.floor(Math.random() * (800000 - 200000 + 1)) + 200000,
              room_availability: Math.floor(Math.random() * 25),
              max_pax: Math.floor(Math.random() * 4),
            };
          })
        );
      }
    } catch (error) {
      toast.error('error');
    }
  };

  const handleOnProvinceChange = async (id) => {
    try {
      setSelectedProvince(id);
      setForm({ ...form, city_id: '' });
      const response = await getCities({
        params: { province_id: id, paginate: false },
      });
      if (response.status === 200) {
        setCityList(
          response.data.data.map((city) => ({
            label: city.name,
            value: city.id,
          }))
        );
      }
    } catch (error) {
      toast.error('error');
    }
  };

  const handleRegister = async () => {
    try {
      const formData = new FormData();
      formData.append('file', selectedFile);

      const uploadResponse = await uploadFile(formData);

      const formPaylod = form;
      delete formPaylod.contribution;

      const payload = {
        ...formPaylod,
        event_type_ids: selectedValues.map((value) => value.id),
        transfer_receipt_image: uploadResponse.data.data.filename,
        event_participant_hotel_facility: {
          ...form.event_participant_hotel_facility,
          hotel_facility_id: hotelSelectedValue.id,
        },
      };

      const response = await register(payload);
      if (response.status === 200) {
        toast.success(
          'Registration Successful. Thank you for your participation'
        );
        localStorage.setItem(
          'register-data',
          JSON.stringify(response.data.data)
        );
        resetState();
        router.push('/register/ticket');
      }
    } catch (error) {
      toast.error('error');
    }
  };

  const totalFee = selectedValues.reduce((sum, value) => {
    let total = sum + value.fee_nominal;
    if (value.fee_type === 'minimum_contribution') {
      return sum + Math.max(value.fee_nominal, form.contribution);
    }
    return total;
  }, 0);
  const getTotalFee = () => {
    let total = 0;
    selectedValues.forEach((value) => {
      if (value.fee_type === 'minimum_contribution') {
        total += Math.max(value.fee_nominal, form.contribution);
      } else {
        total += value.fee_nominal;
      }
    });

    if (
      Object.keys(hotelSelectedValue).length &&
      form.event_participant_hotel_facility.stay_duration
    ) {
      total +=
        hotelSelectedValue.price *
        form.event_participant_hotel_facility.stay_duration;
    }
    return total;
  };

  useEffect(() => {
    if (isLoading) {
      const data = localStorage.getItem('register-data');
      if (data) {
        router.replace('/register/ticket');
        return;
      }
      handleGetEvents();
      handleGetProvinces();
      handleGetHotels();
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    const mainEventSelected = selectedValues.some(
      (value) => value.name.toLowerCase() === 'san main event'
    );

    if (!mainEventSelected) {
      setHotelSelectedValue({});
      setForm({
        ...form,
        event_participant_hotel_facility: {
          hotel_facility_id: '',
          stay_duration: null,
        },
      });
    }
  }, [selectedValues]);

  if (isLoading) return <></>;

  return (
    <div className="container z-20 py-8">
      <Link href="/" className="flex items-center">
        <IconBack />
        <span className="text-title-1 font-semibold">Back</span>
      </Link>
      <h1 className="mt-12 text-2xl font-semibold md:text-display">
        Registration Form
      </h1>
      <div className="mt-[30px] flex flex-col gap-[70px] md:flex-row">
        <div className="flex w-full flex-col gap-6 md:w-1/2">
          <MultipleCheck
            options={eventList.filter(
              (event) => event.fee_type !== 'by_contact'
            )}
            selectedValues={selectedValues}
            onChange={setSelectedValues}
            form={form}
            setForm={setForm}
            label="Choose the event(s) you'd like to participate in"
          />
          {selectedValues.some(
            (value) => value.name.toLowerCase() === 'san main event'
          ) ? (
            <>
              <Radio
                options={hotelList}
                selectedValues={hotelSelectedValue}
                onChange={setHotelSelectedValue}
                form={form}
                name="hotelRadio"
                setForm={setForm}
                label="Choose the event(s) you'd like to participate in"
              />
              <Input
                label="Please write stay duration (Max. 4 Days)"
                inputProps={{
                  placeholder: '1-4 Days',
                  type: 'text',
                  value: form.event_participant_hotel_facility.stay_duration,
                }}
                onInput={(value) =>
                  setForm({
                    ...form,
                    event_participant_hotel_facility: {
                      ...form.event_participant_hotel_facility,
                      stay_duration: value,
                    },
                  })
                }
              />
            </>
          ) : null}
        </div>
        <div className="flex w-full flex-col gap-6 md:w-1/2">
          <Input
            label="Name "
            inputProps={{
              placeholder: 'Jane Nurul Munawar',
              value: form.name,
            }}
            onInput={(value) => setForm({ ...form, name: value })}
          />
          <Input
            label="Email"
            inputProps={{
              placeholder: 'example@gmail.com',
              type: 'email',
              value: form.email,
            }}
            onInput={(value) => setForm({ ...form, email: value })}
          />
          <Input
            label="Phone Number"
            inputProps={{
              placeholder: '+62 810 810 81000',
              type: 'tel',
              value: form.phone_number,
            }}
            onInput={(value) => setForm({ ...form, phone_number: value })}
          />
          <Select
            placeholder="Choose Province"
            value={selectedProvince}
            label={'Province'}
            options={provinceList}
            onChange={(value) => handleOnProvinceChange(value)}
          />
          <Select
            placeholder="Choose City"
            value={form.city_id}
            label={'City'}
            options={cityList}
            onChange={(value) => setForm({ ...form, city_id: value })}
          />
          <div className="flex flex-col">
            <h5 className="text-[22px] font-semibold">Payment Proof</h5>
            <div className="mt-8 flex flex-col gap-2">
              <div className="flex flex-col gap-1">
                <span className="text-grey-5">Amount to be paid</span>

                <span className="text-xl">{formatRupiah(getTotalFee())}</span>
              </div>
              <div className="mt-2 flex flex-col gap-1">
                <span className="text-grey-5">Payment Information</span>
                <span className="text-xl">Mirawati</span>
              </div>
              <div className="flex items-center gap-4">
                <Image
                  src={'/image/logo/logo-bca.png'}
                  width={56}
                  height={18}
                  alt="bca"
                />
                <span className="text-[22px] font-semibold">8271372183</span>
              </div>
            </div>
          </div>
          <span className="text-neutral-600">
            *please put your Name-SAN on the transfer news
          </span>
          <UploadFile
            value={selectedFile}
            onChange={(e) => {
              setSelectedFile(e.target.files[0]);
            }}
          />
          <Button
            onclick={() => {
              handleRegister();
            }}
          >
            Register
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
