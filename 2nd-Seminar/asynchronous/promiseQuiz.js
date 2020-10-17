const member = require("./member");

const getFemale = (members) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = members.filter((m) => m.gender === "여");
      resolve(data);
    });
  });

const getYB = (members) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = members.filter((m) => m.status === "YB");
      resolve(data);
    });
  });

const getiOS = (members) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = members.filter((m) => m.part === "iOS");
      resolve(data);
    });
  });

getFemale(member)
  .then((members) => getYB(members))
  .then((members) => getiOS(members))
  .then((members) => console.log(members));
