const dataId = {
    type: 'ID',
    
    ui: {
        projects: "Proyek",
        skills: "Kemampuan",
        mainSkills: "Kemampuan Utama",
        otherSkills: "Kemampuan Lainnya",
        contact: "Kontak",
        email: "Surel",
        copyright: "Hak Cipta Dilindugi",
    },

    dev: {
        name: "Noor Wachid",
        description: "C++ Programmer dan Web Developer",
        email: 'noorwach@yahoo.com',

        mainSkills: [{
                name: "C++",
                description: "Membuat library, aplikasi CLI dan grafik berperforma tinggi",
            },
            {
                name: "JavaScript",
                description: "Membuat tampilan pengguna yang interaktif",
            },
            {
                name: "PHP",
                description: "Membuat website dinamis",
            }
        ],

        otherSkills: [
            "HTML/CSS",
            "MySQL",
            "Menggunakan Git version control",
            "Menggunakan GNU/Linux based OS",
            "Berbicara/Menulis dalam bahasa Indonesia dan Inggris",
        ],
    },

    tags: ["All", "C++", "JavaScript", "PHP"],
    tagActive: "All",
    projects: [{
            id: 1,
            name: "RainType",
            description: "Test mengetik dibuat dengan JavaScript",
            url: "https://noorwachid.github.io/raintype",
            image: "raintype.png",
            tags: ["JavaScript"]
        },
        {
            id: 2,
            name: "WFileServer",
            description: "Penulisan ulang HFS, lebih sederhana dan cepat",
            url: "https://github.com/noorwachid/wfileserver",
            image: "wfs.png",
            tags: ["JavaScript", "NodeJS"]
        },
        {
            id: 3,
            name: "FixQuote",
            description: "Menyamakan/membedakan tanda petik",
            url: "https://noorwachid.github.io/jar/fixquote",
            image: "fixquote.png",
            tags: ["JavaScript"]
        },
        {
            id: 4,
            name: "Sprint",
            description: "Baca artikel atau apapun lebih cepat",
            url: "https://noorwachid.github.io/jar/sprint",
            image: "sprint.png",
            tags: ["JavaScript"]
        },
        {
            id: 5,
            name: "Anggur",
            description: "2D rendering library",
            url: "https://github.com/noorwachid/anggur",
            image: "anggur.png",
            tags: ["C++"]
        },
        {
            id: 6,
            name: "SimpleBlog",
            description: "Blog super sederhana",
            url: "https://github.com/noorwachid/simpleblog",
            image: "simpleblog.png",
            tags: ["PHP", "MySQL"]
        }
    ]
};
