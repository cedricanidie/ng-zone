document.addEventListener('DOMContentLoaded', () => {

  // const zone = new Zone();


  function greeting() {
    getHello()
  }

  function getHello() {
    console.log('Hello ...');
    setTimeout(() => {
      getName();
    }, 2000)
  }

  function getName() {
    throw new Error('FAiled');
    console.log('Max 😎');
  }


  // Button Action
  const runBtn = document.querySelector('button#run');
  runBtn.addEventListener('click', () => {
    // zone.run(() => {
      greeting();
    // })
  })
});
