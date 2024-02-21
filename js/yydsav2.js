import { Crypto, load, _ } from './lib/cat.js';

let key = 'adgn';
let HOST = 'https://yydsav2.shop';
let url = '';
let siteKey = '';
let siteType = 0;

const UA = 'Mozilla/5.0 (Linux; Android 10; HLK-AL00 Build/HONORHLK-AL00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/88.0.4324.93 Mobile Safari/537.36';

async function request(reqUrl, agentSp) {
    let res = await req(reqUrl, {
        method: 'get',
        headers: {
            'User-Agent': agentSp || UA,
            'Referer': HOST
        },
    });
    return res.content;
}

// cfg = {skey: siteKey, ext: extend}
async function init(cfg) {
    siteKey = cfg.skey;
    siteType = cfg.stype;
}


async function home(filter) {
    let classes = [
{"type_id":"search/wd","type_name":"索引"},{"type_id":"type/id/20","type_name":"国产偷拍"},
{"type_id":"type/id/21","type_name":"日本无码"},{"type_id":"type/id/22","type_name":"日本有码"},
{"type_id":"type/id/23","type_name":"中文字幕"},{"type_id":"type/id/25","type_name":"欧美精品"},
{"type_id":"type/id/25","type_name":"成人动漫"},{"type_id":"type/id/29","type_name":"网红主播"},
{"type_id":"type/id/31","type_name":"人妻熟女"},{"type_id":"type/id/33","type_name":"萝莉少女"},
{"type_id":"type/id/35","type_name":"美乳巨乳"},{"type_id":"type/id/37","type_name":"国产视频"},
{"type_id":"type/id/38","type_name":"强奸乱伦"},{"type_id":"type/id/39","type_name":"主播直播"},
{"type_id":"type/id/40","type_name":"精品推荐"},{"type_id":"type/id/43","type_name":"角色扮演"},
{"type_id":"type/id/44","type_name":"制服丝袜"},{"type_id":"type/id/45","type_name":"人妻系列"},
{"type_id":"type/id/48","type_name":"国产精品"},{"type_id":"type/id/50","type_name":"日韩无码"},
{"type_id":"type/id/52","type_name":"动漫精品"},{"type_id":"type/id/57","type_name":"日本女优"},
{"type_id":"type/id/58","type_name":"传媒精品"},{"type_id":"type/id/59","type_name":"人妻制服"},
{"type_id":"type/id/60","type_name":"制服诱惑"},{"type_id":"type/id/61","type_name":"欧美极品"},
{"type_id":"type/id/195","type_name":"无码中文av"},{"type_id":"type/id/196","type_name":"强奸中文av"},
{"type_id":"type/id/197","type_name":"巨乳中文av"},{"type_id":"type/id/198","type_name":"乱伦中文av"},
{"type_id":"type/id/199","type_name":"制服中文av"},{"type_id":"type/id/200","type_name":"人妻中文av"},
{"type_id":"type/id/201","type_name":"调教中文av"},{"type_id":"type/id/202","type_name":"出轨中文av"},
{"type_id":"type/id/203","type_name":"国产自拍"},{"type_id":"type/id/220","type_name":"韩国精品"}
];
    let filterObj = {
    "search/wd":[
      {
        "key":"other", "name":"类型", "value":[
          {"n":"调教","v":"调教"},
          {"n":"温泉","v":"温泉"},
          {"n":"淫语","v":"淫语"},
          {"n":"夜袭","v":"夜袭"},
          {"n":"痴女","v":"痴女"},
          {"n":"迷奸","v":"迷奸"},
          {"n":"痴汉","v":"痴汉"},
          {"n":"美腿","v":"美腿"},
          {"n":"潮吹","v":"潮吹"},
          {"n":"轮奸","v":"轮奸"},
          {"n":"强奸","v":"强奸"},
          {"n":"捆绑","v":"捆绑"},
          {"n":"监禁","v":"监禁"},
          {"n":"乱伦","v":"乱伦"},
          {"n":"肛交","v":"肛交"},
          {"n":"放尿","v":"放尿"},
          {"n":"凌辱","v":"凌辱"},
          {"n":"户外","v":"户外"},
          {"n":"美乳","v":"美乳"}
        ]
      },
      {
        "key":"other",  "name":"名优",  "value":[
                    {"n":"JULIA","v":"JULIA"},
          {"n":"伊藤舞雪","v":"伊藤舞雪"},
          {"n":"宇都宮紫苑","v":"RION"},
          {"n":"冲田杏梨","v":"冲田杏梨"},
          {"n":"上原亞衣","v":"上原亚衣"},
          {"n":"藤浦惠","v":"藤浦惠"},
          {"n":"蒂亚","v":"蒂亚"},
          {"n":"彩奈莉娜","v":"彩奈莉娜"},
          {"n":"森泽佳奈","v":"森沢かな"},
          {"n":"神木丽","v":"神木丽"},
          {"n":"朝桐光","v":"朝桐光"},
          {"n":"桃乃木香奈","v":"桃乃木香奈"},
          {"n":"天海翼","v":"天海翼"},
          {"n":"明日花绮罗","v":"明日花绮罗"},
          {"n":"三上悠亚","v":"三上悠亚"},
          {"n":"波多野结衣","v":"波多野结衣"},
          {"n":"桃谷绘里香","v":"桃谷绘里香-"},
          {"n":"葵司","v":"葵司"},
          {"n":"小岛南","v":"小岛南"},
          {"n":"明里紬","v":"明里紬"},
          {"n":"相泽南","v":"相泽南"},
          {"n":"高桥圣子","v":"高桥圣子"},
          {"n":"桥本有菜","v":"桥本有菜"}
        ]
      },
      {
        "key":"other",  "name":"少女",   "value":[
          {"n":"全部","v":"少女"}, 
          {"n":"小宵虎南","v":"小宵"},
          {"n":"蜜美杏","v":"蜜美杏"},
          {"n":"园田美樱","v":"园田美樱"},
          {"n":"宫下玲奈","v":"宫下玲奈"},
          {"n":"青空优","v":"青空優"},
          {"n":"綾瀬瑠美","v":"綾瀬瑠美"},
          {"n":"河北彩花","v":"河北彩花"},
          {"n":"山岸逢花","v":"山岸逢花"},
          {"n":"河北麻衣","v":"河北麻衣"},
          {"n":"夏目响","v":"夏目响"},
          {"n":"市川雅美","v":"市川雅美"},
          {"n":"铃木心春","v":"铃木心春"},
          {"n":"天使萌","v":"天使萌"},
          {"n":"凰香奈芽","v":"凰香奈芽"},
          {"n":"美竹铃","v":"美竹铃"},
          {"n":"小西悠","v":"小西悠"},
          {"n":"阿部美佳子","v":"阿部美佳子"},
          {"n":"樱空桃","v":"樱空桃"},
          {"n":"葵玲奈","v":"葵玲奈"},
          {"n":"爱音麻里亚","v":"爱音麻里亚"},
          {"n":"有原步美","v":"有原步美"},
          {"n":"麻里梨夏","v":"麻里梨夏"}
        ]
      },
      {
        "key":"other",  "name":"轻熟女",   "value":[
          {"n":"全部","v":"熟女"},
          {"n":"初音实","v":"初音实"},
          {"n":"吉澤明步","v":"吉泽明步"},
          {"n":"彩美旬果","v":"彩美旬果"},
          {"n":"友田彩也香","v":"友田彩也香"},
          {"n":"仓多真央","v":"仓多真央"},
          {"n":"北川绘理香","v":"北川绘理香"},
          {"n":"希岛爱理","v":"希岛爱理"},
          {"n":"北条麻妃","v":"北条麻妃"},
          {"n":"大槻响","v":"大槻响"},
          {"n":"麻生希","v":"麻生希"},
          {"n":"神纳花","v":"神纳花"},
          {"n":"水菜丽","v":"水菜丽"},
          {"n":"白石茉莉奈","v":"白石茉莉奈"},
          {"n":"吹石玲奈","v":"吹石玲奈"}
        ]
      },
      {
        "key":"other",  "name":"国产",   "value":[
          {"n":"全部","v":"国产"},
          {"n":"绫波丽","v":"绫波丽"},
          {"n":"阿朱","v":"阿朱"},
          {"n":"玩偶姐姐","v":"玩偶姐姐"},
          {"n":"徐蕾","v":"徐蕾"},
          {"n":"凌薇","v":"凌薇"},
          {"n":"苏语棠","v":"苏语棠"},
          {"n":"沈娜娜","v":"沈娜娜"},
          {"n":"梁芸菲","v":"梁芸菲"},
          {"n":"唐霏","v":"唐霏"},
          {"n":"陈可心","v":"陈可心"},
          {"n":"倪哇哇","v":"倪哇哇"},
          {"n":"赵一曼","v":"赵一曼"},
          {"n":"袁子仪","v":"袁子仪"},
          {"n":"陈美琳","v":"陈美琳"},
          {"n":"宋妮可","v":"宋妮可"},
          {"n":"许依然","v":"许依然"},
          {"n":"陈小雨","v":"陈小雨"},
          {"n":"寻小小","v":"寻小小"},
          {"n":"白若冰","v":"白若冰"},
          {"n":"胡心遥","v":"胡心遥"},
          {"n":"林怡梦","v":"唐霏"},
          {"n":"顾桃桃","v":"顾桃桃"},
          {"n":"夏晴子","v":"夏晴子"},
          {"n":"艾秋","v":"艾秋"},
          {"n":"雪千夏","v":"雪千夏"},
          {"n":"张芸熙","v":"张芸熙"},
          {"n":"南芊允","v":"南芊允"},
          {"n":"周梦琪","v":"周梦琪"},
          {"n":"谭瑛瑛","v":"谭瑛瑛"},
          {"n":"蜜苏","v":"蜜苏"},
          {"n":"欧妮","v":"欧妮"},
          {"n":"颂朝","v":"颂朝"},
          {"n":"韩依人","v":"韩依人"},
          {"n":"苏婭","v":"苏婭"},
          {"n":"玥可嵐","v":"玥可嵐"},
          {"n":"程诗诗","v":"程诗诗"},
          {"n":"慕菲菲","v":"慕菲菲"},
          {"n":"苏清歌","v":"苏清歌"},
          {"n":"管明美","v":"管明美"},
          {"n":"楚梦舒","v":"楚梦舒"},
          {"n":"吴梦梦","v":"吴梦梦"},
          {"n":"梁佳芯","v":"梁佳芯"},
          {"n":"李蓉蓉","v":"李蓉蓉"},
          {"n":"Mina","v":"Mina"},
          {"n":"李曼尼","v":"李曼尼"},
          {"n":"潘雨曦","v":"潘雨曦"},
          {"n":"林思妤","v":"林思妤"},
          {"n":"秦可欣","v":"秦可欣"}
        ]
      }
    ]
	};

    return JSON.stringify({
        class: classes,
        filters: filterObj,
    });
}

