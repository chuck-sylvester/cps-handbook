# Writing Code

## Basic Java Class File Structure

Addition.java
```java
// Couple of lines to introduce program
// Lorem Ipsum

package com.csylvester.sample;

import java.util.Scanner;

public class Addition {
   
   public static void main(String[] args) {
      Scanner input = new Scanner(System.in);
 
      int number1;
      int number2;
      int sum;

      System.out.print("Enter first integer: ");
      number1 = input.nextInt();
      System.out.print("Enter second integer: ");
      number2 = input.nextInt();
      
      sum = getSum(number1, number2);
      System.out.printf("Sum is %d%n", sum);

      // close scanner
      input.close();
   }

   public static int getSum(int int1, int int2) {
      return int1 + int2;
   }
}
```
<br /><br />
