import "./Home.css";
import React from "react";


export default function Home() {
    return (
        <div className="homePage">
            <div className="welcome">
                <h1>Welcome to the Soul of a Gamer Podcast website!</h1>
            </div>
            <div className="whatIs">
                <h2 className="whatIsH2">What is Soul of a Gamer Podcast</h2>
                <p className="whatIsP">Soul of a Gamer Podcast is a podcast where each week, Scott and Steven play a game and tell the 
                    audience what they think about it. They will talk about the music, voice acting, boxes when one is 
                    available, and the story. At the end they will give a rating of Worth, Worf, or Nah. Worth means the game
                    is a must buy and a must play. Worf means that the game might be worth a play but buy at your own risk. 
                    Nah is pass and find something better to do. No matter the rating, Scott and Steven bring their own brand
                    of comedy and fun to the podcast.
                </p>
            </div>
            <div className="whereToFind">
                <h2 className="whereToFindH2">Where To Listen</h2>
                <p className="whereToFindP">You can listen to Soul of a Gamer Podcast on </p>
                <p className="whereToFindP"> <a href="https://open.spotify.com/show/1QuinbhoCApeSUbqW2VTxu">Spotify</a></p> 
                <p className="whereToFindP"><a href="https://podcasts.apple.com/us/podcast/soul-of-a-gamer/id1533764186"> Apple Podcast</a></p>
                
            </div>
            <div className="socialMedia">
                <h2 className="socialMediaH2">Social Networks</h2>
                <p className="socialMediaP">Follow us on all the platforms we are on! </p>
                  <p className="socialMediaP"> <a href="https://www.facebook.com/profile.php?id=100070256654137"> Facebook</a></p> 
                   <p className="socialMediaP"> <a href="https://instagram.com/soulofagamerpodcast?igshid=MzNlNGNkZWQ4Mg=="> Instagram</a> </p>
                   <p className="socialMediaP"> <a href="https://www.tiktok.com/@soulofagamerpodca">Tik Tok</a> </p> 
                
            </div>
        </div>
    )
}