"use client";

import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import { MainGallery } from "../_components/main-gallery";
import { TourVirtual } from "../_components/tour-virtual";
import { Imovel } from "@/types/global";

const TabsSection = ({ imovel }: { imovel: Imovel }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <section
      className="w-full px-[15px] md:px-0 py-24 bg-[#121212]"
      id="images"
    >
      <div className="w-full">
        <Tabs className="w-full flex flex-col ">
          <TabList className="w-full max-w-[1216px] mx-auto flex gap-14 items-center justify-center  rounded-lg  pb-8">
            {/* TAB GALERIA  */}
            <Tab
              className={
                selectedTab === 0
                  ? "text-4xl cursor-pointer font-bold focus:outline-none !bg-transparent !text-white"
                  : "text-4xl cursor-pointer font-normal"
              }
              onClick={() => setSelectedTab(0)}
            >
              {imovel.attributes.panoramas.is_active
                ? "Galeria"
                : "Imagens do Empreendimento"}
            </Tab>

            {/* TAB TOUR VIRTUAL */}
            {imovel.attributes.panoramas.is_active && (
              <Tab
                className={
                  selectedTab === 1
                    ? "text-3xl cursor-pointer font-bold focus:outline-none"
                    : "text-3xl cursor-pointer font-normal"
                }
                onClick={() => setSelectedTab(1)}
              >
                Tour Virtual
              </Tab>
            )}
          </TabList>

          <TabPanel className={"px-4"}>
            <MainGallery imovel={imovel} />
          </TabPanel>
          <TabPanel>
            <TourVirtual imovel={imovel} />
          </TabPanel>
        </Tabs>
      </div>
    </section>
  );
};

export default TabsSection;
