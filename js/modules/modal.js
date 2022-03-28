export const modal = () => {
  const modal = document.querySelector(".modal");
  const openModal = document.querySelectorAll(".open-modal");
  const close = modal.querySelector(".modal__close");
  const body = document.querySelector("body");
  const form = document.querySelector("form");
  let obj = {};

  function postData(obj, form) {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(response.status);
        }
      })
      .then(() => {
        alert("Вы успешно отправили данные!");
      })
      .catch((reject) => {
        alert("Ошибка " + reject);
      })
      .finally(() => {
        form.reset();
        modal.classList.remove("modal-hidden");
        body.classList.remove("lock");
        body.classList.remove("pc");
      });
  }

  close.addEventListener("click", () => {
    modal.classList.remove("modal-hidden");
    body.classList.remove("lock");
    body.classList.remove("pc");
  });

  openModal.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (window.innerWidth > 768) {
        body.classList.add("pc");
      }
      modal.classList.add("modal-hidden");
      body.classList.add("lock");
    });
  });

  modal.addEventListener("click", (e) => {
    let target = e.target.closest(".modal__container");
    if (!target) {
      modal.classList.remove("modal-hidden");
      body.classList.remove("lock");
      body.classList.remove("pc");
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);

    obj["form"] = form.className;

    data.forEach((value, key) => {
      obj[key] = value;
    });
    postData(obj, form);
  });
};
