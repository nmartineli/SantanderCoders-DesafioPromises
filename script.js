const button = document.querySelector('button');
const showResults = document.querySelector('.results');

const getRandomNumber = () => {
  let number = Math.floor(Math.random() * 10);
  return number;
};

const createNewArray = () => {
  let array = new Array(getRandomNumber());
  for (let i = 0; i < array.length; i++) {
    array[i] = getRandomNumber();
  }
  console.log(array);
  return array;
};

const createList = async () => {
  const promise1 = await new Promise((resolve) =>
    setTimeout(resolve, getRandomNumber() * 1000, createNewArray())
  );
  const promise2 = await new Promise((resolve) =>
    setTimeout(resolve, getRandomNumber() * 1000, createNewArray())
  );
  const promise3 = await new Promise((resolve) =>
    setTimeout(resolve, getRandomNumber() * 1000, createNewArray())
  );

  Promise.allSettled([promise1, promise2, promise3]).then((results) => {
    results.map((result, index) => {
      const li = document.createElement('li');
      li.textContent = `O resultado da lista ${index + 1} é ${result.value.join(
        ', '
      )}`;
      showResults.appendChild(li);
    });
  });
};

const promise = new Promise(function (resolve, reject) {});

button.addEventListener('click', createList);
