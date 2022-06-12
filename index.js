function solution(matrix) {

    var x;
    var y;
    var s=0;
    for(x=0;x<matrix.length;x++)
        {
           for(y=0;y<matrix[[x]].length;y++)
            {
                
                if(x>0)
                    {
                        if(matrix[x-1][y]==0)
                            {
                                 matrix[x][y]=0;  
                            }
                        else
                        {
                            s=s+matrix[x][y];
                        }
                    }
                else 
                    {
                        s=s+matrix[x][y];
                    }
            } 
        }
    
    
    return s;
}
