/**
 * Created by tianhao on 17-1-17.
 */
documentWidth = window.screen.availWidth;
gridContainerWidth = 0.92 * documentWidth;
cellSideLength = 0.18 * documentWidth;
cellSpace = 0.04*documentWidth;
function getPosTop(ceilX , ceilY){
    return ceilX*(cellSideLength+cellSpace)+cellSpace;
}
function getPosLeft(ceilX , ceilY){
    return ceilY*(cellSideLength+cellSpace)+cellSpace;
}

function getNumberBackgroundColor( number ){
    switch( number ){
        case 2:return "url(http://oct3pmpde.bkt.clouddn.com/12.jpg)";break;
        case 4:return "url(http://oct3pmpde.bkt.clouddn.com/2.jpg)";break;
        case 8:return "url(http://oct3pmpde.bkt.clouddn.com/3.jpg)";break;
        case 16:return "url(http://oct3pmpde.bkt.clouddn.com/4.jpg)";break;
        case 32:return "url(http://oct3pmpde.bkt.clouddn.com/5.jpg)";break;
        case 64:return "url(http://oct3pmpde.bkt.clouddn.com/6.jpg)";break;
        case 128:return "url(http://oct3pmpde.bkt.clouddn.com/7.jpg)";break;
        case 256:return "url(http://oct3pmpde.bkt.clouddn.com/8.jpg)";break;
        case 512:return "url(http://oct3pmpde.bkt.clouddn.com/9.jpg)";break;
        case 1024:return "url(http://oct3pmpde.bkt.clouddn.com/11.jpg)";break;
        case 2048:return "url(http://oct3pmpde.bkt.clouddn.com/10.jpg)";break;
    }
}

function getNumberColor( number ){
    if( number <= 4 ){
        return "#776e65";
    }

    return "white";
}

function noSpace( board ){
    for(var i = 0; i < 4; i++){
        for(var j = 0; j < 4; j++){
            if(board[i][j] == 0){
                return false;
            }
        }
    }
    return true;
}

function canMoveLeft( board ){
    for(var i = 0; i < 4; i++){
        for(var j = 1; j < 4; j++){
            if( board[i][j] != 0){
                if( board[i][j-1]==0 || board[i][j-1]==board[i][j] ){
                    return true;
                }
            }
        }
    }
    return false;
}

function canMoveUp( board ){
    for(var i = 1; i < 4; i++){
        for(var j = 0; j < 4; j++){
            if( board[i][j] != 0){
                if( board[i-1][j]==0 || board[i-1][j]==board[i][j] ){
                    return true;
                }
            }
        }
    }
    return false;
}

function canMoveRight( board ){
    for(var i = 0; i < 4; i++){
        for(var j = 0; j < 3; j++){
            if( board[i][j] != 0){
                if( board[i][j+1]==0 || board[i][j+1]==board[i][j] ){
                    return true;
                }
            }
        }
    }
    return false;
}

function canMoveDown( board ){
    for(var i = 0; i < 3; i++){
        for(var j = 0; j < 4; j++){
            if( board[i][j] != 0){
                if( board[i+1][j]==0 || board[i+1][j]==board[i][j] ){
                    return true;
                }
            }
        }
    }
    return false;
}

function noBlockx(row,col1,col2,board){
    for(var i = col1 + 1; i < col2; i++){
        if( board[row][i] != 0 ){
            return false;
        }
    }
    return true;
}

function noBlocky(col,row1,row2,board){
    for(var i = row1 + 1; i < row2; i++){
        if( board[i][col] != 0 ){
            return false;
        }
    }
    return true;
}
