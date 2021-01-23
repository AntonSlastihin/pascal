
function pascalsTriangle(n) {
    let arr = [[1]];
    for (let i = 0; i < n; i++) {
        let last = arr[arr.length - 1];
        let combo = [];
        for (let i = -1; i < last.length; i++) {
            let sum = (last[i] || 0) + (last[i + 1] || 0);
            combo.push(sum);
        }
        arr.push(combo);
    }
    return arr;
}

const form = document.getElementsByTagName('form')[0];
let result = document.getElementById('result');
form.onsubmit = function (e){
    e.preventDefault();
    result.innerHTML = '';
    let value = this.getElementsByTagName('input')[0].value;
    if (value < 100){
        let massive = pascalsTriangle(value);
        for (let i = 0; i < massive.length; i++){
            result.innerText += massive[i].join('  ') + "\n";
        }
    } else {
        result.innerText = "значение должно быть меньше 100";
    }
}