async function homeVod() {
    let videos = await getVideos(HOST);
    return JSON.stringify({
        list: videos,
    });
}

async function category(tid, pg, filter, extend) {
    if (pg <= 0) pg = 1;
    const link = HOST + '/index.php/vod/' + (extend.cateId || tid) +'/'+ (extend.other || '') + '/page/' + pg + '/';//https://www.yydsav1.shop/index.php/vod/{cateId}/{tid}/page/{catePg}/
    const html = await request(link);
    const $ = load(html);
    const items = $('div.card');
    let videos = _.map(items, (item) => {
        const it = $(item).find('a:first')[0];
        const k = $(item).find('img:first')[0];
        const remarks = $($(item).find('span.badge')[0]).text().trim();
        return {
            vod_id: it.attribs.href.replace(/.*?\/id\/(.*)/g, '$1'),
            vod_name: k.attribs.alt,
            vod_pic: k.attribs['src'],
            vod_remarks: remarks || '',
        };
    });
    const hasMore = $('ul.pagination >  li > a:contains(Next)').length > 0;
    const pgCount = hasMore ? parseInt(pg) + 1 : parseInt(pg);
    return JSON.stringify({
        page: parseInt(pg),
        pagecount: pgCount,
        limit: 24,
        total: 24 * pgCount,
        list: videos,
    });
}

