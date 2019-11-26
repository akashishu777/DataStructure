/*
 * C program to sort N numbers in ascending order using Bubble sort
 */
    #include <stdio.h>
    void main()
    {
 
        int i, j, a, n, number[30];
        printf("Enter the value of N \n");
        scanf("%d", &n);
 
        printf("Enter the numbers \n");
        for (i = 0; i < n; ++i)
            scanf("%d", &number[i]);
 
        for (i = 0; i < n; ++i) 
        {
 
            for (j = i + 1; j < n; ++j)
            {
 
                if (number[i] > number[j]) 
                {
 
                    a =  number[i];
                    number[i] = number[j];
                    number[j] = a;
 
                }
            }
        }
 
        printf("The numbers arranged in ascending order are given below \n");
        for (i = 0; i < n; ++i)
            printf("%d\n", number[i]);
 
    }

// Bubble sort has a worst-case and average complexity of О(n2), 
// where n is the number of items being sorted. Most practical sorting 
// algorithms have substantially better worst-case or average complexity, often O(n log n).

// Class: Sorting algorithm

// Worst-case space complexity: auxiliary

// Data structure: Array