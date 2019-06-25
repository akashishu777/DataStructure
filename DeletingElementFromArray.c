#include <stdio.h>
#include <stdbool.h>

int main()
{
    int array[50], indexForDelete, c, n, value, i;
    bool flag = false;

    printf("Enter number of elements in the array\n");
    scanf("%d", &n);
    
    printf("Enter %d elements\n", n);
    
    for (c = 0; c < n; c++)    
    scanf("%d", &array[c]);
    
    printf("Please enter the location which you want to delete\n");
    scanf("%d", &indexForDelete);
    printf("Index for deletion: %d", indexForDelete);
    printf("\n==========================================\n");

    for (i = indexForDelete - 1; i <= n - 1; i++)
    {
        flag = true;
        printf("value of c : %d\n", i);
        printf("value of array[c] : %d\n", array[i]);
        array[i] = array[i+1];
        printf("value of array[c] : %d\n", array[i]);
    }   
        
    printf("\n==========================================\n");
    
    printf("Resultant array is\n");

    if(flag) {
        n = n-1;   
    }

    for (c = 0; c < n; c++)    
        printf("%d\n", array[c]);
    
    return 0;
}