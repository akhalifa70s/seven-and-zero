
// Set up the Alphabet's & Slides' Sound Files Arrays

alphaSound = [];
soundFileName = '';
dirName1 = '../shop/sounds/';
fileExt = '.m4a';
alphaSound[0] = '...';
for (let j = 1; j < 29; j++) {
   soundFileName = dirName1 + j + fileExt;  
   alphaSound[j] = new Audio (soundFileName); 
} 

function clicked(x) {
    alphaSound[x.id].play();   
}


