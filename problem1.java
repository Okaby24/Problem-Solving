import java.util.Scanner;

public class problem1 {
    public static void main(String[] args) {
        int w;
        Scanner input = new Scanner(System.in);
        System.out.println("Enter Watermelon ");
        w = input.nextInt();
        if (w > 2) {
            if ((w % 2) == 0)
                System.out.println("YES");
            else
                System.out.println("NO");
        } else
            System.out.println("NO");
    }
}