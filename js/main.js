<!DOCTYPE html>
<html>
<body>


<script>

   var umla = confirm("Are you Ready?");

var intro = prompt("You find an envelope on your bed. It doesn't say who it's from. What do you do? OPEN IT, THROW IT AWAY, or SAVE IT for later.").toUpperCase();

switch (intro){
    case 'OPEN IT':
       confirm("A letter comes out. And it says..... ");
       break;
   case 'THROW IT AWAY':
       confirm('Well there goes your opportunity to save your friend. You have failed your mission!');
       exit();
       break;
    case 'SAVE IT':
        confirm('You have wasted too much time. You have failed your mission!');
        exit();
        break;
    default:
       confirm("How do you expect to complete this mission with those typing skills. You have failed your mission.");
       exit();
}

var insi = confirm("Hello Earthling, I am leader of great causes, MARICOONICUSAL, and leader of the Youkai. Your firend, Malian, is with us. She is alive but will not be for long if you do not accept our offer. You must obey whatever we say to help your friend. We need someone, a smart individual like you to test our traps if an intruder enters our planet. If you help us, we will free you and your friend. If you wish to disobey us then you and your friend shall DIE!");

var cal = prompt("At the bottom of the letter you see a small circle. Beside the small circle it says 'Place your finger here if you agree.' Do you AGREE, DISAGREE or CALL 911").toUpperCase();

switch (cal){
       case 'AGREE':
          var place = prompt("You put your finger on the circle and you appear in a.......dark, very dark, place! What do you do? RUN, WAIT, or HIDE.").toUpperCase();
          if (place === 'RUN'){
                confirm('You have shown the aliens that you are a coward. They do not want a coward for this test. You have failed your mission.!');
                exit();
          }else if (place === 'WAIT'){
                confirm('You have proved yourself to be brave. This is what the aliens were looking for.');
          } else if (place === 'HIDE'){
                confirm('You have shown the aliens that you are a coward. They do not want a coward for this test. You have failed your mission!');
                exit();
               }else{
                  confirm("How do you expect to complete this mission with those typing skills. You have failed your mission.");
                  exit();
                  }
          break;
               
        case 'DISAGREE':
              confirm('You were told to obey the aliens. You have already broken one of their rules. How do you expect to pass the rest. You have failed your mission!');
              exit();
              break;
        case 'CALL 911':
               confirm('You were told to obey the aliens. You have already broken one of their rules. How do you expect to pass the rest. You have failed your mission!');
               exit();
         break;
         
      default:
          confirm('How do you expect to complete this mission with those typing skills. You have failed your mission.');
          exit();
          }
          
 var next = confirm('You wait and a serene looking creature appears. He tells you "We have chosen you well. Now, in order to help your little friend you must complete whatever task we present infront of you. This will help us improve our traps better. If you are unable to do so, then we will believe that our traps are well to trap any human that dares enter our world. Your task begins now and be careful, there are many creatures that lurk in this forest!" He dissapears into thin air.');
 
 var after = prompt('All of a sudden you see 6 paths leading in the dark forest. Which path would you take? Path 1, path 2, path 3, path 4, path 5, path 6. Choose a number.');
 
 
 switch (after){
        case '1':
           confirm('You have chosen well. Now you are confronted with a fairy. She says "Hello there. I am the defender of these woods. In order to pass you must answer my riddle."');
             break;
         case '2':
         confirm("WRONG PATH. YOU LOSE!");
         exit();
         break;
         case '3':
         confirm("WRONG PATH. YOU LOSE!");
         exit();
         break;
         case '4':
         confirm("WRONG PATH. YOU LOSE!");
         exit();
         break;
         case '5':
          confirm('You have chosen well. Now you are confronted with a fairy. She says "Hello there. I am the defender of these woods. In order to pass you must answer my riddle."');
         break;
         case '6':
          confirm('You have chosen well. Now you are confronted with a fairy. She says "Hello there. I am the defender of these woods. In order to pass you must answer my riddle."');
         break;
         case '7':
         confirm("WRONG PATH. YOU LOSE!");
         exit();
         break;
         default:
         confirm("WRONG PATH. YOU LOSE!");
         exit();
         
               }
               
               var gors = prompt("She says 'Hello there. I am the defender of these woods. In order to pass you must answer my riddle. OKAY?'").toUpperCase();
             
    switch (gors){
      case 'OKAY':
             var gorin = prompt("What goes around and around the woods but never goes into the wood?").toUpperCase();
             if (gorin === 'BARK'){
       confirm('Correct. I agree with the master. He has chosen well. You may enter.');
             }else{
             
             confirm('Nope. You are a disgrace to be allowed to enter my woods. YOU LOSE!');
             exit();
            }
            break;
      default:
            confirm('How do you expect to complete this mission with those typing skills. You have failed your mission.');
            exit();
            }
            
 
 
 var next = prompt("You enter the woods and see a dark and gloomy house. What do you do? ENTER the house, KEEP WALKING.").toUpperCase();
 
 
 switch (next){
        case 'ENTER':
        var lie = confirm('WOW Your brave, but you should know to never enter a house without investigating first. As soon as you open the door the house explodes along with you. YOU LOSE!');
        break;
        case 'KEEP WALKING':
        var lies = prompt("You keep walking and then you spot a black cat. It urges you to follow it. What do you do? FOLLOW IT or IGNORE IT.").toUpperCase();
        if (lies === 'FOLLOW IT'){
           confirm("Have you never heard that a black cat is bad luck. YOU LOSE!")
           exit();
           
        }else if (lies === 'IGNORE IT'){
            confirm('Good. These creatures try to play with your mind and carry bad luck.');
        }
        break;
        default:
        confirm('How do you expect to complete this mission with those typing skills. You have failed your mission.');
            exit(); 
 }
 
 var yuoi = confirm('Next you see a large door that has a message that says "By the name of great MARICOONICUSAL, you may open the door." You open it and you see 3 mirrors. Your friend is in each mirror.');
 
 var giut = prompt("Beside each mirror is a statue and they speak. 'Hello fellow player, we are the defender of these woods.' (Two of the statues are liars. Only one speaks the truth.) The first statue says: Your friend is in this mirror. The second statue says: Your friend is not in this mirror. The third staue says: Your friend is not in statue 1's mirror. Which mirror is your friend in? MIRROR 1, MIRROR 2, or MIRROR 3.").toUpperCase();
 
 switch (giut){
      case 'MIRROR 2':
             confirm('You did it. You found your friend. Great Job!. Oh oh. Suddenly, an alien appears.');
             break;
      case 'MIRROR 1':
              confirm('Nope. YOU LOSE!');
              exit();
              break;
      case 'MIRROR 3':
            confirm('Nope. YOU LOSE!');
            exit();
            break;
         default:
        confirm('How do you expect to complete this mission with those typing skills. You have failed your mission.');
            exit(); 
 }
 
 var titu = prompt('Hello earthling, I see you have completed all the tasks. I guess we do have to make some improvements. But now you must complete one last test that will set you and your friend free. OKAY?').toUpperCase();
 
 switch (titu){
     case 'OKAY':
         var last = prompt('What is the name of our great leader?');
         if (titu === 'MARICOONICUSAL'){
         confirm('Congartualtions. You have successfully completed all the tasks. You and your friend are now free and back on earth!');
         }else{
         confirm('Oh no. Your memory is not as good as we thought. YOU LOSE!');
         }
            exit();  
 }
 
 

</script>

</body>
</html>

