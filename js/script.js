var xposition = 1;
var yposition = 1;

var div = new Array();
var Xposition = new Array();
var Yposition = new Array();


window.onload = createDiv();
document.getElementById("flies-sound").pause();


// var counter = 0;
// paragraph = document.getElementById("counter-display");
// const cnt = document.createElement("p");
// cnt.innerText("ants killed:" + counter);
// paragraph.append(cnt);


function createDiv() {
                
                // document.getElementById("flies-sound").play();
               
                // if (i<0) {
                //     document.getElementById("four-flies-sound").pause();
                // }
                // else{
                //     document.getElementById("four-flies-sound").play();
                //     document.getElementById("four-flies-sound").loop = true;
                // } 
                
               
                    for (i=0; i<5; i++){

                    //     if (i < 0) {
                    //         document.getElementById("four-flies-sound").pause();
                    //    } 
                    //    else{
                    //     document.getElementById("four-flies-sound").play();
                    //     // document.getElementById("four-flies-sound").loop = true;
                    //    }
                        
                        
                        var divs = document.createElement("IMG");
                            divs.setAttribute('id', 'img_id' + i );
                            divs.setAttribute('src', 'img/fly.gif')
                            divs.setAttribute("width", "100%");
                            divs.setAttribute("height", "100%");
                            divs.setAttribute("class", "fly")
                            
                        
                            divs.style = "position:absolute;text-align:center;padding-top: 15px; height: 110px;width: 110px; top:" + X + "px; left:" + Y + "px; transform:rotate(" + Z +"deg)";

                            var X =  Math.floor((Math.random() * 420)+ 1) ;
                            var Y =  Math.floor((Math.random() * 420)+ 1);
                            var Z = Math.floor((Math.random() * 420 ) + 1);



                            // const randomColor = Math.floor(Math.random()*16777215).toString(16);
                            // divs.style.background = "#" + randomColor;
                            
                            const maindiv = document.getElementById("container");
                            maindiv.append(divs);    
                                     
                            Movement(0.2, 0.2, X, Y, divs, i)
                            
                            
                        }   
                        
                    }


function killFly(divs){
    
    const kill = divs.parentElement;
    kill.removeChild(divs);
    
}


function Movement(xposition, yposition, X, Y, divs, index){
    

    count = 0;
    
    
    
    divs.onclick = function(){  
        
            count ++;
            
            document.querySelector(".para").innerHTML = "Total Fly Killed = " + count;
            document.querySelector(".para").style = "font-size: 20px; color: green; font-weight: 600;"
            document.getElementById("flies-sound").play();

            killFly(divs);
            

               
    }
    
    setInterval(() => {
        X += xposition;
        divs.style.left = X + "px";

        Y += yposition;
        divs.style.top = Y + "px";
        

        if(X > 390 || X < 0){
            xposition = xposition * -1;
        }
        if (Y > 390 || Y < 0) {
            yposition = yposition * -1;
        }
        Xposition[index] = X;
        Yposition[index] = Y;

        for (var i = 0; i < 5; i++) {

            if (!(i === index)) {
                if ((Xposition[i] < X + 50) && (Xposition[i] + 50 > X) && (Yposition[i] < Y + 50) && (Yposition[i] + 50 > Y)) {
                    xposition = xposition * -1;
                    yposition = yposition * -1;
                }
            }
        }
    }, 1);


}






