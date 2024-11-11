const express = require("express");
const router = express.Router();
const cors = require("cors");
var bodyParser = require('body-parser')

const corsOptions ={
  origin:'*', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200,
}


// server used to send send emails
const app = express();
app.use(cors(corsOptions));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Parse JSON bodies (optional)
app.use(bodyParser.json());
app.use("/", router);
app.listen(5001, () => console.log("Server Running"));

function jsonToFormData(jsonData) {
  const formData = new FormData();

  // Recursively append fields to FormData
  function appendFormData(data, prefix) {
      for (let key in data) {
          if (Object.prototype.hasOwnProperty.call(data, key)) {
              const value = data[key];
              const prefixedKey = prefix ? `${prefix}[${key}]` : key;
              if (typeof value === 'object' && !(value instanceof File)) {
                  appendFormData(value, prefixedKey); // Recurse into nested objects
              } else {
                  formData.append(prefixedKey, value);
              }
          }
      }
  }

  appendFormData(jsonData, '');
  return formData;
}

router.post("/contact", async (req, res) => {
  console.log(req.body);
  let formData = jsonToFormData(req.body);
  console.log(formData);
  let response = await fetch("https://script.google.com/macros/s/AKfycbybasEJwx05KJSC_PGbrZZDGaa2E5W6jtnUeFyBYDbtWcs_AGEFJUh-_hzZ5vh0X5KJ/exec", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(req.body)
  });
  let result = await response.json();
  // console.log(result);
  if ( result.statusCode == 200 )
    return  res.status(200).send({ status: "OK" });
  else 
    return res.status(500).send({ status: "Internal server error" })
});
