let isDone = false;

function cont() {
  isDone = false;
  onLoad();
}

function onLoad() {

  let firstBtn = document.querySelector('.btn');
  if (!isDone) {
    firstBtn.style.backgroundColor = '#a09f9f'
  } else {
    firstBtn.style.backgroundColor = '#FFA500'
  }
}

// onLoad()


function saveGroup() {
  let firstInput = document.querySelector('.firstInput');
  let secondInput = document.querySelector('.secondInput');


}


function forward() {

  const params = (new URL(document.location)).searchParams;
  const top1 = params.get('top1');
  const top2 = params.get('top2');

  sessionStorage.setItem('top1', top1)
  sessionStorage.setItem('top2', top2)

}

function setGroupName() {
  let top1 = sessionStorage.getItem("top1");
  let top2 = sessionStorage.getItem("top2");

  //top1Sum

  let score1 = parseInt(document.querySelector('.top1Sum').textContent);
  let score2 = parseInt(document.querySelector('.top2Sum').textContent);
  let totalScore = parseInt(sessionStorage.getItem('sozder'));
  //TODO:
  if(score1 >= totalScore) {
    //winner1 redirect html
  } else if(score2 >= totalScore) {
    //winner2 redirect html
  }


  document.querySelector('.top1Name').innerHTML = top1;
  document.querySelector('.top2Name').innerHTML = top2;
  document.querySelector('.top1Sum').innerHTML = sessionStorage.getItem('score1');
  document.querySelector('.top2Sum').innerHTML = sessionStorage.getItem('score2');
}

function currentGroup() {
  let flip = sessionStorage.getItem('flip');
  alert(flip)
  if(flip === 'group1') {
    document.querySelector('.group').innerHTML = sessionStorage.getItem("top1");
    sessionStorage.setItem('flip', 'group2');
  } else {
    document.querySelector('.group').innerHTML = sessionStorage.getItem("top2");
    sessionStorage.setItem('flip', 'group1');
  }

}