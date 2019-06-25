/*
     * C Program to Find the Number of Elements in an Array
*/
#include<stdio.h>

int main()
{
    int mark[5] = {19, 10, 8, 17, 9};
    int i;

    printf("Printing value of array...\n");
    
    for(i = 0; i < sizeof(mark) / sizeof(int); i++)
    {
        printf("%d\n", mark[i]);
    }
    
    return 0;
}