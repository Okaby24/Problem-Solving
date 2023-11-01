import java.util.*;

public class problem2 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int w = input.nextInt();
        System.out.println(w);

        String[] inputs = {};

        for (int i = 0; i < w; i++) {
            Scanner input1 = new Scanner(System.in);
            String x = input1.nextLine();
            System.out.println(x);

            // convert the array to arrayList
            List<String> numList = new ArrayList<String>(Arrays.asList(inputs));
            // Add the new element to the arrayList
            numList.add(x);
            // Convert the Arraylist back to array
            inputs = numList.toArray(inputs);
        }

        for (int j = 0; j < inputs.length; j++) {
            if (inputs[j].length() < 10 || inputs[j].length() == 10) {
                System.out.println(inputs[j]);
            } else {

                char first = inputs[j].charAt(0);
                char last = inputs[j].charAt(inputs[j].length() - 1);
                int count = inputs[j].length() - 2;
                System.out.println(first + count + last);

            }

        }

    }
}

// kolo el mafrood kan yeb2a gowa el for loop mn gher el hary beta3 el arrays

// submitted aho

// public static void main (String[] args) throws java.lang.Exception
// {
// Scanner sc=new Scanner(System.in);
// int z=sc.nextInt();
// for(int i=0;i<=z;i++){
// String s=sc.nextLine();
// int n=s.length();
// if(n<11){
// System.out.println(s);
// }else{
// char ch=s.charAt(0);
// char ch1=s.charAt(n-1);
// System.out.print(ch);
// System.out.print(n-2);
// System.out.println(ch1);
// }
// }
// }
// }
