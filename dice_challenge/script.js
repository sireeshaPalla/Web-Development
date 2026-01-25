var dice1=Math.floor(Math.random()*6)
var dice2=Math.floor(Math.random()*6)

images=["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"]

var image1=document.getElementsByClassName("img1")[0]
var image2=document.getElementsByClassName("img2")[0]

image1.setAttribute("src",images[dice1])
image2.setAttribute("src",images[dice2])

var result=document.querySelector("h1")
if(dice1>dice2)
{ result.innerHTML="Player 1 wins!!!"
}
else if(dice1<dice2)
{ result.innerHTML="Player 2 wins!!!"
}
else
{ result.innerHTML="Tie!!!"
}