# Таблица умножения
# для программы Python версии 3.6

print ("Программа вывода таблицы умножения")

# Метод вывода чисел в столбик
print ("Вывод в столбик")
a = 0
b = 1
for x in range(10):
  a = a + 1
  b = 0
  print (" ")
  for y in range(10):
    b = b + 1
    c= a * b
    print (a, " x ", b, " = ", c)

# Выход из консоли (Windows) по любой клавише  
input ("Press any key to continue...")
