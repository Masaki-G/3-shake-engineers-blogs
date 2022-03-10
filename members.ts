import { Member } from "@src/types";

export const members: Member[] = [
  {
    id: "yteraoka",
    name: "yteraoka",
    role: "SRE",
    bio: "ojisan",
    avatarSrc: "/avatars/yteraoka.jpeg",
    sources: ["https://blog.1q77.com/feed/","https://qiita.com/yteraoka/feed"],
    includeUrlRegex: "",
    twitterUsername: "yteraoka",
    githubUsername: "yteraoka",
    websiteUrl: "https://blog.1q77.com/",
  },
  {
    id: "tozastation",
    name: "tozastation",
    role: "SRE",
    bio: "tarako_chan",
    avatarSrc: "/avatars/tozastation.jpg",
    sources: ["https://qiita.com/tozastation/feed"],
    includeUrlRegex: "",
    twitterUsername: "tozastation",
    githubUsername: "tozastation",
    websiteUrl: "https://github.com/tozastation",
  },
  {
    id: "kyohmizu",
    name: "kyohmizu",
    role: "SRE",
    bio: "mizumoto",
    avatarSrc: "/avatars/kyohmizu.png",
    sources: ["https://kyohmizu.hatenablog.com/feed","https://qiita.com/kyohmizu/feed"],
    includeUrlRegex: "",
    twitterUsername: "kyohmizu",
    githubUsername: "kyohmizu",
    websiteUrl: "https://kyohmizu.com/",
  },
  {
    id: "nwiizo",
    name: "nwiizo",
    role: "Software Developer",
    bio: "Brogrammer",
    avatarSrc: "/avatars/nwiizo.jpeg",
    sources: ["https://syu-m-5151.hatenablog.com/feed"],
    includeUrlRegex: "syu-m-5151.hatenablog.com",
    twitterUsername: "nwiizo",
    githubUsername: "nwiizo",
    websiteUrl: "https://nwiizo.github.io/",
  },
  {
    id: "skikkh",
    name: "skikkh",
    role: "SRE",
    bio: "skikkh",
    avatarSrc: "/avatars/skikkh.jpeg",
    sources: ["https://qiita.com/skikkh/feed"],
    includeUrlRegex: "",
    twitterUsername: "skikkh",
    githubUsername: "skikkh",
    websiteUrl: "",
  },
  {
    id: "toshikish",
    name: "toshikish",
    role: "SRE",
    bio: "Toshiki Shimomura",
    avatarSrc: "/avatars/toshikish.png",
    sources: ["https://toshikish.hateblo.jp/feed","https://zenn.dev/toshikish/feed","https://qiita.com/toshikish/feed"],
    includeUrlRegex: "",
    twitterUsername: "",
    githubUsername: "toshikish",
    websiteUrl: "",
  },
  {
    id: "Sreake",
    name: "Sreake",
    role: "",
    bio: "This Is The Sreake Section Blog.",
    avatarSrc: "/avatars/sreake.png",
    sources: ["https://sreake.com/blog/feed/"],
    includeUrlRegex: "",
    twitterUsername: "SreakeJ",
    githubUsername: "",
    websiteUrl: "https://sreake.com",
  },
  {
    id: "tez",
    name: "Takuya Tezuka",
    role: "JB",
    bio: "tez",
    avatarSrc: "/avatars/tezuka.jpeg",
    sources: ["https://qiita.com/TT_Private/feed"],
    includeUrlRegex: "qiita.com/TT_Private",
    twitterUsername: "tt0603",
    githubUsername: "taku-tez",
    websiteUrl: "https://www.wantedly.com/id/takuya_tezuka",
  },
  {
    id: "sosan01",
    name: "Soichiro Tsuchida",
    role: "SRE",
    bio: "sosan",
    avatarSrc: "/avatars/sosan01.png",
    sources: "",
    includeUrlRegex: "",
    twitterUsername: "",
    githubUsername: "sosan01",
    websiteUrl: "",
  },
].sort((a, b) => (a.id < b.id ? -1 : 1));
