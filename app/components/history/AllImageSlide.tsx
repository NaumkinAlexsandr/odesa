"use client";
import { usePathname } from "next/navigation";
import { IImagWrapper } from "@/type/interface";
import { imgСaption } from "@/lib/translations/history/imgСaption";
import { imgAlt } from "@/lib/translations/history/imgAlt";

import istrion_one from "@/public/images/history/ancient/istrion_one.png";
import istrion_three from "@/public/images/history/ancient/istrion_three.png";
import istrion_four from "@/public/images/history/ancient/istrion_four.png";

import hadzhibey_1766 from "@/public/images/history/hajibey/hadzhibey_1766.jpg";
import hadzhibey_1789 from "@/public/images/history/hajibey/hadzhibey_1789.jpg";

import odessa_1850 from "@/public/images/history/imperial/odessa_1850.jpg";
import exchange_1854 from "@/public/images/history/imperial/exchange_1854.jpg";
import railway_station_1854 from "@/public/images/history/imperial/railway_station_1854.jpg";
import potemkin_stairs_1854 from "@/public/images/history/imperial/potemkin_stairs_1854.jpg";
import primorsky_boulevard_1854 from "@/public/images/history/imperial/primorsky_boulevard_1854.jpg";
import vorontsov_palace_1854 from "@/public/images/history/imperial/vorontsov_palace_1854.jpg";
import passg from "@/public/images/history/imperial/passg.jpg";
import bristol from "@/public/images/history/imperial/bristol.jpg";
import philharmonic from "@/public/images/history/imperial/philharmonic.jpg";

import evacuation_one_1920 from "@/public/images/history/revolution/evacuation_one_1920.jpg";
import evacuation_two_1920 from "@/public/images/history/revolution/evacuation_two_1920.png";
import bolshevik_one from "@/public/images/history/revolution/bolshevik_one.jpg";
import bolshevik_two from "@/public/images/history/revolution/bolshevik_two.png";
import french_one from "@/public/images/history/revolution/french_one.jpg";
import french_two from "@/public/images/history/revolution/french_two.jpg";

import ni1_one from "@/public/images/history/worldWarTwo/ni1_one.jpg";
import ni1_two from "@/public/images/history/worldWarTwo/ni1_two.jpg";
import ni1_three from "@/public/images/history/worldWarTwo/ni1_three.jpg";
import oborona_one from "@/public/images/history/worldWarTwo/oborona_one.jpg";
import oborona_two from "@/public/images/history/worldWarTwo/oborona_two.jpg";
import oborona_three from "@/public/images/history/worldWarTwo/oborona_three.png";
import oborona_four from "@/public/images/history/worldWarTwo/oborona_four.jpg";
import oborona_five from "@/public/images/history/worldWarTwo/oborona_five.jpg";
import oborona_six from "@/public/images/history/worldWarTwo/oborona_six.jpg";

import osvobozhdenie_two from "@/public/images/history/worldWarTwo/osvobozhdenie_two.jpg";
import osvobozhdenie_three from "@/public/images/history/worldWarTwo/osvobozhdenie_three.jpg";
import osvobozhdenie_four from "@/public/images/history/worldWarTwo/osvobozhdenie_four.jpg";

import odessa_1990_one from "@/public/images/history/modern/1990_one.png";
import odessa_1990_two from "@/public/images/history/modern/1990_two.png";
import odessa_1990_three from "@/public/images/history/modern/1990_three.png";
import odessa_1990_four from "@/public/images/history/modern/1990_four.png";
import odessa_1990_five from "@/public/images/history/modern/1990_five.jpg";
import odessa_1990_six from "@/public/images/history/modern/1990_six.jpg";
import odessa_1990_seven from "@/public/images/history/modern/1990_seven.jpg";
import odessa_2000_one from "@/public/images/history/modern/2000_one.png";
import odessa_2000_two from "@/public/images/history/modern/2000_two.png";
import odessa_2000_three from "@/public/images/history/modern/2000_three.png";
import odessa_2000_four from "@/public/images/history/modern/2000_four.png";
import odessa_2000_five from "@/public/images/history/modern/2000_five.png";

