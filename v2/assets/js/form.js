
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
          
         //  this.stuDef = document.getElementsByName("stuDef");
          // this.stuDef = document.querySelector('input[name="stuDef"]:checked').value;

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

            this.emailValid = false;
            return;
            
        }else if(!Validator.validate(this.emailInput.value, Validator.MAX_LENGTH, 35)){
            this.emailErrorMsg.innerText = "Feedback exceeds limit!";
            this.emailInput.style = "border-color: #ff0000;";
            this.emailErrorMsg.style = "color: #ff0000;";
            
            this.emailValid = false;
            return;
            
        } else if(!Validator.validate(this.emailInput.value, Validator.EMAIL)){
            this.emailErrorMsg.innerText = "Email format incorrect!";
            this.emailInput.style = "border-color: #ff0000;";
            this.emailErrorMsg.style = "color: #ff0000;";
            
            this.emailValid = false;
            return;

        } else if(Validator.validate(this.emailInput.value, Validator.EMAIL)) {

            this.emailErrorMsg.innerText = "";
            this.emailInput.style = "border-color: #2ecc71;";
            this.emailErrorMsg.style = "display: none";

            this.emailValid = true;
        }

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

              /* Function to respond to user interaction with PHONE input field  */
          
this.usrMsg.addEventListener("blur", () => {
    
    /* MESSAGE Check */
    if(!Validator.validate(this.usrMsg.value, Validator.REQUIRED)){
       this.feedbackErrorMsg.innerText = "Blank feedback NOT allowed!!!";
       this.usrMsg.style = "border-color: #ff0000;";
       this.feedbackErrorMsg.style = "color: #ff0000;";
       this.msgValid = false;
       return;
       
   } else if(!Validator.validate(this.usrMsg.value, Validator.MAX_LENGTH, 140)){
       this.feedbackErrorMsg.innerText = "Feedback exceeds limit!";
       this.usrMsg.style = "border-color: #ff0000;";
       this.feedbackErrorMsg.style = "color: #ff0000;";
       this.msgValid = false;
       
       return;
   
   }else if(Validator.validate(this.usrMsg.value, Validator.REQUIRED)){
   
       this.feedbackErrorMsg.innerText = "";
       this.usrMsg.style = "border-color: #2ecc71;";
       this.feedbackErrorMsg.style = "display: none";
   
       this.msgValid = true;
   }
    
   
   });
           
this.btnSubmit.addEventListener("click", () => {
    
    /* Must validate the user input before processing. */
     if(this.emailValid && this.msgValid && this.topicValid){

/* Once the user has entered all their info correctly, then send these records to the server. */
       // console.log("Message Sent!");
        
        const request = new XMLHttpRequest();
        let stuDef = document.querySelector('input[name="stuDef"]:checked');

        let requestData = `email=${this.emailInput.value}`;
        requestData += `&name=${this.nameInput.value}`;
        requestData += `&contact=${this.phoneInput.value}`;
        requestData += `&usrTopic=${this.usrTopic.value}`;
        requestData += `&usrLevel=${this.usrLevel.value}`;
        requestData += `&usrSessTime=${this.usrSessTime.value}`;
        requestData += `&stuDef=${stuDef.value}`;
        requestData += `&usrMsg=${this.usrMsg.value}`;

            
        request.open('post', './mail.php');
        request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        request.send(requestData);
        this.emailConfirm.innerHTML = "...Sending Message";
        this.emailConfirm.style = "color: #EE5552;";
          
        /* Anonymous function to handle ASYNCHRONOUS server response. */
        request.onload = () => {
            
            this.emailConfirm.innerHTML = "<b>Email Successfully Sent!</b>";
            this.emailConfirm.style = "color: #2ecc71;";
         
            try {
                // responseObject = JSON.parse(request.responseText);
                   console.log(request.responseText);
                  } catch(e) {
                   console.error(e);
                 }
                    //    console.log('Contact Form Submitted!');
                      //  console.log(requestData);
            
                       this.formDataDestroy();
                       // this.emailConfirm.opacity = 0;
        
                }

        } else {
         
            this.emailConfirm.innerHTML = "<b>Please complete the form details above.</b>";
            this.emailConfirm.style = "color: #ff0000;";
         
        console.log("Message NOT Sent!");
     }

    });

        }

        
formDataDestroy(){

    this.emailInput.value = "";
    this.emailValid = false;
    this.emailInput.style = "border-color: #ced4da;";
 
    this.nameInput.value = "";
    this.nameInput.style = "border-color: #ced4da;";
 
    this.usrLevel.value = 0;
    this.usrLevel.style = "border-color: #ced4da;";

    this.phoneInput.value = "";
    this.phoneInput.style = "border-color: #ced4da;";
 
    this.usrSessTime.value = 0;
    this.usrSessTime.style = "border-color: #ced4da;";
   
    this.usrTopic.value = 0;
    this.usrTopic.style = "border-color: #ced4da;";
    
    this.usrMsg.value = "";
    this.msgValid = false;
    this.usrMsg.style = "border-color: #ced4da;";

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


new Form();