import fetch from "node-fetch";

function pleasehireme() {
  fetch("https://api.publicapis.org/categories")
    .then(function (response) {
      return response.text(); // แปลงข้อมูลที่ได้เป็น string
    })
    .then(function (data) {
      //console.log(data); // แสดงข้อมูล sting จาก then ข้างบน
      const regex1 = /Ani\s*\w+\s*\w+/g
      const regex2 = /Ev\s*\w+\s*\w+/g
      const regex3 = /Open\s*\w+\s*\w+/g;
      const found1 = data.match(regex1);
      const found2 = data.match(regex2);
      const found3 = data.match(regex3);
      console.log(found1);
      console.log(found2);
      console.log(found3); 

    });
}
pleasehireme();
