import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [
    {
      name: "Beaver Creek",
      cover: "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
      artist: "Aso, Middle School, Aviino",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10075",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: true,
    },
    // Your custom song
    {
      name: "Love Hurts Mashup",
      cover: "https://example.com/love-hurts-mashup-cover.jpg", // Update with your cover image URL
      artist: "Viniick",
      audio: "https://drive.google.com/uc?export=download&id=1H07tdD3JRC7tt3B6Q03XaEviL4WwuIPk",
      color: ["#B0B0B0", "#F0F0F0"], // Greyish white colors
      id: uuidv4(),
      active: true,
    },
    // Existing songs
    {
      name: "Daylight",
      cover: "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
      artist: "Aiguille",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9272",
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Keep Going",
      cover: "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
      artist: "Swørn",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9222",
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Nightfall",
      cover: "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
      artist: "Aiguille",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9148",
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Reflection",
      cover: "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
      artist: "Swørn",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9228",
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Under the City Stars",
      cover: "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
      artist: "Aso, Middle School, Aviino",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10074",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Rewind",
      artist: "SwuM, afternoon bike ride",
      cover: "https://chillhop.com/wp-content/uploads/2022/01/d7c0bd347f56540babd9dd85454b93a89df84a15-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=30134",
      color: ["#C57362", "#152C41"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Reunion",
      artist: "Stan Forebee",
      cover: "https://chillhop.com/wp-content/uploads/2022/01/f8a2b91e3d3862dc91cd27e3f82ddc089c0ccd58-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=30137",
      color: ["#E4B300", "#A8BAAB"],
      id: uuidv4(),
      active: false,
    },
  ];
}

export default chillHop;