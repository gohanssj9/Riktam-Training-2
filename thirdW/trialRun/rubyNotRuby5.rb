# Symbols inside of ruby are strings that cannot be changed and no access to string methods

:derek
puts :derek
puts :derek.to_s
puts :derek.class
puts :derek.object_id

#:name, :weight are also Symbols

#Now Arrays
array_1 = Array.new
array_2 = Array.new(5)
array_3 = Array.new(5, "empty")
array_4 = [1, "two", 3, 5.5]

puts array_4[2,2].join(", ") # starts at index 2, then concentates 2 elements i.e index 2 and 3
puts array_4.values_at(0,1,3).join(", ")
array_4.unshift(22)
puts array_4

array_4.shift()
puts array_4

array_4.push(100, 200)
puts array_4

array_4.pop
puts array_4

array_4.concat([100, 20, 30])
puts array_4.size().to_s

puts array_4.include?(100).to_s
puts array_4.count(100).to_s
puts array_4.empty?.to_s

p array_4
array_4.each do |value|
	puts value
end

