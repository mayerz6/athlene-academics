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
           /* Collect entered data from user FEEDBACK field. */         
           this.usrMsg = document.getElementById("feedbackMsg");
           this.feedbackErrorMsg = document.getElementById("feedbackErrorMsg");
          
           this.stuDef = document.getElementsByName("stuDef");

           this.emailConfirm = document.getElementById("emailConfirm");
            
           this.btnSubmit = document.getElementById("btnSubmit");
            
            this.emailValid = false;
            this.topicValid = false;
            this.msgValid = false;

          /* Function to respond to user interaction with NAME input field  */
            this.nameInput.addEventListener("blur", () => {
                 /* USER NAME Input Check */
        if(!Validator.validate(this.nameInput.value, Validator.REQUIRED)){
            this.nameErrorMsg.innerText = "Blank feedback NOT allowed!!!";
            this.nameInput.style = "border-color: #ff0000;";
            this.nameErrorMsg.style = "color: #ff0000;";

            return;
            
        }else if(!Validator.validate(this.nameInput.value, Validator.MAX_LENGTH, 25)){
            this.nameErrorMsg.innerText = "Feedback exceeds limit!";
            this.nameInput.style = "border-color: #ff0000;";
            this.nameErrorMsg.style = "color: #ff0000;";
        
            return;
        
        }else if(Validator.validate(this.nameInput.value, Validator.REQUIRED)){
        
            this.nameErrorMsg.innerText = "";
            this.nameInput.style = "border-color: #2ecc71;";
            this.nameErrorMsg.style = "display: none";
        
            this.msgValid = true;
        }                

            });

            /* Function to respond to user interaction with CONTACT input field  */
            this.phoneInput.addEventListener("blur", () => {
                /* USER NAME Input Check */
       if(!Validator.validate(this.phoneInput.value, Validator.REQUIRED)){
           this.phoneErrorMsg.innerText = "Blank feedback NOT allowed!!!";
           this.phoneInput.style = "border-color: #ff0000;";
           this.phoneErrorMsg.style = "color: #ff0000;";

           return;
           
       }else if(!Validator.validate(this.phoneInput.value, Validator.MAX_LENGTH, 18)){
           this.phoneErrorMsg.innerText = "Feedback exceeds limit!";
           this.phoneInput.style = "border-color: #ff0000;";
           this.phoneErrorMsg.style = "color: #ff0000;";
       
           return;
       
       }else if(Validator.validate(this.phoneInput.value, Validator.REQUIRED)){
       
           this.phoneErrorMsg.innerText = "";
           this.phoneInput.style = "border-color: #2ecc71;";
           this.phoneErrorMsg.style = "display: none";
       
           this.msgValid = true;
       }                

           });

        /* Function to respond to user interaction with EMAIL input field  */
            this.emailInput.addEventListener("blur", () => {

            /* EMAIL Check */
        if(!Validator.validate(this.emailInput.value, Validator.REQUIRED)){
            this.emailErrorMsg.innerText = "Missing Email Info!";
            this.emailInput.style = "border-color: #ff0000;";
            this.emailErrorMsg.style = "color: #ff0000;";

            return;

        }else if(!Validator.validate(this.emailInput.value, Validator.MAX_LENGTH, 35)){
                    this.emailErrorMsg.innerText = "Feedback exceeds limit!";
                    this.emailInput.style = "border-color: #ff0000;";
                    this.emailErrorMsg.style = "color: #ff0000;";
                
                    return;
        
        } else if(!Validator.validate(this.emailInput.value, Validator.EMAIL)){
            this.emailErrorMsg.innerText = "Email format incorrect!";
            this.emailInput.style = "border-color: #ff0000;";
            this.emailErrorMsg.style = "color: #ff0000;";

            return;

        } else if(Validator.validate(this.emailInput.value, Validator.EMAIL)) {

            this.emailErrorMsg.innerText = "";
            this.emailInput.style = "border-color: #2ecc71;";
            this.emailErrorMsg.style = "display: none";

            this.emailValid = true;
        }

            });

              /* Function to respond to user interaction with PHONE input field  */
              this.phoneInput.addEventListener("blur", () => {


            });

    /* Function to respond to user interaction with this input field  */
           this.usrTopic.addEventListener("blur", () => {

        /* USER TOPIC SELECTION Check */
        if(!Validator.validate(this.usrTopic.value, Validator.DROP_BOX)){
            this.topicErrorMsg.innerText = "Please select a feedback topic!";
            this.usrTopic.style = "border-color: #ff0000;";
            this.topicErrorMsg.style = "color: #ff0000;";
        
            return;
            
        } else if (Validator.validate(this.usrTopic.value, Validator.DROP_BOX)){
        
            this.topicErrorMsg.innerText = "";
            this.usrTopic.style = "border-color: #2ecc71;";
            this.topicErrorMsg.style = "display: none";
        
            this.topicValid = true;
        }
         
        });

        
       /* Function to respond to user interaction with this input field  */
        this.usrLevel.addEventListener("blur", () => {
            
         /* MESSAGE Check */
         if(!Validator.validate(this.usrLevel.value, Validator.DROP_BOX)){
            this.levelErrorMsg.innerText = "Blank feedback NOT allowed!!!";
            this.usrLevel.style = "border-color: #ff0000;";
            this.levelErrorMsg.style = "color: #ff0000;";
        
            return;
            
        } else if(Validator.validate(this.usrLevel.value, Validator.DROP_BOX)){
        
            this.levelErrorMsg.innerText = "";
            this.usrLevel.style = "border-color: #2ecc71;";
            this.levelErrorMsg.style = "display: none";
        
            this.msgValid = true;
        }
         
        
        });
        
         /* Function to respond to user interaction with this input field  */
         this.usrSessTime.addEventListener("blur", () => {
            
            /* MESSAGE Check */
            if(!Validator.validate(this.usrSessTime.value, Validator.DROP_BOX)){
               this.sessErrorMsg.innerText = "Blank feedback NOT allowed!!!";
               this.usrSessTime.style = "border-color: #ff0000;";
               this.sessErrorMsg.style = "color: #ff0000;";
           
               return;
               
           } else if(Validator.validate(this.usrSessTime.value, Validator.DROP_BOX)){
           
               this.sessErrorMsg.innerText = "";
               this.usrSessTime.style = "border-color: #2ecc71;";
               this.sessErrorMsg.style = "display: none";
           
               this.msgValid = true;
           }
            
           
           });

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
   
   