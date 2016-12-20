function preload(){
    myImage = loadImage("pic/christmastree.png")
}

function setup() {
    createCanvas(360,640);
    background(230,243,244);
    
    mic = new p5.AudioIn();
    mic.start()
}

function draw() {
    background(230,243,244);
    var volume = mic.getLevel();
    var r = map(volume,0,0.1,0,100);
    var x = 7
    image(myImage,0,0,360,640)
    
    //unlightened
    noStroke();
    fill(163);
    ellipse(width/2,180,12+r/15,12+r/15);
    ellipse(161,247+r/25,x,x);
    ellipse(172,250-r/25,x);
    ellipse(184,253+r/25,x,x);
    ellipse(195,256-r/25,x,x);
    ellipse(206,259+r/25,x,x);
    ellipse(152,299-r/25,x,x);
    ellipse(163,302+r/25,x,x);
    ellipse(174,305-r/25,x,x);
    ellipse(186,307+r/25,x,x);
    ellipse(197,310-r/25,x,x);
    ellipse(208,313+r/25,x,x);
    ellipse(219,316-r/25,x,x);
    ellipse(134,361+r/25,x,x);
    ellipse(145,364-r/25,x,x);
    ellipse(156,367+r/25,x,x);
    ellipse(167,370-r/25,x,x);
    ellipse(178,373+r/25,x,x);
    ellipse(189,376-r/25,x,x);
    ellipse(201,378+r/25,x,x);
    ellipse(212,381-r/25,x,x);
    ellipse(223,384+r/25,x,x);
    ellipse(234,387-r/25,x,x);
    ellipse(245,390+r/25,x,x);
    
    
    //lightened
    noStroke();
    fill(249,249,3,r);
    ellipse(width/2,180,12+r/15,12+r/15)
    
    fill(67,239,96,r);
    ellipse(161,247+r/25,x,x);
    
    fill(188,142,155,r);
    ellipse(172,250-r/25,x,x);
    
    fill(213,44,25,r);
    ellipse(184,253+r/25,x,x);
    
    fill(28,63,200,r);
    ellipse(195,256-r/25,x,x);
    
    fill(231,163,92,r);
    ellipse(206,259+r/25,x,x);
    
    fill(153,142,173,r);
    ellipse(152,299-r/25,x,x);
    
    fill(197,196,62,r);
    ellipse(163,302+r/25,x,x);
    
    fill(249,149,49,r);
    ellipse(174,305-r/25,x,x);
    
    fill(213,44,25,r);
    ellipse(186,307+r/25,x,x);
    
    fill(67,239,96,r);
    ellipse(197,310-r/25,x,x);
    
    fill(231,163,92,r);
    ellipse(208,313+r/25,x,x);
    
    fill(28,63,200,r);
    ellipse(219,316-r/25,x,x);
    
    fill(231,44,25,r);
    ellipse(134,361+r/25,x,x);
    
    fill(67,239,96,r);
    ellipse(145,364-r/25,x,x);
    
    fill(153,142,173,r);
    ellipse(156,367+r/25,x,x);
    
    fill(28,63,200,r);
    ellipse(167,370-r/25,x,x);
    
    fill(197,196,62,r);
    ellipse(178,373+r/25,x,x);
    
    fill(213,44,25,r);
    ellipse(189,376-r/25,x,x);
    
    fill(213,44,25,r);
    ellipse(201,378+r/25,x,x);
    
    fill(231,163,92,r);
    ellipse(212,381-r/25,x,x);
    
    fill(188,142,155,r);
    ellipse(223,384+r/25,x,x);
    
    fill(197,196,62,r);
    ellipse(234,387-r/25,x,x);
    
    fill(67,239,96,r);
    ellipse(245,390+r/25,x,x);
    
    //merry christmas
    textFont('Pacifico')
    textSize(14)
    textAlign(CENTER)
    fill(237,83,58)
    text("merry X'mas",width/2,480)
}


