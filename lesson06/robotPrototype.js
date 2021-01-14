function Robot(){
	this.name = 'Robot';
	this.occupation = 'I am just working';
}

Robot.prototype.work = function(){
	console.log("I am " + this.name + ' - ' + this.occupation);
}

function CoffeeRobot(){
	this.name = "Coffee Robot";
	this.occupation = "I am making coffee";
}
CoffeeRobot.prototype = Object.create(Robot.prototype);
CoffeeRobot.prototype.constructor = CoffeeRobot;

function DancerRobot(){
	this.name = "Robot Dancer";
	this.occupation = "I am just dancing";
}
DancerRobot.prototype = Object.create(Robot.prototype);
DancerRobot.prototype.constructor = DancerRobot;

function CookerRobot(){
	this.name = "Robot Cooker";
	this.occupation = "I am cooking";
}
CookerRobot.prototype = Object.create(Robot.prototype);
CookerRobot.prototype.constructor = CookerRobot;

var robot = new Robot();
robot.work();
var coffeeRobot= new CoffeeRobot();
coffeeRobot.work();
var dancerRobot= new DancerRobot();
dancerRobot.work();
var cookerRobot= new CookerRobot();
cookerRobot.work();

console.log('')

var myRobots = [robot,coffeeRobot,dancerRobot,cookerRobot];
for (var i = 0; i < myRobots.length; i++) {
	myRobots[i].work();
}
