/* Primary site navigation functionality */

/* Primary link navigation OBJECT definition */
class Nav{

    constructor(){
                /* XML Object Definition */
               this.xhr = new XMLHttpRequest();
           
               /* ABOUT link definition */
               this.aboutLink = document.getElementById("about");
               /* CONTACT link definition */
               this.contactLink = document.getElementById("contact");
           
               /* EVENTLISTENERS defined to respond to user interaction */
               this.aboutLink.addEventListener("click", this.clickAboutHandler);
               this.contactLink.addEventListener("click", this.clickContactHandler);  
           
               /* Copyright YEAR Definition */
               window.addEventListener("load", () => {
                document.getElementById("year").appendChild(document.createTextNode(new Date().getFullYear()));
               });
       }      
      
      
/* Function defined to load info ASYNCHRONOUSLY from the server*/
      clickAboutHandler(){ 
   
          let xhr = new XMLHttpRequest();
        
          xhr.open('GET', './assets/regions/content/about.html', true);
       
          xhr.onreadystatechange = function(){
          if(this.readyState == 4 && this.status == 200) {
               document.getElementById("content").innerHTML = this.responseText; 
            }
          }
                  xhr.onerror = function(){
              console.log("Data request error...");
          }
      
          xhr.send(); 
       
       }
   
  /* Function defined to load info ASYNCHRONOUSLY from the server */
       clickContactHandler(){  
      
        let xhr = new XMLHttpRequest();
        
              xhr.open('GET', './assets/regions/content/contact.html', true);
           
              xhr.onreadystatechange = function(){
                  if(this.readyState == 4 && this.status == 200){
                  
                    document.getElementById("content").innerHTML = this.responseText;
                            new Form();
                    /* Include contact form functionality here. */
                  
                      }
              }
          
              xhr.onerror = function(){
                  console.log("Data request error...");
              }
          
              xhr.send(); 
          
       }
          
   }
   

   class Form{
   
    constructor(){
    
            /* Collect enter data from NAME input field. */         
           this.nameInput = document.getElementById("nameInput");
           this.nameErrorMsg = document.getElementById("nameErrorMsg");
           /* Collect enter data from EMAIL input field. */         
           this.emailInput = document.getElementById("emailInput");
           this.emailErrorMsg = document.getElementById("emailErrorMsg");
          /* Collect enter data from CONTACT input field. */         
           this.phoneInput = document.getElementById("phoneInput");
           this.phoneErrorMsg = document.getElementById("phoneErrorMsg");
          /* Collect enter data from TOPIC dropdown selection field. */         
           this.usrTopic = document.getElementById("usrTopic");
           this.topicErrorMsg = document.getElementById("topicErrorMsg");
           /* Collect enter data from LEVEL dropdown selection field. */         
           this.usrLevel = document.getElementById("usrLevel");
           this.levelErrorMsg = document.getElementById("levelErrorMsg");
            /* Collect enter data from LEVEL dropdown selection field. */         
           this.usrSessTime = document.getElementById("usrSessTime");
           this.sessErrorMsg = document.getElementById("sessErrorMsg");
              /* Collect enter data from LEVEL dropdown selection field. */         
           this.usrSessTime = document.getElementById("usrSessTime");
           this.sessErrorMsg = document.getElementById("sessErrorMsg");
          
            this.stuDef = document.getElementsByName("stuDef");
            
           
           this.usrMsg = document.getElementById("feedbackMsg");
           this.feedbackErrorMsg = document.getElementById("feedbackErrorMsg");
           this.msgValid = false;
           this.emailConfirm = document.getElementById("emailConfirm");
           
           this.topicValid = false;
           this.btnSubmit = document.getElementById("btnSubmit");
           this.emailValid = false;

        }

   }

   /* Designation of the CLASS used to validate our user input. */
class Validator {

    static REQUIRED = "REQUIRED";
    static MIN_LENGTH = "MIN_LENGTH";
    static NUMBER = "NUMBER";
    static MAX_LENGTH = "MAX_LENGTH";
    static DROP_BOX = "DROP_BOX";
    static EMAIL = "EMAIL";

static validate(value, flag, validatorValue){
    if(flag === this.REQUIRED){
        return value.trim().length > 0;
    }
    if(flag === this.MIN_LENGTH){
        return value.trim().length > validatorValue;
    }
    if(flag === this.MAX_LENGTH){
        return value.length < validatorValue;
    }
    if(flag === this.NUMBER){
        return isNaN(value) ;
    }
    if(flag === this.DROP_BOX){
        return value > 0;
    }
    if(flag === this.EMAIL){
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    }
}


}

   new Nav();
   
   