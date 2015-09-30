define(["Translation"], function(Translation){

  // build a new translation object to use in the tests
  var translation = new Translation();

  describe("English-To-Zombie Translation", function(){

    describe("Rule 1: 'a' & 'A'", function(){
      it("should translate 'a' to 'hra'", function(){
        var engText = "a";
        var zomTrans = translation.translateEngToZom(engText);
        expect(zomTrans).toBe("hra");
      });

      it("should not translate 'Apple' to 'Hrapplrr'", function(){
        var engText = "Apple";
        var zomTrans = translation.translateEngToZom(engText);
        expect(zomTrans).not.toBe("Hrapplrr");
      });

      it("should translate 'aAAa' to 'hrahrahrahra', function", function(){
        var engText = "aAAa";
        var zomTrans = translation.translateEngToZom(engText);
        expect(zomTrans).toEqual("hrahrahrahra");
      });
    });

    describe("Rule 2: 'e' & 'E'", function(){
      it("should not translate 'EE' to 'RRRR'", function(){
        var engText = "EE";
        var zomTrans = translation.translateEngToZom(engText);
        expect(zomTrans).not.toEqual("RRRR");
      });

      it("should translate 'e' to 'rr' 'elk'", function(){
        var engText = "elk";
        var zomTrans = translation.translateEngToZom(engText);
        expect(zomTrans).toMatch(/rr/);
      });

      it("should not leave a letter 'e' in translating 'everest'", function(){
        var engText = "everest";
        var zomTrans = translation.translateEngToZom(engText);
        expect(zomTrans).not.toMatch(/^e/);
      });
    });

    describe("Rule 3: 'i' & 'I'", function(){
      it("should be able to translate 'i'", function(){
        var engText = "i";
        var zomTrans = translation.translateEngToZom(engText);
        expect(zomTrans).toBeDefined();
      });

      it("should translate 'ii' to 'rrRrrrRr'", function(){
        var engText = "ii";
        var zomTrans = translation.translateEngToZom(engText);
        var undefinedVar;
        if (zomTrans !== "rrRrrrRr") {
          undefinedVar = "defined";
        }
        expect(undefinedVar).not.toBeDefined();
      });

      it("should translate 'II' to 'rrRrrrRr'", function(){
        var engText = "II";
        var zomTrans = translation.translateEngToZom(engText);
        var undefinedVar;
        if (zomTrans !== "rrRrrrRr") {
          undefinedVar = "defined";
        }
        expect(undefinedVar).toBeUndefined();
      });
    });

    describe("Rule 4: 'o' & 'O'", function(){
      it("should be able to translate 'O o O'", function(){
        var engText = "O o O";
        var zomTrans = translation.translateEngToZom(engText);
        expect(zomTrans).not.toBeUndefined();
      });

      it("should translate 'oops' to 'rrrRrrrrRrps'", function(){
        var engText = "oops";
        var zomTrans = translation.translateEngToZom(engText);
        var nullVar;
        if (zomTrans === "rrrRrrrrRrps") {
          nullVar = null;
        }
        expect(nullVar).toBeNull();
      });

      it("should not translate 'OOPS' to 'RRRRRRRRRRps'", function(){
        var engText = "OOPS";
        var zomTrans = translation.translateEngToZom(engText);
        var nullVar;
        if (zomTrans === "RRRRRRRRRRps") {
          nullVar = null;
        }
        expect(nullVar).not.toBeNull();
      });
    });

    describe("Rule 5: 'u' & 'U'", function(){
      it("should be able to translate 'Uu'", function(){
        var engText = "Uu";
        var zomTrans = translation.translateEngToZom(engText);
        expect(zomTrans).toBeTruthy();
      });

      it("should not translate 'Ubuntu' to 'RrrrRrbrrrrRrntrrrrRr'", function(){
        var engText = "Ubuntu";
        var zomTrans = translation.translateEngToZom(engText);
        var truthVar = true;
        if (zomTrans !== "RrrrRrbrrrrRrntrrrrRr") {
          truthVar = false;
        }
        expect(truthVar).not.toBeTruthy();
      });

      it("should translate 'Ubuntu' to 'rrrrRrbrrrrRrntrrrrRr'", function(){
        var engText = "Ubuntu";
        var zomTrans = translation.translateEngToZom(engText);
        var falseVar = true;
        if (zomTrans === "rrrrRrbrrrrRrntrrrrRr") {
          falseVar = false;
        }
        expect(falseVar).toBeFalsy();
      });
    });

    describe("Rule 6: 'r' at word end", function(){
      it("should translate 'r' to 'rh'", function(){
        var engText = "r";
        var zomTrans = translation.translateEngToZom(engText);
        var falseVar = false;
        if (zomTrans === "rh") {
          falseVar = true;
        }
        expect(falseVar).not.toBeFalsy();
      });

      it("should translate 'terror' to 'trrRRRRrrrRrrh'", function(){
        var engText = "terror";
        var zomTrans = translation.translateEngToZom(engText);
        var arrayVar = [zomTrans];
        expect(arrayVar).toContain("trrRRRRrrrRrrh");
      });

      it("should not translate 'rr' to 'rhrh'", function(){
        var engText = "rr";
        var zomTrans = translation.translateEngToZom(engText);
        var arrayVar = [zomTrans];
        expect(arrayVar).not.toContain("rhrh");
      });
    });

    describe("Rule 7: 'r' & 'R'", function(){
      it("should translate 'R' to 'RR'", function(){
        var engText = "R";
        var zomTrans = translation.translateEngToZom(engText);
        var lessVar = 2;
        if (zomTrans === "RR") {
          lessVar = 0;
        }
        expect(lessVar).toBeLessThan(1);
      });

      it("should not translate 'r' to 'RR'", function(){
        var engText = "r";
        var zomTrans = translation.translateEngToZom(engText);
        var lessVar = 2;
        if (zomTrans !== "RR") {
          lessVar = 0;
        }
        expect(lessVar).toBeLessThan(1);
      });

      it("should translate 'roller' to 'RRrrrRrllrrrh'", function(){
        var engText = "roller";
        var zomTrans = translation.translateEngToZom(engText);
        var greaterVar = 0;
        if (zomTrans === "RRrrrRrllrrrh") {
          greaterVar = 2;
        }
        expect(greaterVar).toBeGreaterThan(1);
      });
    });

    describe("Rule 8: 'g' & 'G'", function(){
      it("should not translate 'gGg' to 'gRGhgGRGhggRGhg'", function(){
        var engText = "gGg";
        var zomTrans = translation.translateEngToZom(engText);
        var greaterVar = 2;
        if (zomTrans !== "gRGhgGRGhggRGhg") {
          greaterVar = 0;
        }
        expect(greaterVar).not.toBeGreaterThan(1);
      });

      it("should translate 'gG' to 'gRGhggRGhg'", function(){
        var engText = "gG";
        var zomTrans = translation.translateEngToZom(engText);
        var closeVar = 1;
        if (zomTrans === "gRGhggRGhg") {
          closeVar = 1.1;
        }
        expect(closeVar).toBeCloseTo(1.12, 1);
      });

      it("should translate 'gaggle' to 'gRGhghragRGhggRGhglrr'", function(){
        var engText = "gaggle";
        var zomTrans = translation.translateEngToZom(engText);
        var closeVar = 1;
        if (zomTrans !== "gRGhghragRGhggRGhglrr") {
          closeVar = 1.1;
        }
        expect(closeVar).not.toBeCloseTo(1.12, 1);
      });
    });

    describe("Rule 9: 'z' & 'Z'", function(){
      it("should translate 'z' to 'zRm'", function(){
        var engText = "z";
        var zomTrans = translation.translateEngToZom(engText);
        var throwVar;
        if (zomTrans === "zRm") {
          throwVar = function () { return undefinedVar + "text"; };
        }
        expect(throwVar).toThrow();
      });

      it("should translate 'ZZ' to 'zRmzRm'", function(){
        var engText = "ZZ";
        var zomTrans = translation.translateEngToZom(engText);
        var throwVar;
        if (zomTrans === "zRmzRm") {
          throwVar = function () { return "not throwing"; };
        }
        expect(throwVar).not.toThrow();
      });

      it("should translate 'ZOMBIES' to 'zRmrrrRrMBrrRrrrS'", function(){
        var engText = "ZOMBIES";
        var zomTrans = translation.translateEngToZom(engText);
        var typeVar;
        if (zomTrans === "zRmrrrRrMBrrRrrrS") {
          typeVar = function () {
            throw new TypeError("zombie madness");
          };
        }
        expect(typeVar).toThrowError("zombie madness");
      });
    });

    describe("Rule 10: the 'start of sentences' capitalized", function(){
      it("should translate 'hi. hey' to 'hrrRr. Hrry'", function(){
        var engText = "hi. hey";
        var zomTrans = translation.translateEngToZom(engText);
        var typeVar = function () {
          throw new TypeError("zombie madness");
        };
        if (zomTrans === "hrrRr. Hrry") {
          typeVar = function () { return "no error"};
        }
        expect(typeVar).not.toThrowError("zombie madness");
      });

      it("should translate 'r! e' to 'rh! Rr'", function(){
        var engText = "r! e";
        var zomTrans = translation.translateEngToZom(engText);
        var nanVar = 1;
        if (zomTrans === "rh! Rr") {
          nanVar = NaN;
        }
        expect(nanVar).toBeNaN();
      });

      it("should translate '??? Right' to '??? RRrrRrgRGhght'", function(){
        var engText = "??? Right";
        var zomTrans = translation.translateEngToZom(engText);
        var nanVar = NaN;
        if (zomTrans === "??? RRrrRrgRGhght") {
          nanVar = 1;
        }
        expect(nanVar).not.toBeNaN();
      });
    });

    describe("All rules", function(){
      it("should translate 'Greetings. you and I must test all zombie to english rules or else' to 'gRGhgRRrrrrtrrRrngRGhgs. YrrrRrrrrrRr hrand rrRr mrrrrRrst trrst hrall zRmrrrRrmbrrRrrr trrrRr rrngRGhglrrRrsh RRrrrrRrlrrs rrrRrrh rrlsrr'", function(){
        var engText = "Greetings. you and I must test all zombie to english rules or else";
        var zomTrans = translation.translateEngToZom(engText);
        expect(zomTrans).toBe("gRGhgRRrrrrtrrRrngRGhgs. YrrrRrrrrrRr hrand rrRr mrrrrRrst trrst hrall zRmrrrRrmbrrRrrr trrrRr rrngRGhglrrRrsh RRrrrrRrlrrs rrrRrrh rrlsrr");
      });
    });
  });


  describe("Zombie-To-English Translation", function(){

    describe("Rule 1: 'hra' & 'Hra'", function(){
      it("should translate 'hra' to 'a'", function(){
        var zomText = "hra";
        var engTrans = translation.translateZomToEng(zomText);
        expect(engTrans).toBe("a");
      });

      it("should not translate 'Hrapplrr' to 'Apple'", function(){
        var zomText = "Hrapplrr";
        var engTrans = translation.translateZomToEng(zomText);
        expect(engTrans).not.toBe("Apple");
      });

      it("should translate 'hrahrahrahra' to 'aaaa', function", function(){
        var zomText = "hrahrahrahra";
        var engTrans = translation.translateZomToEng(zomText);
        expect(engTrans).toEqual("aaaa");
      });
    });

    describe("Rule 2: 'rr' & 'Rr'", function(){
      it("should not translate 'RRRR' to 'EE'", function(){
        var zomText = "RRRR";
        var engTrans = translation.translateZomToEng(zomText);
        expect(engTrans).not.toEqual("EE");
      });

      it("should translate 'rr' to 'e' in 'rrlk'", function(){
        var zomText = "rrlk";
        var engTrans = translation.translateZomToEng(zomText);
        expect(engTrans).toMatch(/e/);
      });

      it("should not leave the letters 'rr' in translating 'rrvrrrrrst'", function(){
        var zomText = "rrvrrrrrst";
        var engTrans = translation.translateZomToEng(zomText);
        expect(engTrans).not.toMatch(/^rr/);
      });
    });

    describe("Rule 3: 'rrRr' & 'RrRr'", function(){
      it("should be able to translate 'rrRr'", function(){
        var zomText = "rrRr";
        var engTrans = translation.translateZomToEng(zomText);
        expect(engTrans).toBeDefined();
      });

      it("should translate 'RrRrRrRr' to 'ii'", function(){
        var zomText = "RrRrRrRr";
        var engTrans = translation.translateZomToEng(zomText);
        var undefinedVar;
        if (engTrans !== "ii") {
          undefinedVar = "defined";
        }
        expect(undefinedVar).not.toBeDefined();
      });

      it("should translate 'RrRrrrRrRrRr' to 'iii'", function(){
        var zomText = "RrRrrrRrRrRr";
        var engTrans = translation.translateZomToEng(zomText);
        var undefinedVar;
        if (engTrans !== "iii") {
          undefinedVar = "defined";
        }
        expect(undefinedVar).toBeUndefined();
      });
    });

    describe("Rule 4: 'rrrRr' & 'RrrRr'", function(){
      it("should be able to translate 'RrrRr rrrRr RrrRr'", function(){
        var zomText = "RrrRr rrrRr RrrRr";
        var engTrans = translation.translateZomToEng(zomText);
        expect(engTrans).not.toBeUndefined();
      });

      it("should translate 'rrrRrrrrRrps' to 'oops'", function(){
        var zomText = "rrrRrrrrRrps";
        var engTrans = translation.translateZomToEng(zomText);
        var nullVar;
        if (engTrans === "oops") {
          nullVar = null;
        }
        expect(nullVar).toBeNull();
      });

      it("should not translate 'RRRRRRRRRRps' to 'OOPS'", function(){
        var zomText = "RRRRRRRRRRps";
        var engTrans = translation.translateZomToEng(zomText);
        var nullVar;
        if (engTrans === "OOPS") {
          nullVar = null;
        }
        expect(nullVar).not.toBeNull();
      });
    });

    describe("Rule 5: 'rrrrRr' & 'RrrrRr'", function(){
      it("should be able to translate 'RrrrRrrrrrRr'", function(){
        var zomText = "RrrrRrrrrrRr";
        var engTrans = translation.translateZomToEng(zomText);
        expect(engTrans).toBeTruthy();
      });

      it("should not translate 'RrrrRrbrrrrRrntrrrrRr' to 'Ubuntu'", function(){
        var zomText = "RrrrRrbrrrrRrntrrrrRr";
        var engTrans = translation.translateZomToEng(zomText);
        var truthVar = true;
        if (engTrans !== "Ubuntu") {
          truthVar = false;
        }
        expect(truthVar).not.toBeTruthy();
      });

      it("should translate 'rrrrRrbrrrrRrntrrrrRr' to 'ubuntu'", function(){
        var zomText = "rrrrRrbrrrrRrntrrrrRr";
        var engTrans = translation.translateZomToEng(zomText);
        var falseVar = true;
        if (engTrans === "ubuntu") {
          falseVar = false;
        }
        expect(falseVar).toBeFalsy();
      });
    });

    describe("Rule 6: 'rh' and 'Rh'", function(){
      it("should translate 'rh' to 'r'", function(){
        var zomText = "rh";
        var engTrans = translation.translateZomToEng(zomText);
        var falseVar = false;
        if (engTrans === "r") {
          falseVar = true;
        }
        expect(falseVar).not.toBeFalsy();
      });

      it("should translate 'trrRRRRrrrRrrh' to 'terror'", function(){
        var zomText = "trrRRRRrrrRrrh";
        var engTrans = translation.translateZomToEng(zomText);
        var arrayVar = [engTrans];
        expect(arrayVar).toContain("terror");
      });

      it("should not translate 'rhrh' to 'rr'", function(){
        var zomText = "rr";
        var engTrans = translation.translateZomToEng(zomText);
        var arrayVar = [engTrans];
        expect(arrayVar).not.toContain("rr");
      });
    });

    describe("Rule 7: 'RR'", function(){
      it("should translate 'RR' to 'r'", function(){
        var zomText = "RR";
        var engTrans = translation.translateZomToEng(zomText);
        var lessVar = 2;
        if (engTrans === "r") {
          lessVar = 0;
        }
        expect(lessVar).toBeLessThan(1);
      });

      it("should not translate 'rr' to 'R'", function(){
        var zomText = "rr";
        var engTrans = translation.translateZomToEng(zomText);
        var lessVar = 2;
        if (engTrans !== "R") {
          lessVar = 0;
        }
        expect(lessVar).toBeLessThan(1);
      });

      it("should translate 'RRrrrRrllrrrh' to 'roller'", function(){
        var zomText = "RRrrrRrllrrrh";
        var engTrans = translation.translateZomToEng(zomText);
        var greaterVar = 0;
        if (engTrans === "roller") {
          greaterVar = 2;
        }
        expect(greaterVar).toBeGreaterThan(1);
      });
    });

    describe("Rule 8: 'gRGhg' & 'GRGhg'", function(){
      it("should not translate 'gRGhgGRGhggRGhg' to 'gGg'", function(){
        var zomText = "gRGhgGRGhggRGhg";
        var engTrans = translation.translateZomToEng(zomText);
        var greaterVar = 2;
        if (engTrans !== "gGg") {
          greaterVar = 0;
        }
        expect(greaterVar).not.toBeGreaterThan(1);
      });

      it("should translate 'gRGhggRGhg' to 'gg'", function(){
        var zomText = "gRGhggRGhg";
        var engTrans = translation.translateZomToEng(zomText);
        var closeVar = 1;
        if (engTrans === "gg") {
          closeVar = 1.1;
        }
        expect(closeVar).toBeCloseTo(1.12, 1);
      });

      it("should translate 'gRGhghragRGhggRGhglrr' to 'gRGhghragRGhggRGhglrr'", function(){
        var zomText = "gaggle";
        var engTrans = translation.translateZomToEng(zomText);
        var closeVar = 1;
        if (engTrans !== "gaggle") {
          closeVar = 1.1;
        }
        expect(closeVar).not.toBeCloseTo(1.12, 1);
      });
    });

    describe("Rule 9: 'zRm' & 'ZRm'", function(){
      it("should translate 'zRm' to 'z'", function(){
        var zomText = "zRm";
        var engTrans = translation.translateZomToEng(zomText);
        var throwVar;
        if (engTrans === "z") {
          throwVar = function () { return undefinedVar + "text"; };
        }
        expect(throwVar).toThrow();
      });

      it("should translate 'zRmzRm' to 'zz'", function(){
        var zomText = "zRmzRm";
        var engTrans = translation.translateZomToEng(zomText);
        var throwVar;
        if (engTrans === "zz") {
          throwVar = function () { return "not throwing"; };
        }
        expect(throwVar).not.toThrow();
      });

      it("should translate 'zRmrrrRrMBrrRrrrS' to 'zoMBieS'", function(){
        var zomText = "zRmrrrRrMBrrRrrrS";
        var engTrans = translation.translateZomToEng(zomText);
        var typeVar;
        if (engTrans === "zoMBieS") {
          typeVar = function () {
            throw new TypeError("zombie madness");
          };
        }
        expect(typeVar).toThrowError("zombie madness");
      });
    });

    describe("All rules", function(){
      it("gRGhgRRrrrrtrrRrngRGhgs. YrrrRrrrrrRr hrand rrRr mrrrrRrst trrst hrall zRmrrrRrmbrrRrrr trrrRr rrngRGhglrrRrsh RRrrrrRrlrrs rrrRrrh rrlsrr' should translate to 'greetings. You and i must test all zombie to english rules or else'", function(){
        var zomText = "gRGhgRRrrrrtrrRrngRGhgs. YrrrRrrrrrRr hrand rrRr mrrrrRrst trrst hrall zRmrrrRrmbrrRrrr trrrRr rrngRGhglrrRrsh RRrrrrRrlrrs rrrRrrh rrlsrr";
        var engTrans = translation.translateZomToEng(zomText);
        expect(engTrans).toBe("greetings. You and i must test all zombie to english rules or else");
      });
    });
  });
});
