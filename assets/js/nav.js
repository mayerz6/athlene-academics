/* Primary site navigation functionality */

/* OBJECT definition */
class Nav{

    constructor(){
                /* XML Object Definition */
               this.xhr = new XMLHttpRequest();
           
               this.aboutLink = document.getElementById("about");
               this.contactLink = document.getElementById("contact");
            
               this.aboutLink.addEventListener("click", this.clickAboutHandler);
               this.contactLink.addEventListener("click", this.clickContactHandler);  
           
               window.addEventListener("load", () => {
                document.getElementById("year").appendChild(document.createTextNode(new Date().getFullYear()));
               });
       }      
      
      
   
      clickAboutHandler(){ 
   
           console.log(`The ABOUT link was clicked!!!`);  
          // window.location.href = "./about.html";
        
          let xhr = new XMLHttpRequest();
        
          xhr.open('GET', './assets/regions/content/about.html', true);
       
          xhr.onreadystatechange = function(){
              if(this.readyState == 4 && this.status == 200){
               document.getElementById("content").innerHTML = this.responseText;
      
            }
          }
      
          xhr.onerror = function(){
              console.log("Data request error...");
          }
      
          xhr.send(); 
       
       }
   
   
       clickContactHandler(){  
           console.log("The CONTACT link was clicked!");  
           
           // window.location.href = "./about.html";
        
              let xhr = new XMLHttpRequest();
        
              xhr.open('GET', './assets/regions/content/contact.html', true);
           
              xhr.onreadystatechange = function(){
                  if(this.readyState == 4 && this.status == 200){
                   document.getElementById("content").innerHTML = this.responseText;
          
                  // let block = document.getElementById("content");
                  //   block.innerHTML = this.responseText;
                     //console.clear()
                     //  console.log(this.responseText);
                  }
              }
          
              xhr.onerror = function(){
                  console.log("Data request error...");
              }
          
              xhr.send(); 
          
       }
          
   }
   
   new Nav();
   
   