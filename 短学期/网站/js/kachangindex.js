// JavaScript Document
var helangSearch={
    els:{},
    searchIndex:0,
    hot:{
        color:['#ff2c00','#ff5a00','#ff8105','#fd9a15','#dfad1c','#6bc211','#3cc71e','#3cbe85','#51b2ef','#53b0ff'],
        list:[
            '京剧',
            '越剧',
            '豫剧',
            '评剧',
            '黄梅戏',
            '昆曲',
            '粤剧',
            '川剧',
            '淮剧'
        ]
    },
    init:function(){
        var _this=this;
        this.els={
            pickerBtn:$(".picker"),
            pickerList:$(".picker-list"),
            logo:$(".logo"),
            hotList:$(".hot-list"),
            input:$("#search-input"),
            button:$(".search")
        };

        this.els.hotList.html(function () {
            var str='';
            $.each(_this.hot.list,function (index,item) {
                str+='<a href="首页.html" target="_blank">'
                    +'<div class="number" style="color: '+_this.hot.color[index]+'">'+(index+1)+'</div>'
                    +'<div>'+item+'</div>'
                    +'</a>';
            });
            return str;
        });
        this.els.pickerBtn.click(function () {
            if(_this.els.pickerList.is(':hidden')) {
                setTimeout(function () {
                    _this.els.pickerList.show();
                },100);
            }
        });
        this.els.pickerList.on("click",">li",function () {
            _this.els.logo.css("background-image",('url(img/'+$(this).data("logo")+')'));
            _this.searchIndex=$(this).index();
        });
        /* 鎼滅储 杈撳叆妗� 鐐瑰嚮*/
        this.els.input.click(function () {
            if(!$(this).val()){
                setTimeout(function () {
                    _this.els.hotList.show();
                },100);
            }
        });
        /* 鎼滅储 杈撳叆妗� 杈撳叆*/
        this.els.input.on("input",function () {
            if($(this).val()){
                _this.els.hotList.hide();
            }
        });
        /* 鎼滅储鎸夐挳 */
        this.els.button.click(function () {
            var searchArr=['请选择','请选择','请选择','请选择'];
            alert(searchArr[_this.searchIndex]+"下列戏曲种类"+_this.els.input.val());
        });
        /* 鏂囨。 */
        $(document).click(function () {
            _this.els.pickerList.hide();
            _this.els.hotList.hide();
        });
    }
};