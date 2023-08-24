var puntos = 0
var sera = ""
var ruleta_rusa = ""
var tiempo = 30
var espacioytiempo = false
function setup() {
    color = "rgb(37, 54, 102)";
    canvas = createCanvas(280, 280)
    canvas.parent("zazil")
    background("lightgreen")
    canvas.mouseReleased(premionobel)

}
function draw() {

    if (mouseIsPressed) {
        if (mouseButton == LEFT) {
            stroke(color)
            strokeWeight(13)
            line(pmouseX, pmouseY, mouseX, mouseY)
        }
        if (mouseButton == RIGHT) {
            stroke("lightgreen")
            strokeWeight(13)
            line(pmouseX, pmouseY, mouseX, mouseY)
        }
    }
}
function borrar() {
    background("lightgreen")

}
function guardar() {
    save("drawgpt.png")
}
function preload() {
    critico = ml5.imageClassifier("DoodleNet")
}
function premionobel() {
    critico.classify(canvas, respuesta)

}
function respuesta(error, resultados) {
    if (!error) {
        console.log(resultados)
        sera = resultados[0].label
        fetch("https://api.mymemory.translated.net/get?q=" + sera + "&langpair=en-US|es-MX")
            .then(response => response.json())
            .then(data => {
                traduccion = data.responseData.translatedText;
                document.getElementById("seraonosera").innerHTML = sera + " / " + traduccion
            });
        critico_gpt()
    }
}
function eligir_color(a1) {
    switch (a1) {
        case 1: color = "blue"; break;
        case 2: color = "red"; break;
        case 3: color = "yellow"; break;
        case 4: color = "black"; break;

    }
}
function sabio() {
    suerte = Math.round(Math.random() * 344)
    ruleta_rusa = lista_dibujos[suerte]
    fetch("https://api.mymemory.translated.net/get?q=" + ruleta_rusa + "&langpair=en-US|es-MX")
        .then(response => response.json())
        .then(data => {
            traduccion = data.responseData.translatedText;
            document.getElementById("ruleta_rusa").innerHTML = "dibuja = " + traduccion
            
        });
        if (!espacioytiempo){
            tiempo = 30
            document.getElementById("copapiston").style.display="none"
            alarma = setInterval(segundero, 1000)
        }
    espacioytiempo=true
}
lista_dibujos = ["aircraft_carrier", "airplane", "alarm_clock", "ambulance", "angel", "animal_migration", "ant", "anvil", "apple", "arm", "asparagus", "axe", "backpack", "banana", "bandage", "barn", "baseball", "baseball_bat", "basket", "basketball", "bat", "bathtub", "beach", "bear", "beard", "bed", "bee", "belt", "bench", "bicycle", "binoculars", "bird", "birthday_cake", "blackberry", "blueberry", "book", "boomerang", "bottlecap", "bowtie", "bracelet", "brain", "bread", "bridge", "broccoli", "broom", "bucket", "bulldozer", "bus", "bush", "butterfly", "cactus", "cake", "calculator", "calendar", "camel", "camera", "camouflage", "campfire", "candle", "cannon", "canoe", "car", "carrot", "castle", "cat", "ceiling_fan", "cello", "cell_phone", "chair", "chandelier", "church", "circle", "clarinet", "clock", "cloud", "coffee_cup", "compass", "computer", "cookie", "cooler", "couch", "cow", "crab", "crayon", "crocodile", "crown", "cruise_ship", "cup", "diamond", "dishwasher", "diving_board", "dog", "dolphin", "donut", "door", "dragon", "dresser", "drill", "drums", "duck", "dumbbell", "ear", "elbow", "elephant", "envelope", "eraser", "eye", "eyeglasses", "face", "fan", "feather", "fence", "finger", "fire_hydrant", "fireplace", "firetruck", "fish", "flamingo", "flashlight", "flip_flops", "floor_lamp", "flower", "flying_saucer", "foot", "fork", "frog", "frying_pan", "garden", "garden_hose", "giraffe", "goatee", "golf_club", "grapes", "grass", "guitar", "hamburger", "hammer", "hand", "harp", "hat", "headphones", "hedgehog", "helicopter", "helmet", "hexagon", "hockey_puck", "hockey_stick", "horse", "hospital", "hot_air_balloon", "hot_dog", "hot_tub", "hourglass", "house", "house_plant", "hurricane", "ice_cream", "jacket", "jail", "kangaroo", "key", "keyboard", "knee", "knife", "ladder", "lantern", "laptop", "leaf", "leg", "light_bulb", "lighter", "lighthouse", "lightning", "line", "lion", "lipstick", "lobster", "lollipop", "mailbox", "map", "marker", "matches", "megaphone", "mermaid", "microphone", "microwave", "monkey", "moon", "mosquito", "motorbike", "mountain", "mouse", "moustache", "mouth", "mug", "mushroom", "nail", "necklace", "nose", "ocean", "octagon", "octopus", "onion", "oven", "owl", "paintbrush", "paint_can", "palm_tree", "panda", "pants", "paper_clip", "parachute", "parrot", "passport", "peanut", "pear", "peas", "pencil", "penguin", "piano", "pickup_truck", "picture_frame", "pig", "pillow", "pineapple", "pizza", "pliers", "police_car", "pond", "pool", "popsicle", "postcard", "potato", "power_outlet", "purse", "rabbit", "raccoon", "radio", "rain", "rainbow", "rake", "remote_control", "rhinoceros", "rifle", "river", "roller_coaster", "rollerskates", "sailboat", "sandwich", "saw", "saxophone", "school_bus", "scissors", "scorpion", "screwdriver", "sea_turtle", "see_saw", "shark", "sheep", "shoe", "shorts", "shovel", "sink", "skateboard", "skull", "skyscraper", "sleeping_bag", "smiley_face", "snail", "snake", "snorkel", "snowflake", "snowman", "soccer_ball", "sock", "speedboat", "spider", "spoon", "spreadsheet", "square", "squiggle", "squirrel", "stairs", "star", "steak", "stereo", "stethoscope", "stitches", "stop_sign", "stove", "strawberry", "streetlight", "string_bean", "submarine", "suitcase", "sun", "swan", "sweater", "swingset", "sword", "syringe", "table", "teapot", "teddy-bear", "telephone", "television", "tennis_racquet", "tent", "The_Eiffel_Tower", "The_Great_Wall_of_China", "The_Mona_Lisa", "tiger", "toaster", "toe", "toilet", "tooth", "toothbrush", "toothpaste", "tornado", "tractor", "traffic_light", "train", "tree", "triangle", "trombone", "truck", "trumpet", "tshirt", "umbrella", "underwear", "van", "vase", "violin", "washing_machine", "watermelon", "waterslide", "whale", "wheel", "windmill", "wine_bottle", "wine_glass", "wristwatch", "yoga", "zebra", "zigzag"]
function critico_gpt() {
    if (ruleta_rusa == sera) {
        puntos++
        document.getElementById("marcador").innerHTML = puntos + " puntos"
        sabio()
        tiempo=31
        if (puntos==10) {
            document.getElementById("copapiston").style.display="block"
            espacioytiempo=false
            clearInterval(alarma)
        }
    }
}
function segundero() {
    tiempo--
    document.getElementById("segundero").innerHTML = tiempo + " segundos";
    if(tiempo == 0){
        puntos--
        document.getElementById("marcador").innerHTML = puntos + " puntos"
        sabio()
        tiempo = 31
    }
}
