# Fibonacci numbers
# for the Python version 3.6

print ("Programm of output Fibonacci numbers...")

# Output method of numbers by table
print ("Table output")

# Number request from user
key_in = input ("Numbers is: ")
counter = int(key_in)
# Calculate and output
print ("Numbers: ", counter)
a = 0
b = 1
for x in range(counter):
    print (a)
    a = a + b
    print (b)
    b = b + a

# For exit by any key from console (Windows) 
input ("Press any key to continue...")
