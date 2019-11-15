# Ввод пользовательских данных в консоль
# для программы Python версии 3.6

# Ввод данных
user_first_name = input("Введите имя: ")
user_last_name = input("Введите фамилию: ")
user_age = input("Введите возраст: ")
user_job = input("Введите профессиональную должность: ")
user_contact_phone = input("Введите контактный телефон: ")
user_contact_email = input("Введите электронный адрес: ")

# Вывод данных
print ("######") # Разделитель
print ("Имя пользователя:", user_first_name, user_last_name)
print ("Возраст:", user_age)
print ("Работает на должности:", user_job)
print ("Контактный телефон:", user_contact_phone)
print ("Адрес электронной почты:", user_contact_email)

# Выход из консоли (Windows) по любой клавише  
input ("Press any key to continue...")