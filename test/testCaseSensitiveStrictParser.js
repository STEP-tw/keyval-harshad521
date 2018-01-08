const src=function(filePath){return "../src/"+filePath};

const assert=require('chai').assert;
const Parsed=require(src('parsed.js'));
const StrictParser=require(src('index.js')).StrictParser;

describe("strict parser that is case insensitive",function(){
  it("should parse when specified key are in lower case and actual is not",function(){
    let kvParser=new StrictParser(["name"],false);
    // false indicates that case sensitive is false. By default it is true
    let expected=new Parsed();
    expected["NAME"]="jayanth";
    let parsed=kvParser.parse("NAME=jayanth");
    assert.deepEqual(parsed,expected);
  });
  it("should parse when specified key are in both lower case as well as upper case and actual is not",function(){
    let kvParser=new StrictParser(["name"],false);
    let expected=new Parsed();
    expected["Name"]="jayanth";
    let parsed=kvParser.parse("Name=jayanth");
    assert.deepEqual(parsed,expected);
  });
  it("should parse when specified key combined of alphabets and numbers are in both case, but actual is in lower case",function(){
    let kvParser=new StrictParser(["name123"],false);
    let expected=new Parsed();
    expected["Name123"]="jayanth";
    let parsed=kvParser.parse("Name123=jayanth");
    assert.deepEqual(parsed,expected);
  });
  it("should parse when specified key and actual key is combined of alphabets and number",function(){
    let kvParser=new StrictParser(["name123"],false);
    let expected=new Parsed();
    expected["Name123"]="jayanth";
    let parsed=kvParser.parse("Name123=jayanth");
    assert.deepEqual(parsed,expected);
  });
  it("should parse when specified key has both alphabets, number and symbol in it and actual alphabets are in lower case",function(){
    let kvParser=new StrictParser(["name_123"],false);
    let expected=new Parsed();
    expected["Name_123"]="jayanth";
    let parsed=kvParser.parse("Name_123=jayanth");
    assert.deepEqual(parsed,expected);
  });
});




describe("strict parser that is case sensitive",function(){
  it("should throw error when specified keys are in lower case and actual is not",function(){
    let kvParser=new StrictParser(["name"],true);
    // true indicates that parser is case sensitive
    assert.throws(()=>{
      kvParser.parse("NAME=jayanth");
    })
  });
});
