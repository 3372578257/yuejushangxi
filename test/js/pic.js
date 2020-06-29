// JavaScript Document
var lis=document.querySelectorAll('#wrap li'),
	shadowBox=document.querySelector('#shadowBox'),
	showPic=document.querySelector('#showPic'),
	prev=document.querySelector('.prev'),
	next=document.querySelector('.next'),
	imgCon=document.querySelector('#showPic .img'),
	bigImgs=imgCon.children;

var curNum=0;	//褰撳墠鍥剧墖鐨勭储寮?
var canClick=true;	//鐢ㄦ埛鏄惁鍙互鐐瑰嚮
function loadImg(imgs,callBack){
	var loadImgs=[],loadImgNum=0;
	for(var i=0;i<imgs.length;i++){
		loadImgs[i]=new Image();
		loadImgs[i].onload=function(){
			loadImgNum++;
			if(loadImgNum==imgs.length){
				callBack(loadImgs);
			}
		};
		loadImgs[i].src=imgs[i];
	}
}
//鎶婃墍鏈夌殑鍥剧墖閮借幏鍙栧苟瀛樺偍鍒颁竴涓暟缁勯噷
var imgs=[];
for(var i=0;i<lis.length;i++){
	imgs.push('images/t'+i+'.png');
}

loadImg(imgs,function(images){
	for(var i=0;i<lis.length;i++){
		lis[i].index=i;
		lis[i].onclick=function(){
			shadowBox.style.height=document.documentElement.offsetHeight+'px';
			shadowBox.style.display=showPic.style.display='block';

			//缂╂斁闇€瑕佷竴涓繃绋嬶紝鎵€浠ヨ瀹冨欢杩熶竴浼氬啀鍑烘潵
			setTimeout(function(){
				shadowBox.style.opacity=showPic.style.opacity=1;
				showPic.style.transform='scale(1)';
			},50);

			//鎶婄偣鍑荤殑閭ｄ釜绱㈠紩鏇存柊缁檆urNum
			curNum=this.index;

			bigImgs[1].src=images[curNum].src;	//寮瑰嚭灞傚嚭鏉ヤ互鍚庯紝鍓嶉潰閭ｅ紶鍥剧墖搴旇鏄偣鍑诲搴旂殑閭ｄ釜鍥俱€傛鏃跺悗闈㈤偅寮犲浘瑕佹敼涔堬紵涓嶉渶瑕併€傚畠搴旇鍦ㄧ偣鍑荤殑鏃跺€欑‘瀹氾紝寰€鍙宠蛋涓庡線宸﹁蛋鏄笉涓€鏍风殑銆?

			nextClick(images);
			prevClick(images);
		};
	}
});

//榧犳爣鐐瑰嚮閬僵(yalh)灞傦紝闅愯棌寮瑰嚭灞?
shadowBox.addEventListener('click',function(){
	//濡傛灉鐐瑰嚮閬僵灞傜殑鏃跺€欐鍦ㄨ繍鍔紝閭ｅ氨绂佹鐢ㄦ埛鐐瑰嚮锛屽彧鏈夊湪杩愬姩鍋滄鐨勬椂鍊欐墠鑳界偣鍑汇€傝繖涓€鐐规渶鍚庤
	if(!canClick){
		return;
	}

	shadowBox.style.display=showPic.style.display='none';
	shadowBox.style.opacity=showPic.style.opacity=0;
	showPic.style.transform='scale(0)';
});

