const win_loc = window.location.hostname.replace(/www./,'')
const parser_loc = win_loc.substring(win_loc.lastIndexOf(".", win_loc.lastIndexOf(".") - 1) + 1)
const url_comment = window.location.hostname.search(/(detik)/gi)>-1?'https://comment.detik.com':window.location.protocol+'//comment.'+parser_loc

window.CommentComponent = zoid.create({
    dimensions: {
        height: '100%',
        width: '100%',
    },
    autoResize: { width: false,height:true },
    tag: 'comment-component',
    url: url_comment+'/v2/asset/frontend/build/index.html?v=1.0.9.10',
    props: {
        url: {
            type: 'string',
            required: !1,
            default: function() {
                return document.location.href;
            }
        },
        idArtikel: {
            type: 'number',
            required: !0
        },
        kanal: {
            type: 'number',
            required: !0
        },
        date: {
            type: 'string',
            required: !0
        },
        title: {
            type: 'string',
            required: !0
        },
        clientId: {
            type: 'number',
            required: !1,
            default: function() {
                return 3;
            }
        },
        prefix: {
            type: 'string',
            required: !0,
        },
        prokontra: {
            type: 'number',
            required: !1,
            default: function() {
                return 0;
            }
        },
        showhide: {
            type: 'number',
            required: !1
        },
        label_1: {
            type: 'string',
            required: !1,
            default: function() {
                return 'Pro';
            }
        },
        label_2: {
            type: 'string',
            required: !1,
            default: function() {
                return 'Kontra';
            }
        },
        kanalAds: {
            type: 'string',
            required: !1
        },
        envAds: {
            type: 'string',
            required: !1
        },
        onLogin: {
            type: 'function'
        },
        onResize: {
            type: 'function'
        },
        onScroll: {
            type: 'function'
        },        
        onAlert: {
            type: 'function'
        },
        data_oa: {
            type: 'function',
            required: !1
        },
        url_share: {
            type: 'string',
            required: !1,
            default: function() {
                return document.location.href;
            }
        },
        current_url: {
            type: "string",
            required: !1,
            default: function() {
                return document.location.href;
            }
        },
        redirect_url: {
            type: 'string',
            required: !1,
            default: function() {
                return document.location.href;
            }
        },
        pembukaDiskusi: {
            type: 'string',
            required: !1
        },
        customId: {
            type: 'string',
            required: !1
        },
        sneakPeek: {
            type: 'number',
            required: !1,
            default: function() {
                return 0;
            }
        },
        hash: {
            type: 'string',
            required: !1,
            default: function(){
                return window.location.hash;
            }
        },
        gtmCustom: {
            type: 'function',
            required: !1,
            default: function(){
                return (obj) => {
                    const dataLayer = window.dataLayer || [];
                    dataLayer.push(obj);
                }
                // return (obj) => {
                //     return ""
                // }
            }
        }
    }
});

function onResize (height) {
    $(parent.document).find("#thecomment3").css({height: height + 'px'});
}

function getNameSelectorZoid(){
    const elements = document.querySelectorAll('[id^=zoid-comment-component]');
    return elements[0].parentElement.id
}

function onLogin (){
    if ($('.to_login').html() != 'undefined' && $('.to_login').html() != null) {
        $('.to_login')[0].click();
    }
    else{
        alert("Maaf terjadi kesalahan, harap logout dan login kembali");
    }
}

function onScroll(action, manual=false) {
    const nameParentElement = getNameSelectorZoid();
    if(manual){
        $(document).ready(function(){
            var toBox = $('#'+nameParentElement).offset().top
            var scrollHeight = toBox+action;
            $('html, body').animate({ scrollTop: scrollHeight }, 800);
        });
    }else{
        let id = action;
        let toComment = '';
        setTimeout(function () {
            if (id == 'form-comment-v2') {
                const f = document.getElementById("form-comment-v2");
                if(f){
                    toComment = f.offsetTop;
                }
            }else {
                const cmt = document.getElementById('cmt' + action);
                if(cmt){
                    toComment = cmt.offsetTop;
                }
            }
            const d = document.getElementById(nameParentElement);
            const toBox =  d.offsetTop;
            const scrollHeight = toBox+toComment;
            window.scrollTo({top: scrollHeight, behavior: 'smooth'});        
            id = ''
        }, 1000);
    }
}

function onAlert (msg) {
    alert(msg)
}

function data_oa(msg) {
    if(typeof OA_output !== 'undefined'){
        return OA_output['nativekomentar'+msg+''];
    }else{
        return '';
    }
}
