var animation = null;

mp.keys.bind(0x4E,true, function(){
    if(!animation){
        animation = mp.browsers.new('package://animations/index.html');
        mp.gui.cursor.show(true,true);
    } else if(animation){
        animation.destroy();
        animation = null;
        mp.gui.cursor.show(false,false);
        mp.events.callRemote("cAnimation");
    }
});

mp.events.add('yoga', player =>{
    mp.events.callRemote("yoga")
    animation.destroy();
    animation = null;
    mp.gui.cursor.show(false,false)
});
mp.events.add('push', player =>{
    mp.events.callRemote("push")
    animation.destroy();
    animation = null;
    mp.gui.cursor.show(false,false)
});
mp.events.add('smoking', player =>{
    mp.events.callRemote("smoking")
    animation.destroy();
    animation = null;
    mp.gui.cursor.show(false,false)
});
mp.events.add('coffee', player =>{
    mp.events.callRemote("coffee")
    animation.destroy();
    animation = null;
    mp.gui.cursor.show(false,false)
});
mp.events.add('weed', player =>{
    mp.events.callRemote("weed")
    animation.destroy();
    animation = null;
    mp.gui.cursor.show(false,false)
});
mp.events.add('picnic', player =>{
    mp.events.callRemote("picnic")
    animation.destroy();
    animation = null;
    mp.gui.cursor.show(false,false)
});
mp.events.add('security', player =>{
    mp.events.callRemote("security")
    animation.destroy();
    animation = null;
    mp.gui.cursor.show(false,false)
});
mp.events.add('hiker', player =>{
    mp.events.callRemote("hiker")
    animation.destroy();
    animation = null;
    mp.gui.cursor.show(false,false)
});
mp.events.add('lean', player =>{
    mp.events.callRemote("lean")
    animation.destroy();
    animation = null;
    mp.gui.cursor.show(false,false)
});
mp.events.add('situps', player =>{
    mp.events.callRemote("situps")
    animation.destroy();
    animation = null;
    mp.gui.cursor.show(false,false)
});