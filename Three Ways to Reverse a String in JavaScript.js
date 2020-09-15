// Решение №1: Переворот строки с помощью встроенных методов
    function reverseString(str) {
        // Шаг 1. Используем метод split(), чтобы получить массив из строки
        var splitString = str.split(""); 

        // Шаг 2. Используем метод reverse(), чтобы перевернуть элементы в полученном массиве
        var reverseArray = splitString.reverse();

        // Шаг 3. Используем метод join(), чтобы соеденить элементы массива
        var joinArray = reverseArray.join("");

        // Шаг 4. Возвращаем перевернутую строку
        return joinArray; 
    }

// Решение №2: Переворот строки с помощью цикла For
    function reverseString2(str) {
        // Шаг 1. Создаем строковую переменную в которую будет помещен результат
        var newString = "";

        // Шаг 2. создаем цикл FOR
        for (var i = str.length - 1; i >= 0; i--) {
            newString += str[i]; 
        }
        // Шаг 3. Возвращаем перевернутую строку
        return newString; 
    }

// Решение №3. Переворот строки с помощью рекурсии
    function reverseString(str) {
        if (str === "") // Условие выхода из рекурсии
        return "";
        
        else
        return reverseString(str.substr(1)) + str.charAt(0);
    /* 
        Первая часть рекурсивного метода
        Вам нужно помнить, что будет не один вызов функции, а несколько вложенных вызовов
        Each call: str === "?"        	                  reverseString(str.subst(1))     + str.charAt(0)
        1st call – reverseString("Hello")   will return   reverseString("ello")           + "h"
        2nd call – reverseString("ello")    will return   reverseString("llo")            + "e"
        3rd call – reverseString("llo")     will return   reverseString("lo")             + "l"
        4th call – reverseString("lo")      will return   reverseString("o")              + "l"
        5th call – reverseString("o")       will return   reverseString("")               + "o"

        Вторая часть рекурсивного метода
        Метод попадает в условие if и самый последний вложенный вызов возвращает результат
        5th call will return reverseString("") + "o" = "o"
        4th call will return reverseString("o") + "l" = "o" + "l"
        3rd call will return reverseString("lo") + "l" = "o" + "l" + "l"
        2nd call will return reverserString("llo") + "e" = "o" + "l" + "l" + "e"
        1st call will return reverserString("ello") + "h" = "o" + "l" + "l" + "e" + "h" 
    */
    }


// Код без комментариев 

// Решение №1: Переворот строки с помощью встроенных методов
function reverseString(str) {
    var splitString = str.split(""); 
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray; 
}

// Решение №2: Переворот строки с помощью цикла For
function reverseString2(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i]; 
    }
    return newString; 
}

// Решение №3. Переворот строки с помощью рекурсии
function reverseString(str) {
    if (str === "") 
    return "";
    
    else
    return reverseString(str.substr(1)) + str.charAt(0);
}

// Метод split() принимает на вход строку и преобразует в массив, разбивая ее по разделителю.
// Метод reverse() переворачивает элементы массива. Первый элемент становится последним, последний — первым.
// Метод join() соединяет все элементы массива в строку.

// Метод substr() возвращает указанное количество символов из строки, начиная с указанной позиции. 
// Если не указывать количество символов — вернет все символы, начиная с указанной позиции

// Метод charAt() возвращает указанный символ из строки