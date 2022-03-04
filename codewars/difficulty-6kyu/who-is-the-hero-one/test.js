
const solution = require('./solution');


test("Who is the Hero I", () => {
    expect(solution.whoIsTheHero({John:1,Tom:2,Jerry:6,Mike:1,Abc:3,Def:1,Ghi:1,Jkl:1,Mno:1,Voile:1}))
        .toBe("Good-Bye, Hero Voile! We'll take care of your children and your wife.");
    expect(solution.whoIsTheHero({John:1,Voile:1,Jerry:1,Mike:1,Abc:1,Def:1,Ghi:1,Jkl:1,Mno:1,Tom:1}))
        .toBe("Good-Bye, Hero Voile! We'll take care of your children and your wife.");
    expect(solution.whoIsTheHero({Voile:1,John:2,Jerry:3,Mike:4,Abc:5,Def:6,Ghi:7,Jkl:8,Mno:9,Tom:10}))
        .toBe("Good-Bye, Hero Voile! We'll take care of your children and your wife.");
    expect(solution.whoIsTheHero({"Mskg":4,"Qfidgaban":6,"Fwjhiyn":1,"Wonhcxo":9,"Zcor":3,"Fgzwumdo":9,
        "Pchujc":1,"Alcslnmqv":3,"Dtkymhh":4,"Rnczeb":1}))
        .toBe("Good-Bye, Hero Dtkymhh! We'll take care of your children and your wife.");
    expect(solution.whoIsTheHero({"Ltmavih":9,"Fycqtqw":7,"Hpoey":7,"Nxuc":5,"Guxk":7,"Mmlk":4,
        "Ltaau":4,"Jtrpsijtl":3,"Zdtac":1,"Vnvkgkgg":4}))
        .toBe("Good-Bye, Hero Guxk! We'll take care of your children and your wife.");
    expect(solution.whoIsTheHero({"Kpwznmza":1,"Adwlajf":1,"Rkura":3,"Rogdowbi":8,"Owglu":1,"Dwlhdq":2,
        "Jmpdmufmf":9,"Ylycqg":4,"Vaxifke":10,"Cusx":4}))
        .toBe("Good-Bye, Hero Kpwznmza! We'll take care of your children and your wife.");
    expect(solution.whoIsTheHero({"Uoiirv":4,"Tfeujpxp":10,"Qapdqms":8,"Xvfvnnx":2,"Xhxtkej":3,"Narg":3,
        "Msmpsnx":8,"Iwiu":7,"Gdsmmtlb":5,"Zedl":9}))
        .toBe("Good-Bye, Hero Uoiirv! We'll take care of your children and your wife.");
    expect(solution.whoIsTheHero({"Rcjja":7,"Phwtrk":10,"Kztz":1,"Hmfiyhn":10,"Qsapbdktl":4,
        "Usphmhvtn":6,"Evbm":10,"Wfmt":8,"Iexolfr":2,"Pzrnblt":2}))
        .toBe("Good-Bye, Hero Kztz! We'll take care of your children and your wife.");
    expect(solution.whoIsTheHero({"Fdgxgvqb":2,"Wlxtwfjhh":9,"Aqcnrn":9,"Iaqmfzjm":3,"Dgvtlc":10,
        "Fjcs":3,"Biyxokit":10,"Tayjwqh":1,"Oiibk":9,"Edbowzz":7}))
        .toBe("Good-Bye, Hero Biyxokit! We'll take care of your children and your wife.");
    expect(solution.whoIsTheHero({"Kiwdqp":3,"Qzacq":10,"Qbmsdip":1,"Vebdww":7,"Wgfr":10,"Icvlt":6,
        "Tsqeom":2,"Svqcqk":2,"Xmchk":1,"Yrwfvaxjr":2}))
        .toBe("Good-Bye, Hero Tsqeom! We'll take care of your children and your wife.");
    expect(solution.whoIsTheHero({"Qyctjb":8,"Nvav":5,"Pfhx":10,"Zkefzrn":6,"Xedknpls":9,"Ansbi":5,
        "Jysvr":7,"Jclr":1,"Yuvk":10,"Fzukpgkr":7}))
        .toBe("Good-Bye, Hero Qyctjb! We'll take care of your children and your wife.");
    expect(solution.whoIsTheHero({"Yxxzdwn":5,"Uuzvetp":9,"Onvjyhtnj":2,"Sympltog":7,"Ewzrxsf":4,
        "Dzumrbbf":2,"Xstflil":4,"Egncgzm":9,"Phtsvchs":2,"Taask":2}))
        .toBe("Good-Bye, Hero Yxxzdwn! We'll take care of your children and your wife.");
    expect(solution.whoIsTheHero({"Axcq":9,"Rstg":6,"Zjpn":5,"Yfqhiytc":4,"Ykaohyk":9,"Hozt":8,
        "Zyqxvq":10,"Porggpy":7,"Mkzpxou":5,"Ityujm":6}))
        .toBe("Good-Bye, Hero Ykaohyk! We'll take care of your children and your wife.");
    expect(solution.whoIsTheHero({"Uanel":1,"Ahpnfyag":6,"Lnpmryue":10,"Hvjhtbiq":2,"Pvmeugam":7,
        "Ubgpqg":7,"Aubcywjk":3,"Pwlafrzr":1,"Uzlavaf":1,"Mhzxhrs":7}))
        .toBe("Good-Bye, Hero Aubcywjk! We'll take care of your children and your wife.");
    expect(solution.whoIsTheHero({"Olyzsqs":7,"Luavc":8,"Wllno":5,"Voiiog":4,"Ulnshwi":10,"Lbfh":1,
        "Eajjetj":9,"Jpbxg":8,"Dfee":3,"Owosm":2}))
        .toBe("Good-Bye, Hero Ulnshwi! We'll take care of your children and your wife.");
    expect(solution.whoIsTheHero({"Rjous":10,"Nyfl":7,"Dlfyecn":6,"Ukmhjuscx":4,"Yauzegbbv":2,
        "Zzmndf":10,"Lkzkpzzd":3,"Eycups":2,"Xagorkoc":4,"Xlwz":9}))
        .toBe("Good-Bye, Hero Rjous! We'll take care of your children and your wife.");
    expect(solution.whoIsTheHero({"Bjrqyt":8,"Bwrwja":9,"Dqjivwa":3,"Biuerlyu":5,"Ktjnqyf":2,"Zfaqd":2,
        "Elmsqnwl":3,"Gzupv":5,"Crancflpy":4,"Yscixtxwu":3}))
        .toBe("Good-Bye, Hero Ktjnqyf! We'll take care of your children and your wife.");
    expect(solution.whoIsTheHero({"Hlnll":1,"Oxaodww":3,"Uyrxk":4,"Eyjx":7,"Lnnjj":8,"Nreraawux":4,
        "Sdehq":10,"Dfewo":2,"Woxbpzm":9,"Libmuqnon":4}))
        .toBe("Good-Bye, Hero Uyrxk! We'll take care of your children and your wife.");
    expect(solution.whoIsTheHero({"Gazgvrwz":1,"Axxd":4,"Jtnfkyfr":10,"Dsfws":1,"Qgiufxsdk":10,
        "Pkmke":4,"Ezslixml":2,"Pnzntio":9,"Akxygaxf":6,"Iovwfhr":3}))
        .toBe("Good-Bye, Hero Pkmke! We'll take care of your children and your wife.");
    expect(solution.whoIsTheHero({"Bzqaqhf":5,"Oveftvv":5,"Hmpfwj":1,"Cxxefe":8,"Ijdkswkx":5,"Spszom":4,
        "Rdvskf":5,"Wmwqwf":2,"Ntciqgcyw":4,"Uikfbfbd":5}))
        .toBe("Good-Bye, Hero Ijdkswkx! We'll take care of your children and your wife.");
    expect(solution.whoIsTheHero({"Zbxsmruxo":8,"Jtvgz":2,"Tews":10,"Fxcdtwtr":1,"Zmjplzf":7,"Bshh":3,
        "Lxtpvlltu":1,"Wrcf":9,"Biqknwyr":2,"Mrtjlbhag":5}))
        .toBe("Good-Bye, Hero Biqknwyr! We'll take care of your children and your wife.");
    expect(solution.whoIsTheHero({"Rzhyue":3,"Kumhb":7,"Qjtis":7,"Rkgf":7,"Weib":7,"Wgpcd":2,
        "Vliygtgt":7,"Yabohlfi":1,"Evvuaajb":9,"Gemurahxu":4}))
        .toBe("Good-Bye, Hero Vliygtgt! We'll take care of your children and your wife.");
    expect(solution.whoIsTheHero({"Lczq":10,"Nxqcby":7,"Tkflk":10,"Evjk":9,"Axduad":8,"Zadyrh":2,
        "Tmqwog":1,"Kbnudxy":4,"Udjcfxrsc":3,"Sczhjfgg":9}))
        .toBe("Good-Bye, Hero Axduad! We'll take care of your children and your wife.");
    expect(solution.whoIsTheHero({"Cxhbdu":3,"Kkibnbss":2,"Oncrmebyo":7,"Sydi":6,"Rrjcm":5,"Dujamyf":6,
        "Flpzg":6,"Cewkjs":6,"Xzmmk":10,"Lulos":5}))
        .toBe("Good-Bye, Hero Flpzg! We'll take care of your children and your wife.");
    expect(solution.whoIsTheHero({"Yuyec":8,"Fdxbgjut":5,"Isbwzagl":8,"Aaoigkj":6,"Lqfpixfl":10,
        "Shvww":5,"Avvjjuk":3,"Qivmpacug":5,"Lnjldqo":3,"Zmsg":4}))
        .toBe("Good-Bye, Hero Yuyec! We'll take care of your children and your wife.");
    expect(solution.whoIsTheHero({"Knrhdfg":3,"Ntlsg":1,"Xdwtvrg":5,"Ixstc":1,"Iile":3,"Klapkwcg":8,
        "Voir":2,"Mlbjjy":8,"Ucpywsun":9,"Zbvkievl":10}))
        .toBe("Good-Bye, Hero Klapkwcg! We'll take care of your children and your wife.");
    expect(solution.whoIsTheHero({"Bata":5,"Ovsy":9,"Lvclvsdww":1,"Qqqhybma":3,"Kfenuc":7,"Avspbifwo":4,
        "Pwor":4,"Txtlscbax":9,"Kzzldlrl":7,"Dnps":8}))
        .toBe("Good-Bye, Hero Kzzldlrl! We'll take care of your children and your wife.");
    expect(solution.whoIsTheHero({"Soebl":9,"Xqwfh":5,"Mgewpbsy":4,"Cphv":8,"Xklk":4,"Xiyoke":7,
        "Welejqz":3,"Jnkooqi":4,"Xbicu":3,"Xtrvfvse":10}))
        .toBe("Good-Bye, Hero Soebl! We'll take care of your children and your wife.");
    expect(solution.whoIsTheHero({"Gtqm":8,"Lgvfw":8,"Tbxgcxt":5,"Yzuvpybzw":8,"Fxlucmbg":7,"Trgarq":9,
        "Khmqzlwvd":3,"Mtwrbpv":1,"Xgylp":8,"Tghn":3}))
        .toBe("Good-Bye, Hero Gtqm! We'll take care of your children and your wife.");
    expect(solution.whoIsTheHero({"Mrklq":7,"Ntfqzmqk":4,"Lmiqgj":3,"Adcwnbv":8,"Gceeqw":4,"Irvthceb":4,
        "Eetgj":2,"Jazwbofi":3,"Qcnwzt":1,"Xumz":9}))
        .toBe("Good-Bye, Hero Mrklq! We'll take care of your children and your wife.");
    expect(solution.whoIsTheHero({"Qmmwzxh":3,"Ualltzoj":6,"Vjyfx":3,"Innmg":6,"Mxpgby":9,"Obdtno":6,
        "Wveoqswe":7,"Sakeg":9,"Tzcdmkxc":6,"Hjvji":10}))
        .toBe("Good-Bye, Hero Mxpgby! We'll take care of your children and your wife.");
    expect(solution.whoIsTheHero({"Vbbt":7,"Liwvhnqy":1,"Yykw":5,"Iokfs":4,"Ageh":2,"Awlxzifq":7,
        "Hwpqfv":7,"Quzxbyo":7,"Bwbssai":10,"Jzmoktll":8}))
        .toBe("Good-Bye, Hero Vbbt! We'll take care of your children and your wife.");
    expect(solution.whoIsTheHero({"Lefmnbr":10,"Ythc":6,"Taiioesu":7,"Sgypqo":10,"Ppqk":7,"Dmomtgku":10,
        "Bedm":4,"Zmyknv":2,"Bwofnby":9,"Hfur":1}))
        .toBe("Good-Bye, Hero Ppqk! We'll take care of your children and your wife.");
    expect(solution.whoIsTheHero({"Rbzuyfdsp":2,"Sqelp":6,"Gdqw":1,"Nrxnjzhyr":8,"Dvdsuvoec":9,
        "Nwycwdd":5,"Plubvm":1,"Rryk":3,"Ddvwjeaca":1,"Ksylkzyvg":3}))
        .toBe("Good-Bye, Hero Gdqw! We'll take care of your children and your wife.");
    expect(solution.whoIsTheHero({"Mhzcnnokm":4,"Slxjpk":5,"Qpthnlv":4,"Sajzgby":2,"Hejn":2,"Ccmxb":8,
        "Rddkdxq":4,"Jikkpyrsx":5,"Fgubizz":2,"Cronzuvhg":1}))
        .toBe("Good-Bye, Hero Cronzuvhg! We'll take care of your children and your wife.");
    expect(solution.whoIsTheHero({"Lfyzjujc":8,"Hpyxyd":5,"Tjunzrpyg":1,"Ndenaqra":7,"Rztdzddq":2,
        "Iugqmjbal":5,"Aazuzequ":5,"Mtuphl":3,"Lussre":4,"Kcgfkk":5}))
        .toBe("Good-Bye, Hero Lfyzjujc! We'll take care of your children and your wife.");
    expect(solution.whoIsTheHero({"Xqiwjepk":1,"Ebife":7,"Iviyvh":9,"Hzrtcjbcl":1,"Pupdh":9,"Gpznr":2,
        "Xods":6,"Ixjxudw":3,"Otgg":9,"Gytyw":9}))
        .toBe("Good-Bye, Hero Xods! We'll take care of your children and your wife.");
    expect(solution.whoIsTheHero({"Ozeqxuff":2,"Kefn":7,"Yzyrr":5,"Qvii":7,"Onyrbl":3,"Dbxjpk":3,
        "Xtjdmg":1,"Hjwr":1,"Hwfv":5,"Dwdot":6}))
        .toBe("Good-Bye, Hero Hwfv! We'll take care of your children and your wife.");
    expect(solution.whoIsTheHero({"Dykv":7,"Omnbz":6,"Txgqsm":10,"Kkolfqtxc":9,"Dpwp":6,"Fwybbec":7,
        "Fupayfst":7,"Hmjhqq":8,"Xjopuuzqo":7,"Zxkfwqduf":7}))
        .toBe("Good-Bye, Hero Dykv! We'll take care of your children and your wife.");
});