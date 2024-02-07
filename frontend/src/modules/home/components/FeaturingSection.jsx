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
        {/* Instructors */}
        <div className="flex w-full flex-col gap-6">
          <p className="text-title-2 font-semibold">Workshop Instructors</p>
          <div className="flex w-full flex-wrap gap-6">
            <div className="flex flex-col gap-6">
              <p className="text-lg font-medium">Salsa Workshop</p>
              <Card
                image="/image/featuring/tonno.png"
                name="Tonno Effendi"
                title="from Jogjakarta"
                link="https://www.instagram.com/s_tono_effendi"
              />
            </div>
            <div className="flex flex-col gap-6">
              <p className="text-lg font-medium">Bachata Workshop</p>
              <Card
                image="/image/featuring/berry-eta.png"
                name="Berry & Eta"
                title="from Jakarta"
                link="https://www.instagram.com/berry_valentino"
              />
            </div>
            <div className="flex flex-col gap-6">
              <p className="text-lg font-medium">Kizomba Workshop</p>
              <Card
                image="/image/featuring/nancy-nathan.png"
                name="Nancy & Nathan"
                title="from Jakarta"
                link="https://www.instagram.com/danzevo_kiz"
              />
            </div>
            <div className="flex flex-col gap-6">
              <p className="text-lg font-medium">Zouk Workshop</p>
              <Card
                image="/image/featuring/virginie.png"
                name="Virginie"
                title="from Jakarta"
                link="https://www.instagram.com/vdanse"
              />
            </div>
          </div>
        </div>
        {/* Band */}
        <div className="flex w-full flex-col gap-6">
          <div className="flex flex-col gap-1">
            <p className="text-title-2 font-semibold">Band</p>
            <p>Buena Tierra Latin Band Bali</p>
          </div>
          <div className="flex w-full flex-wrap gap-6">
            <Card
              image="/image/featuring/indri.png"
              name="Indri"
              title="Lead Vocal"
              link="https://www.instagram.com/buenatierra_bali"
            />
            <Card
              image="/image/featuring/dian.png"
              name="Dian Marisqha"
              title="Rhythm Guitar & Singer"
              link="https://www.instagram.com/buenatierra_bali"
            />
            <Card
              image="/image/featuring/anang.png"
              name="Anang Orba"
              title="Bass Guitar & Singer"
              link="https://www.instagram.com/buenatierra_bali"
            />
            <Card
              image="/image/featuring/nidom.png"
              name="Nidom Mashuri"
              title="Percussion & Lead Vocal"
              link="https://www.instagram.com/buenatierra_bali"
            />
            <Card
              image="/image/featuring/otto.png"
              name="Otto Nugroho"
              title="Lead Guitar"
              link="https://www.instagram.com/buenatierra_bali"
            />
            <Card
              image="/image/featuring/simson.png"
              name="Simson Nicolas"
              title="Drummer"
              link="https://www.instagram.com/buenatierra_bali"
            />
          </div>
        </div>
        {/* Djs */}
        <div className="flex w-full flex-col gap-6">
          <p className="text-title-2 font-semibold">DJs</p>
          <div className="flex w-full flex-wrap gap-6">
            <Card
              image="/image/featuring/dj-adhyn.png"
              name="DJ Adhyn"
              title="from Jakarta"
              link="https://www.instagram.com/dj_adhyn"
            />
            <Card
              image="/image/featuring/dj-indrung.png"
              name="DJ Indrung"
              title="from Surabaya"
              link="https://www.instagram.com/indrung"
            />
            <Card
              image="/image/featuring/dj-pancho.png"
              name="DJ Pancho Ugalde"
              title="from Surabaya"
              link="https://www.instagram.com/panchougaldes"
            />
            <Card
              image="/image/featuring/billy.png"
              name="DJ Billy"
              title="from Bali"
              link="https://www.instagram.com/my_memoribillya"
            />
            <Card
              image="/image/featuring/made.png"
              name="DJ Made Alfa"
              title="from Bali"
              link="https://www.instagram.com/madealfa"
            />
            <Card
              image="/image/featuring/adis.png"
              name="DJ Adish"
              title="from Bali"
              link="https://www.instagram.com/adishkrisna"
            />
            <Card
              image="/image/featuring/tisha.jpg"
              name="DJ Tisha"
              title="from Surabaya"
              link="https://www.instagram.com/septyshaputri"
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
              link="https://www.instagram.com/diahbali"
            />
            <Card
              image="/image/featuring/dewak.png"
              name="Dewak"
              title="Creative Director"
              link="https://www.instagram.com/dewak__"
            />
            <Card
              image="/image/featuring/gungde.png"
              name="Gung De"
              title="Artistic Director"
              link="https://www.instagram.com/gungdewita"
            />
            {isShowMore ? (
              <>
                <Card
                  image="/image/featuring/mirawati.png"
                  name="Mirawati"
                  title="Treasury"
                  link="https://www.instagram.com/mieramierain"
                />
                <Card
                  image="/image/featuring/made.png"
                  name="Made Alfa"
                  title="Logistic Manager"
                  link="https://www.instagram.com/madealfa"
                />
                <Card
                  image="/image/featuring/yuli.png"
                  name="Yuli Rahayu"
                  title="Funding Manager"
                  link="https://www.instagram.com/yuli_rahayu_41"
                />
                <Card
                  image="/image/featuring/reinard.png"
                  name="Reinard Arga"
                  title="Social Media Manager"
                  link="https://www.instagram.com/reinardarga"
                />
                <Card
                  image="/image/featuring/billy.png"
                  name="Billy"
                  title="Talent Manager"
                  link="https://www.instagram.com/my_memoribillya"
                />
                <Card
                  image="/image/featuring/rieza.png"
                  name="Rieza Vaganza"
                  title="Project Director"
                  link="https://www.instagram.com/riezavaganza99"
                />
                <Card
                  image="/image/featuring/adis.png"
                  name="Adis Krisna"
                  title="Secretarial Manager"
                  link="https://www.instagram.com/adishkrisna"
                />
                <Card
                  image="/image/featuring/dhawani.png"
                  name="Dhwani"
                  title="Workshop Manager"
                  link="https://www.instagram.com/dhwani.cubansalsaindonesia"
                />
                <Card
                  image="/image/featuring/gungis.png"
                  name="Gung Is"
                  title="Stage Manager"
                  link="https://www.instagram.com/istripradnyandari"
                />
                <Card
                  image="/image/featuring/jamal.png"
                  name="Jamal"
                  title="Artistic Member"
                  link="https://www.instagram.com/jamallatinos13"
                />
                <Card
                  image="/image/featuring/jimmy.png"
                  name="Jimmy"
                  title="Social Media Member"
                  link="https://www.instagram.com/cakrajimme"
                />
                <Card
                  image="/image/featuring/athika.png"
                  name="Athika"
                  title="Secretarial Member"
                  link="https://www.instagram.com/athikanasution"
                />
                <Card
                  image="/image/featuring/diana.png"
                  name="Diana Jansen"
                  title="Secretarial Member"
                  link="https://www.instagram.com/dianajansen21"
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
        </div>
      </div>
    </div>
  );
}
