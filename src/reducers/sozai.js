import { Zahyo } from '../libs/zahyo.js';

import { Text } from '../libs/text.js';

import {
    SAGA_TOOLBOXSOZAI_SOZAI_UPDATE,
    SAGA_TOOLBOXSOZAI_SOZAI_DELETE,
    SAGA_TOOLBOXSOZAI_SOZAI_CREATE,
    SAGA_TOOLBOXSOZAI_SOZAI_SELECT,
    SAGA_TOOLBOXSOZAI_SOZAI_TOGGLE,
} from '../actions_saga/toolboxsozai.js';

// ====================
// 素材データ
//      [
//          {
//              id: ID
//              type: 'text':テキスト 'image':画像
//              text: テキスト
//              mojiObjAry: 文字オブジェクト配列
//              image: 画像
//          },
//          .....
//      ]
// ====================
export const sozai = (state = [
    {
        id: '素材A',
        type: 'text',
        text: '　生産年齢人口の減少や第４次産業革命への対応など、建設業は大きな転換期を迎えている。３月に設立７０周年を迎えた全国建設業協会の近藤晴貞会長は、地域建設業が役割を果たし続けるために、「働き方改革と生産性向上に果敢に挑戦しなければならない」とし、「自ら改革を進めていくことも重要になる」と強調する。７０周年を契機に策定した「地域建設業将来展望」には、転換期を変革の好機に変えるためのキーワードを盛り込んだ。地域建設業の進化を後押しするため、全建は今後も各建設業協会の活躍を強力に推進するエンジンであり続ける。\n　近藤会長は、地域建設業に求められる役割について、「安全・安心の確保だけではなく、住民の利便性向上や地域経済の活性化など多岐にわたる」とした上で、「安全・安心の確保という切り口だけでなく、将来の地域建設業のあるべき姿を議論していかなければならない」と指摘する。\n　将来展望では、強みである「地域建設企業力」を生かした新時代の構築を打ち出し、インフラ老朽化対策での川上段階からの参画など、積極的な事業提案への取り組みを１つの方向性として示している。\n　視線の先にあるのは、地域建設業の持続的な発展であり、近藤会長は「若者が先を見通すことができる環境づくりの基盤を、年配の方々がつくる」という考えがベースになっていると説明する。\n　とはいえ、さまざまな施策が立案されても、経営の健全化がなければ実現は難しい。働き方改革や生産性向上の原資となる「健全な経営の継続」のためには、「仕事があり、仕事をこなす人がいて、利潤が出るという仕組みづくりをしなければならない」と強調する。\n　公共事業予算は下げ止まりの傾向が見られているが、今後も必要な仕事量を確保できるかどうかが地域ごとに異なる状況下で、「システムなどのサポートがなければできない部分もあるが、自ら仕事量を確保していくという取り組みも考えていく必要がある」と、積極果敢なチャレンジを生き残りの重要な要素に挙げる。\n　地域建設業が新時代を切り開くためには、公共事業予算の持続的・安定的な確保が重要な役割を果たすが、「予算の配分が一番大きな課題になる」とし、地域建設業、中小企業向けの予算確保に向けた活動を引き続き展開する。\n　働き方改革では、会員が現行の休日実績を１日増やす「休日月１＋（ツキイチプラス）」運動を展開するほか、「単価引き上げ分アップ宣言」に基づき、公共工事設計労務単価の改定分を下請に反映するための取り組みも徹底する。\n　建設キャリアアップシステムに対しては、「技能者の保有資格や就労実績を蓄積することで処遇の改善、技能の研さんにつながる。働き方改革、中長期的な担い手確保の面で、良い仕組みだと思う」と期待を寄せる。\n　新たな一歩を踏み出した全建の今後の役割として近藤会長は、各建協と会員企業が活動しやすい環境づくりや、地域建設業の魅力発信などを挙げる。「各建協単独では取り組みが難しいテーマや課題も、全建で集約すれば全国の声として発信することができる」とし、引き続き「地域建設業の地位向上と発展に寄与し続けていきたい」と力を込める。',
        mojiObjAry: [],
        image: '',

        select: '',
    },
    
], action) => {
    let lists;
    let sozai;

    switch (action.type) {
    case SAGA_TOOLBOXSOZAI_SOZAI_SELECT:
        lists = state.slice();

        for (let i = 0; i < lists.length; i++) {
            lists[i].select = '';
        }

        for (let i = 0; i < lists.length; i++) {
            if (lists[i].id == action.payload.id) {
                lists[i].select = 'on';
                break;
            }
        }

        return lists;

    case SAGA_TOOLBOXSOZAI_SOZAI_TOGGLE:
        lists = state.slice();

        let index;
        let select;

        for (let i = 0; i < lists.length; i++) {
            if (lists[i].id == action.payload.id) {
                index = i;
                select = lists[i].select;
                break;
            }
        }
        
        for (let i = 0; i < lists.length; i++) {
            lists[i].select = '';
        }

        select = (select == 'on') ? '' : 'on';

        lists[index].select = select;

        return lists;

    case SAGA_TOOLBOXSOZAI_SOZAI_UPDATE:
        lists = state.slice();

        for (let i = 0; i < lists.length; i++) {
            // lists[i].select = '';

            if (lists[i].id == action.payload.sozai.id) {
                lists[i].type = action.payload.sozai.type;
                lists[i].text = action.payload.sozai.text;

                // 文字オブジェクト配列を作成してセットする
                lists[i].mojiObjAry = Text.createMojiObjAry(action.payload.sozai.text);

                lists[i].image = action.payload.sozai.image;
                
                // lists[i].select = 'on';

                break;
            }
        }

        return lists;

    case SAGA_TOOLBOXSOZAI_SOZAI_DELETE:
        lists = state.slice();

        for (let i = 0; i < lists.length; i++) {
            lists[i].select = '';
        }

        for (let i = 0; i < lists.length; i++) {
            if (lists[i].id == action.payload.id) {
                lists.splice(i, 1);
                break;
            }
        }

        return lists;

    case SAGA_TOOLBOXSOZAI_SOZAI_CREATE:
        lists = state.slice();

        for (let i = 0; i < lists.length; i++) {
            lists[i].select = '';
        }

        sozai = {
            id: action.payload.id,
            type: action.payload.type,
            text: action.payload.text,

            // 文字オブジェクト配列を作成してセットする
            mojiObjAry: Text.createMojiObjAry(action.payload.text),

            image: action.payload.image,

            select: 'on',
        };

        lists.push(sozai);

        return lists;

    default:
        return state;
    }
}
