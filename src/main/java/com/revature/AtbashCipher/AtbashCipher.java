package com.revature.AtbashCipher;

/**
 *  The Atbash cipher is an encryption method in which each letter of a word is replaced with its "mirror" letter in the alphabet: A <=> Z; B <=> Y; C <=> X; etc.
 *
 *  Create a function that takes a string and applies the Atbash cipher to it.
 *
 *  Examples
 *  atbash("apple") --> "zkkov"
 *
 *  atbash("Hello world!") --> "Svool dliow!"
 *
 *  atbash("Christmas is the 25th of December") --> "Xsirhgnzh rh gsv 25gs lu Wvxvnyvi"
 *
 *  Notes:
 *  Capitalisation should be retained.
 *  Non-alphabetic characters should not be altered.
 */

public class AtbashCipher {

    public static String atbash(String baseString) {
        char[] encryptedString = baseString.toCharArray();
        for (int i = 0; i < encryptedString.length; i++) {
            if (encryptedString[i] >= 65 && encryptedString[i] <= 90) {
                encryptedString[i] = (char) (65 + 90 - encryptedString[i]);
            } else if (encryptedString[i] >= 97 && encryptedString[i] <= 122) {
                encryptedString[i] = (char) (97 + 122 - encryptedString[i]);
            }
        }
        return new String(encryptedString);
    }

    public static void main(String[] args) {
        System.out.println("apple" + " -- " + atbash("apple"));
        System.out.println("Hello world!" + " -- " + atbash("Hello world!"));
        System.out.println("Christmas is the 25th of December" + " -- " + atbash("Christmas is the 25th of December"));
    }
}
