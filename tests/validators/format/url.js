// Load dependencies
var amanda = require('../../../src/amanda.js');

/**
 * Test #1
 */
exports['Test #1'] = function(test) {

  var count = 0;

  var schema = {
    required: true,
    format: 'url'
  };

  var domains = [
    '.ac',
    '.ad',
    '.ae',
    '.af',
    '.ag',
    '.ai',
    '.al',
    '.am',
    '.an',
    '.ao',
    '.aq',
    '.ar',
    '.as',
    '.at',
    '.au',
    '.aw',
    '.ax',
    '.az',
    '.ba',
    '.bb',
    '.bd',
    '.be',
    '.bf',
    '.bg',
    '.bh',
    '.bi',
    '.bj',
    '.bm',
    '.bn',
    '.bo',
    '.br',
    '.bs',
    '.bt',
    '.bv',
    '.bw',
    '.by',
    '.bz',
    '.ca',
    '.cc',
    '.cd',
    '.cf',
    '.cg',
    '.ch',
    '.ci',
    '.ck',
    '.cl',
    '.cm',
    '.cn',
    '.co',
    '.cr',
    '.cs',
    '.cu',
    '.cv',
    '.cx',
    '.cy',
    '.cz',
    '.dd',
    '.de',
    '.dj',
    '.dk',
    '.dm',
    '.do',
    '.dz',
    '.ec',
    '.ee',
    '.eg',
    '.er',
    '.es',
    '.et',
    '.eu',
    '.fi',
    '.fj',
    '.fk',
    '.fm',
    '.fo',
    '.fr',
    '.ga',
    '.gb',
    '.gd',
    '.ge',
    '.gf',
    '.gg',
    '.gh',
    '.gi',
    '.gl',
    '.gm',
    '.gn',
    '.gp',
    '.gq',
    '.gr',
    '.gs',
    '.gt',
    '.gu',
    '.gw',
    '.gy',
    '.hk',
    '.hm',
    '.hn',
    '.hr',
    '.ht',
    '.hu',
    '.id',
    '.ie',
    '.il',
    '.im',
    '.in',
    '.io',
    '.iq',
    '.ir',
    '.is',
    '.it',
    '.je',
    '.jm',
    '.jo',
    '.jp',
    '.ke',
    '.kg',
    '.kh',
    '.ki',
    '.km',
    '.kn',
    '.kp',
    '.kr',
    '.kw',
    '.ky',
    '.kz',
    '.la',
    '.lb',
    '.lc',
    '.li',
    '.lk',
    '.lr',
    '.ls',
    '.lt',
    '.lu',
    '.lv',
    '.ly',
    '.ma',
    '.mc',
    '.md',
    '.me',
    '.mg',
    '.mh',
    '.mk',
    '.ml',
    '.mm',
    '.mn',
    '.mo',
    '.mp',
    '.mq',
    '.mr',
    '.ms',
    '.mt',
    '.mu',
    '.mv',
    '.mw',
    '.mx',
    '.my',
    '.mz',
    '.na',
    '.nc',
    '.ne',
    '.nf',
    '.ng',
    '.ni',
    '.nl',
    '.no',
    '.np',
    '.nr',
    '.nu',
    '.nz',
    '.om',
    '.pa',
    '.pe',
    '.pf',
    '.pg',
    '.ph',
    '.pk',
    '.pl',
    '.pm',
    '.pn',
    '.pr',
    '.ps',
    '.pt',
    '.pw',
    '.py',
    '.qa',
    '.re',
    '.ro',
    '.rs',
    '.ru',
    '.rw',
    '.sa',
    '.sb',
    '.sc',
    '.sd',
    '.se',
    '.sg',
    '.sh',
    '.si',
    '.sj',
    '.sk',
    '.sl',
    '.sm',
    '.sn',
    '.so',
    '.sr',
    '.st',
    '.su',
    '.sv',
    '.sy',
    '.sz',
    '.tc',
    '.td',
    '.tf',
    '.tg',
    '.th',
    '.tj',
    '.tk',
    '.tl',
    '.tm',
    '.tn',
    '.to',
    '.tp',
    '.tr',
    '.tt',
    '.tv',
    '.tw',
    '.tz',
    '.ua',
    '.ug',
    '.uk',
    '.us',
    '.uy',
    '.uz',
    '.va',
    '.vc',
    '.ve',
    '.vg',
    '.vi',
    '.vn',
    '.vu',
    '.wf',
    '.ws',
    '.ye',
    '.yt',
    '.za',
    '.zm',
    '.zw',
    '.aero',
    '.asia',
    '.biz',
    '.cat',
    '.com',
    '.coop',
    '.edu',
    '.gov',
    '.info',
    '.int',
    '.jobs',
    '.mil',
    '.mobi',
    '.museum',
    '.name',
    '.net',
    '.org',
    '.pro',
    '.tel',
    '.travel',
    '.xxx'
  ];

  var names = [
    'http://www.example',
    'https://www.example',
    'http://example',
    'https://example',
    'www.example',
    'www.example',
    'example'
  ];

  var params = [
    '/?foo',
    '/?foo=bar',
    '/path/to/file/',
    '/path/to/file/?query',
    '/path/to/file/?foo1=bar1&foo2=bar2',
    '/index.html',
    '/myPage.html',
    '/my-Page.html',
    '/my_Page_hello.htm'
  ];

  domains.forEach(function(domain) {
    names.forEach(function(name) {

      // http://www.example + .com
      amanda.validate(name + domain, schema, function(error) {
        count += 1;
        test.equal(error, undefined);
      });

      params.forEach(function(param) {
        // http://www.example + .com + /?foo
        amanda.validate(name + domain + param, schema, function(error) {
          count += 1;
          test.equal(error, undefined);
        });
      });

    });
  });

  [
    'google.a',
    'google.rog',
    'google://google',
    'example',
    'http://ex.o',
    'www.ex.o',
    'pam.pam.pam',
    'go@gle',
    'g::gle',
    '☺☻☹.com',
    '☜☞☝☟'
  ].forEach(function(input) {
    amanda.validate(input, schema, function(error) {
      count += 1;
      test.ok(error);
    });  
  });
  
  


  test.equal(count, (domains.length*names.length) + (domains.length*names.length*params.length) +11);
  test.done();

};