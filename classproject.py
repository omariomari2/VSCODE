class Wordplay:
    def __init__(self, words):
        """Initialize the Wordplay class with a list of words."""
        self.words = words
    
    def words_with_length(self, length):
        """Returns a list of all words that have the specified length."""
        return [word for word in self.words if len(word) == length]
    
    def starts_with(self, s):
        """Returns a list of all words that start with the string s."""
        return [word for word in self.words if word.startswith(s)]
    
    def ends_with(self, s):
        """Returns a list of all words that end with the string s."""
        return [word for word in self.words if word.endswith(s)]
    
    def palindromes(self):
        """Returns a list of all palindromes in the word list."""
        return [word for word in self.words if word == word[::-1]]
    
    def only(self, L):
        """Returns a list of words that contain only the letters in L."""
        L = set(L.lower())  # Convert to set for O(1) lookup
        return [word for word in self.words if set(word.lower()).issubset(L)]
    
    def avoids(self, L):
        """Returns a list of words that contain none of the letters in L."""
        L = set(L.lower())  # Convert to set for O(1) lookup
        return [word for word in self.words if not any(letter.lower() in L for letter in word)]

# Example usage:
if __name__ == "__main__":
    word_list = ["hello", "world", "python", "level", "radar", "deed", "python"]
    wp = Wordplay(word_list)
    
    print("Words with length 5:", wp.words_with_length(5))
    print("Words starting with 'py':", wp.starts_with("py"))
    print("Words ending with 'on':", wp.ends_with("on"))
    print("Palindromes:", wp.palindromes())
    print("Words containing only letters in 'python':", wp.only("python"))
    print("Words avoiding letters in 'xyz':", wp.avoids("xyz"))
