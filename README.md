# Zombie Translator
Zombie translator is a bulwark against the apocalypse to come; a two-way communication device ready to facilitate that alternate reality where human and zombie co-exist in peaceful discourse. That humans may speak again with loved ones lost; that zombies may barter for brains.

### Summary of Features and Technology
Zombie Translator features both English-to-Zombie and Zombie-to-English translation. It uses a responsive Bootstrap layout, RequireJS for modules dependencies, Jasmine for testing, and Karma for running tests from the command line. Karma is currently configured to use PhantomJS. The JavaScript itself makes use of jQuery for interface needs and performs translation mostly by matching characters (with very limited use of regular expressions).

### Rules Implemented
Only English-to-Zombie rules are presented below, as the reverse can be extrapoloated easily enough. Of note: When translating from Zombie to English Rule 10 (capitalizing the beginning of a sentence) is ignored.

1. 'a' & 'A' translate to 'hra'
2. 'e' & 'E' translate to 'rr'
3. 'i' & 'I' translate to 'rrRr'
4. 'o' & 'O' translate to 'rrrRr'
5. 'u' & 'U' translate to 'rrrrRr'
6. 'r' translates to 'rh' when at the end of a word
7. 'r' & 'R' translate to 'RR'
8. 'g' & 'G' translate to 'gRGhg'
9. 'z' & 'Z' translate to 'zRm'
10. the beginning of a sentence (defined as a letter preceded by '. ', '! ', or '? ') is capitalized

### Testing
There was a little confusion about the variety of different expect methods required, so Zombie Translator opted to use one of each, beginning with .toBe() and .not.toBe() matchers in the [Jasmine Documentation] and going down the list, adding .toBeNaN() and .not.toBeNaN() at the end.

# zRmrrrRrmbrrRrrr TRRhranslhratrrrRrrh
zRmrrrRrmbrrRrrr tRRhranslhratrrrRrrh rrRrs hra brrrrRrlwhraRRk hragRGhghrarrRrnst thrr hraprrrRrchralypsrr trrrRr crrrRrmrr; hra twrrrRr-whray tRRhranslhratrrrRrrh RRrrhrady trrrRr fhracrrRrlrrRrthratrr thhrat hraltrrRRnhratrr RRrrhralrrRrty whrrRRrr hrrrrRrmhran hrand zRmrrrRrmbrrRrrr crrrRr-rrxrrRrst rrRrn prrhracrrfrrrrRrl drrRrscrrrRrrrrrRrRRsrr. Thhrat hrrrrRrmhrans mhray sprrhrak hragRGhghrarrRrn wrrRrth lrrrRrvrrd rrrRrnrrs lrrrRrst; thhrat zRmrrrRrmbrrRrrrs mhray bhraRRtrrrh frrrRrrh bRRhrarrRrns.

### SrrrrRrmmhraRRy rrrRrf FrrhratrrrrRrRRrrs hrand TrrchnrrrRrlrrrRrgRGhgy
zRmrrrRrmbrrRrrr TRRhranslhratrrrRrrh frrhratrrrrRrRRrrs brrrRrth rrngRGhglrrRrsh-trrrRr-zRmrrrRrmbrrRrrr hrand zRmrrrRrmbrrRrrr-trrrRr-rrngRGhglrrRrsh tRRhranslhratrrRrrrrRrn. RrRrt rrrrRrsrrs hra RRrrsprrrRrnsrrRrvrr BrrrRrrrrRrtstRRhrap lhrayrrrRrrrrrRrt, RRrrqrrrrRrrrRrRRrrJS frrrRrrh mrrrRrdrrrrRrlrrs drrprrndrrncrrRrrrs, JhrasmrrRrnrr frrrRrrh trrstrrRrngRGhg, hrand KhraRRmhra frrrRrrh RRrrrrRrnnrrRrngRGhg trrsts fRRrrrRrm thrr crrrRrmmhrand lrrRrnrr. KhraRRmhra rrRrs crrrrRrRRRRrrntly crrrRrnfrrRrgRGhgrrrrRrRRrrd trrrRr rrrrRrsrr PhhrantrrrRrmJS. Thrr JhravhraScRRrrRrpt rrRrtsrrlf mhrakrrs rrrrRrsrr rrrRrf jQrrrrRrrrRRy frrrRrrh rrRrntrrRRfhracrr nrrrrds hrand prrRRfrrrRrRRms tRRhranslhratrrRrrrrRrn mrrrRrstly by mhratchrrRrngRGhg chhraRRhractrrRRs (wrrRrth vrrRRy lrrRrmrrRrtrrd rrrrRrsrr rrrRrf RRrrgRGhgrrrrRrlhrarh rrxpRRrrssrrRrrrrRrns).

