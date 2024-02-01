function ageSort(users) {
  // Your code here
  function ages(a, b) {
    if(a.age > b.age) {
      return 1
    } else {
      return -1
    }
  }

  users.sort(ages);

  return users;
}

function oddEvenSort(arr) {
  // Your code here
  function oddEven(a, b) {
    if(a % 2 === 0 && b % 2 !==0) {
      return 1;
    } else if(a % 2 !== 0 && b % 2 ===0) {
      return -1;
    } else {
      if(a > b) {
        return 1;
      } else {
        return -1;
      }
    }
  }

  arr.sort(oddEven);

  return arr;
}

function validAnagrams(s, t) {
  // Your code here
  s = s.split('');
  t = t.split('');

  s.sort();
  t.sort();

  s = s.join('');
  t = t.join('');

  return s === t;
}

function reverseBaseSort(arr) {
  // Your code here
  function reverseBase(a, b) {
    const cadenaA = Math.abs(a).toString();
    const cadenaB = Math.abs(b).toString();

    if(cadenaA.length > cadenaB.length) {
      return -1;
    } else if(cadenaA.length < cadenaB.length) {
      return 1;
    } else {
      if(a > b) {
        return 1;
      } else {
        return -1;
      }
    }
  }

  arr.sort(reverseBase);

  return arr;
}

function frequencySort(arr) {
  // Your code here
  const frecuencyMap = {};

  arr.forEach(a => {
    frecuencyMap[a] = (frecuencyMap[a] || 0) + 1;
  });

  arr.sort((a, b) => frecuencyMap[a] - frecuencyMap[b] || b - a);

  return arr;
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
