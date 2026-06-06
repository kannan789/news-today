import { React,useState } from "react"

export default function ArticleList()
{
   let [article,setArticle]=useState(
    [
        {
        "source": {
        "id": null,
        "name": "Dailymail.com"
        },
        "author": "Richard Eden",
        "title": "EDEN CONFIDENTIAL: Why Prince George IS going to all-boys Eton this autumn",
        "description": "Ever since his birth - 13 years ago next month - he's been the subject of intense public interest, not only here in Britain but around the world.",
        "url": "https://www.dailymail.com/news/royals/article-15878223/EDEN-CONFIDENTIAL-Prince-George-boys-Eton-autumn.html",
        "urlToImage": "https://i.dailymail.com/1s/2026/06/05/21/109161673-0-image-m-37_1780690396020.jpg",
        "publishedAt": "2026-06-06T01:10:49Z",
        "content": "Ever since his birth 13 years ago next month hes been the subject of intense public interest, not only here in Britain but around the world.\r\nNow, though, the scrutiny Prince George is obliged to con… [+9453 chars]"
        },
        {
            "source": {
            "id": null,
            "name": "The Gadgeteer"
            },
            "author": "Vincent Nguyen",
            "title": "Four Days Inside Xpeng: The Self-Driving Car That Fooled a 10-Year Skeptic",
            "description": "I just spent four days inside Xpeng’s world leading up to the 2026 Beijing Auto Show, and I’m still trying to process what I saw. Cars threading through Beijing chaos like a taxi driver who’s been on the job for thirty years. Humanoid robots in active develop…",
            "url": "https://the-gadgeteer.com/2026/06/05/four-days-inside-xpeng-the-self-driving-car-that-fooled-a-10-year-skeptic/",
            "urlToImage": "https://the-gadgeteer.com/wp-content/uploads/2026/05/Xpeng-1-19.jpg",
            "publishedAt": "2026-06-06T00:16:35Z",
            "content": "If you buy something from a link in this article, we may earn a commission. Learn more\r\nI just spent four days inside Xpengs world leading up to the 2026 Beijing Auto Show, and Im still trying to pro… [+34464 chars]"
        },
        {
            "source": {
            "id": null,
            "name": "Dealnews.com"
            },
            "author": null,
            "title": "Wigoo Tesla New Model Y Juniper Glass Roof Sunshade for $42 + free shipping",
            "description": "This sunshade is $42.49 at Amazon, down from $49.99. That's an Amazon all-time low. Shipping is free.  Buy Now at Amazon\r\n Features\r\n <ul> <li>Compatible with 2025-2026 Tesla Model Y Juniper</li> <li>Dual-layer fabric with heat-dispersing layer</li> <li>Multi…",
            "url": "https://www.dealnews.com/Wigoo-Tesla-New-Model-Y-Juniper-Glass-Roof-Sunshade-for-42-free-shipping/21838603.html",
            "urlToImage": "https://d.dlnws.com/64599/1780701518-71wa9xwci-l.jpg?h=1024&w=1024",
            "publishedAt": "2026-06-05T23:19:08Z",
            "content": "moreIt's back! Today only, the 1-cent flash sale at Amazon Haul is one of their most popular sales. There is a limit of one purchase per customer, so choose wisely. Also, to get free shipping you'll … [+141 chars]"
        }
        ]
    
   );

    async function handleClick()
    {
          let response=await fetch('https://newsapi.org/v2/everything?' +
          'q=Apple&' +
          'from=2026-06-05&' +
          'sortBy=popularity&' +
          'apiKey=9639363b49d44b608df96e63404a29a4');

          let data=await response.json();

          console.log(data);

          setArticle(data.articles);
    }

 return (
        <>

        <h1>News Today</h1> 

        

       <ul style={{width:"100%",display:"flex",gap:"20px",flexWrap:"wrap",alignItems:"center",justifyContent:"center"}}>
        { article.map((elem) =>
       (
        <div>
            <a href={elem.url} target="_blank" style={{textDecoration:"none",color:"#000000"}}>
            <div style={{width:"300px",height:"300px",backgroundColor:"white",padding:"20px",overflow:"auto",display:"flex",gap:"10px",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>

                   <div>
                    <img src={elem.urlToImage} width="300" height="200" />
            
                   </div>
                   <div style={{fontSize:"14px",fontWeight:"bold"}}>{elem.title}</div>
            </div>
            </a>     
       </div>  
            )
            )}

           {/* <li> {article[0].title}</li> */}
            </ul>
            <button onClick={handleClick} style={{width:"200px",padding:"10px",backgroundColor:"lightgreen",alignItems:"center",border:"none",borderRadius:"8px",margin:"0 auto"}}>Get Latest News</button>
        </>
    )
}
