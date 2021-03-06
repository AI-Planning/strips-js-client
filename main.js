var strips = require('strips');
var PEG = require('pegjs');

// Takes in a grammar and string code, returns the parsed result
StripsManager.loadCodeString = function(grammar, code, callback) {
    // Applies a PEG.js grammar from a string and applies it against a PDDL code string, returns the parsed JSON result
    var parser = PEG.generate(grammar);
    if(callback) {
        callback(parser.parse(code));
    }
}

// Loads in a string domain, parses it, and returns the JSON
StripsManager.loadDomainString = function(domain, callback) {
    StripsManager.loadCodeString(domainGrammar, domain, function(result) {
        callback(result);
    });
}

// Loads in a string problem, parses it, and returns the JSON
StripsManager.loadProblemString = function(problem, callback) {
    StripsManager.loadCodeString(problemGrammar, problem, function(problem) {
        StripsManager.initializeProblem(problem, function(problem) {
            callback(problem);
        });
    });
}

// Loads a problem and domain string, returns the parsed JSON 
StripsManager.loadFromString = function(domain, problem, callback) {
    StripsManager.loadProblemString(problem, function(problemResult) {
        StripsManager.loadDomainString(domain, function(domainResult) {
            // Give a copy of the possible param values to the domain
            domainResult.values = problemResult.values;

            // Load list of applicable combinations of parameter values for each action.
            for (var i in domainResult.actions) {
                // Get all applicable parameter combinations for the current action.
                domainResult.actions[i].parameterCombinations = StripsManager.parameterCombinations(domainResult, domainResult.actions[i]);
            }

            if (callback) {
                callback(domainResult, problemResult);
            }
        });
    });
}
