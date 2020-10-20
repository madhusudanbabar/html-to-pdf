const Epub = require("epub-gen");

const option = {
    title: "Twindle - epub test", 
    author: "krypton", // 
    publisher: "Twindle Co.",
    cover: "https://blog.madhusudan.live/_nuxt/img/cover.3fabf47.jpg", // Url or File path, both ok.
    content: [
        {
            title: "Twindle - epub test",
            author: "krypton",
            data: "<h2>Hello world from epub</h2>"
            +"<div lang=\"en\">Testing the epub generated by epub-gen</div>" // pass html string
        }
    ]
};

new Epub(option, "./output.epub");