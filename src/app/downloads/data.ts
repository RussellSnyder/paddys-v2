export interface Download {
  label: string;
  file: string;
}

interface Downloads {
  Info: Download[];
  Press: Download[];
  Fotos: Download[];
  Posters: Download[];
}

export const downloads: Downloads = {
  Info: [
    {
      label: "2023 Infoblatt Paddy`s Last Order.pdf ",
      file: "2023 Infoblatt Paddy`s Last Order.pdf ",
    },
    {
      label: "Tech Rider",
      file: "Tech_Rider_Paddys_Last_Order_2018.pdf",
    },
  ],
  Press: [
    {
      label: "Newspaper 2013",
      file: "newspaper_2013.jpeg",
    },
    {
      label: "Presseartikel FT 2014.jpg ",
      file: "Presseartikel FT 2014.jpg ",
    },

    {
      label: "Presseartikel 2015 - 2018.pdf ",
      file: "Presseartikel 2015 - 2018.pdf ",
    },
  ],
  Fotos: [
    {
      label: "Foto 8 - by Ela Ritter.png ",
      file: "Foto 8 - by Ela Ritter.png ",
    },

    {
      label: "Foto 7 - by Ela Ritter.jpg ",
      file: "Foto 7 - by Ela Ritter.jpg ",
    },

    {
      label: "Foto 6 - by Ela Ritter.jpg ",
      file: "Foto 6 - by Ela Ritter.jpg ",
    },

    {
      label: "Foto 5 - by Ela Ritter.jpg ",
      file: "Foto 5 - by Ela Ritter.jpg ",
    },

    {
      label: "Foto 4 - by Ela Ritter.jpg ",
      file: "Foto 4 - by Ela Ritter.jpg ",
    },

    {
      label: "Foto 3 - by Ela Ritter.jpg ",
      file: "Foto 3 - by Ela Ritter.jpg ",
    },

    {
      label: "Foto 2 - by Ela Ritter.jpg ",
      file: "Foto 2 - by Ela Ritter.jpg ",
    },

    {
      label: "Foto 1 - by Ela Ritter.jpg",
      file: "Foto 1 - by Ela Ritter.jpg",
    },
  ],
  Posters: [
    {
      label: "PLO_A2_V2_DRUCK.pdf ",
      file: "PLO_A2_V2_DRUCK.pdf ",
    },

    {
      label: "Plakat 2023 SW A2.pdf ",
      file: "Plakat 2023 SW A2.pdf ",
    },

    {
      label: "Plakat 2023 leer A2.pdf ",
      file: "Plakat 2023 leer A2.pdf ",
    },

    {
      label: "Plakat 2015.pdf ",
      file: "Plakat 2015.pdf ",
    },

    {
      label: "Plakat 2013.pdf ",
      file: "Plakat 2013.pdf ",
    },

    {
      label: "Plakat 2012.pdf ",
      file: "Plakat 2012.pdf ",
    },

    {
      label: "Poster 01.2018",
      file: "poster_01_2018.pdf",
    },
  ],
};
