"use client";
import { usePathname } from "next/navigation";
import { IImagWrapper } from "@/type/interface";
import { imgСaption } from "@/lib/translations/history/imgСaption";
import { imgAlt } from "@/lib/translations/history/imgAlt";

import istrion_one from "@/img/history/ancient/istrion_one.webp";
import istrion_three from "@/img/history/ancient/istrion_three.webp";
import istrion_four from "@/img/history/ancient/istrion_four.webp";

import hadzhibey_1766 from "@/img/history/hajibey/hadzhibey_1766.webp";
import hadzhibey_1789 from "@/img/history/hajibey/hadzhibey_1789.webp";

import odessa_1850 from "@/img/history/imperial/odessa_1850.webp";
import exchange_1854 from "@/img/history/imperial/exchange_1854.webp";
import railway_station_1854 from "@/img/history/imperial/railway_station_1854.webp";
import potemkin_stairs_1854 from "@/img/history/imperial/potemkin_stairs_1854.webp";
import primorsky_boulevard_1854 from "@/img/history/imperial/primorsky_boulevard_1854.webp";
import vorontsov_palace_1854 from "@/img/history/imperial/vorontsov_palace_1854.webp";
import passg from "@/img/history/imperial/passg.webp";
import bristol from "@/img/history/imperial/bristol.webp";
import philharmonic from "@/img/history/imperial/philharmonic.webp";

import evacuation_one_1920 from "@/img/history/revolution/evacuation_one_1920.webp";
import evacuation_two_1920 from "@/img/history/revolution/evacuation_two_1920.webp";
import bolshevik_one from "@/img/history/revolution/bolshevik_one.webp";
import bolshevik_two from "@/img/history/revolution/bolshevik_two.webp";
import french_one from "@/img/history/revolution/french_one.webp";
import french_two from "@/img/history/revolution/french_two.webp";

import ni1_one from "@/img/history/worldWarTwo/ni1_one.webp";
import ni1_two from "@/img/history/worldWarTwo/ni1_two.webp";
import ni1_three from "@/img/history/worldWarTwo/ni1_three.webp";
import oborona_one from "@/img/history/worldWarTwo/oborona_one.webp";
import oborona_two from "@/img/history/worldWarTwo/oborona_two.webp";
import oborona_three from "@/img/history/worldWarTwo/oborona_three.webp";
import oborona_four from "@/img/history/worldWarTwo/oborona_four.webp";
import oborona_five from "@/img/history/worldWarTwo/oborona_five.webp";
import oborona_six from "@/img/history/worldWarTwo/oborona_six.webp";

import osvobozhdenie_two from "@/img/history/worldWarTwo/osvobozhdenie_two.webp";
import osvobozhdenie_three from "@/img/history/worldWarTwo/osvobozhdenie_three.webp";
import osvobozhdenie_four from "@/img/history/worldWarTwo/osvobozhdenie_four.webp";

import odessa_1990_one from "@/img/history/modern/1990_one.webp";
import odessa_1990_two from "@/img/history/modern/1990_two.webp";
import odessa_1990_three from "@/img/history/modern/1990_three.webp";
import odessa_1990_four from "@/img/history/modern/1990_four.webp";
import odessa_1990_five from "@/img/history/modern/1990_five.webp";
import odessa_1990_six from "@/img/history/modern/1990_six.webp";
import odessa_1990_seven from "@/img/history/modern/1990_seven.webp";
import odessa_2000_one from "@/img/history/modern/2000_one.webp";
import odessa_2000_two from "@/img/history/modern/2000_two.webp";
import odessa_2000_three from "@/img/history/modern/2000_three.webp";
import odessa_2000_four from "@/img/history/modern/2000_four.webp";
import odessa_2000_five from "@/img/history/modern/2000_five.webp";

