//가위 바위 보 게임 switch 이용
//문서가 다 읽어진 후에 실행되는 함수임. 이걸 써야 아래 h1 태그(id=a)에 대한 접근이 가능해짐
window.onload = function(){ 
//com 랜덤값 설정 0~2 +1     

//playerRPC 기본값 설정
var playerRPC;
//playerCommand 가위바위보를 입력할 prompt
var playerCommand = prompt("가위, 바위, 보 를 선택하세요");
//가위,바위,보 입력시 playerRPC값 지정
switch(playerCommand){
    case"가위" : playerRPC=1;
    break;
    case"바위" : playerRPC=2;
    break;
    case"보" : playerRPC=3;
    break;
}
var random = Math.floor(Math.random() * 3)+1;
var com = random;

    if (playerRPC==1){
            if (com==1)
            document.write("비겼습니다.");
            document.write("플레이어 가위","<img src='sissor.jpg'><br>","컴퓨터 가위","<img src='sissor.jpg'><br>");
            if (com==2) 
            document.write("졌습니다.");
            document.write("플레이어 가위","<img src='sissor.jpg'><br>","컴퓨터 바위","<img src='rock.jpg'><br>");
            if (com==3)
            document.write("이겼습니다.");  
            document.write("플레이어 가위","<img src='sissor.jpg'><br>","컴퓨터 보","<img src='paper.jpg'><br>");
        }

    if (playerRPC == 2){
    
            if (com==1);
            document.write("이겼습니다.");
            document.write("플레이어 바위","<img src='sissor.jpg'><br>","컴퓨터 가위","<img src='sissor.jpg'><br>");
            if (com==2) ;
            document.write("비겼습니다.");
            document.write("플레이어 바위","<img src='sissor.jpg'><br>","컴퓨터 바위","<img src='rock.jpg'><br>");
            if (com==3) ;
            document.write("졌습니다.");
            document.write("플레이어 바위","<img src='sissor.jpg'><br>","컴퓨터 보","<img src='paper.jpg'><br>");
    }

    if (playerRPC == 3){
    
            if (com==1);
            document.write("졌습니다.");
            document.write("플레이어 보","<img src='sissor.jpg'><br>","컴퓨터 가위","<img src='sissor.jpg'><br>");
            if (com==2) ;
            document.write("이겼습니다.");
            document.write("플레이어 보","<img src='sissor.jpg'><br>","컴퓨터 바위","<img src='rock.jpg'><br>");
            if (com==3);
            document.write("비겼습니다.");
            document.write("플레이어 보","<img src='sissor.jpg'><br>","컴퓨터 보","<img src='paper.jpg'><br>");
        }
    
}
