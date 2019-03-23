# Min math Python programm
# for the Python version 3.6
from math import *

print ("Min math Python programm...")

# Let's inicialise Math functions and others

# SQRT function
def my_sqrt(sqrt_num_in):
    print("Square root is: ", sqrt(sqrt_num_in))

# Powering function
def my_powering(pow_num_in, pow_index_in):
    print("Power is: ", pow(pow_num_in, pow_index_in))

# List of Math functions
def my_math_list():
    print ("What to Do?...")
    print ("1 - Calculate SQRT function")
    print ("2 - Calculate Power of number")
    print ("3 - Nothing..")

# Main programm content

key_in = input ("Enter any number: ")
num = int(key_in)
my_math_list() # Ask user to make a choose
my_choose_in = input("Choose one of process: ")
my_choose = int(my_choose_in) # Because 'input' is the "String"

if my_choose == 1:
    my_sqrt(num)
elif my_choose == 2:   
    pow_in = input("Enter index of power:")
    pow_num = int(pow_in)
    my_powering(num, pow_num)
elif my_choose == 3:
    print("Ok")

# For exit by any key from console (Windows)
input("Press any key to continue...")