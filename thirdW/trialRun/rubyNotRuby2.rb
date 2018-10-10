class Animal
	def initialize
		puts "Creating a New Animal"
	end

	def set_name (new_name)
		@name = new_name
	end

	def get_name
		@name
	end
	def name
		@name
	end

	def name=(new_name)
		if new_name.is_a?(Numeric)
			puts "Name can't be a Number"
	 	else
	 		@name = new_name
	 	end
	end
end

cat = Animal.new
cat.set_name("Meowth")
puts cat.get_name
puts cat.name

cat.name = "Racoon"
puts cat.name

class Dog
	# attr_reader :name, :height, :writer #getter functions
	# attr_writer :name, :height, :writer #setter functions
	attr_accessor :name, :height, :weight #set both getter and setter functions

	def bark
		return "Normal bark"
	end
end

rover = Dog.new
rover.name = "Rover"
puts rover.name

class GermanShepard < Dog
	def bark
		return "Loud Bark"
	end
end

max = GermanShepard.new
max.name = "Max"
printf "%s goes %s \n", max.name, max.bark