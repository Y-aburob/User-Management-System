const addUser = document.getElementById("add_user");
const inputs = document.getElementById("inputs");
const buttonConfirm = document.getElementById("button_confirm");
const confirmAdd = document.getElementById("confirm_add");
const mainContainer = document.getElementById("main_container");

const popUpEdit = document.getElementById("pop_up_edit");
const cancelAddEdit = document.getElementById("cancel_add_edit");
const confirmAddEdit = document.getElementById("confirm_add_edit");

const nameInputEdit = document.getElementById("name_input_edit");
const emailInputEdit = document.getElementById("email_input_edit");
const numberInputEdit = document.getElementById("number_input_edit");

const cancelAdd = document.getElementById("cancel_add");
const popUp = document.getElementById("pop_up");
const nameInput = document.getElementById("name_input");
const emailInput = document.getElementById("email_input");
const numberInput = document.getElementById("number_input");

const surePop = document.getElementById("sure_pop");
const cancelDelete = document.getElementById("cancel_delete");
const confirmDelete = document.getElementById("confirm_delete");
const name = document.getElementById("name0");
const email = document.getElementById("email");
const number = document.getElementById("phone");

const noResault = document.getElementById("no");

const cardsContainer = document.getElementById("cards_container");
let controlElemetnsList = [];
let infoList = [];

// show/hide inputs
let count = 0;

addUser.addEventListener("click", function () {
  nameInput.value = "";
  emailInput.value = "";
  numberInput.value = "";
  currentList = [];
  buttonConfirm.classList.toggle("flex");
  inputs.classList.toggle("flex");

  numberInput.addEventListener("input", function () {
    if (numberInput.value.length > 10) {
      numberInput.value = numberInput.value.slice(0, 10);
    }
  });

  popUp.classList.toggle("flex");
  addUser.style.visibility = "hidden";
  mainContainer.classList.add("blur");

  if (buttonConfirm.classList.contains("flex")) {
  } else {
    nameInput.value = "";
    emailInput.value = "";
    numberInput.value = "";
    emailInput.classList.remove("redPlaceHolder");
    emailInput.classList.remove("redInput");
    nameInput.classList.remove("redPlaceHolder");
    nameInput.classList.remove("redInput");
    numberInput.classList.remove("redPlaceHolder");
    numberInput.classList.remove("redInput");
  }
});

cancelAdd.addEventListener("click", function () {
  popUp.classList.remove("flex");
  addUser.style.visibility = "visible";
  mainContainer.classList.remove("blur");
});

nameInput.addEventListener("blur", function () {
  nameInput.classList.remove("redPlaceHolder");
  nameInput.classList.remove("redInput");
});
emailInput.addEventListener("blur", function () {
  emailInput.classList.remove("redPlaceHolder");
  emailInput.classList.remove("redInput");
});
numberInput.addEventListener("blur", function () {
  numberInput.classList.remove("redPlaceHolder");
  numberInput.classList.remove("redInput");
});

document.addEventListener("keypress", function (event) {
  if (popUp.classList.contains("flex") && event.key == "Enter") {
    confirmAdd.click();
  } else if (popUpEdit.classList.contains("flex") && event.key == "Enter") {
    confirmAddEdit.click();
  }
});

document.addEventListener("keydown", function (event) {
  if (popUp.classList.contains("flex") && event.key == "Escape") {
    cancelAdd.click();
  } else if (popUpEdit.classList.contains("flex") && event.key == "Escape") {
    cancelAddEdit.click();
  }
});
// adding info to table

