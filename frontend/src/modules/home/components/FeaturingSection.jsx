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
          <p className="text-title-2 font-semibold">Band</p>
          <Card
            image="/image/featuring/band.png"
            name="Buena Tierra Latin Band Bali"
          />
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
                  image="/image/featuring/rieza.png"
                  name="Rieza Vaganza"
                  title="Project Director"
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
                  image="/image/featuring/gungis.png"
                  name="Gung Is"
                  title="Stage Manager"
                />
                <Card
                  image="/image/featuring/mirawati.png"
                  name="Mirawati"
                  title="Treasury"
                />
                <Card
                  image="/image/featuring/jamal.png"
                  name="Jamal"
                  title="Artistic Member"
                />
                <Card
                  image="/image/featuring/adis.png"
                  name="Adis Krisna"
                  title="Secretarial Manager"
                />
                <Card
                  image="/image/featuring/jimmy.png"
                  name="Jimmy"
                  title="Social Media Member"
                />
                <Card
                  image="/image/featuring/dhawani.png"
                  name="Dhawani"
                  title="Workshop Manager"
                />
                <Card
                  image="/image/featuring/diana.png"
                  name="Diana Jansen"
                  title="Secretarial Member"
                />
                <Card
                  image="/image/featuring/billy.png"
                  name="Billy"
                  title="Talent Manager"
                />
                <Card
                  image="/image/featuring/athika.png"
                  name="Athika"
                  title="Project Director"
                />
              </>
            ) : null}
          </div>
          <button
            className="mt-2 mb-2 w-fit text-[18px] text-green-3"
            onClick={() => setIsShowMore(true)}
          >
            Show more
          </button>
          {/* Instructors */}
            <div className="flex w-full flex-col gap-6">
              <p className="text-title-2 font-semibold">Instructors  (To be Announced)</p>
              <Card
                image="https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133351928-stock-illustration-default-placeholder-man-and-woman.jpg"
                name="TBA"
              />
              <Card
                image="https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133351928-stock-illustration-default-placeholder-man-and-woman.jpg"
                name="TBA"
              />
              <Card
                image="https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133351928-stock-illustration-default-placeholder-man-and-woman.jpg"
                name="TBA"
              />
            </div>
        </div>
      </div>
    </div>
  );
}
