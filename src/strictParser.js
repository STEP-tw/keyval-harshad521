const Parser=require("./keyValueParser.js");
const strictParseInfoCreator=require("./parseInfoCreator.js").strict;

var StrictParser=function(listOfKeys,caseSensitive=true){
  Parser.call(this);
  let sanitisedListOfKeys=listOfKeys||[];
  let caseSensitiveFlag = caseSensitive ;
  this.parseInfoCreator=strictParseInfoCreator(sanitisedListOfKeys,caseSensitiveFlag);
}

StrictParser.prototype=Object.create(Parser.prototype);
module.exports=StrictParser;
