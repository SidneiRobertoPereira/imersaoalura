import express from "express";

    const posts = [
        {
            id: 1,
            descricao: "Uma foto teste", 
            imagem: "https://placecats.com/millie/300/300"
    
        },
        {
          id: 2,
          descricao: "Uma foto teste",
          imagem: "https://placecats.com/millie/300/300"
        },
        {
            id: 3,
          descricao: "Gato fazendo yoga",
          imagem: "https://placecats.com/millie/300/300"
        },
        {
            id: 4,
          descricao: "Gatinho dormindo",
          imagem: "https://placecats.com/millie/300/300"
        },
        {
            id: 5,
          descricao: "Gatos brincando com um novelo de lã",
          imagem: "https://placecats.com/millie/300/300"
        }        
      ];


const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log("servidor escutando...");
});

app.get("/posts", (req, res) => {
    res.status(200).json(posts)
} );

function buscarPostPorID(id){
    return posts.findIndex((post) => {
        return post.id === Number(id)
    })
}

app.get("/posts/:id", (req, res) => {
    const index = buscarPostPorID(req.params.id)
    res.status(200).json(posts[index]);
} );