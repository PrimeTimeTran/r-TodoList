const IMAGES = [
  "https://cdn.wallpapersafari.com/45/83/INzU4Z.jpg",
  "https://cdn.wallpapersafari.com/25/70/gqMpbD.jpg",
  "https://cdn.wallpapersafari.com/83/59/KUCDQ2.jpg",
  "https://cdn.wallpapersafari.com/73/76/LMDKt2.jpg",
  "https://cdn.wallpapersafari.com/45/4/TSMwyQ.jpg",
  "https://cdn.wallpapersafari.com/93/69/BXoGKn.jpg",
  "https://cdn.wallpapersafari.com/51/4/5Io9qA.jpg",
  "https://cdn.wallpapersafari.com/77/55/xWURfy.jpg",
  "https://cdn.wallpapersafari.com/39/90/8XkSm4.jpg",
  "https://cdn.wallpapersafari.com/61/60/5iFWEg.jpg",
  "https://cdn.wallpapersafari.com/21/69/QDMe8w.jpg",
  "https://cdn.wallpapersafari.com/91/96/CEKojl.jpg",
  "https://cdn.wallpapersafari.com/65/65/QixXWI.jpg",
  "https://cdn.wallpapersafari.com/73/67/aETn6m.jpg",
  "https://cdn.wallpapersafari.com/31/78/1RZfQG.jpg",
  "https://cdn.wallpapersafari.com/83/54/63la1k.jpg",
  'https://cdn.wallpapersafari.com/74/5/AmBrh9.jpg',
  'https://cdn.wallpapersafari.com/75/97/tRC8WM.jpg',
  'https://cdn.wallpapersafari.com/61/66/DrTvSJ.png',
  'https://cdn.wallpapersafari.com/21/60/mNl3gh.jpg',
  'https://cdn.wallpapersafari.com/19/12/y6t9sl.jpg',
  'https://cdn.wallpapersafari.com/89/66/dH8UcW.jpg',
  "https://cdn.wallpapersafari.com/53/38/djb5hu.jpg",
  "https://images5.alphacoders.com/324/324310.jpg",
  "https://cdn.wallpapersafari.com/6/71/PEtjKR.jpg",
  "https://cdn.wallpapersafari.com/59/0/abRX1J.jpg",
  "https://cdn.wallpapersafari.com/6/27/tASQWI.jpg",
  "https://cdn.wallpapersafari.com/0/10/TDlVvC.jpg",
  "https://cdn.wallpapersafari.com/52/85/nuXpiG.jpg",
  "https://cdn.wallpapersafari.com/14/59/uBTYsI.jpg",
  "https://cdn.wallpapersafari.com/53/78/VimkTB.jpg",
  "https://cdn.wallpapersafari.com/43/48/hSXRYo.jpg",
  "https://cdn.wallpapersafari.com/15/89/JMHjbn.jpg",
  "https://cdn.wallpapersafari.com/41/63/AGL2zs.jpg",
  "https://cdn.wallpapersafari.com/72/51/6QdY4R.jpg",
  "https://cdn.wallpapersafari.com/93/43/FzcOUb.jpg",
  "https://cdn.wallpapersafari.com/97/31/uEs8zW.jpg",
  "https://cdn.wallpapersafari.com/70/80/KG9I7N.jpg",
  "https://cdn.wallpapersafari.com/87/29/aKnrAQ.jpg",
  "https://cdn.wallpapersafari.com/54/18/IOiRE9.jpg",
  "https://cdn.wallpapersafari.com/82/50/CAHy6G.jpg",
  "https://cdn.wallpapersafari.com/22/70/O3Le85.jpg",
  "https://cdn.wallpapersafari.com/84/87/qUcZf8.jpg",
  "https://cdn.wallpapersafari.com/86/35/yRkorx.jpg",
  "https://cdn.wallpapersafari.com/14/39/3dmw0N.jpg",
  "https://cdn.wallpapersafari.com/75/11/9p5exb.jpg",
  "https://cdn.wallpapersafari.com/60/77/6DsTgo.jpg",
  "https://cdn.wallpapersafari.com/20/42/TV57dP.jpg",
  "https://cdn.wallpapersafari.com/60/36/3qsjr1.jpg",
  "https://cdn.wallpapersafari.com/18/90/iNWHCZ.jpg",
  "https://cdn.wallpapersafari.com/79/17/8IbM9P.jpg",
  "https://cdn.wallpapersafari.com/77/15/zm6dTP.jpg",
  "https://cdn.wallpapersafari.com/74/88/eHvdl1.jpg",
  "https://cdn.wallpapersafari.com/41/71/cACG8b.jpg",
  "https://cdn.wallpapersafari.com/31/95/KF7cMx.jpg",
  "https://cdn.wallpapersafari.com/83/29/JZlAdc.jpg",
  "https://cdn.wallpapersafari.com/18/30/SsH8Tf.jpg",
  "https://cdn.wallpapersafari.com/17/92/QmSeLj.jpg",
  "https://cdn.wallpapersafari.com/66/84/j91dOS.jpg",
  "https://cdn.wallpapersafari.com/24/24/ZUEABa.jpg",
  "https://cdn.wallpapersafari.com/35/19/qb8a3y.jpg",
  "https://cdn.wallpapersafari.com/56/11/Nh8p5K.jpg",
  "https://cdn.wallpapersafari.com/58/61/QIMdZ3.jpg",
  "https://cdn.wallpapersafari.com/84/84/AiWyBq.jpg",
  "https://cdn.wallpapersafari.com/22/64/dZN3vh.jpg",
  "https://cdn.wallpapersafari.com/17/94/h7wLN3.jpg",
  "https://cdn.wallpapersafari.com/99/76/MWVg4P.jpg",
  "https://cdn.wallpapersafari.com/43/60/sbmhzp.jpg",
  "https://cdn.wallpapersafari.com/38/75/9d4qbt.jpg",
  "https://cdn.wallpapersafari.com/92/63/TJX4bL.jpeg",
  "https://mcdn.wallpapersafari.com/medium/34/84/Vfi7Q1.jpg",
  "https://img.wallpapersafari.com/desktop/1600/900/54/6/mnoyFT.jpg",
  "https://cdn.cnn.com/cnnnext/dam/assets/171222140328-03-plastic-straws-stock-full-169.jpg",
  "https://bestwallpapers.in/wp-content/uploads/2018/04/abstract-pattern-colorful-4k-wallpaper-3840x2160.jpg",
  "https://wallpaper21.com/wp-content/uploads/2017/09/At-Last-Beautiful-warm-emotions-colors-in-this-digital-art-by-Alena-Aenami-wallpaper-wpt8202212.jpg",
  "https://wallpaperwalldesign.com/wp-content/uploads/2019/04/wallpaper-design-images-beautiful-colorful-abstract-hd-wallpaper-abstract-art-design-wallpaper-hd-of-wallpaper-design-images.jpg"
];

export const randomBackgroundImage = () =>
  IMAGES[Math.floor(Math.random() * IMAGES.length)];