### RRrrrrRrlrrs rrRrmplrrmrrntrrd
rrrRrnly rrngRGhglrrRrsh-trrrRr-zRmrrrRrmbrrRrrr RRrrrrRrlrrs hraRRrr pRRrrsrrntrrd brrlrrrRrw, hras thrr RRrrvrrRRsrr chran brr rrxtRRhraprrrRrlrrrRrhratrrd rrhrasrrRrly rrnrrrRrrrrrRrgRGhgh. RrrRrf nrrrRrtrr: Whrrn tRRhranslhratrrRrngRGhg fRRrrrRrm zRmrrrRrmbrrRrrr trrrRr rrngRGhglrrRrsh RRrrrrRrlrr 10 (chraprrRrthralrrRrzRmrrRrngRGhg thrr brrgRGhgrrRrnnrrRrngRGhg rrrRrf hra srrntrrncrr) rrRrs rrRrgRGhgnrrrRrRRrrd.

1. 'hra' & 'Hra' tRRhranslhratrr trrrRr 'a'
2. 'rr' & 'Rr' tRRhranslhratrr trrrRr 'e'
3. 'rrRr' & 'RrRr' tRRhranslhratrr trrrRr 'i'
4. 'rrrRr' & 'RrrRr' tRRhranslhratrr trrrRr 'o'
5. 'rrrrRr' & 'RrrrRr' tRRhranslhratrr trrrRr 'u'
6. 'rh' & 'Rh' tRRhranslhratrr trrrRr 'r' whrrn hrat thrr rrnd rrrRrf hra wrrrRrRRd
7. 'RR' tRRhranslhratrrs trrrRr 'r'
8. 'gRGhg' & 'gRGhg' tRRhranslhratrr trrrRr 'g'
9. 'zRm' & 'zRm' tRRhranslhratrr trrrRr 'z'
10. Thrr brrgRGhgrrRrnnrrRrngRGhg rrrRrf hra srrntrrncrr (drrfrrRrnrrd hras hra lrrttrrrh pRRrrcrrdrrd by '. ', '! ', rrrRrrh '? ') rrRrs chraprrRrthralrrRrzRmrrd

### TrrstrrRrngRGhg
ThrrRRrr whras hra lrrRrttlrr crrrRrnfrrrrRrsrrRrrrrRrn hrabrrrRrrrrrRrt thrr vhraRRrrRrrrty rrrRrf drrRrffrrRRrrnt rrxprrct mrrthrrrRrds RRrrqrrrrRrrrRrRRrrd, srrrRr zRmrrrRrmbrrRrrr TRRhranslhratrrrRrrh rrrRrptrrd trrrRr rrrrRrsrr rrrRrnrr rrrRrf rrhrach, brrgRGhgrrRrnnrrRrngRGhg wrrRrth .trrrRrBrr() hrand .nrrrRrt.trrrRrBrr() mhratchrrRRs rrRrn thrr [JhrasmrrRrnrr DrrrRrcrrrrRrmrrnthratrrRrrrrRrn] hrand gRGhgrrrRrrrRrngRGhg drrrRrwn thrr lrrRrst, hraddrrRrngRGhg .trrrRrBrrNhraN() hrand .nrrrRrt.trrrRrBrrNhraN() hrat thrr rrnd.

[Jasmine Documentation]:http://jasmine.github.io/2.0/introduction.html#section-Matchers
[JhrasmrrRrnrr DrrrRrcrrrrRrmrrnthratrrRrrrrRrn]:http://jasmine.github.io/2.0/introduction.html#section-Matchers