import odessa_2014_one from "@/public/images/history/modern/2014_one.jpg";
import odessa_2014_two from "@/public/images/history/modern/2014_two.jpg";
import odessa_2014_three from "@/public/images/history/modern/2014_three.jpg";
import odessa_2014_four from "@/public/images/history/modern/2014_four.jpg";
import odessa_2014_five from "@/public/images/history/modern/2014_five.jpg";
import odessa_2014_six from "@/public/images/history/modern/2014_six.jpg";
import odessa_2014_seven from "@/public/images/history/modern/2014_seven.jpg";
import odessa_2014_eight from "@/public/images/history/modern/2014_eight.jpg";
import odessa_2014_nine from "@/public/images/history/modern/2014_nine.jpg";
import odessa_2014_ten from "@/public/images/history/modern/2014_ten.jpg";
import odessa_2014_eleven from "@/public/images/history/modern/2014_eleven.jpg";
import odessa_2014_twelve from "@/public/images/history/modern/2014_twelve.jpg";
import odessa_2014_thirteen from "@/public/images/history/modern/2014_thirteen.jpg";
import odessa_2014_fourteen from "@/public/images/history/modern/2014_fourteen.jpg";
import odessa_2014_fifteen from "@/public/images/history/modern/2014_fifteen.jpg";
import odessa_2014_sixteen from "@/public/images/history/modern/2014_sixteen.jpg";
import odessa_2014_seventeen from "@/public/images/history/modern/2014_seventeen.jpg";
import odessa_2014_eighteen from "@/public/images/history/modern/2014_eighteen.jpg";
import odessa_2014_nineteen from "@/public/images/history/modern/2014_nineteen.jpg";

import od_2020_1 from "@/public/images/history/modern/od_2020_1.jpg";
import od_2020_2 from "@/public/images/history/modern/od_2020_2.jpg";
import od_2020_3 from "@/public/images/history/modern/od_2020_3.jpg";
import od_2020_4 from "@/public/images/history/modern/od_2020_4.jpg";
import od_2020_5 from "@/public/images/history/modern/od_2020_5.jpg";
import od_2020_6 from "@/public/images/history/modern/od_2020_6.jpeg";
import od_2020_7 from "@/public/images/history/modern/od_2020_7.jpg";
import od_2020_8 from "@/public/images/history/modern/od_2020_8.jpg";

import od_2024_1 from "@/public/images/history/modern/od_2024_1.jpg";
import od_2024_2 from "@/public/images/history/modern/od_2024_2.jpg";
import od_2024_3 from "@/public/images/history/modern/od_2024_3.jpg";
import od_2024_4 from "@/public/images/history/modern/od_2024_4.jpg";
import od_2024_5 from "@/public/images/history/modern/od_2024_5.jpg";
import od_2024_6 from "@/public/images/history/modern/od_2024_6.jpg";
import od_2024_7 from "@/public/images/history/modern/od_2024_7.jpg";
import od_2024_8 from "@/public/images/history/modern/od_2024_8.jpg";

const languages = ["ua", "ru", "en"];