//涓嬩竴寮犵偣鍑?
function nextClick(images){
	var nextNum=0;	//涓嬩竴寮犲浘鐗囩殑绱㈠紩锛堣儗鍚庨偅寮犲浘鐗囩殑绱㈠紩锛?

	next.onclick=function(){
		if(!canClick){
			return;
		}
		canClick=false;	//鐐瑰嚮鍚庣珛椹彉鎴恌alse锛屽啀涔﹀悎涓婂悗鍐嶅彉鎴恡rue锛屽彧鏈変负true鐨勬椂鍊欐墠鑳界偣
		/*
			鐐瑰嚮鐨勬椂鍊欒鍋氱殑浜嬫儏
				1銆佽儗鍚庡浘鐗囩殑鍦板潃瑕佹崲鎴愭纭殑
				1銆佷笂闈㈢殑鍥剧墖璧板埌鍙宠竟
				2銆佷笅闈㈢殑鍥剧墖鍍忕炕涔?(tonn)涓€鏍锋墦寮€锛堜笂涓€姝ョ粨鏉熷悗杩涜锛?
				3銆佷笂闈㈢殑鍥剧墖鍥炲埌鍘熷浣嶇疆銆佷笅闈㈠浘鐗囧悎涓婏紙涓婁竴姝ョ粨鏉熷悗杩涜锛?
		 */


		//寰€鍙崇偣鍑诲悗涓嬩竴寮犲浘鐗囩殑绱㈠紩鏄綋鍓嶅浘鐗囩殑绱㈠紩+1
		nextNum=curNum+1;
		if(nextNum==lis.length){	//璧板埌鏈€鍚庝簡锛屽啀鍥炲埌璧风偣
			nextNum=0;
		}
		bigImgs[0].src=images[nextNum].src;	//鎹㈠悗闈㈤偅寮犲浘鐗囩殑鍦板潃

		

		var endNum1=0;	//璁板綍涓婇潰鍥剧墖杩愬姩缁撴潫鐨勬鏁?
		var endNum2=0;	//璁板綍涓嬮潰鍥剧墖杩愬姩缁撴潫鐨勬鏁?
		

		bigImgs[0].className=bigImgs[1].className='moveToRight';	//涓婇潰鍥惧線鍙宠蛋銆佷笅闈㈠浘寮犲紑鐨勬椂鍊欙紝鏃嬭浆涓嶅お瀵瑰姴锛屾槸鍥犱负鏃嬭浆涓績娌℃湁璁剧疆
		bigImgs[1].style.transform='translateX(600px) rotateY(-10deg)';	//涓婇潰鍥剧墖寰€鍙宠蛋
		bigImgs[1].addEventListener('transitionend',function(){	//涓婇潰鍥剧墖宸茬粡璧板埌鍙宠竟浜?
			endNum1++;

			bigImgs[0].style.transform='rotateY(-10deg)';	//涓嬮潰鍥惧紶寮€
			bigImgs[1].style.transform='translateX(0) rotateY(0deg)';	//涓婇潰鍥惧洖鍘?
			if(endNum1==2){	//杩欎釜鏉′欢鎴愮珛璇存槑锛岀幇鍦ㄦ槸涓婇潰鐨勫浘涓婂凡缁忓洖鍒板師鐐逛簡
				bigImgs[0].style.transform='rotateY(0)';	//涓嬮潰鐨勫浘鍚堜笂
				bigImgs[1].style.zIndex=1;	//涓婇潰鐨勫浘璺戝悗闈?
				bigImgs[0].style.zIndex=2;	//涓嬮潰鐨勫浘璺戝墠闈?
			}
		});


		//涓嬮潰鐨勫浘鍚堜笂浜?
		bigImgs[0].addEventListener('transitionend',function(){
			//杩欓噷涔熶細鍙戠敓涓ゆ锛屽洜涓轰笅闈㈢殑鍥撅紝寮犲紑鍙堝悎涓婏紝鏄袱娆¤繃娓?
			//console.log(1);

			endNum2++;
			if(endNum2==2){	
				curNum++;
				if(curNum==lis.length){	//璧板埌鏈€鍚庝簡锛屽啀鍥炲埌璧风偣
					curNum=0;
				}

				bigImgs[0].style.zIndex=1;	//鍚庨潰鍥剧墖鐨剒Index
				bigImgs[1].style.zIndex=2;	//鍓嶉潰鍥剧墖鐨剒Index锛屾棦鐒跺眰绾у彉浜嗭紝閭ｅ浘鐗囩殑璺緞涔熻鍙?
				bigImgs[1].src=images[nextNum].src;	//鍙敤鍙樺墠闈㈤偅寮犲浘鐗囩殑鍦板潃锛屽彉鎴愪笅涓€寮犲浘鐗囩殑鍦板潃

				canClick=true;	//涔﹀悎涓婁簡锛屾墠鍙互杩涜涓嬫鐨勭偣鍑?
			}
		})
	};
}

//涓婁竴寮犵偣鍑?
function prevClick(images){
	var prevNum=0;	//淇敼

	prev.onclick=function(){	//淇敼
		if(!canClick){
			return;
		}
		canClick=false;

		//杩欎竴鍧楀叏閮ㄤ慨鏀?
		prevNum=curNum-1;
		if(prevNum==-1){
			prevNum=lis.length-1;
		}
		bigImgs[0].src=images[prevNum].src;

		

		var endNum1=0;
		var endNum2=0;
		

		bigImgs[0].className=bigImgs[1].className='moveToLeft';	//淇敼
		bigImgs[1].style.transform='translateX(-600px) rotateY(10deg)';	//淇敼
		bigImgs[1].addEventListener('transitionend',function(){
			endNum1++;

			bigImgs[0].style.transform='rotateY(10deg)';	//淇敼
			bigImgs[1].style.transform='translateX(0) rotateY(0deg)';


			if(endNum1==2){
				bigImgs[0].style.transform='rotateY(0)';
				bigImgs[1].style.zIndex=1;
				bigImgs[0].style.zIndex=2;
			}
		});


		bigImgs[0].addEventListener('transitionend',function(){
			endNum2++;
			if(endNum2==2){

				//杩欎竴鍧椾慨鏀?
				curNum--;
				if(curNum==-1){
					curNum=lis.length-1;
				}

				bigImgs[0].style.zIndex=1;
				bigImgs[1].style.zIndex=2;
				bigImgs[1].src=images[prevNum].src;	//淇敼

				canClick=true;
			}
		})
	};
}