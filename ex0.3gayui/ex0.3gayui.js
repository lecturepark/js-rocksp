//가위 바위 보 게임 if만 이용
//문서가 다 읽어진 후에 실행되는 함수임. 이걸 써야 아래 h1 태그(id=a)에 대한 접근이 가능해짐
window.onload = function(){ 
//com 랜덤값 설정 0~2 +1     
var random = Math.floor(Math.random() * 3)+1;
var com = random;
//playerRPC 기본값 설정
var playerRPC = 0;
//playerCommand 가위바위보를 입력할 prompt
var playerCommand = prompt("가위, 바위, 보 를 선택하세요");
{
    //가위,바위,보 입력시 playerRPC값 지정
    {if(playerCommand == "가위")
        playerRPC = 1,"가위";}


    {if(playerCommand == "바위")
        playerRPC = 2,"바위";}
        
        
    {if(playerCommand == "보")
        playerRPC = 3,"보";}


        //랜덤값(1,2,3) com값 지정
    {if(random == 1)
        com = 1;}


    {if(random == 2)
        com = 2;}
        
        
    {if(random == 3)
        com = 3;}
}

//playerRPC값 && com값 승,패 결과창 
{if(playerRPC == 1 && com == 2){alert("졌습니다."),
document.write("플레이어 가위","<img src='sissor.jpg'><br>","컴퓨터 바위","<img src='rock.jpg'><br>");}
}
{if(playerRPC == 1 && com == 3){alert("이겼습니다."),
document.write("플레이어 가위","<img src='sissor.jpg'><br>","컴퓨터 보","<img src='paper.jpg'><br>");}
}
{if(playerRPC == 2 && com == 3){alert("졌습니다."),
document.write("플레이어 바위","<img src='rock.jpg'><br>","컴퓨터 보","<img src='paper.jpg'><br>");}
}
{if(playerRPC == 2 && com == 1){alert("이겼습니다."),
document.write("플레이어 바위","<img src='rock.jpg'><br>","컴퓨터 가위","<img src='sissor.jpg'><br>");}
}
{if(playerRPC == 3 && com == 1){alert("졌습니다."),
document.write("플레이어 보","<img src='paper.jpg'><br>","컴퓨터 가위","<img src='sissor.jpg'><br>");}
}
{if(playerRPC == 3 && com == 2){alert("이겼습니다."),
document.write("플레이어 보","<img src='paper.jpg'><br>","컴퓨터 바위","<img src='rock.jpg'><br>");}
}
//playerRPC값 == com값 비김 결과창
// {if(playerRPC == com) {alert ( "비겼습니다" ),
// document.write("플레이어 가위","<img src='sissor.jpg'><br>","컴퓨터 바위","<img src='rock.jpg'><br>");} 
// }
{if(playerRPC == 1 && com == 1){alert("비겼습니다."),
document.write("플레이어 가위","<img src='sissor.jpg'><br>","컴퓨터 가위","<img src='sissor.jpg'><br>");}
}
{if(playerRPC == 2 && com == 2){alert("비겼습니다."),
document.write("플레이어 바위","<img src='rock.jpg'><br>","컴퓨터 바위","<img src='rock.jpg'><br>");}
}
{if(playerRPC == 3 && com == 3){alert("비겼습니다."),
document.write("플레이어 보","<img src='paper.jpg'><br>","컴퓨터 보","<img src='paper.jpg'><br>");}
}
}
