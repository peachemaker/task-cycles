/*
  В функцию rangeSum() приходят два целых неотрицательных числа.
  Используя цикл for, просуммируйте все четные числа в диапазоне между этими значениями (включительно)
  и верните итоговый результат.
*/
export function rangeSum(start, end) {
    let sum = 0;
    for (start; start <= end; start += 1) {
        if (start % 2 == 0) {
            sum += start;
        }
    }
    return sum;
}

/*
  В функцию iterationCount() приходит неотрицательное число.
  Используя цикл while, выполняйте деление этого числа на два до тех пор, пока результат деления больше 0.1
  и верните количество потребовавшихся итераций (т.е. сколько раз пришлось выполнить деление).
*/
export function iterationCount(a) {
    let iter = 1;
    while (a / 2 > 0.1) {
        iter++;
        a = a / 2;
    }
    return iter;
}

/*
  В функцию symbolsReplace() приходит строка текста.
  Используя цикл do while, замените в тексте каждый третий символ на символ нижнего подчеркивания
  и верните итоговый результат.
*/
export function symbolsReplace(message) {
    let newMessage = '';
    let i = 0;

    do {
        if ((i + 1) % 3 === 0) {
            newMessage += '_';
        } else {
            newMessage += message[i];
        }
        index++;
    } while (i < message.length);

    return newMessage;
}
