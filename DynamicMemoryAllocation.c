#include<stdio.h>
#include<stdlib.h>

int main() 
{
    int* ptr;
    int size, i, value;

    printf("Enter size of an array: ");
    scanf("%d", &size);
    
    ptr = (int*)malloc(size * sizeof(int));
    // ptr holds the first address of memory location

    printf("ptr value after memory allocation is : %d\n\n", ptr);

    if (ptr == NULL) { 
        printf("Memory not allocated.\n"); 
        exit(0); 
    } 
    else { 

        // Memory has been successfully allocated 
        printf("Memory successfully allocated using malloc.\n"); 
  
        // Get the elements of the array 
        for (i = 0; i < size; ++i) { 
            scanf("%d", &value);
            ptr[i] = value; 
        } 
  
        // Print the elements of the array 
        printf("The elements of the array are: "); 
        for (i = 0; i < size; ++i) { 
            printf("%d, ", ptr[i]); 
        } 
    } 
    return 0;
}