function sendMail() {
  var params = {
    name: document.getElementById("code").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_0qa48nj";
  const templateID = "template_mj2fauq"


  emailjs.send(serviceID, templateID, params)
    .then(
      res => {
        document.getElementById("code").value = "";
        document.getElementById("message").value = "";
        console.log(res);
      })
    .catch((err) => console.log(err));
}