export function AllImageSlide() {
  const pathname = usePathname();
  const currentLang = languages.includes(pathname.split("/")[1])
    ? pathname.split("/")[1]
    : "ua";
  const caption = imgСaption[currentLang as keyof typeof imgСaption];
  const alt = imgAlt[currentLang as keyof typeof imgAlt];

  const istrion: IImagWrapper[] = [
    { src: istrion_one, alt: alt.istrion_one, caption: caption.istrion_one },
    {
      src: istrion_three,
      alt: alt.istrion_three,
      caption: caption.istrion_three,
    },
    { src: istrion_four, alt: alt.istrion_four, caption: caption.istrion_four },
  ];

  const hadzhibey: IImagWrapper[] = [
    {
      src: hadzhibey_1766,
      alt: alt.hadzhibey_1766,
      caption: caption.hadzhibey_1766,
    },
    {
      src: hadzhibey_1789,
      alt: alt.hadzhibey_1789,
      caption: caption.hadzhibey_1789,
    },
  ];

  const odessa_1854: IImagWrapper[] = [
    { src: odessa_1850, alt: alt.odessa_1850, caption: caption.odessa_1850 },
    {
      src: exchange_1854,
      alt: alt.exchange_1854,
      caption: caption.exchange_1854,
    },
    {
      src: railway_station_1854,
      alt: alt.railway_station_1854,
      caption: caption.railway_station_1854,
    },
    {
      src: potemkin_stairs_1854,
      alt: alt.potemkin_stairs_1854,
      caption: caption.potemkin_stairs_1854,
    },
    {
      src: primorsky_boulevard_1854,
      alt: alt.primorsky_boulevard_1854,
      caption: caption.primorsky_boulevard_1854,
    },
    {
      src: vorontsov_palace_1854,
      alt: alt.vorontsov_palace_1854,
      caption: caption.vorontsov_palace_1854,
    },
  ];

  const odessa_1899: IImagWrapper[] = [
    { src: passg, alt: alt.pasag, caption: caption.pasag },

    {
      src: philharmonic,
      alt: alt.philharmonic,
      caption: caption.philharmonic,
    },
    {
      src: bristol,
      alt: alt.bristol,
      caption: caption.bristol,
    },
  ];

  const french: IImagWrapper[] = [
    { src: french_one, alt: alt.french_one, caption: caption.french_one },
    { src: french_two, alt: alt.french_two, caption: caption.french_two },
  ];

  const bolshevik: IImagWrapper[] = [
    { src: bolshevik_one, alt: alt.ww1_one, caption: caption.ww1_one },
    { src: bolshevik_two, alt: alt.ww1_two, caption: caption.ww1_two },
    {
      src: evacuation_one_1920,
      alt: alt.evacuation_one_1920,
      caption: caption.evacuation_one_1920,
    },
    {
      src: evacuation_two_1920,
      alt: alt.evacuation_two_1920,
      caption: caption.evacuation_two_1920,
    },
  ];

  const ni1: IImagWrapper[] = [
    { src: ni1_one, alt: alt.ni1_1, caption: caption.ni1_1 },
    { src: ni1_two, alt: alt.ni1_2, caption: caption.ni1_2 },
    { src: ni1_three, alt: alt.ni1_3, caption: caption.ni1_3 },
  ];

  const oborona: IImagWrapper[] = [
    { src: oborona_one, alt: alt.oborona_1, caption: caption.oborona_1 },
    { src: oborona_six, alt: alt.oborona_6, caption: caption.oborona_6 },
    { src: oborona_two, alt: alt.oborona_2, caption: caption.oborona_2 },
    { src: oborona_four, alt: alt.oborona_4, caption: caption.oborona_4 },
    { src: oborona_five, alt: alt.oborona_5, caption: caption.oborona_5 },
    { src: oborona_three, alt: alt.oborona_3, caption: caption.oborona_3 },
  ];

  const ruins: IImagWrapper[] = [
    { src: osvobozhdenie_two, alt: alt.ruins_1, caption: caption.ruins_1 },
    {
      src: osvobozhdenie_three,
      alt: alt.ruins_2,
      caption: caption.ruins_2,
    },
    {
      src: osvobozhdenie_four,
      alt: alt.ruins_3,
      caption: caption.ruins_3,
    },
  ];

  const odessa_1990s: IImagWrapper[] = [
    {
      src: odessa_1990_one,
      alt: alt.od_1990s_1,
      caption: caption.od_1990s_1,
    },
    {
      src: odessa_1990_two,
      alt: alt.od_1990s_2,
      caption: caption.od_1990s_2,
    },
    {
      src: odessa_1990_three,
      alt: alt.od_1990s_3,
      caption: caption.od_1990s_3,
    },
    {
      src: odessa_1990_four,
      alt: alt.od_1990s_4,
      caption: caption.od_1990s_4,
    },
    {
      src: odessa_1990_five,
      alt: alt.od_1990s_5,
      caption: caption.od_1990s_5,
    },
    {
      src: odessa_1990_six,
      alt: alt.od_1990s_6,
      caption: caption.od_1990s_6,
    },
    {
      src: odessa_1990_seven,
      alt: alt.od_1990s_7,
      caption: caption.od_1990s_7,
    },
  ];

  const odessa_2000s: IImagWrapper[] = [
    {
      src: odessa_2000_five,
      alt: alt.od_2000s_5,
      caption: caption.od_2000s_5,
    },
    {
      src: odessa_2000_one,
      alt: alt.od_2000s_1,
      caption: caption.od_2000s_1,
    },
    {
      src: odessa_2000_two,
      alt: alt.od_2000s_2,
      caption: caption.od_2000s_2,
    },
    {
      src: odessa_2000_three,
      alt: alt.od_2000s_3,
      caption: caption.od_2000s_3,
    },
    {
      src: odessa_2000_four,
      alt: alt.od_2000s_4,
      caption: caption.od_2000s_4,
    },
  ];

  const odessa_2014: IImagWrapper[] = [
    { src: odessa_2014_one, alt: alt.od_2014_1, caption: caption.od_2014_1 },
    { src: odessa_2014_two, alt: alt.od_2014_2, caption: caption.od_2014_2 },
    { src: odessa_2014_three, alt: alt.od_2014_3, caption: caption.od_2014_3 },
    { src: odessa_2014_four, alt: alt.od_2014_4, caption: caption.od_2014_4 },
    { src: odessa_2014_five, alt: alt.od_2014_5, caption: caption.od_2014_5 },
    { src: odessa_2014_six, alt: alt.od_2014_6, caption: caption.od_2014_6 },
    { src: odessa_2014_seven, alt: alt.od_2014_7, caption: caption.od_2014_7 },
    { src: odessa_2014_eight, alt: alt.od_2014_8, caption: caption.od_2014_8 },
    { src: odessa_2014_nine, alt: alt.od_2014_9, caption: caption.od_2014_9 },
    { src: odessa_2014_ten, alt: alt.od_2014_10, caption: caption.od_2014_10 },
    {
      src: odessa_2014_eleven,
      alt: alt.od_2014_11,
      caption: caption.od_2014_11,
    },
    {
      src: odessa_2014_twelve,
      alt: alt.od_2014_12,
      caption: caption.od_2014_12,
    },
    {
      src: odessa_2014_thirteen,
      alt: alt.od_2014_13,
      caption: caption.od_2014_13,
    },
    {
      src: odessa_2014_fourteen,
      alt: alt.od_2014_14,
      caption: caption.od_2014_14,
    },
    {
      src: odessa_2014_fifteen,
      alt: alt.od_2014_15,
      caption: caption.od_2014_15,
    },
    {
      src: odessa_2014_sixteen,
      alt: alt.od_2014_16,
      caption: caption.od_2014_16,
    },
    {
      src: odessa_2014_seventeen,
      alt: alt.od_2014_17,
      caption: caption.od_2014_17,
    },
    {
      src: odessa_2014_eighteen,
      alt: alt.od_2014_18,
      caption: caption.od_2014_18,
    },
    {
      src: odessa_2014_nineteen,
      alt: alt.od_2014_19,
      caption: caption.od_2014_19,
    },
  ];

  const odessa_2020: IImagWrapper[] = [
    { src: od_2020_1, alt: alt.od_2020_1, caption: caption.od_2020_1 },
    { src: od_2020_2, alt: alt.od_2020_2, caption: caption.od_2020_2 },
    { src: od_2020_3, alt: alt.od_2020_3, caption: caption.od_2020_3 },
    { src: od_2020_4, alt: alt.od_2020_4, caption: caption.od_2020_4 },
    { src: od_2020_5, alt: alt.od_2020_5, caption: caption.od_2020_5 },
    { src: od_2020_6, alt: alt.od_2020_6, caption: caption.od_2020_6 },
    { src: od_2020_7, alt: alt.od_2020_7, caption: caption.od_2020_7 },
    { src: od_2020_8, alt: alt.od_2020_8, caption: caption.od_2020_8 },
  ];

  const odessa_2024: IImagWrapper[] = [
    { src: od_2024_1, alt: alt.od_2024_1, caption: caption.od_2024_1 },
    { src: od_2024_2, alt: alt.od_2024_2, caption: caption.od_2024_2 },
    { src: od_2024_3, alt: alt.od_2024_3, caption: caption.od_2024_3 },
    { src: od_2024_4, alt: alt.od_2024_4, caption: caption.od_2024_4 },
    { src: od_2024_5, alt: alt.od_2024_5, caption: caption.od_2024_5 },
    { src: od_2024_6, alt: alt.od_2024_6, caption: caption.od_2024_6 },
    { src: od_2024_7, alt: alt.od_2024_7, caption: caption.od_2024_7 },
    { src: od_2024_8, alt: alt.od_2024_8, caption: caption.od_2024_8 },
  ];

  return {
    istrion,
    hadzhibey,
    odessa_1854,
    odessa_1899,
    french,
    bolshevik,
    ni1,
    oborona,
    ruins,
    odessa_1990s,
    odessa_2000s,
    odessa_2014,
    odessa_2020,
    odessa_2024,
  };
}
