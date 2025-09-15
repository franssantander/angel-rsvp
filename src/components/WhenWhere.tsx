import React from "react";
import { Card, CardContent } from "./ui/card";
import { Separator } from "@radix-ui/react-separator";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";

export default function WhenWhere() {
  return (
    <>
      <section className="relative w-full py-20 p-4 max-w-[1920px] mx-auto">
        <div className="m-auto relative z-10 text-center space-y-14">
          <div className="grid grid-cols gap-y-14">
            <h1 className="text-4xl font-bold">WHEN AND WHERE</h1>
          </div>
          <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-4">
            <div className="h-[600px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4591.869138106324!2d121.04614848966185!3d14.582755321568758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c83949975521%3A0xe557f8939b6b1e98!2sLancaster%20Hotel%20Manila!5e0!3m2!1sen!2sph!4v1757840844857!5m2!1sen!2sph"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div>
              <Card className="p-1">
                <CardContent className="grid grid-cols gap-y-4 p-3">
                  <div className="grid grid-cols-2 items-center gap-3">
                    <div className="h-44">
                      <div className="relative w-full h-full">
                        <h1 className="absolute bottom-0 z-20 font-black text-6xl bg-[#B10000] m-3 p-2 text-white flex flex-col items-center">
                          28 <p className="text-sm">September</p>
                        </h1>
                        <Image
                          src="/assets/landcaster.jpg"
                          fill
                          className="object-cover rounded-sm"
                          priority
                          alt="Landcaster hotel Manila"
                        />
                      </div>
                    </div>
                    <div className="text-left space-y-6">
                      <div>
                        <div>
                          <Icon icon="tabler:cake" fontSize={24} />
                          <h1 className="font-black text-2xl">Celebration</h1>
                        </div>
                        <p>622 Shaw Blvd, Makati City, 1552, Philippines</p>
                      </div>
                      <Separator className="bg-neutral-300 w-full h-[1px]" />
                      <div className="font-geist text-xs text-neutral-500 flex items-center gap-x-2">
                        <Icon icon="tabler:clock" fontSize={16} />
                        10:30 AM to 3:00 PM
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