import odessa_2014_one from "@/img/history/modern/2014_one.webp";
import odessa_2014_two from "@/img/history/modern/2014_two.webp";
import odessa_2014_three from "@/img/history/modern/2014_three.webp";
import odessa_2014_four from "@/img/history/modern/2014_four.webp";
import odessa_2014_five from "@/img/history/modern/2014_five.webp";
import odessa_2014_six from "@/img/history/modern/2014_six.webp";
import odessa_2014_seven from "@/img/history/modern/2014_seven.webp";
import odessa_2014_eight from "@/img/history/modern/2014_eight.webp";
import odessa_2014_nine from "@/img/history/modern/2014_nine.webp";
import odessa_2014_ten from "@/img/history/modern/2014_ten.webp";
import odessa_2014_eleven from "@/img/history/modern/2014_eleven.webp";
import odessa_2014_twelve from "@/img/history/modern/2014_twelve.webp";
import odessa_2014_thirteen from "@/img/history/modern/2014_thirteen.webp";
import odessa_2014_fourteen from "@/img/history/modern/2014_fourteen.webp";
import odessa_2014_fifteen from "@/img/history/modern/2014_fifteen.webp";
import odessa_2014_sixteen from "@/img/history/modern/2014_sixteen.webp";
import odessa_2014_seventeen from "@/img/history/modern/2014_seventeen.webp";
import odessa_2014_eighteen from "@/img/history/modern/2014_eighteen.webp";
import odessa_2014_nineteen from "@/img/history/modern/2014_nineteen.webp";

import od_2020_1 from "@/img/history/modern/od_2020_1.webp";
import od_2020_2 from "@/img/history/modern/od_2020_2.webp";
import od_2020_3 from "@/img/history/modern/od_2020_3.webp";
import od_2020_4 from "@/img/history/modern/od_2020_4.webp";
import od_2020_5 from "@/img/history/modern/od_2020_5.webp";
import od_2020_6 from "@/img/history/modern/od_2020_6.webp";
import od_2020_7 from "@/img/history/modern/od_2020_7.webp";
import od_2020_8 from "@/img/history/modern/od_2020_8.webp";

import od_2024_1 from "@/img/history/modern/od_2024_1.webp";
import od_2024_2 from "@/img/history/modern/od_2024_2.webp";
import od_2024_3 from "@/img/history/modern/od_2024_3.webp";
import od_2024_4 from "@/img/history/modern/od_2024_4.webp";
import od_2024_5 from "@/img/history/modern/od_2024_5.webp";
import od_2024_6 from "@/img/history/modern/od_2024_6.webp";
import od_2024_7 from "@/img/history/modern/od_2024_7.webp";
import od_2024_8 from "@/img/history/modern/od_2024_8.webp";

const languages = ["ua", "ru", "en"];

