var a = prompt("Please put in your 'a' value:", "");
var b = prompt("Please put in your 'b' value:", "");
var c = prompt("Please put in your 'c' value:", "");
var abcForumlaPos = (-b + Math.sqrt(((b * b) - (4 * a * c)))) / (2 * a);
var abcForumlaNeg = (-b - Math.sqrt(((b * b) - (4 * a * c)))) / (2 * a);
var D = Math.sqrt((b * b) - (4 * a * c));

document.write("a = " + a + ", b = " + b + ", c = " + c + ", NaN = Not a Number <br />");
document.write("The quadratic/abc formula is: (-b ± √b² - 4 * a * c) ÷ 2 * a <br />");
document.write("Step 1: Plug in all the values => (" + -b + " ± √" + b + "²" +  " - 4 * " + a + " * " + c +") ÷ 2 * " + a + "<br />");
document.write("Step 2: Simplify the equation => (" + -b + " ± √" + b*b + " - " + 4*a*c + ") ÷ " + 2*a + "<br />");
document.write("Step 2.5: Simplify the equation more => (" + -b + " ± " + D + ") ÷ " + 2*a + "<br />");
document.write("Step 3: Solve for both x-intercepts => <br /> x₁ = (" + -b + " + " + D + ") ÷ " + 2*a + "<br />" + "x₂ = (" + -b + " - " + D + ") ÷ " + 2*a + "<br />");

if (abcForumlaPos == abcForumlaNeg) {
    document.write("Your equation only has one solution, which is " + abcForumlaPos + ".");
}
  else if (isNaN(abcForumlaPos) && isNaN(abcForumlaNeg)) {
    document.write("Your equation has no solutions.");
} else {
    document.write("Your answer for x₁ = " + abcForumlaPos + " and for x₂ = " + abcForumlaNeg + ".");
}