=begin
#Hashes
num_hash = {"PI" => 3.14, "Golden" => 1.618}
puts num_hash["PI"]

superheroes = Hash["Clark Kent", "Superman", "Bruce Wayne", "Batman"]
puts superheroes["Bruce Wayne"]

superheroes["Barry Allen"] = "Flash"
samp_hash = Hash.new("No Such Key")
puts samp_hash["Dog"]

# a.update(b) -> destructive merge i.e removes all duplicates
# a.merge(b) -> constructive merge i.e keeps even duplicates i.e even if they match 

superheroes.each do |key, value|
	puts key.to_s + " : " + value
end

superheroes.delete("Barry Allen")
puts superheroes.size.to_s
=end

#Enumerables
#A class that includes enumerables gets the collection capabilites
class Menu
	include Enumerable

	def each
		yield "pizza"
		yield "spaghetti"
		yield "salad"
		yield "water"
		yield "bread"
	end
end

menu_options = Menu.new
menu_options.each do |item|
	puts "Would you like Something ? #{item}"
end

p menu_options.find{|item| item = "pizza"}
p menu_options.select{|item| item.size <= 5}
# similarly reject first take drop min max sort reverse_each

#File object
file = File.new("authors.text","w")
file.puts "Me"
file.puts "Again Me"
file.puts "Why Me ?"
file.close

puts File.read("authors.txt")

file = File.new("authors.txt", "a")
file.puts "Me Bwahaha"
file.close

puts File.read("authors.txt")
