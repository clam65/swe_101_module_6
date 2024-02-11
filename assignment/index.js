document.getElementById("main-image").style.transform = "rotate(360deg)";
document.getElementById("main-image").style.transition = "transform 600ms";

const func = async () => {
  try {
    var response = await fetch(
      `https://jsonplaceholder.typicode.com/comments?postId=${1}`
    );
    console.log(response.status);
    // if (!response.ok) {
    //     throw new error ("Network response not OK");
    //     }
    var data = await response.json();
    console.log(data);
    document.getElementById("result").innerHTML = JSON.stringify(data[0].id);
    document.getElementById("email").innerHTML = JSON.stringify(data[0].name);
    document.getElementById("identity").innerHTML = JSON.stringify(
      data[0].email
    );

    document.getElementById("demo").innerHTML = JSON.stringify(data);
  } catch (error) {
    console.log("error", error);
  }
};

func();

const getComments = async () => {
  try {
    let response = await fetch(
      `https://jsonplaceholder.typicode.com/comments?postId=${1}`
    );
    console.log(response.status);
    if (!response.ok) {
      throw new Error("Network response not OK");
    }
    let data = await response.json();
    console.log(data);
    document.getElementById("content").innerHTML = JSON.stringify(data[0].body);
  } catch (error) {
    console.log("error", error);
  }
};
