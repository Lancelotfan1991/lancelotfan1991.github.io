//Multi Markers WebAR-AR.js and Aframe - Playing the Archive - Connected Environment CASA-UCL

//Global Variable
var markersURLArray=[];
var markersNameArray=[];

const departMentInfo = [
    {
        department: 'MAE',
        content: `MAE是面向5G时代移动网络的自动化引擎，助力实现移动网络的三大超越：1) Beyond Efficiency: 10x运维效率提升；2) Beyond Performance: 20%的频谱效率提升：从不可能到可能；优化从静态到动态；从粗放到精细化；从非实时到实时；3) Beyond New Service：5x发放效率提升；业务发放从weeks到Days；通过联合运营商开放合作，面向场景逐级演进，实现移动网络完全自动驾驶。`,
        link: ''
    },
    {
        department: 'xExpress',
        content: '高效建网的xExpress系列包含Site Express、Feature Express和Radio Express，简化了原本操作复杂、数量庞大的建网工作，支持大批量、流水线式、自动化的建站和特性开通。',
        link: ''
    },
    {
        department: 'xSuite',
        content: '敏捷业务的xSuite系列包含WTTx Suite、切片运维管理、室内可视化，支持快速精准的发放业务。',
        link: ''
    },
    {
        department: 'xTurbo',
        content: '智能运维的xTurbo系列包含Alarm Turbo、Capacity Turbo和Power Turbo，提供智能化的排障、网优、节能能力。',
        link: ''
    },
    {
        department: 'Dopra',
        content: 'DOPRA业务包含SSP、VISP、VPP、FSP、SiteAI、AutoTBP，分布杭州、上海、东莞三地域，上海地域交付VISP，AutoTBP,提供轻量级弹性协议栈、IP路由、IP协议安全、拓展集中路径控制引擎、车载安全协议，构筑边缘组网极简竞争力。',
        link: ''
    },
    {
        department: 'AI',
        content: 'Beyond Intelligence：从自动化到智能化，面向云化AI打造自学习自管理的网络，编织一张会思考的"网"，让沟通畅行无阻。',
        link: ''
    }
];

var flag = null;

AFRAME.registerComponent('markers_start',{
	init:function(){
		console.log('Add markers to the scene');

		var sceneEl = document.querySelector('a-scene');
		
		//list of the markers
		for(var i=1; i< 2; i++)
		{
			var url="resource/pattern-Individual_Blocks-"+i+".patt";
			markersURLArray.push(url);
			markersNameArray.push('Marker_'+i);
			//console.log(url);
		}

		for(var k=1; k< 2; k++)
		{
			var markerEl = document.createElement('a-marker');
			markerEl.setAttribute('type','pattern');
			markerEl.setAttribute('url',markersURLArray[k]);
			markerEl.setAttribute('id',markersNameArray[k]);

			markerEl.setAttribute('registerevents','');
			sceneEl.appendChild(markerEl);

			//Adding text to each marker
			var textEl = document.createElement('a-entity');
			
			textEl.setAttribute('id','text');
			textEl.setAttribute('text',{color: 'red', align: 'center', value:markersNameArray[k], width: '5.5'});
			textEl.object3D.position.set(0, 0.7, 0);
			textEl.object3D.rotation.set(-90, 0, 0);

			markerEl.appendChild(textEl);
		}
	}
});


//Detect marker found and lost
AFRAME.registerComponent('registerevents', {
    init: function () {
        const marker = this.el;

        marker.addEventListener("markerFound", ()=> {
            var markerId = marker.id;
            console.log('Marker Found: ', markerId);
            document.getElementById('debuginfo').innerHTML = 'marker found ' + markerId;
            document.getElementById('content').style.display = 'block';
            document.getElementById('content').innerHTML = departMentInfo[Number(markerId) - 1].content;
            
            if (flag) { 
                clearTimeout(flag);
            }
        });

        marker.addEventListener("markerLost",() =>{
            var markerId = marker.id;
            console.log('Marker Lost: ', markerId);
            document.getElementById('debuginfo').innerHTML = 'marker lost' + markerId;
            // 避免因为手机抖动导致的文字立即消失的问题
            flag = setTimeout(() => {
                document.getElementById('content').style.display = 'none';
            }, 4000);
        });
    },
});
