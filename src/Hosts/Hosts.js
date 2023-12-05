import "./Hosts.css"
import React from "react";
import scott from "../Images/profile pic.jpg";
import steven from "../Images/stevenpic.jpg"

export default function Hosts() {
    return (
        <div className="hostPage">
            <div className="hostContainer">
            <div className="hostScott">
                <div className="hostScottText">
                <h2 className="hostScottH2">
                    Scott
                </h2>
                <p className="hostScottP">
                    Scott has been playing games most of his life. He is a big fan of RPGs and action adventure games.
                    Scott is also a musician and has been lead vocals for several bands. He has also performed stand up 
                    comedy several times over the years. Some of Scott's favorite games include Knights of the Old Republic,
                    Skies of Arcadia, and the Mass Effect series. Since coming up with the idea of Soul of a Gamer Podcast,
                    Scott has poured his heart and soul into the podcast and hopes to help it grow and become a staple for 
                    gamers everywhere. "I think socks are the greatest thing man has ever come up with. Video Games are a 
                    close second." 
                </p>
                </div>
                <img src={scott} alt="scott" className="scottIMG" />
            </div>
            </div>
            <div className="hostContainer">
            <div className="hostSteven">
            <img src={steven} alt="steven" className="stevenIMG" /> 
                <div className="hostStevenText">
                <h2 className="hostStevenH2">
                    Steven
                </h2>
                <p className="hostStevenP">
                Steven McGee is a Graphic Designer, Sales Person, and Podcaster. He was raised in Greeley, Colorado, but he 
                now presides in Toledo, Ohio. He is an avid gamer and he spends most of his free time playing games and watching 
                movies with his wife, Jennifer. When not doing that they are usually out for karaoke, trivia, or the
                 occasional sports activity. They try to make time to game together daily.</p>

                <p className="hostStevenP"> Steven has always been a variety gamer and is always looking for the next game. Steven wanted to do the
                 podcast to promote gaming of all varieties! Steven has a game collection of almost 500 video games, and
                  has 14 consoles. Gaming has always been an escape, and a tool for learning for Steven. The podcast also
                   became the perfect way to keep in touch and keep gaming with his cohost Scott Knell. On the podcast
                    they do what they do best, make jokes and be brutally honest about what games are worth your time and
                     money.</p>

                    <p className="hostStevenP"> Steven can be found on most social media outlets under his gamertag gooeymagoo.</p> 
                </div>
                  
            </div>
            </div>
        </div>
    )
}