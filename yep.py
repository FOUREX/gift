string_1 = "Z 0ч3/-/b sk`/ч1/_@ z@ 70601"
string_1.lower()

yep = {
    "z ": "я",
    "z": "з",
    "0": "о",
    "3": "е",
    "/-/": "н",
    "b": "ь",
    "s": "с",
    "k": "к",
    "`/": "у",
    "1": "и",
    "7": "т",
    "6": "б",
    "@": "a",
    "/_": "л"
}


if __name__ == '__main__':
    for i in yep:
        string_1.replace(i, yep[i])

    print(string_1)