export function useAllImageSlides() {
  const pathname = usePathname();
  const rawLang = pathname.split("/")[1];
  const currentLang = languages.includes(rawLang) ? rawLang : "ua";

  const caption = imgСaption[currentLang as keyof typeof imgСaption];
  const alt = imgAlt[currentLang as keyof typeof imgAlt];

  return {
    istrion: [
      { src: istrion_one, alt: alt.istrion_one, caption: caption.istrion_one },
      {
        src: istrion_three,
        alt: alt.istrion_three,
        caption: caption.istrion_three,
      },
      {
        src: istrion_four,
        alt: alt.istrion_four,
        caption: caption.istrion_four,
      },
    ] as IImagWrapper[],

    hadzhibey: [
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
    ] as IImagWrapper[],

    odessa_1854: [
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
    ] as IImagWrapper[],

    odessa_1899: [
      { src: passg, alt: alt.pasag, caption: caption.pasag },
      {
        src: philharmonic,
        alt: alt.philharmonic,
        caption: caption.philharmonic,
      },
      { src: bristol, alt: alt.bristol, caption: caption.bristol },
    ] as IImagWrapper[],

    french: [
      { src: french_one, alt: alt.french_one, caption: caption.french_one },
      { src: french_two, alt: alt.french_two, caption: caption.french_two },
    ] as IImagWrapper[],

    bolshevik: [
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
    ] as IImagWrapper[],

    ni1: [
      { src: ni1_one, alt: alt.ni1_1, caption: caption.ni1_1 },
      { src: ni1_two, alt: alt.ni1_2, caption: caption.ni1_2 },
      { src: ni1_three, alt: alt.ni1_3, caption: caption.ni1_3 },
    ] as IImagWrapper[],

    oborona: [
      { src: oborona_one, alt: alt.oborona_1, caption: caption.oborona_1 },
      { src: oborona_six, alt: alt.oborona_6, caption: caption.oborona_6 },
      { src: oborona_two, alt: alt.oborona_2, caption: caption.oborona_2 },
      { src: oborona_four, alt: alt.oborona_4, caption: caption.oborona_4 },
      { src: oborona_five, alt: alt.oborona_5, caption: caption.oborona_5 },
      { src: oborona_three, alt: alt.oborona_3, caption: caption.oborona_3 },
    ] as IImagWrapper[],

    ruins: [
      { src: osvobozhdenie_two, alt: alt.ruins_1, caption: caption.ruins_1 },
      { src: osvobozhdenie_three, alt: alt.ruins_2, caption: caption.ruins_2 },
      { src: osvobozhdenie_four, alt: alt.ruins_3, caption: caption.ruins_3 },
    ] as IImagWrapper[],

    odessa_1990s: [
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
    ] as IImagWrapper[],

    odessa_2000s: [
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
    ] as IImagWrapper[],

    odessa_2014: [
      { src: odessa_2014_one, alt: alt.od_2014_1, caption: caption.od_2014_1 },
      { src: odessa_2014_two, alt: alt.od_2014_2, caption: caption.od_2014_2 },
      {
        src: odessa_2014_three,
        alt: alt.od_2014_3,
        caption: caption.od_2014_3,
      },
      { src: odessa_2014_four, alt: alt.od_2014_4, caption: caption.od_2014_4 },
      { src: odessa_2014_five, alt: alt.od_2014_5, caption: caption.od_2014_5 },
      { src: odessa_2014_six, alt: alt.od_2014_6, caption: caption.od_2014_6 },
      {
        src: odessa_2014_seven,
        alt: alt.od_2014_7,
        caption: caption.od_2014_7,
      },
      {
        src: odessa_2014_eight,
        alt: alt.od_2014_8,
        caption: caption.od_2014_8,
      },
      { src: odessa_2014_nine, alt: alt.od_2014_9, caption: caption.od_2014_9 },
      {
        src: odessa_2014_ten,
        alt: alt.od_2014_10,
        caption: caption.od_2014_10,
      },
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
    ] as IImagWrapper[],

    odessa_2020: [
      { src: od_2020_1, alt: alt.od_2020_1, caption: caption.od_2020_1 },
      { src: od_2020_2, alt: alt.od_2020_2, caption: caption.od_2020_2 },
      { src: od_2020_3, alt: alt.od_2020_3, caption: caption.od_2020_3 },
      { src: od_2020_4, alt: alt.od_2020_4, caption: caption.od_2020_4 },
      { src: od_2020_5, alt: alt.od_2020_5, caption: caption.od_2020_5 },
      { src: od_2020_6, alt: alt.od_2020_6, caption: caption.od_2020_6 },
      { src: od_2020_7, alt: alt.od_2020_7, caption: caption.od_2020_7 },
      { src: od_2020_8, alt: alt.od_2020_8, caption: caption.od_2020_8 },
    ] as IImagWrapper[],

    odessa_2024: [
      { src: od_2024_1, alt: alt.od_2024_1, caption: caption.od_2024_1 },
      { src: od_2024_2, alt: alt.od_2024_2, caption: caption.od_2024_2 },
      { src: od_2024_3, alt: alt.od_2024_3, caption: caption.od_2024_3 },
      { src: od_2024_4, alt: alt.od_2024_4, caption: caption.od_2024_4 },
      { src: od_2024_5, alt: alt.od_2024_5, caption: caption.od_2024_5 },
      { src: od_2024_6, alt: alt.od_2024_6, caption: caption.od_2024_6 },
      { src: od_2024_7, alt: alt.od_2024_7, caption: caption.od_2024_7 },
      { src: od_2024_8, alt: alt.od_2024_8, caption: caption.od_2024_8 },
    ] as IImagWrapper[],
  };
}
