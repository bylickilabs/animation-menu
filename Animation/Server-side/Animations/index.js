mp.events.add('cAnimation', player =>{
    player.stopAnimation();
});

mp.events.add('yoga', (player)=>{
    player.playScenario('WORLD_HUMAN_YOGA')
});
mp.events.add('push', (player)=>{
    player.playScenario('WORLD_HUMAN_PUSH_UPS')
});
mp.events.add('smoking', (player)=>{
    player.playScenario('WORLD_HUMAN_SMOKING')
});
mp.events.add('coffee', (player)=>{
    player.playScenario('WORLD_HUMAN_AA_COFFEE')
});
mp.events.add('weed', (player)=>{
    player.playScenario('WORLD_HUMAN_DRUG_DEALER')
});
mp.events.add('picnic', (player)=>{
    player.playScenario('WORLD_HUMAN_PICNIC')
});
mp.events.add('security', (player)=>{
    player.playScenario('WORLD_HUMAN_GUARD_STAND')
});
mp.events.add('hiker', (player)=>{
    player.playScenario('WORLD_HUMAN_HIKER_STANDING')
});
mp.events.add('lean', (player)=>{
    player.playScenario('WORLD_HUMAN_LEANING')
});
mp.events.add('situps', (player)=>{
    player.playScenario('WORLD_HUMAN_SIT_UPS')
});

console.log("[Github/Solid999/animation-menu] is READY!!!");