#Comment

# print "Enter a Value:"
# first_num = gets.to_i # Takes String input, converts it to integer output
# print first_num

# print "Enter another Value:"
# second_num = gets.to_i
# print second_num

# puts first_num.to_s + " + " + second_num.to_s + " = " + 
# (first_num + second_num).to_s #to_s to string, 

# puts 1.class
# puts 1.234.class
# puts "A String".class

# To write a constant
# A_Constant = 3.14
# A_Constant = 1.6
# puts A_Constant

#Handling files
# write_handler = File.new("testFile.txt", "w")
# write_handler.puts("Random Text").to_s
# write_handler.close

# read_handler = File.read("testFile.txt")
# puts "Data from File: " + read_handler

#Load other ruby files
# load "rubyNotRuby2.rb"

=begin
This consists of Multiline comments
=end
=begin
age = 12
if (age >=5) && (age <=6)
	puts "Hi"
elsif (age>=7)
	puts "Hello"
else puts "Dimension"
end

unless age > 4
	puts "No"
else puts "Yes"
end

puts "Hey" if age < 12


print "Enter a number:"
number = gets.chomp.to_i
case number
when 1
	puts "Hi, 1"
	exit
when 2
	puts "Hello, 2"
	exit
else 
	puts "Evadra nuvvvu"
end
=end

#loops
=begin
i = 1
loop do
	i += 1
	next unless (i % 2) == 0
	puts i

	break if i >= 10
end

y = 1
while y <= 10
	y += 1
	next unless (y % 2) == 0
	puts y
#	break if y >= 10
end


a = 1
until a >= 10
	a += 1
	next unless (a % 2)
	puts a
end


numbers = [1,2,3,4,5]
for number in numbers
	print "#{number}, "
end


items = ["1", "2", "3", "4"]
items.each do |item|
	puts "Get a number #{item}"
end

#Functions
def add_nums(num1, num2)
	return num1.to_i + num2.to_i
end

puts add_nums(3,4)

x = 1
def change_x(x)
	x = 4
end

change_x(x)
puts "x = #{x}"

#Exceptions
first_num = gets.to_i
begin
	answer = first_num / 0
rescue
	puts "Can't divide by zero"
	exit
end

age = 12
def check_age (age)
	raise ArgumentError, "Enter Positive Number" unless age > 0
end

begin
	check_age (age)
rescue ArgumentError
	puts "that is impossible"
end
=end

# multiline_string = "\
# A long String write_handler \
# and also some Random Shit \
# "

#  puts multiline_string
=begin
full_name = "Sriteja Ayyagari"
puts full_name.upcase
puts full_name.downcase
puts full_name.swapcase

full_name = "      " + full_name + "     " + full_name + "      "
full_name = full_name.lstrip
puts full_name + "\n"

full_name = full_name.rstrip
puts full_name + "\n"

full_name = full_name.strip
puts full_name + "\n"

puts full_name.rjust(20, '/')
puts full_name.ljust(20, '/')
puts full_name.center(20, '/')
=end

# puts "4shared".index('4')