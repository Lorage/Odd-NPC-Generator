
$(document).ready(function(){

    var gender = ["Male", "Female"];

    var race = ["Human", "Dwarven", "High Elven", "Wood Elven", "Halfling", "Dragonborn", "Goblin", "Gnomish", "Tiefling"];

    var appearence = ["bad breath", " a barrel chest", "a big nose", "a birthmark", "bloodshot eyes", "blotchy skin", "stubble", "curly hair", "broken nose", "different colored eyes", "dimples", "dyed hair", "freckles", "handsome features", "heavy scars", "a heavy tan", "a hunchback", "sickly looking skin", "shallow scars", "a lazy eye", "multiple chins", "long hair", "old features", "only one ear", "only one hand", "a flamboyant hair style", "pale skin", "jaundice", "plump features", "a pockmarked face", "short hair", "a runny nose", "tattoos", "few teeth", "no tongue", "wild eyes", "ugly features"];

    var profession = ["Acrobat", "Adventurer", "Alchemist", "Apothecary", "Apprentice", "Armorer", "Artist", "Assassin", "Baker", "Banker", "Beggar", "Porter", "Blacksmith", "Carpenter", "Builder", "Roofer", "Clockmaker", "Clothier", "Cobbler", "Diplomat", "Dyer", "Engineer", "Farmer", "Fence", "Fisherman", "Gemcutter", "Goldsmith", "Goldsmith", "Hunter", "Innkeeper", "Knight", "Jester", "Mason", "Locksmith", "Leatherworker", "Minstrel", "Nobleman", "Miller", "Potter", "Priest", "Sage", "Sailor", "Scribe", "Silversmith", "Soldier", "Spy", "Stablehand", "Tailor", "Tanner", "Waiter", "Thug", "Thief", "Tinker", "Merchant", "Labourer", "Brewer", "Guard", "Weaponsmith", "Weaver", "Prostitute", "Woodcarver"];
    
    var personalityOne = ["Agitated", "Agreeable", "Ambivalent", "Angry", "Apathetic", "Argumentative", "Arrogant", "Benign", "Bored", "Brash", "Busy", "Casual", "Chatty", "Childish", "Clever", "Condescending", "Confused", "Craven", "Cynical", "Daring", "Depressed", "Despondent", "Devious", "Dispassionate", "Distracted", "Distraught", "Duplicitous", "Egocentric", "Evasive", "Excited", "Exhilarated", "Feisty", "Focused", "Forgetful", "Friendly"];
    
    var personalityTwo = ["Gullible", "Happy", "Harassed", "Heart-Broken", "Humble", "Hyperactive", "Impolite", "Indignant", "Introvert", "Irritable", "Mad", "Malevolent", "Mean", "Miserable", "Motivated", "Naive", "Nervous", "Noisy", "Passionate", "Pedantic", "Polite", "Precise", "Regal", "Religious", "Sad", "Sarcastic", "Scarred", "Shy", "Stressed", "Stupid", "Subservient", "Suicidal", "Superior", "Superstitious", "Suspicious", "Thoughtless", "Timid", "Tired", "Vulnerable", "Whiny", "Wise", "Zany"];
    
    var activity = ["commiting crimes", "accosting beggars", "Arguing with traders", "behaving strangely", "being chased", "brawling", "bleeding", "browsing", "chasing thieves", "cleaning boots", "crying", "gossiping", "discussing", "being drunk/high", "walking their pet", "working", "flirting", "guarding", "haggling", "hawking wares", "tavern-hopping", "hiding", "higging", "juggling", "laughing", "lecturing", "delivering things", "making things", "muttering", "negotiating", "ogling", "worshiping", "pontificating", "punishing children", "reading", "repairing things", "resting", "riding horses", "riding wagons", "running", "searching for things", "shouting", "sightseeing", "sleeping", "smiling", "speaking", "spying", "strolling", "conning", "whistling", "watching people", "watching birds"];
    
    var clothing = ["torn rags", "elegant robes", "leather armor", "an ugly mask", "common clothing", "colorful garb", "steel armor", "mages\' robes", "digusting rags", "soaked boots", "a belt of many weapons", "a filled pack", "nobles\' garb", "a royal crest", "a glowing amulet", "peculiar clothing", "a blood soiled tunic"];
    
    var mannerismOne = ["smiling broadly", "thinking intensly", "humming to themselves", "screaming in rage", "singing with glee", "frowing with disgust", "sleeping deeply", "working tirlesly", "tending a wound", "playing a game"];
    
    
    function resizeInput() {
        $(this).attr('size', $(this).val().length);
      }

      $('input[type="text"]')
            // event handler
            .keyup(resizeInput)
            // resize on page load
            .each(resizeInput);

    $("#generate").click(function(){
      $('span').empty();


      $("#appearence").text(appearence[Math.floor((Math.random() * appearence.length))]);
      $("#race").text(race[Math.floor((Math.random() * race.length))]);
      $("#gender").text(gender[Math.floor((Math.random() * gender.length))]);
      $("#profession").text(profession[Math.floor((Math.random() * profession.length))]);
      $("#personalityOne").text(personalityOne[Math.floor((Math.random() * personalityOne.length))]);
      $("#personalityTwo").text(personalityTwo[Math.floor((Math.random() * personalityTwo.length))]);
        
      $("#activity").text(activity[Math.floor((Math.random() * activity.length))]);
      $("#clothing").text(clothing[Math.floor((Math.random() * clothing.length))]);
      $("#mannerismOne").text(mannerismOne[Math.floor((Math.random() * mannerismOne.length))]);
        
      
        
      function resizeInput() {
        $(this).attr('size', $(this).val().length);
      }

      $('input[type="text"]')
            // event handler
            .keyup(resizeInput)
            // resize on page load
            .each(resizeInput);
    });

});
