
function getHtmlDocName() {
    var str = window.location.href;
    str = str.substring(str.lastIndexOf("/") + 1);
    str = str.substring(0, str.lastIndexOf("."));
    return str;
}
window.onload=function(){
    initData();
    simple01(treeClick);
    //alert(document.documentElement.clientHeight);
    let leftbar = document.getElementById("leftbar");
    leftbar.style.height =  document.documentElement.clientHeight+"px";
    var id = getHtmlDocName(); 
    var DivId = document.getElementById(id);
    document.getElementById("leftbar").scrollTop =DivId.offsetTop;
}
function initData(){
    window.dataList=[];
    dataList.push({id:'010000',name:'Oeasy教您玩转linux系列实验之01快速入手',parentId:""});//根
    dataList.push({id:'010100',name:'图形与终端0101',type:'folder',parentId:"010000"});//默认树
    dataList.push({id:'010101',name:'010101查看内核版本uname',type:'function',parentId:"010100"});//默认树
    dataList.push({id:'010102',name:'010102查看发行版lsb_release',type:'function',parentId:"010100"});//默认树
    dataList.push({id:'010103',name:'010103查看当前完整路径',type:'function',parentId:"010100"});//默认树
    dataList.push({id:'010104',name:'010104灵魂之问whatis',type:'function',parentId:"010100"});//默认树
    dataList.push({id:'010105',name:'010104灵魂之问whatis',type:'function',parentId:"010100"});//默认树
    dataList.push({id:'010106',name:'010104灵魂之问whatis',type:'function',parentId:"010100"});//默认树
    dataList.push({id:'010107',name:'010104灵魂之问whatis',type:'function',parentId:"010100"});//默认树
    dataList.push({id:'010108',name:'010104灵魂之问whatis',type:'function',parentId:"010100"});//默认树
    dataList.push({id:'010109',name:'010104灵魂之问whatis',type:'function',parentId:"010100"});//默认树
    dataList.push({id:'010110',name:'010104灵魂之问whatis',type:'function',parentId:"010100"});//默认树

    dataList.push({id:'010200',name:'终端应用实例0102',type:'folder',parentId:"010000"});//默认树
    dataList.push({id:'010201',name:'010201查看内核版本uname',type:'function',parentId:"010200"});//默认树
    dataList.push({id:'010202',name:'010202查看发行版lsb_release',type:'function',parentId:"010200"});//默认树
    dataList.push({id:'010203',name:'010203查看当前完整路径',type:'function',parentId:"010200"});//默认树
    dataList.push({id:'010204',name:'010204灵魂之问whatis',type:'function',parentId:"010200"});//默认树
    dataList.push({id:'010205',name:'010205灵魂之问whatis',type:'function',parentId:"010200"});//默认树
    dataList.push({id:'010206',name:'010206灵魂之问whatis',type:'function',parentId:"010200"});//默认树
    dataList.push({id:'010207',name:'010207灵魂之问whatis',type:'function',parentId:"010200"});//默认树
    dataList.push({id:'010208',name:'010208灵魂之问whatis',type:'function',parentId:"010200"});//默认树
    dataList.push({id:'010209',name:'010209灵魂之问whatis',type:'function',parentId:"010200"});//默认树
    dataList.push({id:'010210',name:'010210灵魂之问whatis',type:'function',parentId:"010200"});//默认树
    dataList.push({id:'010211',name:'010211灵魂之问whatis',type:'function',parentId:"010200"});//默认树


}
function simple01(click){
    var tree=new Tree('simple-01');//Tree有一个参数id，方便在其它地方调用，可使用方法Tree.getTree(id)获取树
    parseTreeNode(tree, "", dataList,click);
    tree.show('simple-01-parent', undefined, true);
}
function parseTreeNode(parentNode, parentId, dataList, click, dblclick, contextmenu, nodeNameColor, checkbox){
    var node;
    for (var i = 0,length=dataList.length; i < length; i++) {
        if(dataList[i].parentId==parentId){
            var node=new TreeNode({
                id			:	dataList[i].id,
                name		:	dataList[i].name,
                type		:	dataList[i].type,
                click		:	click,
                dblclick	:	dblclick,
                contextmenu	:	contextmenu,
                nameColor	:	nodeNameColor||"#000000",
                checkbox	:	checkbox||undefined,
                open		:	true
            });
            parentNode.append(node);
            parseTreeNode(node, node.id, dataList, click, dblclick, contextmenu, nodeNameColor, checkbox);
        }
    }
}
function treeClick(node){
    var url = "../../../";
    url = url+node.name.substring(0,2)+"/";
    url = url+node.name.substring(0,4)+"/";
    var name  = node.name.replace(/[^0-9a-zA-Z_]/g,"");
    url = url +name+"\/"+name+".html";
    window.open(url,"_self");
    //alert("单击了："+url);

}
function codeStyle(code){
    code=code.replace(new RegExp('<','g'),'&lt;');
    code=code.replace(new RegExp('>','g'),'&gt;');
    code=code.replace(new RegExp('&lt;div','g'),'<font color="green">&lt;div</font>');
    code=code.replace(new RegExp('\t\t\t\t\t','g'),'');
    code=code.replace(new RegExp(' ','g'),'&nbsp;');
    code=code.replace(new RegExp('\n','g'),'<br/>');
    code=code.replace(new RegExp('\t','g'),'&nbsp;&nbsp;&nbsp;&nbsp;');
    code=code.replace(new RegExp('function','g'),'<font color="#7f0055">function</font>');
    code=code.replace(new RegExp('var','g'),'<font color="#7f0055">var</font>');
    code=code.replace(new RegExp('return','g'),'<font color="#7f0055">return</font>');
    code=code.replace(new RegExp('false','g'),'<font color="#7f0055">false</font>');
    code=code.replace(new RegExp('true','g'),'<font color="#7f0055">true</font>');
    return code;
}
function createDialog(initWidth, initHeight){
    var dialog=document.getElementById('dialog');
    if(!dialog){
        var width=initWidth||500;
        var height=initHeight||200;
        var top=(screenHeight()-height)/2+(document.body.scrollTop||document.documentElement.scrollTop);
        var left=(screenWidth()-width)/2;
        dialog=document.createElement("div");
        dialog.id="dialog";
        dialog.style.cssText='width:'+width+'px;height:'+height+'px;position:absolute;z-index:4000;top:'+top+'px;left:'+left+'px;border:3px solid blue;background:#FFFFFF;text-align:center;overflow:auto;';
        dialog.onclick=function(event){
            var event=event||window.event;
            if(event){
                event.returnValue=false;
                event.cancelBubble=true;
            }
            return false;
        }
        document.body.appendChild(dialog);
        document.body.onclick=function(){
            document.getElementById('dialog').style.display="none";
        }
    }else{
        var width=initWidth||500;
        var height=initHeight||200;
        var top=(screenHeight()-height)/2+(document.body.scrollTop||document.documentElement.scrollTop);
        var left=(screenWidth()-width)/2;
        dialog.style.display="";
        dialog.style.top=top+"px";
        dialog.style.left=left+"px";
        dialog.style.width=width+"px";
        dialog.style.height=height+"px";
    }
    return dialog; 
}
function screenWidth(){
    return document.documentElement.clientWidth||document.documentElement.offsetWidth||document.body.clientWidth||document.body.offsetWidth;
};
function screenHeight(){
    return document.documentElement.clientHeight||document.documentElement.offsetHeight||document.body.clientHeight||document.body.offsetHeight;
};