async function detail(id) {
    const vod = {
        vod_id: id,
        vod_remarks: '',
    };
    const playlist = ['点击播放' + '$' + HOST + '/index.php/vod/play/id/' + id];
    vod.vod_play_from = "道长在线";
    vod.vod_play_url = playlist.join('#');
    return JSON.stringify({
        list: [vod],
    });
}


async function play(flag, id, flags) {
    const link = HOST + '/index.php/vod/play/id/' + id ;
    const html = await request(link);
    const $ = load(html);
    const js = JSON.parse($('script:contains(player_)').html().replace('var player_aaaa=',''));
    const playUrl = js.url;
    return JSON.stringify({
        parse: 0,
        url: playUrl,
    });
}

async function getVideos(url) {
    const html = await request(url);
    const $ = load(html);
    const cards = $('div.card > a')
    let videos = _.map(cards, (n) => {
        let id = n.attribs['href'];
        let name = n.attribs['alt'];
        let pic = n.attribs['src'];
        let remark = $($(n).find('span.badge')[0]).text();
        return {
            vod_id: id,
            vod_name: name,
            vod_pic: pic,
            vod_remarks: remark,
        };
    });
    return videos;
}


function base64Encode(text) {
    return Crypto.enc.Base64.stringify(Crypto.enc.Utf8.parse(text));
}

function base64Decode(text) {
    return Crypto.enc.Utf8.stringify(Crypto.enc.Base64.parse(text));
}
async function search(wd, quick, pg) {
    if (pg <= 0) pg = 1;
    let data = await request(HOST + '/index.php/vod/search/wd/' + wd + '/page/' + pg + '/');//https://www.yydsav1.shop/index.php/vod/search/wd/{wd}page/{catePg}
    const $ = load(data);
    const items = $('div.card');
    let videos = _.map(items, (item) => {
        const it = $(item).find('a:first')[0];
        const k = $(item).find('img:first')[0];
        const remarks = $($(item).find('span.badge badge-success')[0]).text().trim();
        return {
            vod_id: it.attribs.href.replace(/.*?\/id\/(.*)/g, '$1'),
            vod_name: k.attribs.alt,
            vod_pic: k.attribs['src'],
            vod_remarks: remarks || '',
        };
    });
    const hasMore = $('ul.pagination >  li >  a:contains(Next)').length > 0;
    const pgCount = hasMore ? parseInt(pg) + 1 : parseInt(pg);
    return JSON.stringify({
        page: parseInt(pg),
        pagecount: pgCount,
        limit: 24,
        total: 24 * pgCount,
        list: videos,
    });
}

export function __jsEvalReturn() {
    return {
        init: init,
        home: home,
        homeVod: homeVod,
        category: category,
        detail: detail,
        play: play,
        search: search,
    };
}