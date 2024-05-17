import { number } from "astro/zod";

export default function (posts, {

    publishedOnly = true,
    noFuturePost = true,
    sortByDate = true,
    limit = undefined  
} = {}){

    console.log(posts)



    const formattedPost = posts.reduce((acc, postItems)=>{

        const {published, articleDate} = postItems.frontmatter;
        if (publishedOnly && !published) return acc
        if (noFuturePost && new Date(articleDate) > new Date()) return acc


        acc.push(postItems)

        return acc



    },[]);


    if (sortByDate) {

        formattedPost.sort((a, b) => new Date(b.frontmatter.articleDate).valueOf()-new Date(a.frontmatter.articleDate).valueOf())
    };


    if (typeof limit === "number") {
       return formattedPost.slice (0, limit)
    };

    


    return formattedPost;
   

}