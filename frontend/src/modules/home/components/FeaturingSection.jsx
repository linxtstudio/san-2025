'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

function Card({ name, title, image, link = '' }) {
  return (
    <Link href={link} className="flex w-[200px] flex-col gap-6">
      <Image
        height={200}
        width={200}
        src={image}
        alt={name}
        className="h-[200px] w-[200px] rounded-[20px] object-cover"
      />
      <div className="flex flex-col text-center">
        <p className="text-[20px]">{name}</p>
        {title ? <p className="text-neutral-400">{title}</p> : null}
      </div>
    </Link>
  );
}

export function FeaturingSection() {
  const [isShowMore, setIsShowMore] = useState(false);

  return (
    <div className="relative mt-20">
      <div className="container flex flex-col gap-8">
        <h2 className="mb-6 text-display font-semibold">Featuring</h2>
        {/* Band */}
        <div className="flex w-full flex-col gap-6">
          <div className='flex flex-col gap-1'>
          <p className="text-title-2 font-semibold">Band</p>
          <p>Buena Tierra Latin Band Bali</p>
          </div>
          <div className="flex w-full flex-wrap gap-6">
            <Card
              image="/image/featuring/indri.png"
              name="Indri"
              link=""
              title="Lead Vocal"
            />
            <Card
              image="/image/featuring/dian.png"
              name="Dian Marisqha"
              title="Rhythm Guitar & Singer"
            />
            <Card
              image="/image/featuring/anang.png"
              name="Anang Orba"
              title="Bass Guitar & Singer"
            />
            <Card
              image="/image/featuring/nidom.png"
              name="Nidom Mashuri"
              title="Percussion & Lead Vocal"
            />
            <Card
              image="/image/featuring/otto.png"
              name="Otto Nugroho"
              title="Lead Guitar"
            />
            <Card
              image="/image/featuring/simson.png"
              name="Simson Nicolas"
              title="Drummer"
            />
          </div>
        </div>
        {/* Djs */}
        <div className="flex w-full flex-col gap-6">
          <p className="text-title-2 font-semibold">DJs</p>
          <div className="flex w-full flex-wrap gap-6">
            <Card
              image="/image/featuring/dj-adhyn.png"
              name="Dj Adhyn"
              link=""
              title="from Jakarta"
            />
            <Card
              image="/image/featuring/dj-indrung.png"
              name="Dj Indrung"
              title="from Surabaya"
            />
            <Card
              image="/image/featuring/dj-pancho.png"
              name="DJ Pancho Ugalde"
              title="from Jakarta"
            />
            <Card
              image="/image/featuring/billy.png"
              name="Billy"
              title="from Bali"
            />
            <Card
              image="/image/featuring/made.png"
              name="Made Alfa"
              title="from Bali"
            />
            <Card
              image="/image/featuring/adis.png"
              name="Adis Krisna"
              title="from Bali"
            />
          </div>
        </div>
        {/* Commitee */}
        <div className="flex w-full flex-col gap-6">
          <p className="text-title-2 font-semibold">Committee</p>
          <div className="flex w-full flex-wrap gap-6">
            <Card
              image="/image/featuring/diah.png"
              name="Diah Anggara"
              title="Project Director"
            />
            <Card
              image="/image/featuring/dewak.png"
              name="Dewak"
              title="Creative Director"
            />
            <Card
              image="/image/featuring/gungde.png"
              name="Gung De"
              title="Artistic Director"
            />
            {isShowMore ? (
              <>
                <Card
                  image="/image/featuring/mirawati.png"
                  name="Mirawati"
                  title="Treasury"
                />
                <Card
                  image="/image/featuring/made.png"
                  name="Made Alfa"
                  title="Logistic Manager"
                />
                <Card
                  image="/image/featuring/yuli.png"
                  name="Yuli Rahayu"
                  title="Funding Manager"
                />
                <Card
                  image="/image/featuring/reinard.png"
                  name="Reinard Arga"
                  title="Social Media Manager"
                />
                <Card
                  image="/image/featuring/billy.png"
                  name="Billy"
                  title="Talent Manager"
                />
                <Card
                  image="/image/featuring/rieza.png"
                  name="Rieza Vaganza"
                  title="Project Director"
                />
                <Card
                  image="/image/featuring/adis.png"
                  name="Adis Krisna"
                  title="Secretarial Manager"
                />
                <Card
                  image="/image/featuring/dhawani.png"
                  name="Dhwani"
                  title="Workshop Manager"
                />
                <Card
                  image="/image/featuring/gungis.png"
                  name="Gung Is"
                  title="Stage Manager"
                />
                <Card
                  image="/image/featuring/jamal.png"
                  name="Jamal"
                  title="Artistic Member"
                />
                <Card
                  image="/image/featuring/jimmy.png"
                  name="Jimmy"
                  title="Social Media Member"
                />
                <Card
                  image="/image/featuring/athika.png"
                  name="Athika"
                  title="Project Director"
                />
                <Card
                  image="/image/featuring/diana.png"
                  name="Diana Jansen"
                  title="Secretarial Member"
                />
              </>
            ) : null}
          </div>
          <button
            className="mb-2 mt-2 w-fit text-[18px] text-green-3"
            onClick={() => setIsShowMore(true)}
          >
            Show more
          </button>
          {/* Instructors */}
          <div className="flex w-full flex-col gap-6">
            <p className="text-title-2 font-semibold">
              Instructors
            </p>
            <div className="flex w-full flex-wrap gap-6">
              <Card
                image="/image/featuring/tonno.png"
                name="Tonno Effendi"
                title="Salsa Instructor from Jogjakarta"
              />
              <Card
                image="/image/featuring/berry-eta.png"
                name="Berry & Eta"
                title="Bachata Instructor from Jakarta"
              />
              <Card
                image="/image/featuring/nancy-nathan.png"
                name="Nancy & Nathan"
                title="Dancevo Instructor from Jakarta"
              />
              <Card
                image="/image/featuring/virginie.png"
                name="Virginie"
                title="Zouk Instructor from Jakarta"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