confirmAdd.addEventListener("click", function () {
  currentName = nameInput.value;
  currentEmail = emailInput.value;
  currentNumber = numberInput.value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (infoList !== null) {
    if (
      nameInput.value === "" ||
      emailInput.value === "" ||
      numberInput.value === ""
    ) {
      alert("please fill the empty inputs!");

      if (
        nameInput.value === "" &&
        emailInput.value === "" &&
        numberInput.value === ""
      ) {
        nameInput.classList.add("redPlaceHolder");
        nameInput.classList.add("redInput");
        emailInput.classList.add("redPlaceHolder");
        emailInput.classList.add("redInput");
        numberInput.classList.add("redPlaceHolder");
        numberInput.classList.add("redInput");
      } else if (nameInput.value === "") {
        nameInput.classList.add("redPlaceHolder");
        nameInput.classList.add("redInput");
        emailInput.classList.remove("redPlaceHolder");
        emailInput.classList.remove("redInput");
        numberInput.classList.remove("redPlaceHolder");
        numberInput.classList.remove("redInput");
      } else if (emailInput.value === "") {
        emailInput.classList.add("redPlaceHolder");
        emailInput.classList.add("redInput");
        nameInput.classList.remove("redPlaceHolder");
        nameInput.classList.remove("redInput");
        numberInput.classList.remove("redPlaceHolder");
        numberInput.classList.remove("redInput");
      } else if (numberInput.value === "") {
        numberInput.classList.add("redPlaceHolder");
        numberInput.classList.add("redInput");
        nameInput.classList.remove("redPlaceHolder");
        nameInput.classList.remove("redInput");
        emailInput.classList.remove("redPlaceHolder");
        emailInput.classList.remove("redInput");
      }
    } else if (numberInput.value.length < 10) {
      numberInput.classList.add("redPlaceHolder");
      numberInput.classList.add("redInput");
      nameInput.classList.remove("redPlaceHolder");
      nameInput.classList.remove("redInput");
      emailInput.classList.remove("redPlaceHolder");
      emailInput.classList.remove("redInput");
      alert("write a valid phone number");
    } else if (!emailRegex.test(currentEmail)) {
      nameInput.classList.remove("redPlaceHolder");
      nameInput.classList.remove("redInput");
      numberInput.classList.remove("redPlaceHolder");
      numberInput.classList.remove("redInput");

      alert("incorrect email format, please try again");

      emailInput.classList.add("redPlaceHolder");
      emailInput.classList.add("redInput");
      emailInput.focus();
    } else {
      noResault.classList.add("noResaultNone");
      nameInput.classList.remove("redPlaceHolder");
      nameInput.classList.remove("redInput");
      emailInput.classList.remove("redPlaceHolder");
      emailInput.classList.remove("redInput");
      numberInput.classList.remove("redPlaceHolder");
      numberInput.classList.remove("redInput");
      addUser.style.visibility = "visible";
      mainContainer.classList.remove("blur");
      popUp.classList.remove("flex");
      nameInputEdit.value = "";
      emailInputEdit.value = "";
      numberInputEdit.value = "";
      currentList.push(currentName);
      currentList.push(currentEmail);
      currentList.push(currentNumber);
      infoList.push(currentList);
      controlElemetnsList.push(currentList);

      // for (let a = 0; a < controlElemetnsList.length; a++) {
      //     const checkEmail = document.getElementById(`email${a}`)

      //     if(emailInput.value === checkEmail) {
      //         alert('the email is already taken')
      //     }
      // }

      cardsContainer.innerHTML += ` 
                        <div class="cardo" id="cardo${count}">
                    <div class="info" id="info${count}">
                        <h3 class="name" id=""><span id="name${count}">${currentName}</span></h3>
                        <p class="email" id=""><span id="email${count}">${currentEmail}</span></p>
                        <p class="number" id=""><span id="number${count}">${currentNumber}</span></p>
                        <div class="imgages" id="imgages${count}">
                          <img class="images" id="edit${count}" src="media/icons8-edit.svg" alt="oops" width="24px" height="24px">
                          <img class="images" id="delete${count}" src="media/icons8-trash-24.png" alt="oops" width="24px" height="24px">
                        </div>
                    </div>
                    <div class="card" id="card${count}">
                        <h3 class="name" id="namee${count}">${currentName}</h3>
                        <div class="img"><img src="./media/employee.png" width="50px" height="50px" alt="oops"></div>
                    </div>

                </div>
                    `;
      count++;
    }

    for (let i = 0; i < controlElemetnsList.length; i++) {
      const card = document.getElementById(`cardo${i}`);
      const info = document.getElementById(`info${i}`);
      const smallCard = document.getElementById(`card${i}`);

      card.addEventListener("click", function () {
        card.classList.toggle("rotate");
        smallCard.classList.toggle("rotate");
        info.classList.toggle("rotate_fast");
        info.classList.toggle("flex");
      });
    }

    // delete elements from table

    for (let i = 0; i < controlElemetnsList.length; i++) {
      const imgTd = document.getElementById(`imgTd${i}`);
      const image = document.getElementById(`delete${i}`);
      const edit = document.getElementById(`edit${i}`);
      const currentCard = document.getElementById(`cardo${i}`);

      image.addEventListener("click", function () {
        surePop.classList.add("flex");
        addUser.style.visibility = "hidden";
        mainContainer.classList.add("blur");

        confirmDelete.addEventListener("click", function () {
          currentCard.style.display = "none";
          surePop.classList.remove("flex");
          addUser.style.visibility = "visible";
          mainContainer.classList.remove("blur");
        });

        cancelDelete.addEventListener("click", function() {
          surePop.classList.remove("flex");
          addUser.style.visibility = "visible";
          mainContainer.classList.remove("blur");
        });
        if (confirmAdd.classList.contains("inputIdShow")) {
          // show button when press delete

          confirmAdd.classList.remove("inputIdShow");
        }
      });

      let currentEditIndex = -1;

      edit.addEventListener("click", function () {
        const titleName = document.getElementById(`namee${i}`);
        const name = document.getElementById(`name${i}`);
        const email = document.getElementById(`email${i}`);
        const phone = document.getElementById(`number${i}`);
        const cancelEdit = document.getElementById("cancel_add_edit");

        numberInput.addEventListener("input", function () {
          if (numberInput.value.length > 10) {
            numberInput.value = numberInput.value.slice(0, 10);
          }
        });

        popUpEdit.classList.add("flex");
        addUser.style.visibility = "hidden";
        mainContainer.classList.add("blur");

        nameInputEdit.value = name.textContent;
        emailInputEdit.value = email.textContent;
        numberInputEdit.value = phone.textContent;

        currentEditIndex = i;

        cancelEdit.addEventListener("click", function () {
          popUpEdit.classList.remove("flex");
          addUser.style.visibility = "visible";
          mainContainer.classList.remove("blur");
        });

        confirmAddEdit.addEventListener("click", function () {
          if (currentEditIndex !== -1) {
            const name = document.getElementById(`name${currentEditIndex}`);
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const titleNamee = document.getElementById(
              `name${currentEditIndex}`
            );

            const email = document.getElementById(`email${currentEditIndex}`);
            const phone = document.getElementById(`number${currentEditIndex}`);

            numberInputEdit.addEventListener("input", function () {
              if (phone.value.length > 10) {
                phone.value = phone.value.slice(0, 10);
              }
            });
            if (
              nameInputEdit.value === "" ||
              emailInputEdit.value === "" ||
              numberInputEdit.value === ""
            ) {
              nameInputEdit.classList.add("redPlaceHolder");
              nameInputEdit.classList.add("redInput");
              emailInputEdit.classList.add("redPlaceHolder");
              emailInputEdit.classList.add("redInput");
              numberInputEdit.classList.add("redPlaceHolder");
              numberInputEdit.classList.add("redInput");
              alert("please fill the empty inputs!");
            } else if (nameInputEdit.value === "") {
              nameInputEdit.classList.add("redPlaceHolder");
              nameInputEdit.classList.add("redInput");
              emailInputEdit.classList.remove("redPlaceHolder");
              emailInputEdit.classList.remove("redInput");
              numberInputEdit.classList.remove("redPlaceHolder");
              numberInputEdit.classList.remove("redInput");
            } else if (emailInputEdit.value === "") {
              emailInputEdit.classList.add("redPlaceHolder");
              emailInputEdit.classList.add("redInput");
              nameInputEdit.classList.remove("redPlaceHolder");
              nameInputEdit.classList.remove("redInput");
              numberInputEdit.classList.remove("redPlaceHolder");
              numberInputEdit.classList.remove("redInput");
            } else if (numberInputEdit.value.length < 10) {
              numberInputEdit.classList.add("redPlaceHolder");
              numberInputEdit.classList.add("redInput");
              nameInputEdit.classList.remove("redPlaceHolder");
              nameInputEdit.classList.remove("redInput");
              emailInputEdit.classList.remove("redPlaceHolder");
              emailInputEdit.classList.remove("redInput");
              alert("write a valid phone number");
            } else if (numberInputEdit.value === "") {
              numberInputEdit.classList.add("redPlaceHolder");
              numberInputEdit.classList.add("redInput");
              nameInputEdit.classList.remove("redPlaceHolder");
              nameInputEdit.classList.remove("redInput");
              emailInputEdit.classList.remove("redPlaceHolder");
              emailInputEdit.classList.remove("redInput");
            } else {
              if (!emailRegex.test(emailInputEdit.value)) {
                nameInputEdit.classList.remove("redPlaceHolder");
                nameInputEdit.classList.remove("redInput");
                numberInputEdit.classList.remove("redPlaceHolder");
                numberInputEdit.classList.remove("redInput");

                alert("incorrect email format, please try again");

                emailInputEdit.classList.add("redPlaceHolder");
                emailInputEdit.classList.add("redInput");
                emailInputEdit.focus();
              } else {
                popUpEdit.classList.remove("flex");
                addUser.style.visibility = "visible";
                mainContainer.classList.remove("blur");
                titleName.textContent = nameInputEdit.value;
                titleNamee.textContent = nameInputEdit.value;
                name.textContent = nameInputEdit.value;
                email.textContent = emailInputEdit.value;
                phone.textContent = numberInputEdit.value;
                currentEditIndex = -1;
              }
            }
          }
        });
      });
    }
  }

  currentList = [];
});
