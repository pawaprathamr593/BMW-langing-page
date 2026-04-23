(function(){
  emailjs.init("_GCQyXVJgIm6rOyxa"); 
})();

document.addEventListener("DOMContentLoaded", function(){

  const form = document.getElementById("enquiryForm");

  if(form){
    form.addEventListener("submit", function(e){
      e.preventDefault();

      let formData = this;

      // 1️⃣ Send email to YOU
      emailjs.sendForm(
        "service_2jxid6o",
        "template_t18mxub",
        formData
      ).then(function(){

        // 2️⃣ Auto reply to USER
        emailjs.sendForm(
          "service_2jxid6o",
          "template_6t6o5hc",
          formData
        );

        alert("Enquiry Sent Successfully ✅");
        form.reset();

      }).catch(function(error){
        alert("Failed ❌ " + error.text);
      });

    });
  }

});