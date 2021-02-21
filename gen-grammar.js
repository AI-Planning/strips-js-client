var strips = require('strips');
var fs = require('fs');
var domain_grammar = fs.readFileSync(strips.grammarDomainPath, 'utf8');
var problem_grammar = fs.readFileSync(strips.grammarProblemPath, 'utf8');
console.log("\nvar domainGrammar = " + JSON.stringify(domain_grammar) + ";\n");
console.log("var problemGrammar = " + JSON.stringify(problem_grammar) + ";\n");