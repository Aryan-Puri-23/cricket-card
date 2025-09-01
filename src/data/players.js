import kohli from "../assets/kohli.png";
import rohit from "../assets/rohit.png";
import bumrah from "../assets/bumrah.png";
import pandya from "../assets/pandya.png";
import iyer from "../assets/iyer.png";
import jadeja from "../assets/jadeja.png";
import rahul from "../assets/rahul.png";
import gill from "../assets/gill.png";
import jaiswal from "../assets/jaiswal.png";
import surya from "../assets/surya.png";
import siraj from "../assets/siraj.png";
import kuldeep from "../assets/kuldeep.png";
import shami from "../assets/shami.png";
import arshdeep from "../assets/arshdeep.png";
import axar from "../assets/axar.png";
import dhoni from "../assets/dhoni.png";
import pant from "../assets/pant.png";
import ashwin from "../assets/ashwin.png";
import bhuvi from "../assets/bhuvi.png";
import sanju from "../assets/sanju.png";
import shardul from "../assets/shardul.png";

export const players = [
  {
    id: 1, name: "Virat Kohli", role: "BAT", team: "India", rating: 99, tier: "Legend", photo: kohli,
    stats: {
      Test: { M: 102, R: 8000, AVG: 52.3, SR: 55, "50s": 30, "100s": 27 },
      ODI: { M: 254, R: 12040, AVG: 58.1, SR: 93.2, "50s": 63, "100s": 43 },
      T20: { M: 90, R: 3200, AVG: 52.0, SR: 138.0, "50s": 28, "100s": 0 },
    }
  },
  {
    id: 2, name: "Rohit Sharma", role: "BAT", team: "India", rating: 95, tier: "Legend", photo: rohit,
    stats: {
      Test: { M: 112, R: 9200, AVG: 46.7, SR: 54, "50s": 35, "100s": 29 },
      ODI: { M: 227, R: 9205, AVG: 48.9, SR: 88.1, "50s": 58, "100s": 30 },
      T20: { M: 120, R: 3450, AVG: 32.5, SR: 137.0, "50s": 28, "100s": 4 },
    }
  },
  {
    id: 3, name: "Jasprit Bumrah", role: "BOWL", team: "India", rating: 97, tier: "Legend", photo: bumrah,
    stats: {
      Test: { M: 43, W: 121, AVG: 24.0, ECO: 2.5, SR: 46, BB: "6/27" },
      ODI: { M: 67, W: 108, AVG: 24.5, ECO: 4.7, SR: 30, BB: "5/27" },
      T20: { M: 55, W: 75, AVG: 21.8, ECO: 7.2, SR: 18, BB: "4/10" },
    }
  },
  {
    id: 4, name: "Hardik Pandya", role: "AR", team: "India", rating: 90, tier: "Epic", photo: pandya,
    stats: {
      Test: { M: 25, R: 1200, AVG: 35.5, SR: 60, W: 20, ECO: 3.8 },
      ODI: { M: 78, R: 2150, AVG: 35.5, SR: 120.5, W: 55, ECO: 5.2 },
      T20: { M: 56, R: 980, AVG: 28.5, SR: 145.0, W: 22, ECO: 7.5 },
    }
  },
  {
    id: 5, name: "Shreyas Iyer", role: "BAT", team: "India", rating: 89, tier: "Epic", photo: iyer,
    stats: {
      Test: { M: 20, R: 1500, AVG: 40.0, SR: 55, "50s": 6, "100s": 4 },
      ODI: { M: 60, R: 2400, AVG: 46.0, SR: 88.5, "50s": 18, "100s": 5 },
      T20: { M: 45, R: 1100, AVG: 35.0, SR: 130.0, "50s": 7, "100s": 0 },
    }
  },
  {
    id: 6, name: "Ravindra Jadeja", role: "AR", team: "India", rating: 87, tier: "Epic", photo: jadeja,
    stats: {
      Test: { M: 65, R: 2500, AVG: 35.0, SR: 45, W: 250, ECO: 2.4 },
      ODI: { M: 175, R: 4500, AVG: 36.0, SR: 85.0, W: 190, ECO: 4.3 },
      T20: { M: 90, R: 2100, AVG: 32.0, SR: 130.0, W: 85, ECO: 7.2 },
    }
  },
  {
    id: 7, name: "KL Rahul", role: "WK", team: "India", rating: 86, tier: "Epic", photo: rahul,
    stats: {
      Test: { M: 45, R: 3300, AVG: 42.0, SR: 50, "50s": 10, "100s": 8 },
      ODI: { M: 115, R: 4200, AVG: 46.5, SR: 88.0, "50s": 35, "100s": 12 },
      T20: { M: 60, R: 1650, AVG: 34.0, SR: 136.0, "50s": 10, "100s": 0 },
    }
  },
  {
    id: 8, name: "Shubman Gill", role: "BAT", team: "India", rating: 82, tier: "Rare", photo: gill,
    stats: {
      Test: { M: 25, R: 1400, AVG: 37.0, SR: 50, "50s": 6, "100s": 3 },
      ODI: { M: 40, R: 1400, AVG: 36.0, SR: 80.0, "50s": 12, "100s": 2 },
      T20: { M: 30, R: 600, AVG: 25.0, SR: 120.0, "50s": 3, "100s": 0 },
    }
  },
  {
    id: 9, name: "Yashasvi Jaiswal", role: "BAT", team: "India", rating: 81, tier: "Rare", photo: jaiswal,
    stats: {
      Test: { M: 8, R: 450, AVG: 32.0, SR: 48, "50s": 2, "100s": 1 },
      ODI: { M: 20, R: 670, AVG: 33.5, SR: 85.0, "50s": 2, "100s": 0 },
      T20: { M: 25, R: 550, AVG: 27.5, SR: 130.0, "50s": 3, "100s": 0 },
    }
  },
  {
    id: 10, name: "Suryakumar Yadav", role: "BAT", team: "India", rating: 84, tier: "Rare", photo: surya,
    stats: {
      Test: { M: 10, R: 750, AVG: 42.0, SR: 55, "50s": 3, "100s": 1 },
      ODI: { M: 50, R: 1800, AVG: 40.5, SR: 88.0, "50s": 10, "100s": 2 },
      T20: { M: 65, R: 1800, AVG: 32.0, SR: 140.0, "50s": 10, "100s": 0 },
    }
  },
  {
    id: 11, name: "Mohammed Siraj", role: "BOWL", team: "India", rating: 78, tier: "Common", photo: siraj,
    stats: {
      Test: { M: 25, W: 75, AVG: 30.0, ECO: 2.8, SR: 55, BB: "5/40" },
      ODI: { M: 50, W: 65, AVG: 27.0, ECO: 4.8, SR: 32, BB: "4/28" },
      T20: { M: 35, W: 40, AVG: 25.0, ECO: 7.0, SR: 18, BB: "3/18" },
    }
  },
  {
    id: 12, name: "Kuldeep Yadav", role: "BOWL", team: "India", rating: 79, tier: "Common", photo: kuldeep,
    stats: {
      Test: { M: 20, W: 60, AVG: 28.5, ECO: 3.0, SR: 50, BB: "5/55" },
      ODI: { M: 60, W: 120, AVG: 25.0, ECO: 4.9, SR: 35, BB: "5/24" },
      T20: { M: 50, W: 65, AVG: 23.0, ECO: 6.8, SR: 18, BB: "4/12" },
    }
  },
  {
    id: 13, name: "Mohammed Shami", role: "BOWL", team: "India", rating: 79, tier: "Common", photo: shami,
    stats: {
      Test: { M: 45, W: 140, AVG: 28.0, ECO: 2.9, SR: 52, BB: "6/56" },
      ODI: { M: 95, W: 155, AVG: 26.5, ECO: 4.7, SR: 33, BB: "5/31" },
      T20: { M: 60, W: 70, AVG: 25.0, ECO: 7.0, SR: 19, BB: "4/20" },
    }
  },
  {
    id: 14, name: "Arshdeep Singh", role: "BOWL", team: "India", rating: 77, tier: "Common", photo: arshdeep,
    stats: {
      Test: { M: 8, W: 25, AVG: 31.0, ECO: 3.1, SR: 56, BB: "4/30" },
      ODI: { M: 30, W: 45, AVG: 29.0, ECO: 5.0, SR: 33, BB: "4/25" },
      T20: { M: 40, W: 50, AVG: 23.5, ECO: 7.3, SR: 17, BB: "3/18" },
    }
  },
  {
    id: 15, name: "Axar Patel", role: "AR", team: "India", rating: 77, tier: "Common", photo: axar,
    stats: {
      Test: { M: 40, R: 1800, AVG: 32.5, SR: 45, W: 120, ECO: 2.5 },
      ODI: { M: 80, R: 2000, AVG: 30.5, SR: 85, W: 105, ECO: 4.6 },
      T20: { M: 55, R: 900, AVG: 25.0, SR: 130, W: 50, ECO: 7.0 },
    }
  },
  {
    id: 16, name: "MS Dhoni", role: "WK", team: "India", rating: 85, tier: "Epic", photo: dhoni,
    stats: {
      Test: { M: 90, R: 4876, AVG: 38.1, SR: 59, "50s": 33, "100s": 6 },
      ODI: { M: 350, R: 10773, AVG: 50.6, SR: 87, "50s": 73, "100s": 10 },
      T20: { M: 98, R: 1617, AVG: 37.6, SR: 126, "50s": 2, "100s": 0 },
    }
  },
  {
    id: 17, name: "Rishabh Pant", role: "WK", team: "India", rating: 84, tier: "Rare", photo: pant,
    stats: {
      Test: { M: 33, R: 2271, AVG: 43.0, SR: 70, "50s": 11, "100s": 5 },
      ODI: { M: 30, R: 865, AVG: 34.6, SR: 106, "50s": 5, "100s": 1 },
      T20: { M: 66, R: 987, AVG: 23.5, SR: 126, "50s": 3, "100s": 0 },
    }
  },
  {
    id: 18, name: "Ravi Ashwin", role: "AR", team: "India", rating: 85, tier: "Epic", photo: ashwin,
    stats: {
      Test: { M: 94, R: 3000, AVG: 27.0, W: 489, ECO: 2.7 },
      ODI: { M: 113, R: 675, AVG: 16.0, W: 151, ECO: 4.9 },
      T20: { M: 65, R: 180, AVG: 13.0, W: 72, ECO: 6.8 },
    }
  },
  {
    id: 19, name: "Bhuvneshwar Kumar", role: "BOWL", team: "India", rating: 83, tier: "Rare", photo: bhuvi,
    stats: {
      Test: { M: 21, W: 63, AVG: 26.1, ECO: 2.9, SR: 54 },
      ODI: { M: 121, W: 141, AVG: 35.1, ECO: 5.1, SR: 41 },
      T20: { M: 87, W: 90, AVG: 23.0, ECO: 6.9, SR: 19 },
    }
  },
  {
    id: 20, name: "Sanju Samson", role: "WK", team: "India", rating: 76, tier: "Common", photo: sanju,
    stats: {
      Test: { M: 0, R: 0, AVG: 0 },
      ODI: { M: 16, R: 390, AVG: 39.0, SR: 104, "50s": 3, "100s": 0 },
      T20: { M: 24, R: 374, AVG: 19.7, SR: 133, "50s": 1, "100s": 0 },
    }
  },
  {
    id: 21, name: "Shardul Thakur", role: "AR", team: "India", rating: 75, tier: "Common", photo: shardul,
    stats: {
      Test: { M: 11, R: 366, AVG: 19.3, W: 27, ECO: 3.4 },
      ODI: { M: 47, R: 315, AVG: 15.0, W: 65, ECO: 6.0 },
      T20: { M: 25, R: 69, AVG: 11.5, W: 33, ECO: 9.2 },
    }
  },
];
