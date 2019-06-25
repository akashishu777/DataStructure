// Program to calculate average by passing an array to a function
#include <stdio.h>

float average(float age[], int arraySize); // hoisting

int main()
{
	float avg, age[] = {23.4, 55, 22.6, 3, 40.5, 18, 4};

    int arraySize = sizeof(age);
    printf("Array Size = %d", arraySize);

	avg = average(age, arraySize); // Only name of an array is passed as an argument
	printf("Average age = %.2f", avg); // .2 means two decimal place
	
    return 0;
}

float average(float age[], int arraySize)
{
	int i;
	float avg, sum = 0.0;

	for (i = 0; i < arraySize / sizeof(float); i++) {
        printf("i value = %d", i);
		sum += age[i];
	}

	avg = (sum / 6);
	return avg;
}